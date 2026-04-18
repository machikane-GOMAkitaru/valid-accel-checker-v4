/**
 * main.js
 * データ読み込み・UI制御・検索実行の統合エントリポイント
 */

import { buildRaceContext } from './filterMatcher.js';
import { evaluateAll } from './skillEvaluator.js';
import { JUDGE } from './judgeSkill.js';

// ── データ格納 ─────────────────────────────────────────────
let SKILLS     = [];
let RACES      = [];
let SKILL_CHARA = {};

// ── UI状態 ─────────────────────────────────────────────────
let selectedRace   = null;   // 選択中のraceオブジェクト
let selectedStyles = new Set([1, 2, 3, 4]); // 脚質（全選択がデフォルト）

// ── 定数マッピング ─────────────────────────────────────────
const RARITY_INFO = {
  1: { label: '白',     cls: 'rar-w'  },
  2: { label: '金',     cls: 'rar-g'  },
  3: { label: '固有下', cls: 'rar-ub' },
  4: { label: '固有',   cls: 'rar-u'  },
  5: { label: '固有',   cls: 'rar-u'  },
  6: { label: '進化',   cls: 'rar-e'  },
};

const GROUND_TYPE_LABEL   = { 1: '芝', 2: 'ダート' };
const GROUND_COND_LABEL   = { 1: '良', 2: '稍重', 3: '重', 4: '不良' };
const WEATHER_LABEL       = { 1: '晴', 2: '曇', 3: '雨', 4: '雪' };
const RUNNING_STYLE_LABEL = { 1: '逃げ', 2: '先行', 3: '差し', 4: '追い込み' };

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
}

