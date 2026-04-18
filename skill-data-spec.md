  <h1>🏇 ウマ娘スキル判定ツール：データ作成仕様書 (v2026.4)</h1>
  <p>このデータ仕様は、フロントエンド側の判定モジュール（<code>filterMatcher</code>, <code>timingResolver</code>, <code>judgeSkill</code>, <code>skillEvaluator</code>）と完全に同期して動かすための設計図です。</p>

  <h2>1. 基本データ構造</h2>
  <p>各スキルは <code>skill_id</code> をキーとしたオブジェクトで管理し、複数の発動条件を持つ場合は <code>patterns</code> 配列に格納します。</p>
<pre><code>{
  "skill_id": 100001,
  "skill_name": "スキル名",
  "rarity_value": 3, // 1:ノーマル, 2:金, 6:進化
  "patterns": [ ... ]
}</code></pre>

  <h2>2. filters フィールド（Step 1: 絶対条件）</h2>
  <p>「脚質」「距離」「バ場」など、<strong>満たさない場合に「そもそも表示すらしない」条件</strong>をここに構造化データとして記述します。</p>
  <table>
    <thead>
      <tr>
        <th>変数名 (<code>var</code>)</th>
        <th>内容</th>
        <th>指定すべき値</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>proper_distance_type</code></td>
        <td>脚質</td>
        <td>1:逃げ, 2:先行, 3:差し, 4:追込</td>
      </tr>
      <tr>
        <td><code>distance_type</code></td>
        <td>距離区分</td>
        <td>1:短, 2:マイル, 3:中, 4:長</td>
      </tr>
      <tr>
        <td><code>ground_type</code></td>
        <td>バ場種類</td>
        <td>1:芝, 2:ダート</td>
      </tr>
      <tr>
        <td><code>ground_condition</code></td>
        <td>バ場状態</td>
        <td>1:良, 2:稍重, 3:重, 4:不良</td>
      </tr>
    </tbody>
  </table>
  <div class="note">
    <strong>【重要ルール：原作データの例外対策】</strong><br>
    原作の <code>raw_formula</code> にのみ条件（<code>ground_condition</code> 等）が書かれている場合でも、判定ロジックを正しく通すためには<strong>必ず <code>filters</code> 配列内に構造化データとして格上げして記述</strong>してください。
  </div>

  <h2>3. timings フィールド（Step 2: 地点計算）</h2>
  <p>スキルの発動タイミングを定義します。プログラム側で <code>m</code> 地点に変換可能な「トークン」を使用してください。</p>
  <ul>
    <li><strong>固定地点系:</strong>
      <ul>
        <li><code>phase==2</code>: 終盤開始地点（ls_point）を参照。</li>
        <li><code>is_finalcorner==1</code>: 最終コーナー開始地点を参照。</li>
        <li><code>is_finalstraight==1</code>: 最終直線開始地点を参照。</li>
      </ul>
    </li>
    <li><strong>ランダム系（紫バッジ判定用）:</strong>
      <ul>
        <li><code>is_finalcorner_random==1</code>: 最終コーナー内のどこかで発動。</li>
        <li><code>phase2_random==1</code>: 終盤全体のどこかで発動。</li>
      </ul>
    </li>
    <li><strong>特殊:</strong>
      <ul>
        <li><code>[]</code> (空配列): 常時発動（判定区分：常時）。</li>
      </ul>
    </li>
  </ul>

  <h2>4. uncertainty_total と trigger</h2>
  <ul>
    <li><strong><code>trigger</code>:</strong> ユーザーへの参考情報として保持します（プログラムの足切りには使いません）。</li>
    <li><strong><code>uncertainty_total</code>:</strong> <code>trigger</code> の難易度を 0〜100 の数値に集約して記述します。
      <ul>
        <li><code>0</code>: 条件なし / 順位条件のみ（安定）</li>
        <li><code>30-50</code>: 「近くにウマ娘がいる」など展開に左右されるもの</li>
        <li><code>80-100</code>: 「掛かりなし」「特定の順位で競り合う」など非常に不安定なもの</li>
      </ul>
    </li>
  </ul>

  <h2>5. effect_value（Step 7: ソート用）</h2>
  <p>加速力の増加量を数値（整数）で記述します。</p>
  <ul>
    <li>例：<code>4000</code> (すごく), <code>3000</code> (通常), <code>2000</code> (ちょっと)</li>
    <li><strong>注:</strong> 複合スキルの場合、加速部分の数値のみを抽出して記載することを推奨します。</li>
  </ul>

  <h2>6. データ整合性のチェックフロー（運用ルール）</h2>
  <p>新しいスキルを追加する際は、以下の要件を満たしているか確認してください。</p>
  <ul>
    <li><strong>filters:</strong> <code>raw_formula</code> に書かれた条件がすべて <code>filters</code> 配列に移植されているか？</li>
    <li><strong>timings:</strong> 使用しているトークン名は <code>timingResolver.js</code> で定義されているものと一致しているか？</li>
    <li><strong>pattern_id:</strong> 同じスキル内で条件分岐がある場合、複数の <code>patterns</code> に分けているか？</li>
    <li><strong>ls_point計算:</strong> レース場データ（<code>courses.json</code>）の <code>ls_point</code> は 距離 × 2/3 で小数点以下を処理して格納されているか？</li>
  </ul>
</html>
