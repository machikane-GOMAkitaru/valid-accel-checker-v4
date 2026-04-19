<h1>有効加速チェッカー🏇（VALID ACCEL CHECKER）仕様書</h1>
<p>最終更新：2026-04-19</p>

<hr>

<h2>目次</h2>
<ol>
  <li><a href="#overview">概要</a></li>
  <li><a href="#structure">フォルダ構成</a></li>
  <li><a href="#data">データファイル仕様</a></li>
  <li><a href="#ui">UI仕様</a></li>
  <li><a href="#logic">判定ロジック仕様（Step 1〜7）</a></li>
  <li><a href="#modules">モジュール仕様</a></li>
  <li><a href="#bugs">既知のバグ修正履歴</a></li>
  <li><a href="#env">動作環境</a></li>
</ol>

<hr>

<h2 id="overview">1. 概要</h2>
<p>
  ウマ娘プリティダービーにおける加速スキル（効果コード31）の有効性を、
  レース・脚質・バ場状態・天候の条件に基づいて判定・一覧表示するブラウザ完結型のツール。
</p>
<ul>
  <li>スキルデータベース：349件（2026-04-19時点）</li>
  <li>対象レース：51レース（国内外）</li>
  <li>外部依存：なし（全処理をブラウザ内JSで完結）</li>
</ul>

<hr>

<h2 id="structure">2. フォルダ構成</h2>
<pre>
valid-accel-checker/
├── data/
│   ├── skills.json        スキルマスタ（348件）
│   ├── races.json         レース場マスタ（51件）
│   └── skill_chara.json   スキル名 → キャラクター名 対照表
├── src/
│   ├── filterMatcher.js   Step 1: フィルター照合
│   ├── timingResolver.js  Step 2: 発動位置計算
│   ├── judgeSkill.js      Step 3: 判定区分決定
│   ├── skillEvaluator.js  Step 4〜7: 絞り込み・ソート・表示列組み立て
│   └── main.js            データ読み込み・UI制御・検索実行の統合エントリポイント
├── index.html             メイン画面
└── spec.html              本仕様書
</pre>
<p>モジュール形式：ESモジュール（import / export）。main.js が各モジュールをインポートして統合する。</p>

<hr>

<h2 id="data">3. データファイル仕様</h2>

<h3>3-1. skills.json</h3>
<p>スキルマスタ。1スキルにつき1件のオブジェクトを持ち、複数の<code>patterns</code>を内包する。</p>
<table border="1" cellpadding="4" cellspacing="0">
  <tr><th>フィールド</th><th>型</th><th>説明</th></tr>
  <tr><td>skill_id</td><td>number</td><td>スキルの一意ID</td></tr>
  <tr><td>skill_name</td><td>string</td><td>スキル名</td></tr>
  <tr><td>rarity_value</td><td>number</td><td>レア度数値（1=白, 2=金, 3=固有下, 4〜5=固有, 6=進化）</td></tr>
  <tr><td>rarity_label</td><td>string</td><td>レア度ラベル（表示用）</td></tr>
  <tr><td>description</td><td>string | undefined</td><td>スキル説明文（一部スキルのみ存在）</td></tr>
  <tr><td>chara_ids</td><td>number[]</td><td>このスキルを持つキャラのID一覧</td></tr>
  <tr><td>patterns</td><td>Pattern[]</td><td>発動パターンの配列</td></tr>
</table>

<h4>Pattern オブジェクト</h4>
<table border="1" cellpadding="4" cellspacing="0">
  <tr><th>フィールド</th><th>型</th><th>説明</th></tr>
  <tr><td>pattern_id</td><td>number</td><td>パターンID（1始まり）</td></tr>
  <tr><td>trigger</td><td>object | null</td><td>発動トリガー条件。uncertainty_totalに加算済みのため判定では参照しない</td></tr>
  <tr><td>execution.filters</td><td>Filter[]</td><td>レース・脚質・バ場等のフィルター条件</td></tr>
  <tr><td>execution.timings</td><td>string[]</td><td>発動タイミングを表すトークンの配列</td></tr>
  <tr><td>execution.order</td><td>object | null</td><td>順位条件。display_9（9頭立て）/ display_12（12頭立て）を含む</td></tr>
  <tr><td>execution.effect_value</td><td>number</td><td>効果量（10000単位。10000 = 1万）</td></tr>
  <tr><td>uncertainty_total</td><td>number</td><td>不確実性スコア（運ゲランクの算出に使用）</td></tr>
