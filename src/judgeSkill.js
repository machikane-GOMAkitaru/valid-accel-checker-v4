/**
 * judgeSkill.js
 * Step 3: 発動位置情報 + レース情報 → 判定区分の決定
 */

/**
 * 判定区分の定義
 * priority: 数値が小さいほど上位（ソート第1キー）
 */
export const JUDGE = {
  FASTEST:    { priority: 1, label: '最速発動',    cls: 'b-fast'   },
  SLOPE_OK:   { priority: 2, label: '坂（有効）',  cls: 'b-slope'  },
  SEMI:       { priority: 3, label: '準速発動',    cls: 'b-semi'   },
  RAND_OK:    { priority: 4, label: 'ランダム有効', cls: 'b-rand'   },
  SLOPE_NG:   { priority: 5, label: '坂（無効）',  cls: 'b-slopex' },
  INVALID:    { priority: 6, label: '無効',        cls: 'b-inv'    },
  ALWAYS:     { priority: 0, label: 'レース開始時', cls: 'b-always' },
  OTHER:      { priority: 7, label: '条件次第',    cls: 'b-inv'    },
};

/**
 * ls_point を基準として、坂区間に含まれるか判定するヘルパー
 * @param {number}   lsPoint
 * @param {Array}    slopeSegments - [[lo, hi], ...] or null
 * @returns {boolean}
 */
function isInSlope(lsPoint, slopeSegments) {
  if (!slopeSegments || slopeSegments.length === 0) return false;
  return slopeSegments.some(([lo, hi]) => lsPoint >= lo && lsPoint <= hi);
}

/**
 * 発動位置情報から判定区分オブジェクトを返す
 *
 * @param {Object} resolved  - resolveTimings の返り値
 * @param {Object} race      - races.json の1件
 * @returns {Object} JUDGE の各値
 */
export function judge(resolved, race) {
  const ls = race.ls_point;

  // ── always（レース開始時） ──
  if (resolved.isAlways) {
    return JUDGE.ALWAYS;
  }

  // ── other（位置不明） ──
  if (resolved.kind === 'other') {
    return JUDGE.OTHER;
  }

  // ── slope ──
  if (resolved.kind === 'slope') {
    const { slope_type } = resolved;
    const uphill   = race.hills?.uphill;
    const downhill = race.hills?.downhill;

    if (slope_type === 'up' || slope_type === 'up_random' || slope_type === 'up_random_later') {
      return isInSlope(ls, uphill) ? JUDGE.SLOPE_OK : JUDGE.SLOPE_NG;
    }
    if (slope_type === 'down' || slope_type === 'down_random') {
      return isInSlope(ls, downhill) ? JUDGE.SLOPE_OK : JUDGE.SLOPE_NG;
    }
    if (slope_type === 'flat') {
      // flat: ls_point がどの坂区間にも含まれていなければ有効
      const inUp   = isInSlope(ls, uphill);
      const inDown = isInSlope(ls, downhill);
      return (!inUp && !inDown) ? JUDGE.SLOPE_OK : JUDGE.SLOPE_NG;
    }
    return JUDGE.SLOPE_NG;
  }

  // ── fixed ──
  if (resolved.kind === 'fixed') {
    const offset = resolved.pos - ls;
    if (offset >= -50 && offset <= 0)   return JUDGE.FASTEST;
    if (offset > 0   && offset <= 100)  return JUDGE.SEMI;
    return JUDGE.INVALID;
  }

  // ── range ──
  if (resolved.kind === 'range') {
    const { lo, hi } = resolved;
    // [ls-50, ls+100] と重なりがあるか
    const windowLo = ls - 50;
    const windowHi = ls + 100;
    const overlaps = lo <= windowHi && hi >= windowLo;
    return overlaps ? JUDGE.RAND_OK : JUDGE.INVALID;
  }

  return JUDGE.OTHER;
}
