/**
 * main.js
 * データ読み込み・UI制御・検索実行の統合エントリポイント
 */

import { buildRaceContext } from './filterMatcher.js';
import { evaluateAll } from './skillEvaluator.js';
import { JUDGE } from './judgeSkill.js';

// ── データ格納 ─────────────────────────────────────────────
let SKILLS      = [];
let RACES       = [];
let SKILL_CHARA = {};

// ── UI状態 ─────────────────────────────────────────────────
let selectedRace    = null;
let selectedStyles  = new Set([1, 2, 3, 4]);
let selectedGc      = new Set([1, 2, 3, 4]);
let selectedWeather = new Set([1, 2, 3, 4]);
let useCustomRace   = false;

// 自由入力モードの坂区間
let customUpSegs   = [];
let customDownSegs = [];

// ── 定数マッピング ─────────────────────────────────────────
const RARITY_INFO = {
  1: { label: '白',     cls: 'rar-w'  },
  2: { label: '金',     cls: 'rar-g'  },
  3: { label: '固有下', cls: 'rar-ub' },
  4: { label: '固有',   cls: 'rar-u'  },
  5: { label: '固有',   cls: 'rar-u'  },
  6: { label: '進化',   cls: 'rar-e'  },
};
const GROUND_COND_LABEL   = { 1: '良', 2: '稍重', 3: '重', 4: '不良' };
const WEATHER_LABEL       = { 1: '晴', 2: '曇', 3: '雨', 4: '雪' };
const RUNNING_STYLE_LABEL = { 1: '逃げ', 2: '先行', 3: '差し', 4: '追い込み' };

function distToType(d) {
  if (d <= 1400) return '短距離';
  if (d <= 1800) return 'マイル';
  if (d <= 2500) return '中距離';
  return '長距離';
}

// ── データ読み込み ──────────────────────────────────────────
async function loadData() {
  const [skillsRes, racesRes, charaRes] = await Promise.all([
    fetch('./data/skills.json'),
    fetch('./data/races.json'),
    fetch('./data/skill_chara.json'),
  ]);
  const skillsData = await skillsRes.json();
  const racesData  = await racesRes.json();
  SKILL_CHARA      = await charaRes.json();
  SKILLS = skillsData.skills;
  RACES  = racesData.races;
  document.getElementById('dbCnt').textContent = SKILLS.length;
  buildRaceSelect();
  buildTrackSelect();
}

// ── レースプリセットセレクト構築 ───────────────────────────
function buildRaceSelect() {
  const sel = document.getElementById('raceSel');
  sel.innerHTML = '<option value="">― レースを選ぶ ―</option>';
  const seasons = ['春', '夏', '秋', '冬'];
  const grouped = {};
  seasons.forEach(s => grouped[s] = []);
  RACES.forEach((r, i) => { if (grouped[r.meta.season]) grouped[r.meta.season].push({ r, i }); });
  seasons.forEach(season => {
    if (!grouped[season].length) return;
    const og = document.createElement('optgroup');
    og.label = `── ${season} ──`;
    grouped[season].forEach(({ r, i }) => {
      const opt = document.createElement('option');
      opt.value = i;
      opt.textContent = `${r.race_name}（${r.track} ${r.distance}m）`;
      og.appendChild(opt);
    });
    sel.appendChild(og);
  });
}

// ── レース場セレクト構築（自由入力モード用）──────────────
function buildTrackSelect() {
  // races.jsonのtrack_id→track名の対応を一意に抽出してセレクトに追加
  const sel = document.getElementById('cTrack');
  const seen = new Map();
  RACES.forEach(r => {
    if (!seen.has(r.track_id)) seen.set(r.track_id, r.track);
  });
  // track_idの昇順で並べる
  [...seen.entries()]
    .sort((a, b) => a[0] - b[0])
    .forEach(([tid, tname]) => {
      const opt = document.createElement('option');
      opt.value = tid;
      opt.dataset.name = tname;
      opt.textContent = tname;
      sel.appendChild(opt);
    });
}