</table>

<h4>Filter オブジェクト</h4>
<table border="1" cellpadding="4" cellspacing="0">
  <tr><th>フィールド</th><th>型</th><th>説明</th></tr>
  <tr><td>var</td><td>string</td><td>比較対象の変数名（track_id, distance_type 等）</td></tr>
  <tr><td>op</td><td>string</td><td>比較演算子（== != &gt;= &lt;= &gt; &lt;）</td></tr>
  <tr><td>value</td><td>number</td><td>比較値</td></tr>
  <tr><td>label</td><td>string | null</td><td>表示用ラベル（参考情報）</td></tr>
</table>

<h3>3-2. races.json</h3>
<p>レース場マスタ。1レースにつき1件。</p>
<table border="1" cellpadding="4" cellspacing="0">
  <tr><th>フィールド</th><th>型</th><th>説明</th></tr>
  <tr><td>track_id</td><td>number</td><td>レース場ID（東京=10005, 中山=10006 等）</td></tr>
  <tr><td>race_name</td><td>string</td><td>レース名</td></tr>
  <tr><td>track</td><td>string</td><td>競馬場名</td></tr>
  <tr><td>distance</td><td>number</td><td>距離（m）</td></tr>
  <tr><td>ls_point</td><td>number</td><td>ラストスパート開始地点（m）</td></tr>
  <tr><td>sections.final_corner</td><td>[number, number]</td><td>最終コーナー区間 [開始m, 終了m]</td></tr>
  <tr><td>sections.final_straight</td><td>[number, number]</td><td>最終直線区間 [開始m, 終了m]</td></tr>
  <tr><td>sections.corners</td><td>[number, number][]</td><td>全コーナー区間の配列</td></tr>
  <tr><td>sections.straights</td><td>[number, number][]</td><td>全直線区間の配列</td></tr>
  <tr><td>hills.uphill</td><td>[number, number][] | null</td><td>登り坂区間。なければnull</td></tr>
  <tr><td>hills.downhill</td><td>[number, number][] | null</td><td>下り坂区間。なければnull</td></tr>
  <tr><td>meta.surface</td><td>string</td><td>芝 / ダート</td></tr>
  <tr><td>meta.direction</td><td>string</td><td>右 / 左</td></tr>
  <tr><td>meta.distance_type</td><td>string</td><td>短距離 / マイル / 中距離 / 長距離</td></tr>
  <tr><td>meta.season</td><td>string</td><td>春 / 夏 / 秋 / 冬</td></tr>
  <tr><td>meta.last_phase_front</td><td>boolean</td><td>向こう正面あり = true</td></tr>
</table>

<h3>3-3. skill_chara.json</h3>
<p>スキル名をキーとし、対応するキャラクター名の配列を値とするオブジェクト。<br>
キャラ名の表示は <code>rarity_label</code> が「固有スキル」「固有スキル（下位）」「進化スキル」のいずれかの場合のみ行う。金スキル・白スキルには表示しない（複数キャラが共有するため）。</p>

<hr>

<h2 id="ui">4. UI仕様</h2>

<h3>4-1. レース選択</h3>
<p>2つのモードをタブで切り替える。</p>

<h4>プリセットモード</h4>
<ul>
  <li>races.json の全レースをシーズン（春・夏・秋・冬）でグループ化してセレクトボックスに表示</li>
  <li>選択するとレース情報（距離・バ場・回り・距離区分・LS地点）を自動表示</li>
</ul>

