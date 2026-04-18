/**
 * timingResolver.js
 * Step 2: timingトークンの分類 & 発動位置（メートル）の解決
 */

// ── フェーズ境界計算 ──────────────────────────────────────────
function phaseStart(n, d) {
  if (n === 0) return 0;
  if (n === 1) return Math.round(d / 6);
  if (n === 2) return Math.round(d * 2 / 3);
  if (n === 3) return Math.round(d * 5 / 6);
  return d;
}
function phaseEnd(n, d) {
  return phaseStart(n + 1, d);
}
function phaseMid(n, d) {
  return Math.round((phaseStart(n, d) + phaseEnd(n, d)) / 2);
}
function phaseLen(n, d) {
  return phaseEnd(n, d) - phaseStart(n, d);
}

// ── 位置計算対象外のtimingキーワード集合 ────────────────────
const OTHER_TIMINGS = new Set([
  'accumulatetime', 'activate_count_start', 'activate_count_heal',
  'activate_count_all_team', 'base_stamina', 'bashin_diff_behind',
  'bashin_diff_infront', 'blocked_front', 'blocked_front_continuetime',
  'blocked_side_continuetime', 'change_order_onetime', 'change_order_up_middle',
  'compete_fight_count', 'corner', 'distance_diff_rate', 'distance_diff_top',
  'hp_per', 'infront_near_lane_time', 'is_behind_in', 'is_finalcorner==0',
  'is_lastspurt', 'is_move_lane', 'is_overtake', 'is_used_skill_id',
  'lastspurt', 'motivation', 'order_rate_out20_continue',
  'order_rate_out50_continue', 'order_rate_out70_continue',
  'overtake_target_time', 'post_number', 'temptation_count',
  'popularity', 'activate_count_all_team', 'distance_diff_rate',
]);

/**
 * timingトークン1つを分類して { kind, ... } オブジェクトに変換する
 * @param {string} token
 * @param {Object} race - races.json の1件
 * @returns {Object} { kind: 'fixed'|'range'|'slope'|'other', ... }
 */