// ── モード切替 ──────────────────────────────────────────────
function switchMode(mode) {
  useCustomRace = (mode === 'custom');
  document.getElementById('modePreset').classList.toggle('on', !useCustomRace);
  document.getElementById('modeCustom').classList.toggle('on',  useCustomRace);
  document.getElementById('secPreset').style.display = useCustomRace ? 'none' : '';
  document.getElementById('secCustom').style.display = useCustomRace ? ''     : 'none';
  clearErr();
}

// ── プリセット：レース選択時 ────────────────────────────────
function onRaceChange() {
  const idx = document.getElementById('raceSel').value;
  if (idx === '') {
    selectedRace = null;
    ['infoDistance','infoSurface','infoDirection','infoDistType','infoLsPoint']
      .forEach(id => document.getElementById(id).textContent = '—');
    return;
  }
  selectedRace = RACES[parseInt(idx)];
  document.getElementById('infoDistance').textContent  = selectedRace.distance + 'm';
  document.getElementById('infoSurface').textContent   = selectedRace.meta.surface;
  document.getElementById('infoDirection').textContent = selectedRace.meta.direction;
  document.getElementById('infoDistType').textContent  = selectedRace.meta.distance_type;
  document.getElementById('infoLsPoint').textContent   = selectedRace.ls_point + 'm';
}

// ── 自由入力モード：raceオブジェクト組み立て ───────────────
function buildCustomRace() {
  const dist = parseInt(document.getElementById('cDist').value);
  if (!dist || dist < 800 || dist > 4000) return null;

  const surfaceVal = getSelTb('cSurface');
  const dirVal     = getSelTb('cDir');
  const seasonVal  = getSelTb('cSeason');
  if (!surfaceVal || !dirVal || !seasonVal) return null;

  const surfaceMap = { 1: '芝', 2: 'ダート' };
  const dirMap     = { 1: '右', 2: '左' };
  const seasonMap  = { 1: '春', 2: '夏', 3: '秋', 4: '冬' };

  const ls_point = Math.round(dist * 2 / 3);
  const fcStart  = parseInt(document.getElementById('cFcStart').value) || Math.round(dist * 0.55);
  const fsStart  = parseInt(document.getElementById('cFsStart').value) || Math.round(dist * 0.75);
  const uphill   = customUpSegs.length   > 0 ? customUpSegs.map(s => [s.lo, s.hi])   : null;
  const downhill = customDownSegs.length > 0 ? customDownSegs.map(s => [s.lo, s.hi]) : null;
  const lastPhaseFront = document.getElementById('cFrontStraight').checked;

  // レース場（未選択時はtrack_id=0 → track_id==X フィルターは不一致扱い）
  const trackSelEl = document.getElementById('cTrack');
  const trackId    = trackSelEl.value ? parseInt(trackSelEl.value) : 0;
  const trackName  = trackSelEl.value
    ? trackSelEl.options[trackSelEl.selectedIndex].dataset.name
    : 'カスタム';

  return {
    track_id:  trackId,
    race_name: `カスタム（${trackName} ${dist}m）`,
    track:     trackName,
    distance:  dist,
    ls_point,
    sections: {
      straights:      [[0, fcStart]],
      corners:        [[fcStart, fsStart]],
      final_corner:   [fcStart, fsStart],
      final_straight: [fsStart, dist],
    },
    hills: { uphill, downhill },
    meta: {
      surface:          surfaceMap[surfaceVal],
      direction:        dirMap[dirVal],
      distance_type:    distToType(dist),
      season:           seasonMap[seasonVal],
      last_phase_front: lastPhaseFront,
    },
  };
}

// ── 坂区間の追加・削除 ──────────────────────────────────────
function addSlope(type) {
  const list   = type === 'up' ? customUpSegs   : customDownSegs;
  const contId = type === 'up' ? 'cUpList'      : 'cDownList';
  list.push({ lo: 0, hi: 0 });
  appendSlopeItem(type, list.length - 1, contId);
}