<h4>自分で選択モード</h4>
<p>以下の項目をユーザーが手動で入力・選択する。</p>
<table border="1" cellpadding="4" cellspacing="0">
  <tr><th>項目</th><th>形式</th><th>備考</th></tr>
  <tr><td>レース場</td><td>セレクトボックス（任意）</td><td>races.jsonから一意のtrack_idを抽出して自動構築。未選択時はtrack_id=0（track_id系フィルターは全て不一致扱い）</td></tr>
  <tr><td>距離</td><td>数値入力（800〜4000m）</td><td>距離区分・LS地点は自動計算（距離区分: ≦1400=短距離, ≦1800=マイル, ≦2500=中距離, それ以上=長距離。LS地点: distance × 2/3）</td></tr>
  <tr><td>バ場</td><td>トグルボタン単一選択（芝 / ダート）</td><td>必須</td></tr>
  <tr><td>回り</td><td>トグルボタン単一選択（右 / 左）</td><td>必須</td></tr>
  <tr><td>季節</td><td>トグルボタン単一選択（春 / 夏 / 秋 / 冬）</td><td>必須</td></tr>
  <tr><td>最終コーナー開始</td><td>数値入力（m）</td><td>任意。未入力時はdistance × 0.55で補完</td></tr>
  <tr><td>最終直線開始</td><td>数値入力（m）</td><td>任意。未入力時はdistance × 0.75で補完。終了はdistanceに自動設定</td></tr>
  <tr><td>向こう正面あり</td><td>チェックボックス</td><td>オフがデフォルト</td></tr>
  <tr><td>上り坂区間</td><td>「＋ 区間を追加」で複数行追加（開始m〜終了m）</td><td>任意。×ボタンで削除</td></tr>
  <tr><td>下り坂区間</td><td>「＋ 区間を追加」で複数行追加（開始m〜終了m）</td><td>任意。×ボタンで削除</td></tr>
</table>

<h3>4-2. 条件選択（共通）</h3>
<table border="1" cellpadding="4" cellspacing="0">
  <tr><th>項目</th><th>選択方式</th><th>デフォルト</th><th>最低選択数</th></tr>
  <tr><td>バ場状態</td><td>複数選択トグル（良 / 稍重 / 重 / 不良）</td><td>全選択</td><td>1つ</td></tr>
  <tr><td>天候</td><td>複数選択トグル（晴 / 曇 / 雨 / 雪）</td><td>全選択</td><td>1つ</td></tr>
  <tr><td>脚質</td><td>複数選択トグル（逃げ / 先行 / 差し / 追い込み）</td><td>全選択</td><td>1つ</td></tr>
</table>
<p>バ場状態・天候が複数選択されている場合、全組み合わせで評価を実行し、同一スキルが複数条件でマッチした場合は最も優先度の高い判定結果を採用する。</p>
<p>脚質が複数選択されている場合、running_style フィルターを持たないスキルは常に通過する（脚質指定なしのスキルは脚質選択によらず表示対象に含まれる）。</p>

<h3>4-3. 表示オプション</h3>
<ul>
  <li>「開始時加速を除外する」チェックボックス（デフォルト：チェックあり）<br>
    チェック時は判定区分「レース開始時」のスキルを結果から除外する。</li>
</ul>

<h3>4-4. 出力テーブル</h3>
<table border="1" cellpadding="4" cellspacing="0">
  <tr><th>列名</th><th>内容</th></tr>
  <tr><td>スキル名</td><td>skill.skill_name</td></tr>
  <tr><td>レア度</td><td>rarity_label に対応するバッジ（白 / 金 / 固有下 / 固有 / 進化）</td></tr>
  <tr><td>効果量</td><td>effect_value ÷ 10000（小数2桁表示）</td></tr>
  <tr><td>効果 / 発動条件</td><td>キャラ名（固有系のみ） + skill.description</td></tr>
  <tr><td>順位条件</td><td>display_9（チャンミ9頭立て） / display_12（LoH12頭立て）。条件なしは「—」</td></tr>
  <tr><td>タイミング</td><td>判定区分バッジ</td></tr>
  <tr><td>運ゲランク</td><td>uncertainty_total の値と段階ラベル（確定 / 低 / 中 / 高 / 最高）</td></tr>
</table>