export function classifyTiming(token, race) {
  const d = race.distance;

  // ── 位置計算対象外チェック ──
  for (const key of OTHER_TIMINGS) {
    if (token.startsWith(key) || token === key) {
      return { kind: 'other', token };
    }
  }
  // corner 系
  if (/^corner[!=<>]/.test(token)) return { kind: 'other', token };
  // is_finalcorner==0
  if (token === 'is_finalcorner==0') return { kind: 'other', token };

  // ── always ──
  if (token === 'always==1') {
    return { kind: 'fixed', pos: 0, token };
  }

  // ── phase==N ──
  const mPhaseEq = token.match(/^phase==(\d)$/);
  if (mPhaseEq) {
    const n = parseInt(mPhaseEq[1]);
    return { kind: 'fixed', pos: phaseStart(n, d), token };
  }

  // ── phase>=N ──
  const mPhaseGe = token.match(/^phase>=(\d)$/);
  if (mPhaseGe) {
    const n = parseInt(mPhaseGe[1]);
    return { kind: 'fixed', pos: phaseStart(n, d), token };
  }

  // ── phase_firstquarter==N (固定位置) ──
  const mPFQ = token.match(/^phase_firstquarter==(\d)$/);
  if (mPFQ) {
    const n = parseInt(mPFQ[1]);
    return { kind: 'fixed', pos: phaseStart(n, d) + Math.round(phaseLen(n, d) / 4), token };
  }

  // ── distance_rate>=X / <=X ──
  // 混在時は resolveTimings でrangeに変換するため専用kindで返す
  const mDrGe = token.match(/^distance_rate>=(\d+(?:\.\d+)?)$/);
  if (mDrGe) {
    return { kind: 'dr_ge', pos: Math.round(d * parseFloat(mDrGe[1]) / 100), token };
  }
  const mDrLe = token.match(/^distance_rate<=(\d+(?:\.\d+)?)$/);
  if (mDrLe) {
    return { kind: 'dr_le', pos: Math.round(d * parseFloat(mDrLe[1]) / 100), token };
  }

  // ── remain_distance ──
  // >=X AND <=Y の挟み込みはピン止め表現のため resolveTimings で中点に変換する
  const mRdGe = token.match(/^remain_distance>=(\d+)$/);
  if (mRdGe) return { kind: 'rd_ge', pos: d - parseInt(mRdGe[1]), token };
  const mRdLe = token.match(/^remain_distance<=(\d+)$/);
  if (mRdLe) return { kind: 'rd_le', pos: d - parseInt(mRdLe[1]), token };
  const mRdEq = token.match(/^remain_distance==(\d+)$/);
  if (mRdEq) return { kind: 'fixed', pos: d - parseInt(mRdEq[1]), token };

  // ── is_finalcorner==1 ──
  if (token === 'is_finalcorner==1') {
    const fc = race.sections.final_corner;
    return { kind: 'fixed', pos: fc[0], token };
  }

  // ── is_finalcorner_laterhalf==1 ──
  if (token === 'is_finalcorner_laterhalf==1') {
    const fc = race.sections.final_corner;
    return { kind: 'fixed', pos: Math.round((fc[0] + fc[1]) / 2), token };
  }

  // ── is_last_straight==1 ──
  if (token === 'is_last_straight==1') {
    const fs = race.sections.final_straight;
    return { kind: 'fixed', pos: fs[0], token };
  }

  // ── is_lastspurt==1 ──
  if (token === 'is_lastspurt==1') {
    return { kind: 'fixed', pos: race.ls_point, token };
  }

  // ── lastspurt==2 ──
  if (token === 'lastspurt==2') {
    return { kind: 'fixed', pos: race.ls_point, token };
  }

  // ── phase_random==N ──
  const mPR = token.match(/^phase_random==(\d)$/);
  if (mPR) {
    const n = parseInt(mPR[1]);
    return { kind: 'range', lo: phaseStart(n, d), hi: phaseEnd(n, d), token };
  }

  // ── phase_firsthalf_random==N ──
  const mPFHR = token.match(/^phase_firsthalf_random==(\d)$/);
  if (mPFHR) {
    const n = parseInt(mPFHR[1]);
    return { kind: 'range', lo: phaseStart(n, d), hi: phaseMid(n, d), token };
  }

  // ── phase_laterhalf_random==N ──
  const mPLHR = token.match(/^phase_laterhalf_random==(\d)$/);
  if (mPLHR) {
    const n = parseInt(mPLHR[1]);
    return { kind: 'range', lo: phaseMid(n, d), hi: phaseEnd(n, d), token };
  }

  // ── phase_firstquarter_random==N ──
  const mPFQR = token.match(/^phase_firstquarter_random==(\d)$/);
  if (mPFQR) {
    const n = parseInt(mPFQR[1]);
    const lo = phaseStart(n, d);
    const hi = lo + Math.round(phaseLen(n, d) / 4);
    return { kind: 'range', lo, hi, token };
  }

  // ── phase_first_half_straight_random==N ──
  const mPFHSR = token.match(/^phase_first_half_straight_random==(\d)$/);
  if (mPFHSR) {
    const n = parseInt(mPFHSR[1]);
    const ps = phaseStart(n, d);
    const pm = phaseMid(n, d);
    // phase N の前半内の直線区間を探す
    const straights = race.sections.straights || [];
    const matchStraight = straights.find(s => s[0] < pm && s[1] > ps);
    if (matchStraight) {
      const lo = Math.max(ps, matchStraight[0]);
      const hi = Math.min(pm, matchStraight[1]);
      return { kind: 'range', lo, hi, token };
    }
    // 直線が見つからなければphase前半全体
    return { kind: 'range', lo: ps, hi: pm, token };
  }

  // ── is_finalcorner_random==1 ──
  if (token === 'is_finalcorner_random==1') {
    const fc = race.sections.final_corner;
    return { kind: 'range', lo: fc[0], hi: fc[1], token };
  }

  // ── all_corner_random==1 ──
  if (token === 'all_corner_random==1') {
    const corners = race.sections.corners;
    if (!corners || corners.length === 0) {
      // コーナーなし（盛岡等）→ range として全区間
      return { kind: 'range', lo: 0, hi: d, token };
    }
    return { kind: 'range', lo: corners[0][0], hi: corners[corners.length - 1][1], token };
  }

  // ── straight_random==1 ──
  if (token === 'straight_random==1') {
    const straights = race.sections.straights || [];
    if (straights.length === 0) return { kind: 'range', lo: 0, hi: d, token };
    return { kind: 'range', lo: straights[0][0], hi: straights[straights.length - 1][1], token };
  }

  // ── distance_rate_after_random==X ──
  const mDRAR = token.match(/^distance_rate_after_random==(\d+)$/);
  if (mDRAR) {
    const lo = Math.round(d * parseInt(mDRAR[1]) / 100);
    return { kind: 'range', lo, hi: d, token };
  }

  // ── 坂系 ──
  if (token === 'slope==1') return { kind: 'slope', slope_type: 'up', token };
  if (token === 'slope==2') return { kind: 'slope', slope_type: 'down', token };
  if (token === 'slope==0') return { kind: 'slope', slope_type: 'flat', token };
  if (token === 'up_slope_random==1')           return { kind: 'slope', slope_type: 'up_random', token };
  if (token === 'up_slope_random_later_half==1') return { kind: 'slope', slope_type: 'up_random_later', token };
  if (token === 'down_slope_random==1')         return { kind: 'slope', slope_type: 'down_random', token };

  // その他未分類は other として扱う
  return { kind: 'other', token };
}