function removeSlope(type, idx) {
  const list   = type === 'up' ? customUpSegs   : customDownSegs;
  const contId = type === 'up' ? 'cUpList'      : 'cDownList';
  list.splice(idx, 1);
  rerenderSlopes(type, contId);
}

function onSlopeChange(type, idx, field, val) {
  const list = type === 'up' ? customUpSegs : customDownSegs;
  if (list[idx]) list[idx][field] = parseInt(val) || 0;
}

function appendSlopeItem(type, idx, contId) {
  const cont = document.getElementById(contId);
  const item = document.createElement('div');
  item.className = 'slope-item';
  item.dataset.idx = idx;
  item.innerHTML = `
    <input type="number" class="ninput" placeholder="開始m" min="0"
      onchange="onSlopeChange('${type}',${idx},'lo',this.value)">
    <span class="slope-tilde">〜</span>
    <input type="number" class="ninput" placeholder="終了m" min="0"
      onchange="onSlopeChange('${type}',${idx},'hi',this.value)">
    <button class="slope-del" onclick="removeSlope('${type}',${idx})">×</button>`;
  cont.appendChild(item);
}

function rerenderSlopes(type, contId) {
  const list = type === 'up' ? customUpSegs : customDownSegs;
  const cont = document.getElementById(contId);
  cont.innerHTML = '';
  list.forEach((seg, i) => {
    appendSlopeItem(type, i, contId);
    const item = cont.children[i];
    const inputs = item.querySelectorAll('input');
    inputs[0].value = seg.lo || '';
    inputs[1].value = seg.hi || '';
  });
}

// ── トグル ─────────────────────────────────────────────────
// 複数選択（gc / weather / style）
function togMulti(el, stateSet) {
  const v = parseInt(el.dataset.v);
  if (el.classList.contains('on')) {
    if (stateSet.size <= 1) return;
    el.classList.remove('on');
    stateSet.delete(v);
  } else {
    el.classList.add('on');
    stateSet.add(v);
  }
}
// 単一選択（自由入力内のバ場・回り・季節）
function getSelTb(group) {
  const el = document.querySelector(`.tb.on[data-g="${group}"]`);
  return el ? parseInt(el.dataset.v) : null;
}
function togSingle(el, group) {
  document.querySelectorAll(`.tb[data-g="${group}"]`).forEach(b => b.classList.remove('on'));
  el.classList.add('on');
}

// ── バリデーション ──────────────────────────────────────────
function showErr(id, targetId) {
  const el = document.getElementById(id);
  if (el) el.classList.add('show');
  if (targetId) { const t = document.getElementById(targetId); if (t) t.classList.add('err-ring'); }
}
function clearErr() {
  document.querySelectorAll('.err').forEach(e => e.classList.remove('show'));
  document.querySelectorAll('.err-ring').forEach(e => e.classList.remove('err-ring'));
}