<h4>判定区分と表示バッジ</h4>
<table border="1" cellpadding="4" cellspacing="0">
  <tr><th>優先度</th><th>判定区分</th><th>条件</th></tr>
  <tr><td>0</td><td>レース開始時</td><td>always==1（timingsが空配列を含む）</td></tr>
  <tr><td>1</td><td>最速発動</td><td>offset が -50 以上 0 以下</td></tr>
  <tr><td>2</td><td>坂（有効）</td><td>ls_pointが坂区間内</td></tr>
  <tr><td>3</td><td>準速発動</td><td>offset が 0より大きく 100 以下</td></tr>
  <tr><td>4</td><td>ランダム有効</td><td>ランダム範囲が [ls-50, ls+100] と重なる</td></tr>
  <tr><td>5</td><td>坂（無効）</td><td>ls_pointが坂区間外</td></tr>
  <tr><td>6</td><td>無効</td><td>offset &lt; -50 または offset &gt; +100</td></tr>
  <tr><td>7</td><td>条件次第</td><td>全timingが位置計算対象外（other）</td></tr>
</table>
<p>※ offset = 発動位置(m) - ls_point(m)</p>

<h4>運ゲランクの段階</h4>
<table border="1" cellpadding="4" cellspacing="0">
  <tr><th>uncertainty_total</th><th>ラベル</th></tr>
  <tr><td>0</td><td>確定</td></tr>
  <tr><td>1〜2</td><td>低</td></tr>
  <tr><td>3〜4</td><td>中</td></tr>
  <tr><td>5〜6</td><td>高</td></tr>
  <tr><td>7以上</td><td>最高</td></tr>
</table>

<h4>ソート順</h4>
<ol>
  <li>判定区分の優先度（昇順）</li>
  <li>effect_value（降順）</li>
  <li>uncertainty_total（昇順）</li>
</ol>

<hr>

<h2 id="logic">5. 判定ロジック仕様（Step 1〜7）</h2>

<h3>処理の全体フロー</h3>
<pre>
全スキル（348件）
  │
  ▼ Step 1: フィルター照合
  ├─ 各スキルの全patternをfiltersで評価
  ├─ マッチしないpatternを除外
  └─ 全patternが除外されたスキルはリストから脱落
  │
  ▼ Step 2: 発動地点の計算
  └─ timingsをrace情報で解決 → 発動位置(m)を算出
  │
  ▼ Step 3: 判定区分の決定
  └─ (発動位置 - ls_point) = offset で判定区分を付与
  │
  ▼ Step 4: 複数patternの優先度絞り込み
  └─ 同一スキルで複数patternが残っている場合、判定区分が劣位のものを除外
  │
  ▼ Step 5: 同優先度内のeffect_value絞り込み
  └─ 判定区分が同一なら効果量が小さいpatternを除外（同値なら1件に統一）
  │
  ▼ Step 6: 順位条件の付与
  └─ execution.orderがnullでなければ display_9 / display_12 を付与
  │
  ▼ Step 7: ソート
  └─ 判定区分優先度昇順 → effect_value降順 → uncertainty_total昇順
</pre>

<h3>Step 1: フィルター照合</h3>
<p>レースコンテキストを以下のマッピングで構築し、各filterと照合する。</p>
<table border="1" cellpadding="4" cellspacing="0">
  <tr><th>filter var</th><th>取得元</th><th>変換</th></tr>
  <tr><td>track_id</td><td>race.track_id</td><td>そのまま（int）</td></tr>
  <tr><td>distance_type</td><td>race.meta.distance_type</td><td>短距離:1 / マイル:2 / 中距離:3 / 長距離:4</td></tr>
  <tr><td>ground_type</td><td>race.meta.surface</td><td>芝:1 / ダート:2</td></tr>
  <tr><td>ground_condition</td><td>ユーザー入力</td><td>良:1 / 稍重:2 / 重:3 / 不良:4</td></tr>
  <tr><td>running_style</td><td>ユーザー入力</td><td>逃げ:1 / 先行:2 / 差し:3 / 追い込み:4</td></tr>
  <tr><td>season</td><td>race.meta.season</td><td>春:1 / 夏:2 / 秋:3 / 冬:4</td></tr>
  <tr><td>rotation</td><td>race.meta.direction</td><td>右:1 / 左:2</td></tr>
  <tr><td>is_basis_distance</td><td>race.distance</td><td>distance % 400 === 0 ? 1 : 0</td></tr>
  <tr><td>course_distance</td><td>race.distance</td><td>そのまま（int）</td></tr>
  <tr><td>weather</td><td>ユーザー入力</td><td>晴:1 / 曇:2 / 雨:3 / 雪:4</td></tr>
  <tr><td>straight_front_type</td><td>race.meta.last_phase_front</td><td>true → 2 / false → null</td></tr>
