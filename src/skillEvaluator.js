/**
 * skillEvaluator.js
 * Step 4〜7: 複数patternの絞り込み・ソート・表示列の組み立て
 */

import { matchFilters, buildRaceContext } from './filterMatcher.js';
import { resolveTimings } from './timingResolver.js';
import { judge, JUDGE } from './judgeSkill.js';

/**
 * キャラ名を表示すべきrarity_labelの集合
 */
const CHARA_RARITY_LABELS = new Set(['固有スキル', '固有スキル（下位）', '進化スキル']);

/**
 * Step 4〜5: 同一スキル内の複数patternを絞り込む
 * - Step4: 最優先（priority最小）のpatternのみ残す
 * - Step5: effect_value が最大のもののみ残す（同値なら1件に統一）
 *
 * @param {Array} evaluatedPatterns - { pattern, resolved, judgeResult } の配列
 * @returns {{ pattern, resolved, judgeResult }}  最終的に1件
 */
function pickBestPattern(evaluatedPatterns) {
  // Step 4: priority最小のものだけ残す
  const minPriority = Math.min(...evaluatedPatterns.map(ep => ep.judgeResult.priority));
  const step4 = evaluatedPatterns.filter(ep => ep.judgeResult.priority === minPriority);

  // Step 5: effect_value 最大のもの1件
  const maxEffect = Math.max(...step4.map(ep => ep.pattern.execution.effect_value));
  const step5 = step4.filter(ep => ep.pattern.execution.effect_value === maxEffect);

  return step5[0];
}

/**
 * スキル1件を評価して表示用の行データを返す
 * マッチしなければ null を返す
 *
 * @param {Object}   skill          - skills.json の1件
 * @param {Object}   race           - races.json の1件
 * @param {Object}   ctx            - buildRaceContext の返り値
 * @param {Set|null} selectedStyles - 選択中の脚質値のSet
 * @param {Object}   skillCharaMap  - { スキル名: [キャラ名, ...] }
 * @returns {Object|null}
 */
function evaluateSkill(skill, race, ctx, selectedStyles, skillCharaMap) {
  // Step 1: フィルター照合
  const matchedPatterns = matchFilters(skill, ctx, selectedStyles);
  if (!matchedPatterns) return null;

  // Step 2+3: 各patternの発動位置を解決して判定区分を付与
  const evaluated = matchedPatterns.map(pattern => {
    const resolved = resolveTimings(pattern.execution.timings, race);
    const judgeResult = judge(resolved, race);
    return { pattern, resolved, judgeResult };
  });

  // Step 4〜5: 最良patternを1件に絞る
  const best = pickBestPattern(evaluated);
  const { pattern, judgeResult } = best;

  // Step 6: 順位条件
  const order = pattern.execution.order;
  const orderDisplay = order
    ? { display_9: order.display_9 ?? '—', display_12: order.display_12 ?? '—' }
    : null;

  // キャラ名表示条件: rarity_label が対象 かつ skillCharaMap にエントリあり
  let charaNames = null;
  if (CHARA_RARITY_LABELS.has(skill.rarity_label)) {
    const names = skillCharaMap[skill.skill_name];
    if (names && names.length > 0) charaNames = names;
  }

  return {
    skill_id:      skill.skill_id,
    skill_name:    skill.skill_name,
    rarity_value:  skill.rarity_value,
    rarity_label:  skill.rarity_label,
    description:   skill.description ?? null,
    effect_value:  pattern.execution.effect_value,
    uncertainty:   pattern.uncertainty_total,
    judgeResult,
    orderDisplay,
    charaNames,
    // デバッグ・表示補助用
    resolved:      best.resolved,
  };
}

/**
 * メイン関数: 全スキルを評価してソート済み行データの配列を返す
 *
 * @param {Object[]} skills       - skills.json の skills 配列
 * @param {Object}   race         - races.json の1件
 * @param {number}   runningStyle - 照合に使う単一の脚質値（ctx構築用。実際の照合はselectedStylesで行う）
 * @param {number}   groundCond   - バ場状態
 * @param {number}   weather      - 天候
 * @param {Set|null} selectedStyles - 選択中の脚質値のSet（null=全選択）
 * @param {Object}   skillCharaMap  - skill_chara.json の中身
 * @returns {Object[]} 表示用行データの配列（無効スキルを含む）
 */
export function evaluateAll(skills, race, runningStyle, groundCond, weather, selectedStyles, skillCharaMap) {
  // コンテキスト構築（running_styleはフィルター照合でselectedStylesを使うため、ここでは代表値として渡す）
  const ctx = buildRaceContext(race, runningStyle, groundCond, weather);

  const rows = [];

  for (const skill of skills) {
    const row = evaluateSkill(skill, race, ctx, selectedStyles, skillCharaMap);
    if (row) rows.push(row);
  }

  // Step 7: ソート
  // 第1: judgeResult.priority 昇順
  // 第2: effect_value 降順
  // 第3: uncertainty 昇順
  rows.sort((a, b) => {
    if (a.judgeResult.priority !== b.judgeResult.priority) {
      return a.judgeResult.priority - b.judgeResult.priority;
    }
    if (b.effect_value !== a.effect_value) {
      return b.effect_value - a.effect_value;
    }
    return a.uncertainty - b.uncertainty;
  });

  return rows;
}