// ── 検索実行 ────────────────────────────────────────────────
function doSearch() {
  clearErr();
  let raceObj = null;

  if (!useCustomRace) {
    if (!selectedRace) { showErr('e-race', 'raceSel'); return; }
    raceObj = selectedRace;
  } else {
    raceObj = buildCustomRace();
    if (!raceObj) { showErr('e-custom', null); return; }
  }

  const stylesParam = selectedStyles.size === 4 ? null : new Set(selectedStyles);
  const repStyle    = [...selectedStyles].sort()[0] ?? 1;

  // バ場×天候の全組み合わせでマージ（最良判定を採用）
  const skillMap = new Map();
  for (const gc of [...selectedGc]) {
    for (const weather of [...selectedWeather]) {
      const rows = evaluateAll(SKILLS, raceObj, repStyle, gc, weather, stylesParam, SKILL_CHARA);
      for (const row of rows) {
        const existing = skillMap.get(row.skill_id);
        if (!existing || row.judgeResult.priority < existing.judgeResult.priority) {
          skillMap.set(row.skill_id, row);
        }
      }
    }
  }

  let rows = [...skillMap.values()].sort((a, b) => {
    if (a.judgeResult.priority !== b.judgeResult.priority)
      return a.judgeResult.priority - b.judgeResult.priority;
    if (b.effect_value !== a.effect_value) return b.effect_value - a.effect_value;
    return a.uncertainty - b.uncertainty;
  });

  const excludeAlways = document.getElementById('chkExcludeAlways').checked;
  if (excludeAlways) rows = rows.filter(r => r.judgeResult !== JUDGE.ALWAYS);

  const validCount = rows.filter(r =>
    r.judgeResult !== JUDGE.INVALID && r.judgeResult !== JUDGE.OTHER
  ).length;

  document.getElementById('resCnt').textContent = validCount;
  document.getElementById('resTot').textContent = `（全${rows.length}件中）`;

  renderChips(raceObj);
  render(rows);
}

// ── 条件チップ描画 ─────────────────────────────────────────
function renderChips(raceObj) {
  const el = document.getElementById('chips');
  el.innerHTML = '';
  const add = t => {
    const d = document.createElement('div');
    d.className = 'chip'; d.textContent = t; el.appendChild(d);
  };
  add(raceObj.race_name);
  add(`${raceObj.distance}m（${raceObj.meta.distance_type}）`);
  add(raceObj.meta.surface);
  add(`ls=${raceObj.ls_point}m`);
  add(selectedGc.size      === 4 ? 'バ場:全て'  : 'バ場:'  + [...selectedGc].sort().map(v => GROUND_COND_LABEL[v]).join('・'));
  add(selectedWeather.size === 4 ? '天候:全て'  : '天候:'  + [...selectedWeather].sort().map(v => WEATHER_LABEL[v]).join('・'));
  add(selectedStyles.size  === 4 ? '脚質:全て'  : '脚質:'  + [...selectedStyles].sort().map(v => RUNNING_STYLE_LABEL[v]).join('・'));
}

// ── 運ゲランクバッジ情報 ───────────────────────────────────
function uncInfo(unc) {
  if (unc === 0) return { cls: 'u-zero',  label: '確定' };
  if (unc <= 2)  return { cls: 'u-low',   label: '低'   };
  if (unc <= 4)  return { cls: 'u-mid',   label: '中'   };
  if (unc <= 6)  return { cls: 'u-high',  label: '高'   };
  return               { cls: 'u-vhigh', label: '最高' };
}

// ── テーブル描画 ────────────────────────────────────────────
function render(rows) {
  const container = document.getElementById('resBody');
  if (rows.length === 0) {
    container.innerHTML = '<div class="no-res">該当するスキルが見つかりませんでした。</div>';
    return;
  }

  let html = `<div class="sort-bar">
    <span class="sbl">✦ ソート：</span>発動タイミング早い順
    <span style="color:var(--border2)">▶</span> 効果量降順
    <span style="color:var(--border2)">▶</span> 運ゲランク昇順
  </div>
  <table>
    <thead>
      <tr>
        <th class="th-name">スキル名</th>
        <th class="th-rar">レア度</th>
        <th class="th-eff">効果量</th>
        <th class="th-desc">効果 / 発動条件</th>
        <th class="th-rank">順位条件<br><span class="th-sub">チャンミ / LoH</span></th>
        <th class="th-tim">タイミング</th>
        <th class="th-unc">運ゲランク</th>
      </tr>
    </thead>
    <tbody>`;

  rows.forEach(r => {
    const isInvalid = r.judgeResult === JUDGE.INVALID || r.judgeResult === JUDGE.OTHER;
    const ri  = RARITY_INFO[r.rarity_value] ?? { label: '?', cls: 'rar-w' };
    const ui  = uncInfo(r.uncertainty);
    const eff = (r.effect_value / 10000).toFixed(2);

    let rankHtml = '<span class="rank-none">—</span>';
    if (r.orderDisplay) {
      rankHtml = `<span class="rank-cr">${r.orderDisplay.display_9}</span>`
               + `<span class="rank-sep"> / </span>`
               + `<span class="rank-lr">${r.orderDisplay.display_12}</span>`;
    }
    const charaHtml = r.charaNames ? `<div class="c-chara">＜${r.charaNames.join(' / ')}＞</div>` : '';
    const descHtml  = r.description ? `<div class="c-desc">${r.description}</div>` : '';

    html += `<tr class="${isInvalid ? 'invalid' : ''}">
      <td><div class="c-name">${r.skill_name}</div></td>
      <td class="tc"><span class="rar-badge ${ri.cls}">${ri.label}</span></td>
      <td class="tc eff-val">${eff}</td>
      <td>${charaHtml}${descHtml}</td>
      <td class="tc">${rankHtml}</td>
      <td class="tc"><span class="badge ${r.judgeResult.cls}">${r.judgeResult.label}</span></td>
      <td class="tc">
        <span class="unc-badge ${ui.cls}">
          <span class="unc-score">${r.uncertainty}</span>
          <span class="unc-lbl">${ui.label}</span>
        </span>
      </td>
    </tr>`;
  });

  html += '</tbody></table>';
  container.innerHTML = html;
}