</table>

<p>straight_front_type が null のコース（向こう正面なし）において <code>==2</code> 条件は不一致。<code>!=</code> 条件は一致として扱う。</p>

<h4>脚質フィルターの特別処理</h4>
<ul>
  <li>running_style フィルターを持たないpatternは、脚質選択に関わらず常に通過する</li>
  <li>running_style フィルターを持つpatternは、ユーザーが選択中の脚質に合致する場合のみ通過する</li>
  <li>op が <code>!=</code> の場合：選択中の脚質のうち除外されていない値が1つでも存在すれば通過</li>
</ul>

<h3>Step 2: 発動地点の計算</h3>

<h4>フェーズ境界の定義</h4>
<table border="1" cellpadding="4" cellspacing="0">
  <tr><th>フェーズ</th><th>区間</th></tr>
  <tr><td>phase 0</td><td>[0, d/6)</td></tr>
  <tr><td>phase 1</td><td>[d/6, d×2/3)</td></tr>
  <tr><td>phase 2</td><td>[d×2/3, d×5/6) ← ls_point = d×2/3</td></tr>
  <tr><td>phase 3</td><td>[d×5/6, d]</td></tr>
</table>

<h4>timingトークンの分類と発動位置</h4>

<p><strong>固定位置（kind: fixed）</strong></p>
<table border="1" cellpadding="4" cellspacing="0">
  <tr><th>timing</th><th>発動位置(pos)</th></tr>
  <tr><td>always==1</td><td>0（レース開始時フラグ）</td></tr>
  <tr><td>phase==N</td><td>phase_start(N)</td></tr>
  <tr><td>phase&gt;=N</td><td>phase_start(N)</td></tr>
  <tr><td>phase_firstquarter==N</td><td>phase_start(N) + phase_len(N)/4</td></tr>
  <tr><td>is_finalcorner==1</td><td>race.sections.final_corner[0]</td></tr>
  <tr><td>is_finalcorner_laterhalf==1</td><td>(final_corner[0] + final_corner[1]) / 2</td></tr>
  <tr><td>is_last_straight==1</td><td>race.sections.final_straight[0]</td></tr>
  <tr><td>is_lastspurt==1 / lastspurt==2</td><td>race.ls_point</td></tr>
</table>

<p><strong>distance_rate / remain_distance の挟み込みパターン（修正済み）</strong></p>
<ul>
  <li><code>remain_distance&gt;=X</code> AND <code>remain_distance&lt;=Y</code>（X≈Y）：「ピン止め」表現として中点 (pos_lo + pos_hi)/2 を fixed として採用</li>
  <li><code>distance_rate&gt;=X</code> AND <code>distance_rate&lt;=Y</code>：区間として range [distance×X/100, distance×Y/100] に変換</li>
  <li>片方のみの場合は fixed として扱う</li>
</ul>

<p><strong>ランダム範囲（kind: range）</strong></p>
<table border="1" cellpadding="4" cellspacing="0">
  <tr><th>timing</th><th>範囲 [lo, hi]</th></tr>
  <tr><td>phase_random==N</td><td>[phase_start(N), phase_end(N)]</td></tr>
  <tr><td>phase_firsthalf_random==N</td><td>[phase_start(N), phase_mid(N)]</td></tr>
  <tr><td>phase_laterhalf_random==N</td><td>[phase_mid(N), phase_end(N)]</td></tr>
  <tr><td>phase_firstquarter_random==N</td><td>[phase_start(N), phase_start(N) + len/4]</td></tr>
  <tr><td>phase_first_half_straight_random==N</td><td>phase N前半内の直線区間</td></tr>
  <tr><td>is_finalcorner_random==1</td><td>race.sections.final_corner</td></tr>
  <tr><td>all_corner_random==1</td><td>[corners[0][0], corners[-1][1]]</td></tr>
  <tr><td>straight_random==1</td><td>[straights[0][0], straights[-1][1]]</td></tr>
  <tr><td>distance_rate_after_random==X</td><td>[distance×X/100, distance]</td></tr>