/**
 * patternのtimings配列を解決して、発動位置情報を返す
 * 複数timingの結合ルール（設計書 Step2 参照）を適用する
 *
 * @param {string[]} timings - pattern.execution.timings
 * @param {Object}   race    - races.json の1件
 * @returns {{ kind: 'fixed'|'range'|'slope'|'other'|'always', pos?: number, lo?: number, hi?: number, slope_type?: string }}
 */
export function resolveTimings(timings, race) {
  // timingsが空配列 → always==1 相当
  if (!timings || timings.length === 0) {
    return { kind: 'fixed', pos: 0, isAlways: true };
  }

  const classified = timings.map(t => classifyTiming(t, race));

  const fixedList  = classified.filter(c => c.kind === 'fixed');
  const rangeList  = classified.filter(c => c.kind === 'range');
  const slopeList  = classified.filter(c => c.kind === 'slope');
  const rdGeList   = classified.filter(c => c.kind === 'rd_ge');
  const rdLeList   = classified.filter(c => c.kind === 'rd_le');
  const drGeList   = classified.filter(c => c.kind === 'dr_ge');
  const drLeList   = classified.filter(c => c.kind === 'dr_le');

  // ── remain_distance の挟み込みパターンを解決 ──
  // rd_ge (>=X) と rd_le (<=X) が両方ある場合 → ピン止め表現 → 中点をfixedとして扱う
  // 例: remain_distance>=799 AND <=801 → pos = (1601+1599)/2 = 1600
  let extraFixed = [];
  let extraRange = [];

  if (rdGeList.length > 0 && rdLeList.length > 0) {
    // ピン止め: 中点を採用
    const lo = Math.min(...rdGeList.map(c => c.pos), ...rdLeList.map(c => c.pos));
    const hi = Math.max(...rdGeList.map(c => c.pos), ...rdLeList.map(c => c.pos));
    const center = Math.round((lo + hi) / 2);
    extraFixed.push({ kind: 'fixed', pos: center });
  } else if (rdGeList.length > 0) {
    // >=X のみ → fixed
    extraFixed.push(...rdGeList.map(c => ({ kind: 'fixed', pos: c.pos })));
  } else if (rdLeList.length > 0) {
    // <=X のみ → fixed
    extraFixed.push(...rdLeList.map(c => ({ kind: 'fixed', pos: c.pos })));
  }

  // ── distance_rate の挟み込みパターンを解決 ──
  // dr_ge (>=X) と dr_le (<=Y) が両方ある場合 → 区間 range として扱う
  // 例: distance_rate>=50 AND <=65 → range [lo, hi]
  if (drGeList.length > 0 && drLeList.length > 0) {
    const lo = Math.min(...drGeList.map(c => c.pos));
    const hi = Math.max(...drLeList.map(c => c.pos));
    extraRange.push({ kind: 'range', lo, hi });
  } else if (drGeList.length > 0) {
    extraFixed.push(...drGeList.map(c => ({ kind: 'fixed', pos: c.pos })));
  } else if (drLeList.length > 0) {
    extraFixed.push(...drLeList.map(c => ({ kind: 'fixed', pos: c.pos })));
  }

  // 全fixedリスト・全rangeリストにextraを統合
  const allFixed = [...fixedList, ...extraFixed];
  const allRange = [...rangeList, ...extraRange];

  // fixed があれば MAX値を採用
  if (allFixed.length > 0) {
    const pos = Math.max(...allFixed.map(c => c.pos));
    const isAlways = fixedList.some(c => c.token === 'always==1')
      && allFixed.length === 1 && allRange.length === 0 && slopeList.length === 0;
    return { kind: 'fixed', pos, isAlways };
  }

  // range のみ → 交差
  if (allRange.length > 0) {
    const lo = Math.max(...allRange.map(c => c.lo));
    const hi = Math.min(...allRange.map(c => c.hi));
    return { kind: 'range', lo, hi };
  }

  // slope のみ
  if (slopeList.length > 0) {
    return { kind: 'slope', slope_type: slopeList[0].slope_type };
  }

  // all other → other
  return { kind: 'other' };
}