// ── リセット ────────────────────────────────────────────────
function resetAll() {
  document.getElementById('raceSel').value = '';
  selectedRace = null;
  ['infoDistance','infoSurface','infoDirection','infoDistType','infoLsPoint']
    .forEach(id => document.getElementById(id).textContent = '—');

  document.getElementById('cTrack').value    = '';
  document.getElementById('cDist').value     = '';
  document.getElementById('cFcStart').value  = '';
  document.getElementById('cFsStart').value  = '';
  document.getElementById('cFrontStraight').checked = false;
  customUpSegs = []; customDownSegs = [];
  document.getElementById('cUpList').innerHTML   = '';
  document.getElementById('cDownList').innerHTML = '';
  document.querySelectorAll('.tb[data-g="cSurface"],.tb[data-g="cDir"],.tb[data-g="cSeason"]')
    .forEach(b => b.classList.remove('on'));

  selectedStyles  = new Set([1,2,3,4]);
  selectedGc      = new Set([1,2,3,4]);
  selectedWeather = new Set([1,2,3,4]);
  document.querySelectorAll('.tb[data-g="style"],.tb[data-g="gc"],.tb[data-g="weather"]')
    .forEach(b => b.classList.add('on'));

  clearErr();
  document.getElementById('chkExcludeAlways').checked = true;
  document.getElementById('chips').innerHTML    = '';
  document.getElementById('resCnt').textContent = '—';
  document.getElementById('resTot').textContent = '';
  document.getElementById('resBody').innerHTML  = `
    <div class="empty">
      <div class="empty-icon">🏇</div>
      <p><b>レース・バ場状態・天候</b>を選択して<br>検索ボタンを押してください</p>
    </div>`;
}

// ── グローバル公開 ──────────────────────────────────────────
window.switchMode    = switchMode;
window.onRaceChange  = onRaceChange;
window.togSingle     = togSingle;
window.togGc         = (el) => togMulti(el, selectedGc);
window.togWeather    = (el) => togMulti(el, selectedWeather);
window.togStyle      = (el) => togMulti(el, selectedStyles);
window.doSearch      = doSearch;
window.resetAll      = resetAll;
window.addSlope      = addSlope;
window.removeSlope   = removeSlope;
window.onSlopeChange = onSlopeChange;

// ── 初期化 ──────────────────────────────────────────────────
loadData().catch(err => {
  console.error('データ読み込み失敗:', err);
  document.getElementById('resBody').innerHTML =
    '<div class="no-res" style="color:var(--red)">データの読み込みに失敗しました。Live Server経由でアクセスしているか確認してください。</div>';
});