</table>

<p><strong>坂スキル（kind: slope）</strong></p>
<table border="1" cellpadding="4" cellspacing="0">
  <tr><th>timing</th><th>slope_type</th></tr>
  <tr><td>slope==1</td><td>up</td></tr>
  <tr><td>slope==2</td><td>down</td></tr>
  <tr><td>slope==0</td><td>flat</td></tr>
  <tr><td>up_slope_random==1</td><td>up_random</td></tr>
  <tr><td>up_slope_random_later_half==1</td><td>up_random_later</td></tr>
  <tr><td>down_slope_random==1</td><td>down_random</td></tr>
</table>

<p><strong>位置計算対象外（kind: other）</strong></p>
<p>以下のtimingは位置を持たないため計算をスキップする。uncertainty_totalに不確実性として反映済み。</p>
<p>accumulatetime / activate_count_* / base_stamina / bashin_diff_* / blocked_front* / blocked_side_continuetime / change_order_onetime / compete_fight_count / corner!=0 / corner==0 / distance_diff_* / infront_near_lane_time / is_behind_in / is_finalcorner==0 / is_lastspurt / is_move_lane / is_overtake / is_used_skill_id / lastspurt / motivation / overtake_target_time / post_number / temptation_count</p>

<h4>複数timingの結合ルール</h4>
<ul>
  <li>fixed のみ：pos = max(全fixedのpos)</li>
  <li>range のみ：lo = max(全loの値), hi = min(全hiの値)</li>
  <li>fixed と range が混在：fixedで解決（rangeはfixedの制約内に収まるため）</li>
  <li>slope のみ：単独処理</li>
  <li>timings が空配列：always==1 相当（pos=0, isAlways=true）</li>
</ul>

<h3>Step 3: 判定区分の決定</h3>
<ul>
  <li>isAlways=true → レース開始時（優先度0）</li>
  <li>kind=fixed：offset = pos - ls_point を計算<br>
    &nbsp;&nbsp;-50 ≦ offset ≦ 0 → 最速発動<br>
    &nbsp;&nbsp;0 &lt; offset ≦ 100 → 準速発動<br>
    &nbsp;&nbsp;その他 → 無効</li>
  <li>kind=range：[lo, hi] と [ls-50, ls+100] の重なりがあれば → ランダム有効、なければ → 無効</li>
  <li>kind=slope：ls_point が対応する坂区間内にあれば → 坂（有効）、なければ → 坂（無効）<br>
    &nbsp;&nbsp;flat の場合：ls_point がどの坂区間にも含まれなければ → 坂（有効）</li>
  <li>kind=other → 条件次第（優先度7）</li>
</ul>

<h3>Step 4〜5: 複数patternの絞り込み</h3>
<ul>
  <li>Step 4：同一スキルで複数patternが残っている場合、最も優先度が高い（数値が小さい）判定区分のpatternのみ残す</li>
  <li>Step 5：Step 4後も複数patternが残っている場合、effect_valueが最大のものを1件に絞る（同値なら任意の1件）</li>
</ul>

<h3>Step 6: 順位条件の付与</h3>
<p>execution.order が null でない場合、display_9（チャンミ9頭立て）と display_12（LoH12頭立て）を表示列に追加する。</p>

<h3>Step 7: ソート</h3>
<ol>
  <li>判定区分の優先度（昇順）</li>
  <li>effect_value（降順）</li>
  <li>uncertainty_total（昇順）</li>
</ol>

<hr>

<h2 id="modules">6. モジュール仕様</h2>

<h3>filterMatcher.js</h3>
<ul>
  <li><code>buildRaceContext(race, runningStyle, groundCond, weather)</code>：レースオブジェクトとユーザー入力からフィルター照合用のコンテキストオブジェクトを生成して返す</li>
  <li><code>evalFilter(filter, ctx)</code>：filterオブジェクト1件をコンテキストに対して評価し boolean を返す</li>
  <li><code>matchFilters(skill, ctx, selectedStyles)</code>：スキルの全patternにフィルター照合を行い、マッチしたpatternの配列を返す。1件もマッチしなければ null を返す（スキル除外）</li>