// ── レースプリセットセレクト構築 ───────────────────────────
function buildRaceSelect() {
  const sel = document.getElementById('raceSel');
  sel.innerHTML = '<option value="">― レースを選ぶ ―</option>';

  // シーズンごとにグループ化
  const seasons = ['春', '夏', '秋', '冬'];
  const grouped = {};
  seasons.forEach(s => grouped[s] = []);

  RACES.forEach((r, i) => {
    const season = r.meta.season;
    if (grouped[season]) grouped[season].push({ r, i });
  });

  seasons.forEach(season => {
    if (grouped[season].length === 0) return;
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

// ── レース選択時の処理 ─────────────────────────────────────
function onRaceChange() {
  const idx = document.getElementById('raceSel').value;
  if (idx === '') {
    selectedRace = null;
    // 自動入力をクリア
    document.getElementById('infoDistance').textContent   = '—';
    document.getElementById('infoSurface').textContent    = '—';
    document.getElementById('infoDirection').textContent  = '—';
    document.getElementById('infoDistType').textContent   = '—';
    document.getElementById('infoLsPoint').textContent    = '—';
    return;
  }
  selectedRace = RACES[parseInt(idx)];
  // レース情報を表示
  document.getElementById('infoDistance').textContent   = selectedRace.distance + 'm';
  document.getElementById('infoSurface').textContent    = selectedRace.meta.surface;
  document.getElementById('infoDirection').textContent  = selectedRace.meta.direction;
  document.getElementById('infoDistType').textContent   = selectedRace.meta.distance_type;
  document.getElementById('infoLsPoint').textContent    = selectedRace.ls_point + 'm';
}

// ── トグルボタン（排他・単選択）─────────────────────────────
function tog(el, group) {
  document.querySelectorAll(`.tb[data-g="${group}"]`).forEach(b => b.classList.remove('on'));
  el.classList.add('on');
}

function getSel(group) {
  const el = document.querySelector(`.tb.on[data-g="${group}"]`);
  return el ? parseInt(el.dataset.v) : null;
}

// ── 脚質トグル（複数選択）──────────────────────────────────
function togStyle(el) {
  const v = parseInt(el.dataset.v);
  if (el.classList.contains('on')) {
    // 最低1つは選択を維持
    if (selectedStyles.size <= 1) return;
    el.classList.remove('on');
    selectedStyles.delete(v);
  } else {
    el.classList.add('on');
    selectedStyles.add(v);
  }
}

// ── バリデーション ──────────────────────────────────────────
function showErr(id, targetId) {
  document.getElementById(id).classList.add('show');
  if (targetId) document.getElementById(targetId).classList.add('err-ring');
}
function clearErr() {
  document.querySelectorAll('.err').forEach(e => e.classList.remove('show'));
  document.querySelectorAll('.err-ring').forEach(e => e.classList.remove('err-ring'));
}

// ── 検索実行 ────────────────────────────────────────────────
function doSearch() {
  clearErr();

  const gc      = getSel('gc');
  const weather = getSel('weather');
  let ok = true;

  if (!selectedRace) { showErr('e-race', 'raceSel'); ok = false; }
  if (!gc)           { showErr('e-gc',   null);      ok = false; }
  if (!weather)      { showErr('e-weather', null);   ok = false; }
  if (!ok) return;

  // 脚質: selectedStyles が全4つ選択されていたら null（全通過）として渡す
  const stylesParam = selectedStyles.size === 4 ? null : new Set(selectedStyles);

  // running_style: ctx構築用の代表値（実際の絞り込みはselectedStylesで行われる）
  // 代表値は選択中の最小値を使う（buildRaceContextには running_style が渡されるが、
  // filterMatcher.js では ctx の running_style は使われない設計）
  const repStyle = [...selectedStyles].sort()[0] ?? 1;

  let rows = evaluateAll(
    SKILLS,
    selectedRace,
    repStyle,
    gc,
    weather,
    stylesParam,
    SKILL_CHARA
  );

  // 「レース開始時を除外」チェックが入っている場合は ALWAYS を除く
  const excludeAlways = document.getElementById('chkExcludeAlways').checked;
  if (excludeAlways) {
    rows = rows.filter(r => r.judgeResult !== JUDGE.ALWAYS);
  }

  // 有効件数（INVALID / OTHER 以外）
  const validCount = rows.filter(r =>
    r.judgeResult !== JUDGE.INVALID && r.judgeResult !== JUDGE.OTHER
  ).length;

  document.getElementById('resCnt').textContent = validCount;
  document.getElementById('resTot').textContent = `（全${rows.length}件中）`;

  // 検索条件チップ
  renderChips(gc, weather);

  render(rows);
}

// ── 条件チップ描画 ─────────────────────────────────────────
function renderChips(gc, weather) {
  const el = document.getElementById('chips');
  el.innerHTML = '';
  const add = (t) => {
    const d = document.createElement('div');
    d.className = 'chip';
    d.textContent = t;
    el.appendChild(d);
  };
  if (selectedRace) {
    add(`${selectedRace.race_name}`);
    add(`${selectedRace.distance}m（${selectedRace.meta.distance_type}）`);
    add(selectedRace.meta.surface);
    add(`ls=${selectedRace.ls_point}m`);
  }
  add(GROUND_COND_LABEL[gc]);
  add(WEATHER_LABEL[weather]);
  // 脚質（全選択なら「脚質:全て」）
  if (selectedStyles.size === 4) {
    add('脚質:全て');
  } else {
    const labels = [...selectedStyles].sort().map(v => RUNNING_STYLE_LABEL[v]).join('・');
    add(`脚質:${labels}`);
  }
}

// ── 不確実性バッジ情報 ─────────────────────────────────────
function uncInfo(unc) {
  if (unc === 0)       return { cls: 'u-zero', label: '確定' };
  if (unc <= 2)        return { cls: 'u-low',  label: '低'   };
  if (unc <= 4)        return { cls: 'u-mid',  label: '中'   };
  if (unc <= 6)        return { cls: 'u-high', label: '高'   };
  return               { cls: 'u-vhigh', label: '最高' };
}

// ── テーブル描画 ────────────────────────────────────────────
function render(rows) {
  const container = document.getElementById('resBody');

  if (rows.length === 0) {
    container.innerHTML = '<div class="no-res">該当するスキルが見つかりませんでした。</div>';
    return;
  }

  const sortExpl = `<div class="sort-bar">
    <span class="sbl">✦ ソート：</span>発動タイミング早い順
    <span style="color:var(--border2)">▶</span> 効果量降順
    <span style="color:var(--border2)">▶</span> 不確実性スコア昇順
  </div>`;

  let html = sortExpl + `
  <table>
    <thead>
      <tr>
        <th>スキル名</th>
        <th>レア度</th>
        <th>効果量</th>
        <th>効果 / 発動条件</th>
        <th>順位条件<br><span style="font-size:8px;color:var(--tx3)">チャンミ / LoH</span></th>
        <th>タイミング</th>
        <th>不確実性</th>
      </tr>
    </thead>
    <tbody>`;

  rows.forEach(r => {
    const isInvalid = r.judgeResult === JUDGE.INVALID || r.judgeResult === JUDGE.OTHER;
    const trCls = isInvalid ? 'invalid' : '';

    const ri = RARITY_INFO[r.rarity_value] ?? { label: '?', cls: 'rar-w' };
    const ui = uncInfo(r.uncertainty);

    // 効果量表示（万単位で小数2桁）
    const effectStr = (r.effect_value / 10000).toFixed(2);

    // 順位条件
    let rankHtml = '—';
    if (r.orderDisplay) {
      rankHtml = `<span class="rank-cr">${r.orderDisplay.display_9}</span>`
               + `<span class="rank-sep"> / </span>`
               + `<span class="rank-lr">${r.orderDisplay.display_12}</span>`;
    }

    // キャラ名
    let charaHtml = '';
    if (r.charaNames) {
      charaHtml = `<div class="c-chara">＜${r.charaNames.join(' / ')}＞</div>`;
    }

    // description
    const descHtml = r.description
      ? `<div class="c-desc">${r.description}</div>`
      : '';

    html += `<tr class="${trCls}">
      <td><div class="c-name">${r.skill_name}</div></td>
      <td style="text-align:center">
        <span class="rar-badge ${ri.cls}">${ri.label}</span>
      </td>
      <td style="text-align:center;font-family:'Share Tech Mono',monospace;color:var(--cyan);font-weight:bold">
        ${effectStr}
      </td>
      <td>
        ${charaHtml}
        ${descHtml}
      </td>
      <td class="c-rank">${rankHtml}</td>
      <td>
        <span class="badge ${r.judgeResult.cls}">${r.judgeResult.label}</span>
      </td>
      <td>
        <span class="unc-badge ${ui.cls}">
          <span class="unc-score">${r.uncertainty}</span>
          <span>${ui.label}</span>
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
  // 脚質を全選択に戻す
  selectedStyles = new Set([1, 2, 3, 4]);
  document.querySelectorAll('.tb[data-g="style"]').forEach(b => b.classList.add('on'));
  // 他のトグルをリセット
  document.querySelectorAll('.tb[data-g="gc"],.tb[data-g="weather"]').forEach(b => b.classList.remove('on'));

  onRaceChange();
  clearErr();
  // 表示オプションをデフォルトに戻す
  document.getElementById('chkExcludeAlways').checked = true;
  document.getElementById('chips').innerHTML = '';
  document.getElementById('resCnt').textContent = '—';
  document.getElementById('resTot').textContent = '';
  document.getElementById('resBody').innerHTML = `
    <div class="empty">
      <div class="empty-icon">🏇</div>
      <p><b>レース・バ場状態・天候</b>を選択して<br>検索ボタンを押してください</p>
    </div>`;
}

// ── グローバル公開（HTMLのonclick属性から呼び出し用）─────────
window.onRaceChange = onRaceChange;
window.tog          = tog;
window.getSel       = getSel;
window.togStyle     = togStyle;
window.doSearch     = doSearch;
window.resetAll     = resetAll;

// ── 初期化 ──────────────────────────────────────────────────
loadData().catch(err => {
  console.error('データ読み込み失敗:', err);
  document.getElementById('resBody').innerHTML =
    '<div class="no-res" style="color:var(--red)">データの読み込みに失敗しました。Live Server経由でアクセスしているか確認してください。</div>';
});
