/**
 * filterMatcher.js
 * Step 1: レースコンテキストの構築 & フィルター照合
 */

/**
 * ユーザー入力とレースデータからフィルター照合用のコンテキストを構築する
 * @param {Object} race        - races.json の1件
 * @param {number} runningStyle - 1=逃げ / 2=先行 / 3=差し / 4=追い込み
 * @param {number} groundCond  - 1=良 / 2=稍重 / 3=重 / 4=不良
 * @param {number} weather     - 1=晴 / 2=曇 / 3=雨 / 4=雪
 * @returns {Object} raceContext
 */
export function buildRaceContext(race, runningStyle, groundCond, weather) {
  const distanceTypeMap = { '短距離': 1, 'マイル': 2, '中距離': 3, '長距離': 4 };
  const groundTypeMap   = { '芝': 1, 'ダート': 2 };
  const seasonMap       = { '春': 1, '夏': 2, '秋': 3, '冬': 4 };
  const directionMap    = { '右': 1, '左': 2 };

  const dist = race.distance;

  return {
    track_id:           race.track_id,
    distance_type:      distanceTypeMap[race.meta.distance_type] ?? null,
    ground_type:        groundTypeMap[race.meta.surface] ?? null,
    ground_condition:   groundCond,
    running_style:      runningStyle,
    season:             seasonMap[race.meta.season] ?? null,
    rotation:           directionMap[race.meta.direction] ?? null,
    is_basis_distance:  dist % 400 === 0 ? 1 : 0,
    course_distance:    dist,
    weather:            weather,
    straight_front_type: race.meta.last_phase_front === true ? 2 : null,
  };
}

/**
 * 1つのfilterオブジェクトをコンテキストに対して評価する
 * @param {Object} filter  - { var, op, value }
 * @param {Object} ctx     - buildRaceContext の返り値
 * @returns {boolean}
 */
export function evalFilter(filter, ctx) {
  const actual = ctx[filter.var];

  // straight_front_type が null のコースで == 2 の条件 → 不一致
  // null/undefined の場合、!= は true、それ以外は false
  if (actual === null || actual === undefined) {
    return filter.op === '!=';
  }

  switch (filter.op) {
    case '==': return actual === filter.value;
    case '!=': return actual !== filter.value;
    case '>=': return actual >= filter.value;
    case '<=': return actual <= filter.value;
    case '>':  return actual >  filter.value;
    case '<':  return actual <  filter.value;
    default:   return false;
  }
}

/**
 * スキルの全patternに対してフィルター照合を行い、マッチしたpatternの配列を返す
 * 1件もマッチしなければ null を返す（スキル除外）
 *
 * 脚質フィルターの特別処理：
 *   - selectedStyles が null の場合 → 脚質制限なし（全通過）
 *   - selectedStyles に値がある場合 → running_style フィルターがあるpatternは
 *     selectedStyles に含まれる値のみ通過。フィルターがないpatternは常に通過。
 *
 * @param {Object}   skill         - skills.json の1件
 * @param {Object}   ctx           - buildRaceContext の返り値（running_style は複数選択のため除外済み）
 * @param {Set|null} selectedStyles - 選択中の脚質値の Set（null=全選択）
 * @returns {Array|null} マッチしたpatternの配列 or null
 */
export function matchFilters(skill, ctx, selectedStyles) {
  const matched = [];

  for (const pattern of skill.patterns) {
    const filters = pattern.execution.filters;

    // フィルターが空 → 全条件通過
    if (filters.length === 0) {
      matched.push(pattern);
      continue;
    }

    // running_style フィルターを含むかチェック
    const styleFilter = filters.find(f => f.var === 'running_style');
    const otherFilters = filters.filter(f => f.var !== 'running_style');

    // running_style 以外のフィルターを全て評価
    const otherPass = otherFilters.every(f => evalFilter(f, ctx));
    if (!otherPass) continue;

    // running_style フィルターの処理
    if (styleFilter) {
      // selectedStyles が null（=全選択）の場合はフィルター値をそのまま評価
      if (selectedStyles === null) {
        if (!evalFilter(styleFilter, ctx)) continue;
      } else {
        // selectedStyles に styleFilter.value が含まれているか
        // op == の場合: 選択中に含まれていれば通過
        // op != の場合: 選択中にないものがあれば通過（いずれか通過できれば可）
        if (styleFilter.op === '==') {
          if (!selectedStyles.has(styleFilter.value)) continue;
        } else if (styleFilter.op === '!=') {
          // 選択中の脚質に、除外されていない値が1つでもあれば通過
          const hasValidStyle = [...selectedStyles].some(s => s !== styleFilter.value);
          if (!hasValidStyle) continue;
        }
      }
    }
    // running_style フィルターがないpatternは脚質に関わらず通過

    matched.push(pattern);
  }

  return matched.length > 0 ? matched : null;
}