</ul>

<h3>timingResolver.js</h3>
<ul>
  <li><code>classifyTiming(token, race)</code>：timingトークン1つを分類し { kind, pos } または { kind, lo, hi } または { kind, slope_type } を返す</li>
  <li><code>resolveTimings(timings, race)</code>：patternのtimings配列を解決し、複数timingの結合ルールを適用して最終的な発動位置情報を返す</li>
</ul>

<h3>judgeSkill.js</h3>
<ul>
  <li><code>JUDGE</code>：判定区分の定義オブジェクト（priority / label / cls を持つ）</li>
  <li><code>judge(resolved, race)</code>：resolveTimingsの返り値とraceオブジェクトから判定区分（JUDGEの各値）を返す</li>
</ul>

<h3>skillEvaluator.js</h3>
<ul>
  <li><code>evaluateAll(skills, race, runningStyle, groundCond, weather, selectedStyles, skillCharaMap)</code>：全スキルを評価してソート済みの表示用行データ配列を返す（Step 1〜7 の統合実行）</li>
</ul>

<h3>main.js</h3>
<ul>
  <li><code>loadData()</code>：3つのJSONファイルをfetchして読み込み、レースセレクトと競馬場セレクトを構築する</li>
  <li><code>buildRaceSelect()</code>：races.jsonからプリセットセレクトボックスを構築する（シーズン別グループ化）</li>
  <li><code>buildTrackSelect()</code>：races.jsonから一意のtrack_idを抽出し、自由入力モード用の競馬場セレクトを構築する</li>
  <li><code>buildCustomRace()</code>：自由入力モードのフォーム値からraceオブジェクトを組み立てて返す</li>
  <li><code>doSearch()</code>：バ場状態×天候の全組み合わせで evaluateAll を実行し、同一スキルの最良判定結果をマージしてテーブルに描画する</li>
  <li><code>addSlope(type) / removeSlope(type, idx)</code>：自由入力モードの坂区間行を追加・削除する</li>
  <li><code>resetAll()</code>：全入力・表示をデフォルト状態に戻す</li>
</ul>

<hr>

<h2 id="bugs">7. バグ修正履歴</h2>

<h3>remain_distance の挟み込みパターンによる誤判定（修正済み）</h3>
<p><strong>対象スキル：</strong>セイリオス / Guiding Sea / CHERRY☆スクランブル / 咲け咲け！私！（計4件）</p>
<p><strong>症状：</strong> <code>remain_distance&gt;=799</code> AND <code>remain_distance&lt;=801</code> のように ≧X と ≦Y の挟み込みでほぼ同値（ピン止め）を表すtimingが、両方とも kind=fixed に分類されMAX値を採用していたため、発動位置がls_pointから +1m ずれ「準速発動」と誤判定されていた。</p>
<p><strong>例：</strong>セイリオス（東京2400m, ls_point=1600m）<br>
&nbsp;&nbsp;修正前：max(1601, 1599) = 1601 → offset = +1 → 準速発動<br>
&nbsp;&nbsp;修正後：(1601+1599)/2 = 1600 → offset = 0 → 最速発動</p>
<p><strong>修正内容：</strong>timingResolver.js にて remain_distance&gt;= と remain_distance&lt;= を専用の kind（rd_ge / rd_le）で返すよう変更。resolveTimings 内で両方揃った場合は中点を fixed として採用するロジックを追加。</p>

<h3>distance_rate の挟み込みパターンの誤分類（修正済み）</h3>
<p><strong>対象スキル：</strong>#LookatCurren</p>
<p><strong>症状：</strong> <code>distance_rate&gt;=50</code> AND <code>distance_rate&lt;=65</code> が区間（50〜65%）を表すにも関わらずMAXのfixedで処理されていた。</p>
<p><strong>修正内容：</strong>dr_ge / dr_le の専用kindを追加し、両方揃った場合は range [distance×X/100, distance×Y/100] に変換するよう修正。</p>


</html>
