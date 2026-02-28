const SKILLS = [
  {
    "n": "怒涛の出陣",
    "e": "レース終盤で追い抜くと速度が上がり加速力がちょっと上がり持久力をわずかに回復する＜長距離＞",
    "dt": [
      4
    ],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "fixed",
      "fixed_point": "ls"
    },
    "segs": [
      {
        "type": "fixed",
        "fixed_point": "ls"
      }
    ],
    "raw": "distance_type==4&phase==2&change_order_onetime<0",
    "qty": 1000,
    "dur": 30000,
    "rar": 6,
    "rarj": "進化スキル",
    "rr": [
      "change_order_onetime"
    ],
    "rv": [],
    "unc": 2
  },
  {
    "n": "最大集中",
    "e": "スタート時に出遅れる時間が少なくなり加速力がわずかに上がる",
    "dt": [],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "always"
    },
    "segs": [
      {
        "type": "always"
      }
    ],
    "raw": "always==1",
    "qty": 2000,
    "dur": 30000,
    "rar": 6,
    "rarj": "進化スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "異次元の逃亡者",
    "e": "最終コーナーで先頭だと加速力が上がりわずかに前に出る＜作戦・逃げ＞",
    "dt": [],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "random",
      "subtype": "finalcorner_random"
    },
    "segs": [
      {
        "type": "random",
        "subtype": "finalcorner_random"
      }
    ],
    "raw": "running_style==1&is_finalcorner_random==1&order==1",
    "qty": 4000,
    "dur": 30000,
    "rar": 6,
    "rarj": "進化スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "天才的技巧",
    "e": "左右に移動するとき加速力が上がり速度が少し上がる＜作戦・先行＞",
    "dt": [],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "random",
      "subtype": "other"
    },
    "segs": [
      {
        "type": "random",
        "subtype": "other"
      },
      {
        "type": "random",
        "subtype": "other"
      }
    ],
    "raw": "running_style==2&is_move_lane==1@running_style==2&is_move_lane==2",
    "qty": 4000,
    "dur": 30000,
    "rar": 6,
    "rarj": "進化スキル",
    "rr": [
      "is_move_lane"
    ],
    "rv": [],
    "unc": 2
  },
  {
    "n": "帝王ステップ",
    "e": "レース中盤にしばらくの間コース取りがうまくなり速度と加速力が少し上がる＜中距離＞",
    "dt": [
      3
    ],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "random",
      "subtype": "phase1"
    },
    "segs": [
      {
        "type": "random",
        "subtype": "phase1"
      }
    ],
    "raw": "distance_type==3&phase_random==1",
    "qty": 3000,
    "dur": 40000,
    "rar": 6,
    "rarj": "進化スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "怪物的コーナリング",
    "e": "コーナーで加速力が上がり持久力をわずかに回復する",
    "dt": [],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "random",
      "subtype": "all_corner"
    },
    "segs": [
      {
        "type": "random",
        "subtype": "all_corner"
      }
    ],
    "raw": "all_corner_random==1",
    "qty": 4000,
    "dur": 30000,
    "rar": 6,
    "rarj": "進化スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "抜群の豪脚",
    "e": "レース終盤に後ろの方だと加速力がすごく上がる＜マイル＞",
    "dt": [
      2
    ],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "random",
      "subtype": "phase2"
    },
    "segs": [
      {
        "type": "random",
        "subtype": "phase2"
      }
    ],
    "raw": "distance_type==2&phase_random==2&order_rate>50",
    "qty": 5000,
    "dur": 30000,
    "rar": 6,
    "rarj": "進化スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "ぶっ差してやるぜ！",
    "e": "ラストスパートの最中なら前が塞がれた時加速力が上がりコース取りが少しうまくなり持久力をわずかに回復する",
    "dt": [],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "fixed",
      "fixed_point": "ls"
    },
    "segs": [
      {
        "type": "fixed",
        "fixed_point": "ls"
      }
    ],
    "raw": "infront_near_lane_time>=1&is_lastspurt==1&hp_per>=1",
    "qty": 4000,
    "dur": 30000,
    "rar": 6,
    "rarj": "進化スキル",
    "rr": [
      "infront_near_lane_time"
    ],
    "rv": [],
    "unc": 1
  },
  {
    "n": "真剣勝負デス！",
    "e": "レース終盤始めの方に前方にいると加速力が上がり、視野がわずかに広くなる＜作戦・先行＞",
    "dt": [],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "random",
      "subtype": "fh"
    },
    "segs": [
      {
        "type": "random",
        "subtype": "fh"
      }
    ],
    "raw": "running_style==2&phase_firsthalf_random==2&order_rate<=50",
    "qty": 4000,
    "dur": 18000,
    "rar": 6,
    "rarj": "進化スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "不退転の意思",
    "e": "レース終盤始めの方に中団以降にいると加速力が上がり、視野がわずかに広がる＜作戦・差し＞",
    "dt": [],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "random",
      "subtype": "fh"
    },
    "segs": [
      {
        "type": "random",
        "subtype": "fh"
      }
    ],
    "raw": "running_style==3&phase_firsthalf_random==2&order_rate>=40",
    "qty": 4000,
    "dur": 18000,
    "rar": 6,
    "rarj": "進化スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "勝利への咆哮",
    "e": "最終コーナー以降に追い抜こうとすると速度がすごく上がり加速力がちょっと上がる＜中距離＞",
    "dt": [
      3
    ],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "fixed",
      "fixed_point": "finalcorner"
    },
    "segs": [
      {
        "type": "fixed",
        "fixed_point": "finalcorner"
      }
    ],
    "raw": "distance_type==3&is_finalcorner==1&corner!=0&is_overtake==1",
    "qty": 1000,
    "dur": 30000,
    "rar": 6,
    "rarj": "進化スキル",
    "rr": [
      "is_overtake"
    ],
    "rv": [],
    "unc": 2
  },
  {
    "n": "豪勇無双",
    "e": "レース終盤に後ろの方だと加速力がすごく上がる＜マイル＞",
    "dt": [
      2
    ],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "random",
      "subtype": "phase2"
    },
    "segs": [
      {
        "type": "random",
        "subtype": "phase2"
      }
    ],
    "raw": "distance_type==2&phase_random==2&order_rate>50",
    "qty": 5000,
    "dur": 30000,
    "rar": 6,
    "rarj": "進化スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "渇望する怪物",
    "e": "レース終盤目前に先頭か先頭から4バ身以内につけると、レース終盤に加速力がすごく上がる＜先行・長距離＞",
    "dt": [
      4
    ],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "random",
      "subtype": "dist_rate_after",
      "rv": 60
    },
    "segs": [
      {
        "type": "random",
        "subtype": "dist_rate_after",
        "rv": 60
      }
    ],
    "raw": "distance_diff_top<=10&distance_rate>=60&phase==1&distance_type==4&running_style==2&phase==2",
    "qty": 5000,
    "dur": 12000,
    "rar": 6,
    "rarj": "進化スキル",
    "rr": [
      "distance_diff_top"
    ],
    "rv": [],
    "unc": 2
  },
  {
    "n": "上弦のソムリエール",
    "e": "コーナーで加速力が上がりわずかに前に出る",
    "dt": [],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "random",
      "subtype": "all_corner"
    },
    "segs": [
      {
        "type": "random",
        "subtype": "all_corner"
      }
    ],
    "raw": "all_corner_random==1",
    "qty": 4000,
    "dur": 30000,
    "rar": 6,
    "rarj": "進化スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "最前列は譲れない！",
    "e": "レース終盤にしばらくの間コース取りがうまくなり加速力が少し上がる＜ダート＞",
    "dt": [],
    "gt": [
      2
    ],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "random",
      "subtype": "phase2"
    },
    "segs": [
      {
        "type": "random",
        "subtype": "phase2"
      }
    ],
    "raw": "ground_type==2&phase_random==2",
    "qty": 3000,
    "dur": 40000,
    "rar": 6,
    "rarj": "進化スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "天空落とし",
    "e": "下り坂で加速力が上がる＜作戦・先行＞",
    "dt": [],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "slope_down"
    },
    "segs": [
      {
        "type": "slope_down"
      }
    ],
    "raw": "running_style==2&down_slope_random==1",
    "qty": 4000,
    "dur": 30000,
    "rar": 6,
    "rarj": "進化スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "モリガンの矛戟",
    "e": "レース終盤始めの方に前方にいると加速力が上がり、視野がわずかに広くなる＜作戦・先行＞",
    "dt": [],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "random",
      "subtype": "fh"
    },
    "segs": [
      {
        "type": "random",
        "subtype": "fh"
      }
    ],
    "raw": "running_style==2&phase_firsthalf_random==2&order_rate<=50",
    "qty": 4000,
    "dur": 18000,
    "rar": 6,
    "rarj": "進化スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "I copy!",
    "e": "ラストスパートの最中なら前が塞がれた時加速力が上がりコース取りが少しうまくなり持久力をわずかに回復する",
    "dt": [],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "fixed",
      "fixed_point": "ls"
    },
    "segs": [
      {
        "type": "fixed",
        "fixed_point": "ls"
      }
    ],
    "raw": "infront_near_lane_time>=1&is_lastspurt==1&hp_per>=1",
    "qty": 4000,
    "dur": 30000,
    "rar": 6,
    "rarj": "進化スキル",
    "rr": [
      "infront_near_lane_time"
    ],
    "rv": [],
    "unc": 1
  },
  {
    "n": "クロックアップ",
    "e": "スタート時に加速力がすごく上がる＜作戦・逃げ＞",
    "dt": [],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "always"
    },
    "segs": [
      {
        "type": "always"
      }
    ],
    "raw": "running_style==1&always==1",
    "qty": 5000,
    "dur": 12000,
    "rar": 6,
    "rarj": "進化スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "夢叶える決意を授けましょう",
    "e": "下り坂で加速力が上がる＜作戦・先行＞",
    "dt": [],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "slope_down"
    },
    "segs": [
      {
        "type": "slope_down"
      }
    ],
    "raw": "running_style==2&down_slope_random==1",
    "qty": 4000,
    "dur": 30000,
    "rar": 6,
    "rarj": "進化スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "下ごしらえ万全！",
    "e": "レース中盤でしばらくの間コース取りがうまくなり、加速力が少し上がり速度がわずかに上がる＜短距離＞",
    "dt": [
      1
    ],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "random",
      "subtype": "phase1"
    },
    "segs": [
      {
        "type": "random",
        "subtype": "phase1"
      }
    ],
    "raw": "distance_type==1&phase_random==1",
    "qty": 3000,
    "dur": 40000,
    "rar": 6,
    "rarj": "進化スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "憧れのシチーガール",
    "e": "ラストスパートの最中なら前が塞がれた時しばらくの間加速力が上がりコース取りが少しうまくなる",
    "dt": [],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "fixed",
      "fixed_point": "ls"
    },
    "segs": [
      {
        "type": "fixed",
        "fixed_point": "ls"
      }
    ],
    "raw": "infront_near_lane_time>=1&is_lastspurt==1&hp_per>=1",
    "qty": 4000,
    "dur": 40000,
    "rar": 6,
    "rarj": "進化スキル",
    "rr": [
      "infront_near_lane_time"
    ],
    "rv": [],
    "unc": 1
  },
  {
    "n": "雪国仕込みの直滑降",
    "e": "下り坂でしばらくの間加速力が少し上がる＜作戦・先行＞",
    "dt": [],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "slope_down"
    },
    "segs": [
      {
        "type": "slope_down"
      }
    ],
    "raw": "running_style==2&down_slope_random==1",
    "qty": 3000,
    "dur": 40000,
    "rar": 6,
    "rarj": "進化スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "決意のヒーロー",
    "e": "下り坂で加速力が少し上がりわずかに前に出る＜作戦・先行＞",
    "dt": [],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "slope_down"
    },
    "segs": [
      {
        "type": "slope_down"
      }
    ],
    "raw": "running_style==2&down_slope_random==1",
    "qty": 3000,
    "dur": 30000,
    "rar": 6,
    "rarj": "進化スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "華麗なサーブ",
    "e": "コーナーで速度が上がり加速力がわずかに上がる＜作戦・逃げ＞",
    "dt": [],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "random",
      "subtype": "all_corner"
    },
    "segs": [
      {
        "type": "random",
        "subtype": "all_corner"
      }
    ],
    "raw": "running_style==1&all_corner_random==1",
    "qty": 2000,
    "dur": 30000,
    "rar": 6,
    "rarj": "進化スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "大見得切り",
    "e": "ラストスパートの最中なら直線で加速力が上がり視野がわずかに広くなる＜作戦・追込＞",
    "dt": [],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "fixed",
      "fixed_point": "ls"
    },
    "segs": [
      {
        "type": "fixed",
        "fixed_point": "ls"
      }
    ],
    "raw": "running_style==4&is_lastspurt==1&corner==0",
    "qty": 4000,
    "dur": 9000,
    "rar": 6,
    "rarj": "進化スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "たゆまぬ努力",
    "e": "追い抜こうとするときしばらくの間加速力が少し上がり速度がわずかに上がる＜作戦・差し＞",
    "dt": [],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "random",
      "subtype": "other"
    },
    "segs": [
      {
        "type": "random",
        "subtype": "other"
      }
    ],
    "raw": "running_style==3&is_overtake==1&accumulatetime>=5",
    "qty": 3000,
    "dur": 40000,
    "rar": 6,
    "rarj": "進化スキル",
    "rr": [
      "is_overtake"
    ],
    "rv": [],
    "unc": 2
  },
  {
    "n": "#ビューティースプリント",
    "e": "レース終盤に加速力が上がり視野がわずかに広がる＜短距離＞",
    "dt": [
      1
    ],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "random",
      "subtype": "phase2"
    },
    "segs": [
      {
        "type": "random",
        "subtype": "phase2"
      }
    ],
    "raw": "distance_type==1&phase_random==2",
    "qty": 4000,
    "dur": 30000,
    "rar": 6,
    "rarj": "進化スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "ノンストッププリンセス",
    "e": "ラストスパートの最中なら前が塞がれた時加速力がすごく上がりコース取りが少しうまくなる",
    "dt": [],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "fixed",
      "fixed_point": "ls"
    },
    "segs": [
      {
        "type": "fixed",
        "fixed_point": "ls"
      }
    ],
    "raw": "infront_near_lane_time>=1&is_lastspurt==1&hp_per>=1",
    "qty": 5000,
    "dur": 30000,
    "rar": 6,
    "rarj": "進化スキル",
    "rr": [
      "infront_near_lane_time"
    ],
    "rv": [],
    "unc": 1
  },
  {
    "n": "暴れ龍",
    "e": "最終コーナーで外から追い抜くと速度が上がり加速力がわずかに上がる＜作戦・差し＞",
    "dt": [],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "fixed",
      "fixed_point": "finalcorner"
    },
    "segs": [
      {
        "type": "fixed",
        "fixed_point": "finalcorner"
      }
    ],
    "raw": "running_style==3&is_finalcorner==1&corner!=0&is_behind_in==1&change_order_onetime<0",
    "qty": 2000,
    "dur": 30000,
    "rar": 6,
    "rarj": "進化スキル",
    "rr": [
      "change_order_onetime",
      "is_behind_in"
    ],
    "rv": [],
    "unc": 4
  },
  {
    "n": "ランウェイの主役",
    "e": "レース終盤始めの方に中団以降にいると加速力が上がり視野がわずかに広がる＜作戦・差し＞",
    "dt": [],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "random",
      "subtype": "fh"
    },
    "segs": [
      {
        "type": "random",
        "subtype": "fh"
      }
    ],
    "raw": "running_style==3&phase_firsthalf_random==2&order_rate>=40",
    "qty": 4000,
    "dur": 18000,
    "rar": 6,
    "rarj": "進化スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "鮮やかな布陣",
    "e": "レース序盤に後ろにいると前の動きを鈍くし、自分の持久力をわずかに回復する＜マイル＞",
    "dt": [
      2
    ],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "random",
      "subtype": "phase0"
    },
    "segs": [
      {
        "type": "random",
        "subtype": "phase0"
      }
    ],
    "raw": "distance_type==2&phase_random==0&order_rate>50&accumulatetime>=3",
    "qty": -3000,
    "dur": 30000,
    "rar": 6,
    "rarj": "進化スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "バクシン的スプリント！",
    "e": "レース終盤に加速力が上がり速度がわずかに上がる＜短距離＞",
    "dt": [
      1
    ],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "random",
      "subtype": "phase2"
    },
    "segs": [
      {
        "type": "random",
        "subtype": "phase2"
      }
    ],
    "raw": "distance_type==1&phase_random==2",
    "qty": 4000,
    "dur": 30000,
    "rar": 6,
    "rarj": "進化スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "絶対的センター！",
    "e": "レース終盤に前方にいると加速力がすごく上がる＜ダート＞",
    "dt": [],
    "gt": [
      2
    ],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "random",
      "subtype": "phase2"
    },
    "segs": [
      {
        "type": "random",
        "subtype": "phase2"
      }
    ],
    "raw": "ground_type==2&phase_random==2&order_rate<=50",
    "qty": 5000,
    "dur": 30000,
    "rar": 6,
    "rarj": "進化スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "ノってこ！",
    "e": "レース終盤始めの方で加速力が上がり持久力をわずかに回復する＜先行/差し＞",
    "dt": [],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "random",
      "subtype": "fh"
    },
    "segs": [
      {
        "type": "random",
        "subtype": "fh"
      },
      {
        "type": "random",
        "subtype": "fh"
      }
    ],
    "raw": "running_style==3&phase_firsthalf_random==2@running_style==2&phase_firsthalf_random==2",
    "qty": 4000,
    "dur": 18000,
    "rar": 6,
    "rarj": "進化スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "駆り立てる想い",
    "e": "ラストスパートの最中なら直線で加速力が上がり視野がわずかに広くなる＜作戦・追込＞",
    "dt": [],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "fixed",
      "fixed_point": "ls"
    },
    "segs": [
      {
        "type": "fixed",
        "fixed_point": "ls"
      }
    ],
    "raw": "running_style==4&is_lastspurt==1&corner==0",
    "qty": 4000,
    "dur": 9000,
    "rar": 6,
    "rarj": "進化スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "起死回生の出力",
    "e": "レース終盤始めの方に中団以降にいるとしばらくの間加速力が上がる＜中距離＞",
    "dt": [
      3
    ],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "random",
      "subtype": "fh"
    },
    "segs": [
      {
        "type": "random",
        "subtype": "fh"
      }
    ],
    "raw": "distance_type==3&phase_firsthalf_random==2&order_rate>=40",
    "qty": 4000,
    "dur": 40000,
    "rar": 6,
    "rarj": "進化スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "大輪の決意",
    "e": "下り坂で加速力が上がる＜作戦・先行＞",
    "dt": [],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "slope_down"
    },
    "segs": [
      {
        "type": "slope_down"
      }
    ],
    "raw": "running_style==2&down_slope_random==1",
    "qty": 4000,
    "dur": 30000,
    "rar": 6,
    "rarj": "進化スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "がんばるもん！",
    "e": "追い抜こうとするときしばらくの間加速力が少し上がり速度がわずかに上がる＜作戦・差し＞",
    "dt": [],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "random",
      "subtype": "other"
    },
    "segs": [
      {
        "type": "random",
        "subtype": "other"
      }
    ],
    "raw": "running_style==3&is_overtake==1&accumulatetime>=5",
    "qty": 3000,
    "dur": 40000,
    "rar": 6,
    "rarj": "進化スキル",
    "rr": [
      "is_overtake"
    ],
    "rv": [],
    "unc": 2
  },
  {
    "n": "風紀の登龍門",
    "e": "最終コーナーで外から追い抜くと速度が上がり加速力がわずかに上がる＜作戦・差し＞",
    "dt": [],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "fixed",
      "fixed_point": "finalcorner"
    },
    "segs": [
      {
        "type": "fixed",
        "fixed_point": "finalcorner"
      }
    ],
    "raw": "running_style==3&is_finalcorner==1&corner!=0&is_behind_in==1&change_order_onetime<0",
    "qty": 2000,
    "dur": 30000,
    "rar": 6,
    "rarj": "進化スキル",
    "rr": [
      "change_order_onetime",
      "is_behind_in"
    ],
    "rv": [],
    "unc": 4
  },
  {
    "n": "押忍ッ！気合十分っス！",
    "e": "最終コーナーで後ろの方にいると速度が上がり加速力がわずかに上がる＜マイル＞",
    "dt": [
      2
    ],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "random",
      "subtype": "finalcorner_random"
    },
    "segs": [
      {
        "type": "random",
        "subtype": "finalcorner_random"
      }
    ],
    "raw": "distance_type==2&is_finalcorner_random==1&order_rate>=50",
    "qty": 2000,
    "dur": 18000,
    "rar": 6,
    "rarj": "進化スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "怒涛の超幸運パワー！",
    "e": "レース終盤で追い抜くとしばらくの間速度が上がり加速力がちょっと上がる＜長距離＞",
    "dt": [
      4
    ],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "fixed",
      "fixed_point": "ls"
    },
    "segs": [
      {
        "type": "fixed",
        "fixed_point": "ls"
      }
    ],
    "raw": "distance_type==4&phase==2&change_order_onetime<0",
    "qty": 1000,
    "dur": 40000,
    "rar": 6,
    "rarj": "進化スキル",
    "rr": [
      "change_order_onetime"
    ],
    "rv": [],
    "unc": 2
  },
  {
    "n": "弾む大地",
    "e": "ラストスパートの最中なら直線で加速力が上がり視野がわずかに広がる＜作戦・追込＞",
    "dt": [],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "fixed",
      "fixed_point": "ls"
    },
    "segs": [
      {
        "type": "fixed",
        "fixed_point": "ls"
      }
    ],
    "raw": "running_style==4&is_lastspurt==1&corner==0",
    "qty": 4000,
    "dur": 9000,
    "rar": 6,
    "rarj": "進化スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "ライバルがいるから！",
    "e": "レース終盤始めの方に前方にいると加速力が上がり、持久力をわずかに回復する＜作戦・先行＞",
    "dt": [],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "random",
      "subtype": "fh"
    },
    "segs": [
      {
        "type": "random",
        "subtype": "fh"
      }
    ],
    "raw": "running_style==2&phase_firsthalf_random==2&order_rate<=50",
    "qty": 4000,
    "dur": 18000,
    "rar": 6,
    "rarj": "進化スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "もっと冒険してみたい！",
    "e": "レース後半に中団にいるとしばらくの間速度が上がり、加速力がちょっと上がる＜作戦・差し＞",
    "dt": [],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "random",
      "subtype": "after50",
      "rv": 50
    },
    "segs": [
      {
        "type": "random",
        "subtype": "after50",
        "rv": 50
      }
    ],
    "raw": "running_style==3&distance_rate_after_random==50&order_rate>=30&order_rate<=80",
    "qty": 1000,
    "dur": 40000,
    "rar": 6,
    "rarj": "進化スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "起死回生の一歩",
    "e": "レース終盤始めの方に中団以降にいるとしばらくの間加速力が上がる＜中距離＞",
    "dt": [
      3
    ],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "random",
      "subtype": "fh"
    },
    "segs": [
      {
        "type": "random",
        "subtype": "fh"
      }
    ],
    "raw": "distance_type==3&phase_firsthalf_random==2&order_rate>=40",
    "qty": 4000,
    "dur": 40000,
    "rar": 6,
    "rarj": "進化スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "魅惑のシニカルガール",
    "e": "レース終盤以降に前が詰まるとしばらくの間加速力が上がる＜中距離＞",
    "dt": [
      3
    ],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "fixed",
      "fixed_point": "ls"
    },
    "segs": [
      {
        "type": "fixed",
        "fixed_point": "ls"
      }
    ],
    "raw": "distance_type==3&phase>=2&blocked_front_continuetime>=1",
    "qty": 4000,
    "dur": 40000,
    "rar": 6,
    "rarj": "進化スキル",
    "rr": [
      "blocked_front_continuetime"
    ],
    "rv": [],
    "unc": 2
  },
  {
    "n": "ノンストップエール",
    "e": "ラストスパートの最中なら前が塞がれた時加速力が上がりコース取りが少し上手くなり持久力をわずかに回復する",
    "dt": [],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "fixed",
      "fixed_point": "ls"
    },
    "segs": [
      {
        "type": "fixed",
        "fixed_point": "ls"
      }
    ],
    "raw": "infront_near_lane_time>=1&is_lastspurt==1&hp_per>=1",
    "qty": 4000,
    "dur": 30000,
    "rar": 6,
    "rarj": "進化スキル",
    "rr": [
      "infront_near_lane_time"
    ],
    "rv": [],
    "unc": 1
  },
  {
    "n": "電撃の撫で切り",
    "e": "レース終盤に後ろの方だとしばらくの間速度が上がり加速力がちょっと上がる＜短距離＞",
    "dt": [
      1
    ],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "random",
      "subtype": "phase2"
    },
    "segs": [
      {
        "type": "random",
        "subtype": "phase2"
      }
    ],
    "raw": "distance_type==1&phase_random==2&order_rate>50",
    "qty": 1000,
    "dur": 40000,
    "rar": 6,
    "rarj": "進化スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "えい！えい！むん！",
    "e": "レース終盤で追い抜くと速度が上がり加速力がちょっと上がり持久力をわずかに回復する＜長距離＞",
    "dt": [
      4
    ],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "fixed",
      "fixed_point": "ls"
    },
    "segs": [
      {
        "type": "fixed",
        "fixed_point": "ls"
      }
    ],
    "raw": "distance_type==4&phase==2&change_order_onetime<0",
    "qty": 1000,
    "dur": 30000,
    "rar": 6,
    "rarj": "進化スキル",
    "rr": [
      "change_order_onetime"
    ],
    "rv": [],
    "unc": 2
  },
  {
    "n": "ターボについてこーい！",
    "e": "スタート時に加速力がすごく上がる＜作戦・逃げ＞",
    "dt": [],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "always"
    },
    "segs": [
      {
        "type": "always"
      }
    ],
    "raw": "running_style==1&always==1",
    "qty": 5000,
    "dur": 12000,
    "rar": 6,
    "rarj": "進化スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "無我の境地",
    "e": "ラストスパートの最中なら中団以降にいると持久力をちょっと使って加速力が上がる＜差し・長距離＞",
    "dt": [
      4
    ],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "fixed",
      "fixed_point": "ls"
    },
    "segs": [
      {
        "type": "fixed",
        "fixed_point": "ls"
      }
    ],
    "raw": "distance_type==4&running_style==3&is_lastspurt==1&order_rate>=40",
    "qty": 4000,
    "dur": 15000,
    "rar": 6,
    "rarj": "進化スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "祭りだワッショイ！",
    "e": "スタート時に加速力がすごく上がる＜作戦・逃げ＞",
    "dt": [],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "always"
    },
    "segs": [
      {
        "type": "always"
      }
    ],
    "raw": "running_style==1&always==1",
    "qty": 5000,
    "dur": 12000,
    "rar": 6,
    "rarj": "進化スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "必勝の前口上！",
    "e": "スタート時に加速力がすごく上がる＜作戦・逃げ＞",
    "dt": [],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "always"
    },
    "segs": [
      {
        "type": "always"
      }
    ],
    "raw": "running_style==1&always==1",
    "qty": 5000,
    "dur": 12000,
    "rar": 6,
    "rarj": "進化スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "八重の向こう意気",
    "e": "最終コーナー以降に詰め寄られると速度がすごく上がり加速力がちょっと上がる＜中距離＞",
    "dt": [
      3
    ],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "fixed",
      "fixed_point": "finalcorner"
    },
    "segs": [
      {
        "type": "fixed",
        "fixed_point": "finalcorner"
      }
    ],
    "raw": "distance_type==3&is_finalcorner==1&overtake_target_time>=2",
    "qty": 1000,
    "dur": 30000,
    "rar": 6,
    "rarj": "進化スキル",
    "rr": [
      "overtake_target_time"
    ],
    "rv": [],
    "unc": 2
  },
  {
    "n": "必勝のピッチアップ",
    "e": "スタート時にしばらくの間加速力が上がる＜作戦・逃げ＞",
    "dt": [],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "always"
    },
    "segs": [
      {
        "type": "always"
      }
    ],
    "raw": "running_style==1&always==1",
    "qty": 4000,
    "dur": 40000,
    "rar": 6,
    "rarj": "進化スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "記憶に刻む足取り",
    "e": "レース終盤が迫ったとき前方にいると速度が上がり、加速力がわずかに上がる＜短距離＞",
    "dt": [
      1
    ],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "random",
      "subtype": "lh"
    },
    "segs": [
      {
        "type": "random",
        "subtype": "lh"
      }
    ],
    "raw": "distance_type==1&phase_laterhalf_random==1&order_rate<=50",
    "qty": 2000,
    "dur": 24000,
    "rar": 6,
    "rarj": "進化スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "常に最たる輝きを",
    "e": "レース終盤以降に後方で追い抜こうとすると加速力が上がり目の前のウマ娘をわずかに萎縮させる＜短距離/マイル＞",
    "dt": [
      1,
      2
    ],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "fixed",
      "fixed_point": "ls"
    },
    "segs": [
      {
        "type": "fixed",
        "fixed_point": "ls"
      },
      {
        "type": "fixed",
        "fixed_point": "ls"
      }
    ],
    "raw": "distance_type==1&phase>=2&order_rate>=50&is_overtake==1@distance_type==2&phase>=2&order_rate>=50&is_overtake==1",
    "qty": 4000,
    "dur": 20000,
    "rar": 6,
    "rarj": "進化スキル",
    "rr": [
      "is_overtake"
    ],
    "rv": [],
    "unc": 2
  },
  {
    "n": "質実剛健",
    "e": "ラストスパートの最中なら中団以降にいると持久力を少し使って加速力を上げる中山レース場なら持久力を使わずにわずかに回復する＜差し・長距離＞",
    "dt": [
      4
    ],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [
      10005
    ],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "fixed",
      "fixed_point": "ls"
    },
    "segs": [
      {
        "type": "fixed",
        "fixed_point": "ls"
      }
    ],
    "raw": "distance_type==4&running_style==3&is_lastspurt==1&order_rate>=40&track_id==10005",
    "qty": 4000,
    "dur": 15000,
    "rar": 6,
    "rarj": "進化スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "大どんでんがえし",
    "e": "レース終盤始めの方で中団以降にいるとしばらくの間加速力が上がる＜中距離＞",
    "dt": [
      3
    ],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "random",
      "subtype": "fh"
    },
    "segs": [
      {
        "type": "random",
        "subtype": "fh"
      }
    ],
    "raw": "distance_type==3&phase_firsthalf_random==2&order_rate>=40",
    "qty": 4000,
    "dur": 40000,
    "rar": 6,
    "rarj": "進化スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "闘魂入刀！",
    "e": "レース終盤突入時まで掛からずにいると終盤始めの方でしばらくの間加速力が上がる＜追込・中距離＞",
    "dt": [
      3
    ],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "random",
      "subtype": "dist_rate_after",
      "rv": 66
    },
    "segs": [
      {
        "type": "random",
        "subtype": "dist_rate_after",
        "rv": 66
      }
    ],
    "raw": "distance_rate>=66&temptation_count==0&running_style==4&distance_type==3&phase_firsthalf_random==2",
    "qty": 4000,
    "dur": 40000,
    "rar": 6,
    "rarj": "進化スキル",
    "rr": [
      "temptation_count"
    ],
    "rv": [],
    "unc": 2
  },
  {
    "n": "ヴェール揺らす春疾風",
    "e": "下り坂で速度が上がり加速力がわずかに上がる＜短距離/マイル＞",
    "dt": [
      1,
      2
    ],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "slope_down"
    },
    "segs": [
      {
        "type": "slope_down"
      },
      {
        "type": "slope_down"
      }
    ],
    "raw": "distance_type==1&down_slope_random==1@distance_type==2&down_slope_random==1",
    "qty": 2000,
    "dur": 24000,
    "rar": 6,
    "rarj": "進化スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "進め！世界マーベラス計画☆",
    "e": "ラストスパートの最中なら前が塞がれた時加速力が上がりコース取りが少しうまくなり、さらにゴールまで遠いとわずかに前に出る",
    "dt": [],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "fixed",
      "fixed_point": "ls"
    },
    "segs": [
      {
        "type": "fixed",
        "fixed_point": "ls"
      }
    ],
    "raw": "infront_near_lane_time>=1&is_lastspurt==1&hp_per>=1&remain_distance>=600",
    "qty": 4000,
    "dur": 30000,
    "rar": 6,
    "rarj": "進化スキル",
    "rr": [
      "infront_near_lane_time"
    ],
    "rv": [],
    "unc": 1
  },
  {
    "n": "ワンチャンまくったる！",
    "e": "最終コーナーで中団以降にいると加速力が上がる、さらに東京レース場なら速度が少し上がる＜中距離＞",
    "dt": [
      3
    ],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [
      10006
    ],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "random",
      "subtype": "finalcorner_random"
    },
    "segs": [
      {
        "type": "random",
        "subtype": "finalcorner_random"
      }
    ],
    "raw": "distance_type==3&is_finalcorner_random==1&order_rate>=40&track_id==10006",
    "qty": 4000,
    "dur": 18000,
    "rar": 6,
    "rarj": "進化スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "あたししか勝たん！",
    "e": "最終コーナーで中団だと速度が上がるさらに東京レース場の中距離レースなら加速力がわずかに上がる＜作戦・差し＞",
    "dt": [
      3
    ],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [
      10006
    ],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "random",
      "subtype": "finalcorner_random"
    },
    "segs": [
      {
        "type": "random",
        "subtype": "finalcorner_random"
      }
    ],
    "raw": "running_style==3&distance_type==3&is_finalcorner_random==1&order_rate>=30&order_rate<=80&track_id==10006",
    "qty": 2000,
    "dur": 24000,
    "rar": 6,
    "rarj": "進化スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "熱血進化ライディング！",
    "e": "レース終盤始めの方に中団以降にいると加速力が上がり、その後残り200m地点で速度がわずかに上がる＜作戦・差し＞",
    "dt": [],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "random",
      "subtype": "fh"
    },
    "segs": [
      {
        "type": "random",
        "subtype": "fh"
      }
    ],
    "raw": "running_style==3&phase_firsthalf_random==2&order_rate>=40",
    "qty": 4000,
    "dur": 18000,
    "rar": 6,
    "rarj": "進化スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "必殺！爆速スプリント！",
    "e": "レース終盤に加速力が上がりその後残り200m地点で速度がわずかに上がる＜短距離＞",
    "dt": [
      1
    ],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "random",
      "subtype": "phase2"
    },
    "segs": [
      {
        "type": "random",
        "subtype": "phase2"
      }
    ],
    "raw": "distance_type==1&phase_random==2",
    "qty": 4000,
    "dur": 30000,
    "rar": 6,
    "rarj": "進化スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "してやったり！",
    "e": "スタート時に加速力がすごく上がる＜作戦・逃げ＞",
    "dt": [],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "always"
    },
    "segs": [
      {
        "type": "always"
      }
    ],
    "raw": "running_style==1&always==1",
    "qty": 5000,
    "dur": 12000,
    "rar": 6,
    "rarj": "進化スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "蒼天を駆けるラーファガ",
    "e": "スタート時に加速力がすごく上がる＜中距離＞",
    "dt": [
      3
    ],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "always"
    },
    "segs": [
      {
        "type": "always"
      }
    ],
    "raw": "distance_type==3&always==1",
    "qty": 5000,
    "dur": 15000,
    "rar": 6,
    "rarj": "進化スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "押し寄せるジュテーム",
    "e": "ラストスパートの最中なら直線で加速力が上がる、その後最終直線で速度がわずかに上がる＜作戦・追込＞",
    "dt": [],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "fixed",
      "fixed_point": "ls"
    },
    "segs": [
      {
        "type": "fixed",
        "fixed_point": "ls"
      }
    ],
    "raw": "running_style==4&is_lastspurt==1&corner==0",
    "qty": 4000,
    "dur": 9000,
    "rar": 6,
    "rarj": "進化スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "蒼色革命",
    "e": "レース終盤始めの方に中団以降にいるとしばらくの間加速力が上がる＜中距離＞",
    "dt": [
      3
    ],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "random",
      "subtype": "fh"
    },
    "segs": [
      {
        "type": "random",
        "subtype": "fh"
      }
    ],
    "raw": "distance_type==3&phase_firsthalf_random==2&order_rate>=40",
    "qty": 4000,
    "dur": 40000,
    "rar": 6,
    "rarj": "進化スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "命の火花",
    "e": "レース終盤始めの方で前方にいると加速力が上がり、その後残り200m地点で速度がわずかに上がる＜作戦・先行＞",
    "dt": [],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "random",
      "subtype": "fh"
    },
    "segs": [
      {
        "type": "random",
        "subtype": "fh"
      }
    ],
    "raw": "running_style==2&phase_firsthalf_random==2&order_rate<=50",
    "qty": 4000,
    "dur": 18000,
    "rar": 6,
    "rarj": "進化スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "Service: Transit",
    "e": "レース終盤始めの方に中団以降にいるとしばらくの間加速力が上がる＜差し・中距離＞",
    "dt": [
      3
    ],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "random",
      "subtype": "fh"
    },
    "segs": [
      {
        "type": "random",
        "subtype": "fh"
      }
    ],
    "raw": "distance_type==3&running_style==3&phase_firsthalf_random==2&order_rate>=40",
    "qty": 4000,
    "dur": 40000,
    "rar": 6,
    "rarj": "進化スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "天賦の身ごなし",
    "e": "終盤始めの方に前の方にいると加速力が上がる、2400m～2500mのレースでスタミナが十分に高いと終盤始めの方早めにすごく上がる＜作戦・先行＞",
    "dt": [],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": 2400,
    "cd_le": 2500,
    "cd_eq": null,
    "tm": {
      "type": "random",
      "subtype": "fq"
    },
    "segs": [
      {
        "type": "random",
        "subtype": "fq"
      }
    ],
    "raw": "running_style==2&course_distance>=2400&course_distance<=2500&phase_firstquarter_random==2&order_rate<=50&base_stamina>=1000",
    "qty": 5000,
    "dur": 18000,
    "rar": 6,
    "rarj": "進化スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "爆走猛姫☆急転直下！！",
    "e": "下り坂で速度が上がり加速力がわずかに上がる＜マイル/中距離＞",
    "dt": [
      2,
      3
    ],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "slope_down"
    },
    "segs": [
      {
        "type": "slope_down"
      },
      {
        "type": "slope_down"
      }
    ],
    "raw": "distance_type==2&down_slope_random==1@distance_type==3&down_slope_random==1",
    "qty": 2000,
    "dur": 24000,
    "rar": 6,
    "rarj": "進化スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "心に灯す闘志",
    "e": "レース終盤始めの方で前方にいると加速力が上がる、その後最終直線で速度がわずかに上がる＜作戦・先行＞",
    "dt": [],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "random",
      "subtype": "fh"
    },
    "segs": [
      {
        "type": "random",
        "subtype": "fh"
      }
    ],
    "raw": "running_style==2&phase_firsthalf_random==2&order_rate<=50",
    "qty": 4000,
    "dur": 18000,
    "rar": 6,
    "rarj": "進化スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "ミリオンカード",
    "e": "レース終盤始めの方で中団以降にいると加速力が上がる、2200m～2400mのレースなら持久力を少し使い終盤始めの方早めにすごく上がる＜中距離＞",
    "dt": [
      3
    ],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": 2200,
    "cd_le": 2400,
    "cd_eq": null,
    "tm": {
      "type": "random",
      "subtype": "fq"
    },
    "segs": [
      {
        "type": "random",
        "subtype": "fq"
      }
    ],
    "raw": "distance_type==3&course_distance>=2200&course_distance<=2400&phase_firstquarter_random==2&order_rate>=40",
    "qty": 5000,
    "dur": 18000,
    "rar": 6,
    "rarj": "進化スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "偉大なる踏破",
    "e": "終盤が迫ったとき前の方にいると速度が少し上がり、加速力が少し上がる2400mのレースだと速度の効果量が増える＜先行・中距離＞",
    "dt": [
      3
    ],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": [
      2400
    ],
    "tm": {
      "type": "random",
      "subtype": "lh"
    },
    "segs": [
      {
        "type": "random",
        "subtype": "lh"
      }
    ],
    "raw": "distance_type==3&running_style==2&phase_laterhalf_random==1&order_rate<=50&course_distance==2400",
    "qty": 3000,
    "dur": 30000,
    "rar": 6,
    "rarj": "進化スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "万里飛び越えソイヤッ！",
    "e": "ラストスパートの最中なら直線で前の方だと加速力が上がる、その後最終直線でわずかに前に出る＜逃げ・長距離＞",
    "dt": [
      4
    ],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "fixed",
      "fixed_point": "ls"
    },
    "segs": [
      {
        "type": "fixed",
        "fixed_point": "ls"
      }
    ],
    "raw": "distance_type==4&running_style==1&is_lastspurt==1&corner==0&order<=3",
    "qty": 4000,
    "dur": 9000,
    "rar": 6,
    "rarj": "進化スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "大掃除上手",
    "e": "レース終盤始めの方に中団以降にいるとしばらくの間加速力が上がる＜差し・中距離＞",
    "dt": [
      3
    ],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "random",
      "subtype": "fh"
    },
    "segs": [
      {
        "type": "random",
        "subtype": "fh"
      }
    ],
    "raw": "distance_type==3&running_style==3&phase_firsthalf_random==2&order_rate>=40",
    "qty": 4000,
    "dur": 40000,
    "rar": 6,
    "rarj": "進化スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "天来のリトルシスター",
    "e": "下り坂で速度が上がり加速力がわずかに上がる＜マイル/中距離＞",
    "dt": [
      2,
      3
    ],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "slope_down"
    },
    "segs": [
      {
        "type": "slope_down"
      },
      {
        "type": "slope_down"
      }
    ],
    "raw": "distance_type==2&down_slope_random==1@distance_type==3&down_slope_random==1",
    "qty": 2000,
    "dur": 24000,
    "rar": 6,
    "rarj": "進化スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "ハイソ・メンタリティ！",
    "e": "レース後半に中団にいるとしばらくの間速度が上がり、加速力がちょっと上がる＜作戦・差し＞",
    "dt": [],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "random",
      "subtype": "after50",
      "rv": 50
    },
    "segs": [
      {
        "type": "random",
        "subtype": "after50",
        "rv": 50
      }
    ],
    "raw": "running_style==3&distance_rate_after_random==50&order_rate>=30&order_rate<=80",
    "qty": 1000,
    "dur": 40000,
    "rar": 6,
    "rarj": "進化スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "迫りくる宵闇",
    "e": "ラストスパートの最中なら直線で加速力が上がる、その後最終直線で速度がわずかに上がる＜作戦・追込＞",
    "dt": [],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "fixed",
      "fixed_point": "ls"
    },
    "segs": [
      {
        "type": "fixed",
        "fixed_point": "ls"
      }
    ],
    "raw": "running_style==4&is_lastspurt==1&corner==0",
    "qty": 4000,
    "dur": 9000,
    "rar": 6,
    "rarj": "進化スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "曲線に舞う深雪",
    "e": "コーナーで加速力が上がり速度がわずかに上がる",
    "dt": [],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "random",
      "subtype": "all_corner"
    },
    "segs": [
      {
        "type": "random",
        "subtype": "all_corner"
      }
    ],
    "raw": "all_corner_random==1",
    "qty": 4000,
    "dur": 30000,
    "rar": 6,
    "rarj": "進化スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "必殺・雷電キーック！",
    "e": "レース終盤に後ろの方だと速度が上がり、加速力がわずかに上がる＜短距離＞",
    "dt": [
      1
    ],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "random",
      "subtype": "phase2"
    },
    "segs": [
      {
        "type": "random",
        "subtype": "phase2"
      }
    ],
    "raw": "distance_type==1&phase_random==2&order_rate>50",
    "qty": 2000,
    "dur": 30000,
    "rar": 6,
    "rarj": "進化スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "赫焉",
    "e": "終盤以降の最終コーナーまたは中山レース場の終盤以降のコーナーで中団以降だと加速力が上がる、その後最終直線で速度がわずかに上がる＜追込・中距離＞",
    "dt": [
      3
    ],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [
      10005
    ],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "fixed",
      "fixed_point": "finalcorner"
    },
    "segs": [
      {
        "type": "fixed",
        "fixed_point": "finalcorner"
      },
      {
        "type": "fixed",
        "fixed_point": "phase2_corner"
      }
    ],
    "raw": "distance_type==3&track_id!=10005&running_style==4&phase>=2&is_finalcorner==1&corner!=0&order_rate>=40@distance_type==3&track_id==10005&running_style==4&phase>=2&corner!=0&order_rate>=40",
    "qty": 4000,
    "dur": 9000,
    "rar": 6,
    "rarj": "進化スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "情報強者",
    "e": "レース序盤にスキルを多く発動すると加速力が上がる、マイルか中距離レースの場合は効果が増える",
    "dt": [
      2,
      3
    ],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "random",
      "subtype": "other"
    },
    "segs": [
      {
        "type": "random",
        "subtype": "other"
      },
      {
        "type": "random",
        "subtype": "other"
      }
    ],
    "raw": "distance_type==2&activate_count_start>=3@distance_type==3&activate_count_start>=3",
    "qty": 5000,
    "dur": 30000,
    "rar": 6,
    "rarj": "進化スキル",
    "rr": [
      "activate_count_start"
    ],
    "rv": [],
    "unc": 2
  },
  {
    "n": "ぜーったい負けられない！",
    "e": "レース終盤始めの方で前方にいると加速力が上がり、その後残り200m地点で速度がわずかに上がる＜作戦・先行＞",
    "dt": [],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "random",
      "subtype": "fh"
    },
    "segs": [
      {
        "type": "random",
        "subtype": "fh"
      }
    ],
    "raw": "running_style==2&phase_firsthalf_random==2&order_rate<=50",
    "qty": 4000,
    "dur": 18000,
    "rar": 6,
    "rarj": "進化スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "理想へ向かう覚悟",
    "e": "レース終盤始めの方で前方にいると加速力が上がるその後残り300mを切っているとき速度がわずかに上がる＜作戦・先行＞",
    "dt": [],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "random",
      "subtype": "fh"
    },
    "segs": [
      {
        "type": "random",
        "subtype": "fh"
      }
    ],
    "raw": "running_style==2&phase_firsthalf_random==2&order_rate<=50",
    "qty": 4000,
    "dur": 18000,
    "rar": 6,
    "rarj": "進化スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "決意の根性娘",
    "e": "下り坂で加速力が少し上がるその後残り300mを切っているとき速度がわずかに上がる＜作戦・先行＞",
    "dt": [],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "slope_down"
    },
    "segs": [
      {
        "type": "slope_down"
      }
    ],
    "raw": "running_style==2&down_slope_random==1",
    "qty": 3000,
    "dur": 30000,
    "rar": 6,
    "rarj": "進化スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "トレンド先取り☆",
    "e": "スタート時に加速力がすごく上がる＜作戦・逃げ＞",
    "dt": [],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "always"
    },
    "segs": [
      {
        "type": "always"
      }
    ],
    "raw": "running_style==1&always==1",
    "qty": 5000,
    "dur": 12000,
    "rar": 6,
    "rarj": "進化スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "霹靂閃電",
    "e": "レース終盤始めに追い抜こうとするときまたはレース終盤始めの方で加速力が上がる＜差し・マイル＞",
    "dt": [
      2
    ],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "fixed",
      "fixed_point": "ls"
    },
    "segs": [
      {
        "type": "fixed",
        "fixed_point": "ls"
      },
      {
        "type": "random",
        "subtype": "fh"
      }
    ],
    "raw": "running_style==3&distance_type==2&phase>=2&is_overtake==1&distance_rate<=75@running_style==3&distance_type==2&phase_firsthalf_random==2",
    "qty": 4000,
    "dur": 20000,
    "rar": 6,
    "rarj": "進化スキル",
    "rr": [
      "is_overtake"
    ],
    "rv": [],
    "unc": 2
  },
  {
    "n": "神仙蝶変の術",
    "e": "レース終盤目前に先頭か先頭から6バ身以内につけると、レース終盤に加速力が上がる＜先行・長距離＞",
    "dt": [
      4
    ],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "random",
      "subtype": "dist_rate_after",
      "rv": 60
    },
    "segs": [
      {
        "type": "random",
        "subtype": "dist_rate_after",
        "rv": 60
      }
    ],
    "raw": "distance_diff_top<=15&distance_rate>=60&phase==1&distance_type==4&running_style==2&phase==2",
    "qty": 4000,
    "dur": 12000,
    "rar": 6,
    "rarj": "進化スキル",
    "rr": [
      "distance_diff_top"
    ],
    "rv": [],
    "unc": 2
  },
  {
    "n": "将の疾刃",
    "e": "終盤以降の最終コーナーで中団以前にいる時ゴールまで遠いと加速力が上がるその後最終盤始めの方にラストスパートで速度がわずかに上がる＜先行/差し＞",
    "dt": [],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "fixed",
      "fixed_point": "finalcorner"
    },
    "segs": [
      {
        "type": "fixed",
        "fixed_point": "finalcorner"
      },
      {
        "type": "fixed",
        "fixed_point": "finalcorner"
      }
    ],
    "raw": "running_style==2&phase>=2&is_finalcorner==1&corner!=0&remain_distance>=600&order_rate<=70@running_style==3&phase>=2&is_finalcorner==1&corner!=0&remain_distance>=600&order_rate<=70",
    "qty": 4000,
    "dur": 9000,
    "rar": 6,
    "rarj": "進化スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "Enjoy the Flight",
    "e": "レース終盤始めの方で前方にいると加速力が上がり、その後残り200m地点で速度がわずかに上がる＜マイル＞",
    "dt": [
      2
    ],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "random",
      "subtype": "fh"
    },
    "segs": [
      {
        "type": "random",
        "subtype": "fh"
      }
    ],
    "raw": "distance_type==2&phase_firsthalf_random==2&order_rate<=50",
    "qty": 4000,
    "dur": 18000,
    "rar": 6,
    "rarj": "進化スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "シルフィード・マギア",
    "e": "レース終盤始めの方で加速力が上がる2200mのレースなら持久力を少し使い終盤始めの方早めにすごく上がる＜作戦・追込＞",
    "dt": [],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": [
      2200
    ],
    "tm": {
      "type": "random",
      "subtype": "fq"
    },
    "segs": [
      {
        "type": "random",
        "subtype": "fq"
      }
    ],
    "raw": "course_distance==2200&running_style==4&phase_firstquarter_random==2",
    "qty": 5000,
    "dur": 12000,
    "rar": 6,
    "rarj": "進化スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "遮るものはない",
    "e": "レース終盤に加速力が上がる＜短距離/マイル＞",
    "dt": [
      1,
      2
    ],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "random",
      "subtype": "phase2"
    },
    "segs": [
      {
        "type": "random",
        "subtype": "phase2"
      },
      {
        "type": "random",
        "subtype": "phase2"
      }
    ],
    "raw": "distance_type==1&phase_random==2@distance_type==2&phase_random==2",
    "qty": 4000,
    "dur": 30000,
    "rar": 6,
    "rarj": "進化スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "やばしやばし！",
    "e": "レース終盤始めの方で中団以降にいると加速力が上がるその後残り300mを切っているとき速度がわずかに上がる＜中距離＞",
    "dt": [
      3
    ],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "random",
      "subtype": "fh"
    },
    "segs": [
      {
        "type": "random",
        "subtype": "fh"
      }
    ],
    "raw": "distance_type==3&phase_firsthalf_random==2&order_rate>=40",
    "qty": 4000,
    "dur": 18000,
    "rar": 6,
    "rarj": "進化スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "闘叫の鬼",
    "e": "東京レース場ならレース終盤始めの方にしばらくの間前に出て、加速力がちょっと上がる＜中距離＞",
    "dt": [
      3
    ],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [
      10006
    ],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "random",
      "subtype": "fh"
    },
    "segs": [
      {
        "type": "random",
        "subtype": "fh"
      }
    ],
    "raw": "distance_type==3&phase_firsthalf_random==2&track_id==10006",
    "qty": 1000,
    "dur": 40000,
    "rar": 6,
    "rarj": "進化スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "お待ちどおさま！",
    "e": "レース終盤以降に後方で追い抜こうとすると加速力が上がる、その後残り200mを切っているとき速度がわずかに上がる＜短距離/マイル＞",
    "dt": [
      1,
      2
    ],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "fixed",
      "fixed_point": "ls"
    },
    "segs": [
      {
        "type": "fixed",
        "fixed_point": "ls"
      },
      {
        "type": "fixed",
        "fixed_point": "ls"
      }
    ],
    "raw": "distance_type==1&phase>=2&order_rate>=50&is_overtake==1@distance_type==2&phase>=2&order_rate>=50&is_overtake==1",
    "qty": 4000,
    "dur": 20000,
    "rar": 6,
    "rarj": "進化スキル",
    "rr": [
      "is_overtake"
    ],
    "rv": [],
    "unc": 2
  },
  {
    "n": "耕せ！開墾スプリント",
    "e": "レース終盤に加速力が上がるその後残り200mを切っているとき速度がわずかに上がる＜短距離＞",
    "dt": [
      1
    ],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "random",
      "subtype": "phase2"
    },
    "segs": [
      {
        "type": "random",
        "subtype": "phase2"
      }
    ],
    "raw": "distance_type==1&phase_random==2",
    "qty": 4000,
    "dur": 30000,
    "rar": 6,
    "rarj": "進化スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "曲線のグランシェフ",
    "e": "コーナーで加速力が上がるその後残り200mを切っているとき速度がわずかに上がる＜短距離/マイル＞",
    "dt": [
      1,
      2
    ],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "random",
      "subtype": "all_corner"
    },
    "segs": [
      {
        "type": "random",
        "subtype": "all_corner"
      },
      {
        "type": "random",
        "subtype": "all_corner"
      }
    ],
    "raw": "distance_type==1&all_corner_random==1@distance_type==2&all_corner_random==1",
    "qty": 4000,
    "dur": 30000,
    "rar": 6,
    "rarj": "進化スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "山頂でイタダキマス",
    "e": "レース後半の上り坂で加速力が上がる＜作戦・先行＞",
    "dt": [],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "slope_up_later_half"
    },
    "segs": [
      {
        "type": "slope_up_later_half"
      }
    ],
    "raw": "up_slope_random_later_half==1&running_style==2",
    "qty": 4000,
    "dur": 30000,
    "rar": 6,
    "rarj": "進化スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "閃光一走！",
    "e": "スタート時に加速力がちょっと上がるその後直線で前に出る＜逃げ・短距離＞",
    "dt": [
      1
    ],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "always"
    },
    "segs": [
      {
        "type": "always"
      }
    ],
    "raw": "distance_type==1&running_style==1&always==1",
    "qty": 1000,
    "dur": 12000,
    "rar": 6,
    "rarj": "進化スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "突風一駆！",
    "e": "スタート時に加速力がちょっと上がるその後直線で前に出る＜逃げ・短距離＞",
    "dt": [
      1
    ],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "always"
    },
    "segs": [
      {
        "type": "always"
      }
    ],
    "raw": "distance_type==1&running_style==1&always==1",
    "qty": 1000,
    "dur": 12000,
    "rar": 6,
    "rarj": "進化スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "勝ちたいんだもん！",
    "e": "レース終盤にコース取りがすごくうまくなり加速力が少し上がる",
    "dt": [],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "random",
      "subtype": "phase2"
    },
    "segs": [
      {
        "type": "random",
        "subtype": "phase2"
      }
    ],
    "raw": "phase_random==2",
    "qty": 3000,
    "dur": 30000,
    "rar": 6,
    "rarj": "進化スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "突き進め北の海",
    "e": "レース終盤始めの方で加速力が上がる、1800m以上のレースなら終盤始めの方早めに加速力が上がる＜先行・ダート＞",
    "dt": [],
    "gt": [
      2
    ],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": 1800,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "random",
      "subtype": "fq"
    },
    "segs": [
      {
        "type": "random",
        "subtype": "fq"
      }
    ],
    "raw": "ground_type==2&running_style==2&phase_firstquarter_random==2&course_distance>=1800",
    "qty": 4000,
    "dur": 18000,
    "rar": 6,
    "rarj": "進化スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "――お退きなさい",
    "e": "2000m以上のレースで、終盤始めの早めに前が塞がれた時または終盤始めの方早めに加速力が上がりコース取りが少しうまくなる＜作戦・先行＞",
    "dt": [],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": 2000,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "random",
      "subtype": "fq"
    },
    "segs": [
      {
        "type": "random",
        "subtype": "other"
      },
      {
        "type": "random",
        "subtype": "fq"
      }
    ],
    "raw": "running_style==2&course_distance>=2000&infront_near_lane_time>=1&phase_firstquarter==2@running_style==2&course_distance>=2000&phase_firstquarter_random==2",
    "qty": 4000,
    "dur": 30000,
    "rar": 6,
    "rarj": "進化スキル",
    "rr": [
      "infront_near_lane_time"
    ],
    "rv": [],
    "unc": 1
  },
  {
    "n": "フィナーレの先頭へ",
    "e": "レース終盤始めの方に中団以降にいると加速力が上がり、その後残り200m地点で速度がわずかに上がる＜作戦・差し＞",
    "dt": [],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "random",
      "subtype": "fh"
    },
    "segs": [
      {
        "type": "random",
        "subtype": "fh"
      }
    ],
    "raw": "running_style==3&phase_firsthalf_random==2&order_rate>=40",
    "qty": 4000,
    "dur": 18000,
    "rar": 6,
    "rarj": "進化スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "オリファントの轟雷",
    "e": "レース終盤以降に追い抜こうとすると加速力が上がるスキル発動時、最終コーナーにいるとすごく上がる＜短距離/マイル＞",
    "dt": [
      1,
      2
    ],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "fixed",
      "fixed_point": "finalcorner"
    },
    "segs": [
      {
        "type": "fixed",
        "fixed_point": "finalcorner"
      },
      {
        "type": "fixed",
        "fixed_point": "finalcorner"
      }
    ],
    "raw": "distance_type==1&phase>=2&is_overtake==1&is_finalcorner==1&corner!=0@distance_type==2&phase>=2&is_overtake==1&is_finalcorner==1&corner!=0",
    "qty": 5000,
    "dur": 20000,
    "rar": 6,
    "rarj": "進化スキル",
    "rr": [
      "is_overtake"
    ],
    "rv": [],
    "unc": 2
  },
  {
    "n": "お先に☆テールウィンド",
    "e": "ラストスパートの最中なら直線で前の方だと加速力が上がる、先頭だと持久力を少し使って効果時間が2倍になる＜逃げ・長距離＞",
    "dt": [
      4
    ],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "fixed",
      "fixed_point": "ls"
    },
    "segs": [
      {
        "type": "fixed",
        "fixed_point": "ls"
      }
    ],
    "raw": "distance_type==4&running_style==1&is_lastspurt==1&corner==0&order==1",
    "qty": 4000,
    "dur": 18000,
    "rar": 6,
    "rarj": "進化スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "ミストラルに乗って",
    "e": "終盤の直線で加速力が上がり速度がわずかに上がる、東京レース場なら終盤始めの方の直線で加速力が上がり速度がわずかに上がる＜短距離/マイル＞",
    "dt": [
      1,
      2
    ],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [
      10006
    ],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "random",
      "subtype": "fh_straight"
    },
    "segs": [
      {
        "type": "random",
        "subtype": "fh_straight"
      },
      {
        "type": "random",
        "subtype": "fh_straight"
      }
    ],
    "raw": "phase_first_half_straight_random==2&track_id==10006&distance_type==1@phase_first_half_straight_random==2&track_id==10006&distance_type==2",
    "qty": 4000,
    "dur": 30000,
    "rar": 6,
    "rarj": "進化スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "モンスターマシン",
    "e": "レース終盤目前に先頭か先頭から4バ身以内につけると、レース終盤に加速力が上がる、その後最終直線で速度がわずかに上がる＜先行・長距離＞",
    "dt": [
      4
    ],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "random",
      "subtype": "dist_rate_after",
      "rv": 60
    },
    "segs": [
      {
        "type": "random",
        "subtype": "dist_rate_after",
        "rv": 60
      }
    ],
    "raw": "distance_diff_top<=10&distance_rate>=60&phase==1&distance_type==4&running_style==2&phase==2",
    "qty": 4000,
    "dur": 12000,
    "rar": 6,
    "rarj": "進化スキル",
    "rr": [
      "distance_diff_top"
    ],
    "rv": [],
    "unc": 2
  },
  {
    "n": "シミュレートグラス・オン",
    "e": "レース終盤始めの方早めに持久力を少し使って加速力がものすごく上がる＜先行・長距離＞",
    "dt": [
      4
    ],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "random",
      "subtype": "fq"
    },
    "segs": [
      {
        "type": "random",
        "subtype": "fq"
      }
    ],
    "raw": "running_style==2&distance_type==4&phase_firstquarter_random==2",
    "qty": 6000,
    "dur": 12000,
    "rar": 6,
    "rarj": "進化スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "さァさ、お立ち合い！",
    "e": "レース終盤始めの方早めに加速力が上がる、スキル発動時中団以降にいるとすごく上がる＜追込・長距離＞",
    "dt": [
      4
    ],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "random",
      "subtype": "fq"
    },
    "segs": [
      {
        "type": "random",
        "subtype": "fq"
      }
    ],
    "raw": "running_style==4&distance_type==4&phase_firstquarter_random==2&order_rate>=40",
    "qty": 5000,
    "dur": 12000,
    "rar": 6,
    "rarj": "進化スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "伏竜は目覚めて",
    "e": "終盤以降の最終コーナーで3番手以内にいると加速力が上がり前に出る＜逃げ・中距離＞",
    "dt": [
      3
    ],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "fixed",
      "fixed_point": "finalcorner"
    },
    "segs": [
      {
        "type": "fixed",
        "fixed_point": "finalcorner"
      }
    ],
    "raw": "distance_type==3&running_style==1&phase>=2&is_finalcorner==1&corner!=0&order<=3",
    "qty": 4000,
    "dur": 9000,
    "rar": 6,
    "rarj": "進化スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "辻映りの妙技",
    "e": "スタート時に加速力がわずかに上がる出遅れていない場合その後レース中盤に前方にいるとしばらくの間速度が上がる＜逃げ・短距離＞",
    "dt": [
      1
    ],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "always"
    },
    "segs": [
      {
        "type": "always"
      }
    ],
    "raw": "running_style==1&distance_type==1&always==1",
    "qty": 2000,
    "dur": 30000,
    "rar": 6,
    "rarj": "進化スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "覚えていてくださいね？",
    "e": "レース終盤始めの方早めに前方にいると加速力が上がる＜逃げ・短距離＞",
    "dt": [
      1
    ],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "random",
      "subtype": "fq"
    },
    "segs": [
      {
        "type": "random",
        "subtype": "fq"
      }
    ],
    "raw": "running_style==1&distance_type==1&phase_firstquarter_random==2&order_rate<=50",
    "qty": 4000,
    "dur": 18000,
    "rar": 6,
    "rarj": "進化スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "夢の先駆者",
    "e": "スタート時に加速力が上がるその後レース最終盤始めの方でラストスパートの最中ならわずかに前に出る＜作戦・逃げ＞",
    "dt": [],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "always"
    },
    "segs": [
      {
        "type": "always"
      }
    ],
    "raw": "running_style==1&always==1",
    "qty": 4000,
    "dur": 12000,
    "rar": 6,
    "rarj": "進化スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "幾星霜が導く一手",
    "e": "終盤以降の最終コーナーで中団以前にいる時ゴールまで遠いと加速力が上がるその後最終直線でわずかに前に出る＜先行/差し＞",
    "dt": [],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "fixed",
      "fixed_point": "finalcorner"
    },
    "segs": [
      {
        "type": "fixed",
        "fixed_point": "finalcorner"
      },
      {
        "type": "fixed",
        "fixed_point": "finalcorner"
      }
    ],
    "raw": "running_style==2&phase>=2&is_finalcorner==1&corner!=0&remain_distance>=600&order_rate<=70@running_style==3&phase>=2&is_finalcorner==1&corner!=0&remain_distance>=600&order_rate<=70",
    "qty": 4000,
    "dur": 9000,
    "rar": 6,
    "rarj": "進化スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "下弦の雪月花",
    "e": "最終コーナーで加速力が上がる芝のレースならしばらくの間加速力が上がる＜マイル＞",
    "dt": [
      2
    ],
    "gt": [
      1
    ],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "random",
      "subtype": "finalcorner_random"
    },
    "segs": [
      {
        "type": "random",
        "subtype": "finalcorner_random"
      }
    ],
    "raw": "ground_type==1&distance_type==2&is_finalcorner_random==1",
    "qty": 4000,
    "dur": 40000,
    "rar": 6,
    "rarj": "進化スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "我が意、即ち天の理なり",
    "e": "2000m以上のレースならラストスパートの最中に加速力が上がる＜追込・芝＞",
    "dt": [],
    "gt": [
      1
    ],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": 2000,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "fixed",
      "fixed_point": "ls"
    },
    "segs": [
      {
        "type": "fixed",
        "fixed_point": "ls"
      }
    ],
    "raw": "running_style==4&course_distance>=2000&is_lastspurt==1&ground_type==1",
    "qty": 4000,
    "dur": 9000,
    "rar": 6,
    "rarj": "進化スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "万哩へ響け大歓声",
    "e": "終盤始めの方で中団以降にいると持久力を少し使って加速力が上がる、マイルレースだと終盤始めの方早めに持久力を少し使って加速力がすごく上がる＜芝＞",
    "dt": [
      2
    ],
    "gt": [
      1
    ],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "random",
      "subtype": "fq"
    },
    "segs": [
      {
        "type": "random",
        "subtype": "fq"
      }
    ],
    "raw": "distance_type==2&phase_firstquarter_random==2&order_rate>=40&ground_type==1",
    "qty": 5000,
    "dur": 18000,
    "rar": 6,
    "rarj": "進化スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "韋駄天ノ襲脚",
    "e": "ラストスパートの最中なら直線で加速力が上がる、その後最終コーナーに入るとわずかに前に出る＜追込・長距離＞",
    "dt": [
      4
    ],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "fixed",
      "fixed_point": "ls"
    },
    "segs": [
      {
        "type": "fixed",
        "fixed_point": "ls"
      }
    ],
    "raw": "running_style==4&is_lastspurt==1&corner==0&distance_type==4",
    "qty": 4000,
    "dur": 9000,
    "rar": 6,
    "rarj": "進化スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "Beat the Stars",
    "e": "レース終盤始めの方早めに中団にいると前に出る、さらに「稍重」「重」「不良」のバ場状態なら加速力がちょっと上がる＜中距離＞",
    "dt": [
      3
    ],
    "gt": [],
    "gc": [
      2,
      3,
      4
    ],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "random",
      "subtype": "fq"
    },
    "segs": [
      {
        "type": "random",
        "subtype": "other"
      },
      {
        "type": "random",
        "subtype": "other"
      },
      {
        "type": "random",
        "subtype": "fq"
      }
    ],
    "raw": "ground_condition==2@ground_condition==3@ground_condition==4&distance_type==3&phase_firstquarter_random==2&order_rate>=30&order_rate<=80",
    "qty": 1000,
    "dur": 30000,
    "rar": 6,
    "rarj": "進化スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "猛き獣は太陽に吼える",
    "e": "3200m以上のレースならレース終盤に加速力が上がる、その後最終直線で速度がわずかに上がる＜先行・長距離＞",
    "dt": [
      4
    ],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": 3200,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "fixed",
      "fixed_point": "ls"
    },
    "segs": [
      {
        "type": "fixed",
        "fixed_point": "ls"
      }
    ],
    "raw": "distance_type==4&running_style==2&phase==2&course_distance>=3200",
    "qty": 4000,
    "dur": 12000,
    "rar": 6,
    "rarj": "進化スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "立ち位置ゼロ番！",
    "e": "スタート時に出遅れる時間が少なくなり加速力がわずかに上がる",
    "dt": [],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "always"
    },
    "segs": [
      {
        "type": "always"
      }
    ],
    "raw": "always==1",
    "qty": 2000,
    "dur": 30000,
    "rar": 6,
    "rarj": "進化スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "『お姉ちゃん、だもの』",
    "e": "レース序盤にスキルを発動すると加速力が上がる、マイルレースならすごく上がる",
    "dt": [
      2
    ],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "random",
      "subtype": "other"
    },
    "segs": [
      {
        "type": "random",
        "subtype": "other"
      }
    ],
    "raw": "distance_type==2&activate_count_start>=1",
    "qty": 5000,
    "dur": 30000,
    "rar": 6,
    "rarj": "進化スキル",
    "rr": [
      "activate_count_start"
    ],
    "rv": [],
    "unc": 2
  },
  {
    "n": "盛り上げ上手",
    "e": "レース終盤始めの方早めに中団以降にいると加速力がわずかに上がり少し前に出る＜差し・中距離＞",
    "dt": [
      3
    ],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "random",
      "subtype": "fq"
    },
    "segs": [
      {
        "type": "random",
        "subtype": "fq"
      }
    ],
    "raw": "distance_type==3&running_style==3&phase_firstquarter_random==2&order_rate>=40",
    "qty": 2000,
    "dur": 18000,
    "rar": 6,
    "rarj": "進化スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "栄華の歩み、誰ぞ遮る",
    "e": "レース終盤が迫ったとき速度と加速力が少し上がる＜先行・中距離＞",
    "dt": [
      3
    ],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "random",
      "subtype": "lh"
    },
    "segs": [
      {
        "type": "random",
        "subtype": "lh"
      }
    ],
    "raw": "distance_type==3&running_style==2&phase_laterhalf_random==1",
    "qty": 3000,
    "dur": 30000,
    "rar": 6,
    "rarj": "進化スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "創世の一頁",
    "e": "2000m～2500mのレースで、終盤始めの早めに追い抜こうとするときまたは終盤始めの方早めに加速力が上がる＜作戦・先行＞",
    "dt": [],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": 2000,
    "cd_le": 2500,
    "cd_eq": null,
    "tm": {
      "type": "random",
      "subtype": "fq"
    },
    "segs": [
      {
        "type": "random",
        "subtype": "other"
      },
      {
        "type": "random",
        "subtype": "fq"
      }
    ],
    "raw": "running_style==2&course_distance>=2000&course_distance<=2500&is_overtake==1&phase_firstquarter==2@running_style==2&course_distance>=2000&course_distance<=2500&phase_firstquarter_random==2",
    "qty": 4000,
    "dur": 12000,
    "rar": 6,
    "rarj": "進化スキル",
    "rr": [
      "is_overtake"
    ],
    "rv": [],
    "unc": 2
  },
  {
    "n": "誓いの一振り",
    "e": "レース終盤始めの方で加速力が上がり少し前に出る＜追込・中距離＞",
    "dt": [
      3
    ],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "random",
      "subtype": "fh"
    },
    "segs": [
      {
        "type": "random",
        "subtype": "fh"
      }
    ],
    "raw": "distance_type==3&running_style==4&phase_firsthalf_random==2",
    "qty": 4000,
    "dur": 12000,
    "rar": 6,
    "rarj": "進化スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "一番眺めのいい場所へ！",
    "e": "スタート時に加速力がすごく上がる＜中距離＞",
    "dt": [
      3
    ],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "always"
    },
    "segs": [
      {
        "type": "always"
      }
    ],
    "raw": "distance_type==3&always==1",
    "qty": 5000,
    "dur": 15000,
    "rar": 6,
    "rarj": "進化スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "ティアラ・ダイブ！",
    "e": "下り坂で加速力が上がる＜作戦・先行＞",
    "dt": [],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "slope_down"
    },
    "segs": [
      {
        "type": "slope_down"
      }
    ],
    "raw": "running_style==2&down_slope_random==1",
    "qty": 4000,
    "dur": 30000,
    "rar": 6,
    "rarj": "進化スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "ぜーったい譲って♡",
    "e": "終盤始めの方で前方にいると加速力がすごく上がる、2200mのレースなら持久力を少し使い終盤始めの方早めにすごく上がる＜先行・中距離＞",
    "dt": [
      3
    ],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": [
      2200
    ],
    "tm": {
      "type": "random",
      "subtype": "fq"
    },
    "segs": [
      {
        "type": "random",
        "subtype": "fq"
      }
    ],
    "raw": "running_style==2&distance_type==3&order_rate<=50&phase_firstquarter_random==2&course_distance==2200",
    "qty": 5000,
    "dur": 18000,
    "rar": 6,
    "rarj": "進化スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "いつもの僕じゃないから！",
    "e": "ラストスパートの最中なら直線で加速力がすごく上がり、わずかに前に出る＜先行・長距離＞",
    "dt": [
      4
    ],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "fixed",
      "fixed_point": "ls"
    },
    "segs": [
      {
        "type": "fixed",
        "fixed_point": "ls"
      }
    ],
    "raw": "distance_type==4&running_style==2&is_lastspurt==1&corner==0",
    "qty": 5000,
    "dur": 9000,
    "rar": 6,
    "rarj": "進化スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "ノクス・ルミナ",
    "e": "終盤始めの方早めに加速力が少し上がるさらに2000mのレースなら持久力を少し使って少し前に出る＜追込・中距離＞",
    "dt": [
      3
    ],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": [
      2000
    ],
    "tm": {
      "type": "random",
      "subtype": "fq"
    },
    "segs": [
      {
        "type": "random",
        "subtype": "fq"
      }
    ],
    "raw": "distance_type==3&running_style==4&phase_firstquarter_random==2&course_distance==2000",
    "qty": 3000,
    "dur": 12000,
    "rar": 6,
    "rarj": "進化スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "まさかここから大逆転！？",
    "e": "レース終盤始めの方早めに中団以降にいると加速力が少し上がる、さらにスキル発動時下り坂にいて余力十分ならすごく前に出る＜差し・中距離＞",
    "dt": [
      3
    ],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "fixed",
      "fixed_point": "ls"
    },
    "segs": [
      {
        "type": "fixed",
        "fixed_point": "ls"
      }
    ],
    "raw": "lastspurt==2&running_style==3&distance_type==3&phase_firstquarter_random==2&order_rate>=40&slope==2",
    "qty": 3000,
    "dur": 18000,
    "rar": 6,
    "rarj": "進化スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "ベッコベコに凹ます！",
    "e": "レース終盤始めの方で前方にいると加速力が上がる、1800m以下のレースなら終盤始めの方早めに加速力が上がる＜ダート＞",
    "dt": [],
    "gt": [
      2
    ],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": 1800,
    "cd_eq": null,
    "tm": {
      "type": "random",
      "subtype": "fq"
    },
    "segs": [
      {
        "type": "random",
        "subtype": "fq"
      }
    ],
    "raw": "order_rate<=50&ground_type==2&phase_firstquarter_random==2&course_distance<=1800",
    "qty": 4000,
    "dur": 18000,
    "rar": 6,
    "rarj": "進化スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "満たせ☆ぱんぷきんパワー！",
    "e": "レース終盤始めの方で前方にいると加速力が上がる、短距離かマイルレースならすごく上がる＜作戦・先行＞",
    "dt": [
      1,
      2
    ],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "random",
      "subtype": "fh"
    },
    "segs": [
      {
        "type": "random",
        "subtype": "fh"
      },
      {
        "type": "random",
        "subtype": "fh"
      }
    ],
    "raw": "running_style==2&distance_type==1&phase_firsthalf_random==2&order_rate<=50@running_style==2&distance_type==2&phase_firsthalf_random==2&order_rate<=50",
    "qty": 5000,
    "dur": 18000,
    "rar": 6,
    "rarj": "進化スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "ここ、カマしどきっしょ！",
    "e": "2000m以上のレースなら終盤以降の最終コーナーで加速力がすごく上がる長距離レースでは効果が変わりしばらくの間少し前に出る＜先行/差し＞",
    "dt": [],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": 2000,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "fixed",
      "fixed_point": "finalcorner"
    },
    "segs": [
      {
        "type": "fixed",
        "fixed_point": "finalcorner"
      },
      {
        "type": "fixed",
        "fixed_point": "finalcorner"
      }
    ],
    "raw": "running_style==2&phase>=2&is_finalcorner==1&corner!=0&course_distance>=2000&distance_type!=4@running_style==3&phase>=2&is_finalcorner==1&corner!=0&course_distance>=2000&distance_type!=4",
    "qty": 5000,
    "dur": 9000,
    "rar": 6,
    "rarj": "進化スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "Ignite this Stage",
    "e": "レース終盤始めの方に前に出るさらに中距離レースなら加速力がわずかに上がる＜マイル/中距離＞",
    "dt": [
      3
    ],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "random",
      "subtype": "fh"
    },
    "segs": [
      {
        "type": "random",
        "subtype": "fh"
      }
    ],
    "raw": "distance_type==3&phase_firsthalf_random==2",
    "qty": 2000,
    "dur": 24000,
    "rar": 6,
    "rarj": "進化スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "一番風呂いただきます！",
    "e": "スタート時に加速力が上がるその後レース中盤に速度がわずかに上がる＜作戦・逃げ＞",
    "dt": [],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "always"
    },
    "segs": [
      {
        "type": "always"
      }
    ],
    "raw": "running_style==1&always==1",
    "qty": 4000,
    "dur": 12000,
    "rar": 6,
    "rarj": "進化スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "勝ち筋ドミネーション",
    "e": "レース序盤にスキルを多く発動すると加速力が上がる、出遅れていない場合その後ラストスパートの最中なら加速力がちょっと上がる＜マイル/中距離＞",
    "dt": [
      2,
      3
    ],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "random",
      "subtype": "other"
    },
    "segs": [
      {
        "type": "random",
        "subtype": "other"
      },
      {
        "type": "random",
        "subtype": "other"
      }
    ],
    "raw": "activate_count_start>=3&distance_type==2@activate_count_start>=3&distance_type==3",
    "qty": 4000,
    "dur": 30000,
    "rar": 6,
    "rarj": "進化スキル",
    "rr": [
      "activate_count_start"
    ],
    "rv": [],
    "unc": 2
  },
  {
    "n": "誠心たる光燿",
    "e": "マイルレースの終盤始めの方または中距離レースの終盤以降の最終コーナーで加速力が上がり少し前に出る＜追込・芝＞",
    "dt": [
      2,
      3
    ],
    "gt": [
      1
    ],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "fixed",
      "fixed_point": "finalcorner"
    },
    "segs": [
      {
        "type": "random",
        "subtype": "fh"
      },
      {
        "type": "fixed",
        "fixed_point": "finalcorner"
      }
    ],
    "raw": "distance_type==2&running_style==4&ground_type==1&phase_firsthalf_random==2@distance_type==3&running_style==4&ground_type==1&phase>=2&is_finalcorner==1&corner!=0",
    "qty": 4000,
    "dur": 9000,
    "rar": 6,
    "rarj": "進化スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "未来へ続く放物線",
    "e": "最終コーナーで加速力が少し上がるさらに芝のレースなら少し前に出る＜マイル＞",
    "dt": [
      2
    ],
    "gt": [
      1
    ],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "random",
      "subtype": "finalcorner_random"
    },
    "segs": [
      {
        "type": "random",
        "subtype": "finalcorner_random"
      }
    ],
    "raw": "ground_type==1&distance_type==2&is_finalcorner_random==1",
    "qty": 3000,
    "dur": 30000,
    "rar": 6,
    "rarj": "進化スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "天地を揺らせ君の名で",
    "e": "有馬記念のコースだと終盤に加速力が上がる、レース終盤目前に先頭か先頭から4バ身以内につけていた場合すごく上がる＜先行・長距離＞",
    "dt": [
      4
    ],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [
      10005
    ],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": [
      2500
    ],
    "tm": {
      "type": "random",
      "subtype": "dist_rate_after",
      "rv": 60
    },
    "segs": [
      {
        "type": "random",
        "subtype": "dist_rate_after",
        "rv": 60
      }
    ],
    "raw": "distance_diff_top<=10&distance_rate>=60&phase==1&distance_type==4&running_style==2&phase==2&course_distance==2500&track_id==10005",
    "qty": 5000,
    "dur": 12000,
    "rar": 6,
    "rarj": "進化スキル",
    "rr": [
      "distance_diff_top"
    ],
    "rv": [],
    "unc": 2
  },
  {
    "n": "灰の怪物",
    "e": "レース終盤始めの方で前方だと加速力がすごく上がる、レース終盤目前に先頭か先頭から4バ身以内につけていた場合ものすごく上がる＜先行・マイル＞",
    "dt": [
      2
    ],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "random",
      "subtype": "dist_rate_after",
      "rv": 60
    },
    "segs": [
      {
        "type": "random",
        "subtype": "dist_rate_after",
        "rv": 60
      }
    ],
    "raw": "distance_diff_top<=10&distance_rate>=60&phase==1&distance_type==2&running_style==2&phase_firsthalf_random==2&order_rate<=50",
    "qty": 6000,
    "dur": 12000,
    "rar": 6,
    "rarj": "進化スキル",
    "rr": [
      "distance_diff_top"
    ],
    "rv": [],
    "unc": 2
  },
  {
    "n": "陰りなき王道",
    "e": "レース終盤に追い抜こうとすると前に出て加速力がわずかに上がる＜長距離＞",
    "dt": [
      4
    ],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "fixed",
      "fixed_point": "ls"
    },
    "segs": [
      {
        "type": "fixed",
        "fixed_point": "ls"
      }
    ],
    "raw": "distance_type==4&phase==2&is_overtake==1",
    "qty": 2000,
    "dur": 30000,
    "rar": 6,
    "rarj": "進化スキル",
    "rr": [
      "is_overtake"
    ],
    "rv": [],
    "unc": 2
  },
  {
    "n": "怒涛のラッキー大猛進！",
    "e": "終盤に追い抜こうとすると加速力がわずかに上がる、その後ラストスパートの最中に追い抜こうとするとしばらくの間速度が上がる＜長距離＞",
    "dt": [
      4
    ],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "fixed",
      "fixed_point": "ls"
    },
    "segs": [
      {
        "type": "fixed",
        "fixed_point": "ls"
      }
    ],
    "raw": "distance_type==4&phase==2&is_overtake==1",
    "qty": 2000,
    "dur": 9000,
    "rar": 6,
    "rarj": "進化スキル",
    "rr": [
      "is_overtake"
    ],
    "rv": [],
    "unc": 2
  },
  {
    "n": "緊急重版",
    "e": "2000m以上のレースならレース終盤始めの方早めに前方にいると加速力が上がる、さらにスキル発動時2番手以内だと少し前に出る＜作戦・逃げ＞ ",
    "dt": [],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": 2000,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "random",
      "subtype": "fq"
    },
    "segs": [
      {
        "type": "random",
        "subtype": "fq"
      }
    ],
    "raw": "running_style==1&phase_firstquarter_random==2&order<=2&course_distance>=2000",
    "qty": 4000,
    "dur": 12000,
    "rar": 6,
    "rarj": "進化スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "Sheep Stampede!",
    "e": "レース終盤始めの早めに先頭にいるか追い抜こうとするとき、または終盤始めの方早めに加速力が上がる＜先行・マイル＞",
    "dt": [
      2
    ],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "random",
      "subtype": "fq"
    },
    "segs": [
      {
        "type": "random",
        "subtype": "other"
      },
      {
        "type": "random",
        "subtype": "other"
      },
      {
        "type": "random",
        "subtype": "fq"
      }
    ],
    "raw": "running_style==2&distance_type==2&phase_firstquarter==2&order==1@phase_firstquarter==2&is_overtake==1@phase_firstquarter_random==2",
    "qty": 4000,
    "dur": 15000,
    "rar": 6,
    "rarj": "進化スキル",
    "rr": [
      "is_overtake"
    ],
    "rv": [],
    "unc": 2
  },
  {
    "n": "巧みなるファントム",
    "e": "レース後半のコーナーで左右に移動するとき加速力が少し上がりわずかに前に出る＜先行・中距離＞",
    "dt": [
      3
    ],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "random",
      "subtype": "dist_rate_after",
      "rv": 50
    },
    "segs": [
      {
        "type": "random",
        "subtype": "dist_rate_after",
        "rv": 50
      },
      {
        "type": "random",
        "subtype": "dist_rate_after",
        "rv": 50
      }
    ],
    "raw": "distance_type==3&running_style==2&distance_rate>=50&corner!=0&is_move_lane==1@distance_rate>=50&corner!=0&is_move_lane==2",
    "qty": 3000,
    "dur": 30000,
    "rar": 6,
    "rarj": "進化スキル",
    "rr": [
      "is_move_lane"
    ],
    "rv": [],
    "unc": 2
  },
  {
    "n": "踊る脚色",
    "e": "終盤始めの早めに直線に入ったときまたは終盤始めの方早めに加速力が上がる＜追込・中距離＞",
    "dt": [
      3
    ],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "random",
      "subtype": "fq"
    },
    "segs": [
      {
        "type": "random",
        "subtype": "other"
      },
      {
        "type": "random",
        "subtype": "fq"
      }
    ],
    "raw": "distance_type==3&running_style==4&phase_firstquarter==2&corner==0@distance_type==3&running_style==4&phase_firstquarter_random==2",
    "qty": 4000,
    "dur": 9000,
    "rar": 6,
    "rarj": "進化スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "シューティングスター",
    "e": "レース終盤以降に前方で相手を抜くと勢いに乗って前に出て加速力がちょっと上がる",
    "dt": [],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "fixed",
      "fixed_point": "ls"
    },
    "segs": [
      {
        "type": "fixed",
        "fixed_point": "ls"
      }
    ],
    "raw": "phase>=2&order>=1&order_rate<=50&change_order_onetime<0",
    "qty": 1000,
    "dur": 50000,
    "rar": 5,
    "rarj": "固有スキル",
    "rr": [
      "change_order_onetime"
    ],
    "rv": [],
    "unc": 2
  },
  {
    "n": "紅焔ギア/LP1211-M",
    "e": "最終コーナー以降で前の方にいるとギアを変えて加速力が上がる",
    "dt": [],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "fixed",
      "fixed_point": "finalcorner"
    },
    "segs": [
      {
        "type": "fixed",
        "fixed_point": "finalcorner"
      }
    ],
    "raw": "is_finalcorner==1&order<=5&order_rate<=50",
    "qty": 4000,
    "dur": 40000,
    "rar": 5,
    "rarj": "固有スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "ヴィクトリーショット！",
    "e": "最終コーナー後半で好位置にいると弾みを付けて加速力を上げ続ける",
    "dt": [],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "random",
      "subtype": "finalcorner_lh"
    },
    "segs": [
      {
        "type": "random",
        "subtype": "finalcorner_lh"
      }
    ],
    "raw": "is_finalcorner_laterhalf==1&corner!=0&order>=3&order_rate<=40",
    "qty": 4000,
    "dur": 50000,
    "rar": 5,
    "rarj": "固有スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "#LookatCurren",
    "e": "レース中間付近で好位置にいる時に追い抜くと勢いづき進出を開始する",
    "dt": [],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "random",
      "subtype": "other"
    },
    "segs": [
      {
        "type": "random",
        "subtype": "other"
      }
    ],
    "raw": "distance_rate>=50&distance_rate<=65&order>=2&order_rate<=50&change_order_onetime<0",
    "qty": 3000,
    "dur": 50000,
    "rar": 5,
    "rarj": "固有スキル",
    "rr": [
      "change_order_onetime"
    ],
    "rv": [],
    "unc": 2
  },
  {
    "n": "キラキラ☆STARDOM",
    "e": "レース中盤の直線で前の方にいるとき後ろのウマ娘と距離が近いと譲らない想いが力になる",
    "dt": [],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "random",
      "subtype": "phase1"
    },
    "segs": [
      {
        "type": "random",
        "subtype": "phase1"
      }
    ],
    "raw": "phase==1&corner==0&order<=2&bashin_diff_behind<=1",
    "qty": 3000,
    "dur": 50000,
    "rar": 5,
    "rarj": "固有スキル",
    "rr": [
      "bashin_diff_behind"
    ],
    "rv": [],
    "unc": 2
  },
  {
    "n": "アングリング×スキーミング",
    "e": "レース終盤以降のコーナーで先頭にいるとこれ幸いと加速力を上げる",
    "dt": [],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "fixed",
      "fixed_point": "phase2_corner"
    },
    "segs": [
      {
        "type": "fixed",
        "fixed_point": "phase2_corner"
      }
    ],
    "raw": "phase>=2&corner!=0&order==1",
    "qty": 4000,
    "dur": 40000,
    "rar": 5,
    "rarj": "固有スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "コンドル猛撃波",
    "e": "最終コーナーで中団から前を狙う時魂を燃え滾らせて加速力を上げる",
    "dt": [],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "fixed",
      "fixed_point": "finalcorner"
    },
    "segs": [
      {
        "type": "fixed",
        "fixed_point": "finalcorner"
      }
    ],
    "raw": "is_finalcorner==1&corner!=0&is_overtake==1&order>=4&order_rate<=75",
    "qty": 4000,
    "dur": 40000,
    "rar": 5,
    "rarj": "固有スキル",
    "rr": [
      "is_overtake"
    ],
    "rv": [],
    "unc": 2
  },
  {
    "n": "I Never Goof Up!",
    "e": "レース終盤以降に追い抜くとあきらめない心を発揮して前を目指す",
    "dt": [],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "fixed",
      "fixed_point": "ls"
    },
    "segs": [
      {
        "type": "fixed",
        "fixed_point": "ls"
      }
    ],
    "raw": "phase>=2&change_order_onetime<0",
    "qty": 3000,
    "dur": 50000,
    "rar": 5,
    "rarj": "固有スキル",
    "rr": [
      "change_order_onetime"
    ],
    "rv": [],
    "unc": 2
  },
  {
    "n": "ぐるぐるマミートリック♡",
    "e": "最終直線を好位置で走行中前のウマ娘との距離が近いと抜け出しやすくなる",
    "dt": [],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "fixed",
      "fixed_point": "finalstraight"
    },
    "segs": [
      {
        "type": "fixed",
        "fixed_point": "finalstraight"
      }
    ],
    "raw": "is_last_straight==1&order<=4&bashin_diff_infront<=1",
    "qty": 3000,
    "dur": 50000,
    "rar": 5,
    "rarj": "固有スキル",
    "rr": [
      "bashin_diff_infront"
    ],
    "rv": [],
    "unc": 2
  },
  {
    "n": "GET DOWN",
    "e": "最終コーナー走行中に中団で競り合うと抜け出しやすくなる",
    "dt": [],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "fixed",
      "fixed_point": "finalcorner"
    },
    "segs": [
      {
        "type": "fixed",
        "fixed_point": "finalcorner"
      }
    ],
    "raw": "is_finalcorner==1&corner!=0&order_rate>=30&order_rate<=70&blocked_side_continuetime>=2",
    "qty": 3000,
    "dur": 50000,
    "rar": 5,
    "rarj": "固有スキル",
    "rr": [
      "blocked_side_continuetime"
    ],
    "rv": [],
    "unc": 2
  },
  {
    "n": "彼方、その先へ…",
    "e": "掛からず、中盤の最終コーナーか終盤以降の最終コーナーではないコーナーを中団で進むと奮い立ち加速力が上がる",
    "dt": [],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "fixed",
      "fixed_point": "finalcorner"
    },
    "segs": [
      {
        "type": "fixed",
        "fixed_point": "phase2_corner_nonfinal"
      },
      {
        "type": "fixed",
        "fixed_point": "finalcorner"
      }
    ],
    "raw": "phase>=2&corner!=0&is_finalcorner==0&temptation_count==0&order_rate>=50&order_rate<=70@phase==1&corner!=0&is_finalcorner==1&temptation_count==0&order_rate>=50&order_rate<=70",
    "qty": 4000,
    "dur": 40000,
    "rar": 5,
    "rarj": "固有スキル",
    "rr": [
      "temptation_count"
    ],
    "rv": [],
    "unc": 2
  },
  {
    "n": "聖夜のミラクルラン！",
    "e": "スキルで持久力を3回以上回復するとレース後半で勝利に向かい呼吸を整えて力強く踏み込んでいく",
    "dt": [],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "random",
      "subtype": "dist_rate_after",
      "rv": 50
    },
    "segs": [
      {
        "type": "random",
        "subtype": "dist_rate_after",
        "rv": 50
      }
    ],
    "raw": "activate_count_heal>=3&distance_rate>=50",
    "qty": 3000,
    "dur": 50000,
    "rar": 5,
    "rarj": "固有スキル",
    "rr": [
      "activate_count_heal"
    ],
    "rv": [],
    "unc": 2
  },
  {
    "n": "白い稲妻、見せたるで！",
    "e": "レース後半の直線で好位置にいるまたは中団から前を狙うと稲妻の如く駆けて行く",
    "dt": [],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "random",
      "subtype": "dist_rate_after",
      "rv": 50
    },
    "segs": [
      {
        "type": "random",
        "subtype": "dist_rate_after",
        "rv": 50
      },
      {
        "type": "random",
        "subtype": "dist_rate_after",
        "rv": 50
      }
    ],
    "raw": "distance_rate>=50&corner==0&order_rate>=70&order_rate<=75&is_overtake==1@distance_rate>=50&corner==0&order_rate<=30&order_rate>=20",
    "qty": 1000,
    "dur": 50000,
    "rar": 5,
    "rarj": "固有スキル",
    "rr": [
      "is_overtake"
    ],
    "rv": [],
    "unc": 2
  },
  {
    "n": "勝ち鬨ワッショイ！",
    "e": "前方にいるとき、レース後半の第3コーナーで速度を少し上げる、または終盤の向正面で力強く前に踏み込む",
    "dt": [],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "fixed",
      "fixed_point": "phase2_front_straight"
    },
    "segs": [
      {
        "type": "fixed",
        "fixed_point": "phase2_front_straight"
      }
    ],
    "raw": "phase==2&straight_front_type==2&order<=2",
    "qty": 3000,
    "dur": 50000,
    "rar": 5,
    "rarj": "固有スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "Do Ya Breakin!",
    "e": "終盤以降の直線で前方にいると意気揚々と速度を上げる、さらにそこが向正面の場合加速力をわずかに上げる",
    "dt": [],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "fixed",
      "fixed_point": "phase2_front_straight"
    },
    "segs": [
      {
        "type": "fixed",
        "fixed_point": "phase2_front_straight"
      }
    ],
    "raw": "phase>=2&corner==0&order<=2&straight_front_type==2",
    "qty": 2000,
    "dur": 50000,
    "rar": 5,
    "rarj": "固有スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "つぼみ、ほころぶ時",
    "e": "レース中盤のコーナーで競り合っていた場合終盤以降かつ最終コーナー半ば以降に好位置にいると加速力が上がる",
    "dt": [],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "fixed",
      "fixed_point": "finalcorner"
    },
    "segs": [
      {
        "type": "random",
        "subtype": "finalcorner_lh"
      },
      {
        "type": "fixed",
        "fixed_point": "finalcorner"
      }
    ],
    "raw": "phase==1&blocked_side_continuetime>=2&corner!=0&phase>=2&is_finalcorner_laterhalf==1&order>=3&order_rate<=40@phase>=2&is_finalcorner==1&corner==0&order>=3&order_rate<=40",
    "qty": 4000,
    "dur": 40000,
    "rar": 5,
    "rarj": "固有スキル",
    "rr": [
      "blocked_side_continuetime"
    ],
    "rv": [],
    "unc": 2
  },
  {
    "n": "轟！トレセン応援団！！",
    "e": "レース前半、掛からず最後方付近に控え続けていると、最終直線で気合を爆発させて加速力が上がる",
    "dt": [],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "fixed",
      "fixed_point": "finalstraight"
    },
    "segs": [
      {
        "type": "fixed",
        "fixed_point": "finalstraight"
      }
    ],
    "raw": "distance_rate>=50&order_rate_out70_continue==1&temptation_count==0&is_last_straight==1",
    "qty": 4000,
    "dur": 40000,
    "rar": 5,
    "rarj": "固有スキル",
    "rr": [
      "temptation_count"
    ],
    "rv": [],
    "unc": 2
  },
  {
    "n": "Best day ever",
    "e": "終盤以降かつ最終コーナー以降に好位置にいると速度が上がるさらにゴールまで遠いと最高の走りで加速力がちょっと上がる",
    "dt": [],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "fixed",
      "fixed_point": "finalcorner"
    },
    "segs": [
      {
        "type": "fixed",
        "fixed_point": "finalcorner"
      }
    ],
    "raw": "remain_distance>=401&phase>=2&is_finalcorner==1&order_rate>=20&order_rate<=40",
    "qty": 1000,
    "dur": 50000,
    "rar": 5,
    "rarj": "固有スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "One True Color",
    "e": "残り350mを切って前の方で後ろのウマ娘との距離が近いと譲らぬ思いで抜け出しやすくなる",
    "dt": [],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "random",
      "subtype": "remain_lte",
      "rv": 350
    },
    "segs": [
      {
        "type": "random",
        "subtype": "remain_lte",
        "rv": 350
      }
    ],
    "raw": "remain_distance<=350&order_rate<=40&order_rate>=20&bashin_diff_behind<=1",
    "qty": 3000,
    "dur": 50000,
    "rar": 5,
    "rarj": "固有スキル",
    "rr": [
      "bashin_diff_behind"
    ],
    "rv": [],
    "unc": 2
  },
  {
    "n": "熱血！！風紀アタック",
    "e": "終盤以降の最終コーナー以降に後方から迫ると短い間加速力がちょっと上がる効果中に追い抜くと3回まで効果と時間が増える",
    "dt": [],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "fixed",
      "fixed_point": "finalcorner"
    },
    "segs": [
      {
        "type": "fixed",
        "fixed_point": "finalcorner"
      }
    ],
    "raw": "phase>=2&order_rate>=50&is_finalcorner==1&bashin_diff_infront<=1",
    "qty": 1000,
    "dur": 20000,
    "rar": 5,
    "rarj": "固有スキル",
    "rr": [
      "bashin_diff_infront"
    ],
    "rv": [],
    "unc": 2
  },
  {
    "n": "理運開かりて翔る",
    "e": "終盤が迫ったときどこかで速度を少し上げ、さらに能力を引き出すスキルの発動数に応じて速度と加速力を上げる",
    "dt": [],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "random",
      "subtype": "lh"
    },
    "segs": [
      {
        "type": "random",
        "subtype": "lh"
      }
    ],
    "raw": "phase_laterhalf_random==1",
    "qty": 500,
    "dur": 50000,
    "rar": 5,
    "rarj": "固有スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "Silent letter",
    "e": "残り400mを切って前の方で近寄られるとファンの心に残る走りで抜け出しやすくなる",
    "dt": [],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "random",
      "subtype": "remain_lte",
      "rv": 400
    },
    "segs": [
      {
        "type": "random",
        "subtype": "remain_lte",
        "rv": 400
      }
    ],
    "raw": "remain_distance<=400&order<=2&overtake_target_time>=1",
    "qty": 3000,
    "dur": 50000,
    "rar": 5,
    "rarj": "固有スキル",
    "rr": [
      "overtake_target_time"
    ],
    "rv": [],
    "unc": 2
  },
  {
    "n": "風光る",
    "e": "レース前半で控え、最終コーナー後半に前の方だと長時間加速力をちょっと上げ続ける、2番手なら効果が上がる",
    "dt": [],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "random",
      "subtype": "finalcorner_lh"
    },
    "segs": [
      {
        "type": "random",
        "subtype": "finalcorner_lh"
      }
    ],
    "raw": "distance_rate>=50&order_rate_out20_continue==1&is_finalcorner_laterhalf==1&distance_diff_rate<=50&order==2",
    "qty": 2000,
    "dur": 80000,
    "rar": 5,
    "rarj": "固有スキル",
    "rr": [
      "distance_diff_rate"
    ],
    "rv": [],
    "unc": 2
  },
  {
    "n": "Into High Gear!",
    "e": "レース中盤以降の下り坂で中団だと坂を下った後少しの間速度を上げる東京レース場ならさらにギアを上げる",
    "dt": [],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [
      10006
    ],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "slope_down"
    },
    "segs": [
      {
        "type": "slope_down"
      },
      {
        "type": "slope_up"
      }
    ],
    "raw": "phase>=1&slope==2&order_rate>=50&order_rate<=80&track_id==10006&slope==0@slope==1",
    "qty": 1000,
    "dur": 50000,
    "rar": 5,
    "rarj": "固有スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "あっぱれ大盤振る舞い！",
    "e": "終盤以降のコーナーで前方にいる時ゴールまでが遠いと少しの間前に出て加速力がちょっと上がる",
    "dt": [],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "random",
      "subtype": "remain_range",
      "rv": 600
    },
    "segs": [
      {
        "type": "random",
        "subtype": "remain_range",
        "rv": 600
      }
    ],
    "raw": "phase>=2&corner!=0&remain_distance>=600&order<=3",
    "qty": 1000,
    "dur": 40000,
    "rar": 5,
    "rarj": "固有スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "かがやけ☆とまこまい",
    "e": "中盤のコーナーで競り合っていた場合ラストスパートの最中なら好位置にいると加速力がわずかに上がる余力十分なら効果が増える＜ダート＞",
    "dt": [],
    "gt": [
      2
    ],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "fixed",
      "fixed_point": "ls"
    },
    "segs": [
      {
        "type": "fixed",
        "fixed_point": "ls"
      }
    ],
    "raw": "phase==1&blocked_side_continuetime>=2&corner!=0&is_lastspurt==1&order_rate<=40&order_rate>=30&ground_type==2&lastspurt==2",
    "qty": 4000,
    "dur": 40000,
    "rar": 5,
    "rarj": "固有スキル",
    "rr": [
      "blocked_side_continuetime"
    ],
    "rv": [],
    "unc": 2
  },
  {
    "n": "あなたに捧げるフリーポア",
    "e": "終盤目前の下り坂で2番手以降かつ先頭から4バ身以内にいると少しの間速度が上がる、さらに中距離レースでは加速力がちょっと上がる",
    "dt": [
      3
    ],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "slope_down"
    },
    "segs": [
      {
        "type": "slope_down"
      }
    ],
    "raw": "distance_rate>=60&slope==2&phase==1&order>=2&distance_diff_top<=10&distance_type==3",
    "qty": 1000,
    "dur": 40000,
    "rar": 5,
    "rarj": "固有スキル",
    "rr": [
      "distance_diff_top"
    ],
    "rv": [],
    "unc": 2
  },
  {
    "n": "Ding Dong Boo",
    "e": "追い比べをしたとき、速度が少し上がるさらにダートレースでは嚙みつかんばかりの気迫で加速力が上がる",
    "dt": [],
    "gt": [
      2
    ],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "random",
      "subtype": "other"
    },
    "segs": [
      {
        "type": "random",
        "subtype": "other"
      }
    ],
    "raw": "compete_fight_count>0&ground_type==2",
    "qty": 4000,
    "dur": 50000,
    "rar": 5,
    "rarj": "固有スキル",
    "rr": [
      "compete_fight_count"
    ],
    "rv": [],
    "unc": 2
  },
  {
    "n": "咲け咲け！私！",
    "e": "レース中盤に競り合っていた場合残り650m地点で好位置にいると夢を叶えるため加速力を上げ続ける",
    "dt": [],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "fixed",
      "fixed_point": "remain",
      "rv": 651
    },
    "segs": [
      {
        "type": "fixed",
        "fixed_point": "remain",
        "rv": 651
      }
    ],
    "raw": "phase==1&blocked_side_continuetime>=2&remain_distance<=651&remain_distance>=649&order_rate<=40&order_rate>=30",
    "qty": 4000,
    "dur": 50000,
    "rar": 5,
    "rarj": "固有スキル",
    "rr": [
      "blocked_side_continuetime"
    ],
    "rv": [],
    "unc": 2
  },
  {
    "n": "CHERRY☆スクランブル",
    "e": "残り400m地点で3番手以内にいると短い間加速力がちょっと上がるレース中盤に連続して競り合い続けた時間が長いほど効果と時間が増える",
    "dt": [],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "fixed",
      "fixed_point": "remain",
      "rv": 401
    },
    "segs": [
      {
        "type": "fixed",
        "fixed_point": "remain",
        "rv": 401
      }
    ],
    "raw": "order<=3&remain_distance<=401&remain_distance>=399",
    "qty": 1000,
    "dur": 10000,
    "rar": 5,
    "rarj": "固有スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "ごろりん！？パワードライブ",
    "e": "レース後半のコーナーで中団にいると残り持久力に応じた時間速度が少し上がる、さらに中距離レースでは加速力がちょっと上がる",
    "dt": [
      3
    ],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "random",
      "subtype": "dist_rate_after",
      "rv": 50
    },
    "segs": [
      {
        "type": "random",
        "subtype": "dist_rate_after",
        "rv": 50
      }
    ],
    "raw": "distance_rate>=50&corner!=0&order_rate>=40&order_rate<=80&distance_type==3",
    "qty": 1000,
    "dur": 20000,
    "rar": 5,
    "rarj": "固有スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "大盛り！ファーストバイト！",
    "e": "レース中盤に3回追い抜いた場合終盤目前の下り坂で後方にいると少しの間速度が上がり加速力がちょっと上がる",
    "dt": [],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "slope_down"
    },
    "segs": [
      {
        "type": "slope_down"
      }
    ],
    "raw": "change_order_up_middle>=3&distance_rate>=60&phase==1&slope==2&order_rate>=50",
    "qty": 1000,
    "dur": 40000,
    "rar": 5,
    "rarj": "固有スキル",
    "rr": [
      "change_order_up_middle"
    ],
    "rv": [],
    "unc": 2
  },
  {
    "n": "セイリオス",
    "e": "残り800m地点で中団にいると加速力がわずかに上がる、2400ｍのレースで人気が高いとすごく上がる",
    "dt": [],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": [
      2400
    ],
    "tm": {
      "type": "fixed",
      "fixed_point": "remain",
      "rv": 801
    },
    "segs": [
      {
        "type": "fixed",
        "fixed_point": "remain",
        "rv": 801
      }
    ],
    "raw": "remain_distance>=799&remain_distance<=801&order_rate>=30&order_rate<=60&course_distance==2400&popularity<=3",
    "qty": 5000,
    "dur": 40000,
    "rar": 5,
    "rarj": "固有スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "夏空ハレーション",
    "e": "後半のコーナーで好位置だと少しの間速度がすごく上がるさらに中山レース場ならスピードの能力に応じて加速力が上がる",
    "dt": [],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [
      10005
    ],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "random",
      "subtype": "dist_rate_after",
      "rv": 50
    },
    "segs": [
      {
        "type": "random",
        "subtype": "dist_rate_after",
        "rv": 50
      }
    ],
    "raw": "distance_rate>=50&corner!=0&order_rate>=20&order_rate<=50&track_id==10005",
    "qty": 500,
    "dur": 40000,
    "rar": 5,
    "rarj": "固有スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "jingle all the way",
    "e": "レース中間付近以降の直線で先頭だと長めに速度を少し上げ続ける、さらに中山レース場で「大逃げ」が発動していると長めに加速力をちょっと上げ続ける",
    "dt": [],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [
      10005
    ],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "random",
      "subtype": "dist_rate_after",
      "rv": 40
    },
    "segs": [
      {
        "type": "random",
        "subtype": "dist_rate_after",
        "rv": 40
      }
    ],
    "raw": "distance_rate>=40&corner==0&order==1&track_id==10005&is_used_skill_id==202051",
    "qty": 1000,
    "dur": 70000,
    "rar": 5,
    "rarj": "固有スキル",
    "rr": [
      "is_used_skill_id"
    ],
    "rv": [],
    "unc": 2
  },
  {
    "n": "Guiding Sea",
    "e": "残り800m地点で中団だと少しの間少し前に出て加速力がちょっと上がるさらに根幹距離のレースで後方だと加えて加速力がわずかに上がる",
    "dt": [],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "fixed",
      "fixed_point": "remain",
      "rv": 801
    },
    "segs": [
      {
        "type": "fixed",
        "fixed_point": "remain",
        "rv": 801
      }
    ],
    "raw": "remain_distance>=799&remain_distance<=801&is_basis_distance==1&order_rate>=70&order_rate<=80",
    "qty": 1000,
    "dur": 40000,
    "rar": 5,
    "rarj": "固有スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "Overdrive Speed",
    "e": "レース終盤以降のコーナーで後方にいるときゴールまで遠いと少しの間前に出る中山レース場の中距離レースなら効果が増えてさらに加速力がちょっと上がる",
    "dt": [
      3
    ],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [
      10005
    ],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "random",
      "subtype": "remain_range",
      "rv": 600
    },
    "segs": [
      {
        "type": "random",
        "subtype": "remain_range",
        "rv": 600
      }
    ],
    "raw": "phase>=2&corner!=0&remain_distance>=600&order_rate>=50&distance_type==3&track_id==10005",
    "qty": 1000,
    "dur": 40000,
    "rar": 5,
    "rarj": "固有スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "Crystal Mist",
    "e": "最終コーナー以降で中団以降にいると加速力が上がる、2400mのレースならすごく上がる＜作戦・追込＞",
    "dt": [],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": [
      2400
    ],
    "tm": {
      "type": "fixed",
      "fixed_point": "finalcorner"
    },
    "segs": [
      {
        "type": "fixed",
        "fixed_point": "finalcorner"
      }
    ],
    "raw": "running_style==4&is_finalcorner==1&order_rate>=40&course_distance==2400",
    "qty": 5000,
    "dur": 40000,
    "rar": 5,
    "rarj": "固有スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "Romantic Horizon",
    "e": "終盤が迫ったどこかで前方にいると速度を少し上げ続けるさらに3番手以内なら加速力をちょっと上げ続ける＜中距離＞",
    "dt": [
      3
    ],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "random",
      "subtype": "lh"
    },
    "segs": [
      {
        "type": "random",
        "subtype": "lh"
      }
    ],
    "raw": "distance_type==3&phase_laterhalf_random==1&order<=3",
    "qty": 1000,
    "dur": 60000,
    "rar": 5,
    "rarj": "固有スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "レジェンダリーアクセル",
    "e": "ラストスパートの最中なら加速力が上がる",
    "dt": [],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "fixed",
      "fixed_point": "ls"
    },
    "segs": [
      {
        "type": "fixed",
        "fixed_point": "ls"
      }
    ],
    "raw": "is_lastspurt==1",
    "qty": 4000,
    "dur": 40000,
    "rar": 5,
    "rarj": "固有スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "ずっとずっと輝いて",
    "e": "トリプルティアラのコースだと終盤以降のコーナーで少しの間少し前に出るさらにそこが下り坂なら加速力がわずかに上がる",
    "dt": [],
    "gt": [
      1
    ],
    "gc": [],
    "mv": null,
    "track": [
      10006,
      10008,
      10009
    ],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": [
      1600,
      2000,
      2400
    ],
    "tm": {
      "type": "slope_down"
    },
    "segs": [
      {
        "type": "random",
        "subtype": "other"
      },
      {
        "type": "random",
        "subtype": "other"
      },
      {
        "type": "slope_down"
      }
    ],
    "raw": "track_id==10009&course_distance==1600@track_id==10008&course_distance==2000@track_id==10006&course_distance==2400&ground_type==1&phase>=2&corner!=0&slope==2",
    "qty": 2000,
    "dur": 40000,
    "rar": 5,
    "rarj": "固有スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "スカーレットリリィの高揚",
    "e": "残り300m地点で中団にいると速度がすごく上がる、または中距離レースで「衝動」が発動していると終盤以降のコーナーで順位によらず加速力が上がる",
    "dt": [
      3
    ],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "fixed",
      "fixed_point": "phase2_corner"
    },
    "segs": [
      {
        "type": "fixed",
        "fixed_point": "phase2_corner"
      }
    ],
    "raw": "distance_type==3&is_used_skill_id==203781&phase>=2&corner!=0",
    "qty": 4000,
    "dur": 40000,
    "rar": 5,
    "rarj": "固有スキル",
    "rr": [
      "is_used_skill_id"
    ],
    "rv": [],
    "unc": 2
  },
  {
    "n": "Punkish Bite",
    "e": "レース終盤以降のコーナーで少しの間少し前に出る、ダートレースなら効果が増えてさらに加速力がちょっと上がる＜逃げ/先行＞",
    "dt": [],
    "gt": [
      2
    ],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "fixed",
      "fixed_point": "phase2_corner"
    },
    "segs": [
      {
        "type": "fixed",
        "fixed_point": "phase2_corner"
      },
      {
        "type": "fixed",
        "fixed_point": "phase2_corner"
      }
    ],
    "raw": "running_style==1&phase>=2&corner!=0&ground_type==2@running_style==2&phase>=2&corner!=0&ground_type==2",
    "qty": 1000,
    "dur": 40000,
    "rar": 5,
    "rarj": "固有スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "ヤバ技☆ジャグルビート",
    "e": "中盤以降下り坂で中団だと下った後長めに速度をわずかに、加速力をほんのちょっと上げ続ける、効果中スキル発動3回まで加速力が増える＜中距離/長距離＞",
    "dt": [
      3,
      4
    ],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "slope_down"
    },
    "segs": [
      {
        "type": "slope_down"
      },
      {
        "type": "slope_up"
      },
      {
        "type": "random",
        "subtype": "other"
      },
      {
        "type": "slope_up"
      }
    ],
    "raw": "phase>=1&slope==2&order_rate>=30&order_rate<=70&slope==0&distance_type==3@slope==1&distance_type==3@slope==0&distance_type==4@slope==1&distance_type==4",
    "qty": 500,
    "dur": 70000,
    "rar": 5,
    "rarj": "固有スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "ブリリアント・レッドエース",
    "e": "レース後半に前の方で1番になる力を発揮する",
    "dt": [],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "random",
      "subtype": "dist_rate_after",
      "rv": 50
    },
    "segs": [
      {
        "type": "random",
        "subtype": "dist_rate_after",
        "rv": 50
      },
      {
        "type": "random",
        "subtype": "dist_rate_after",
        "rv": 50
      }
    ],
    "raw": "distance_rate>=50&order==1&bashin_diff_behind<=1@distance_rate>=50&order==2&is_overtake==1",
    "qty": 3000,
    "dur": 50000,
    "rar": 4,
    "rarj": "固有スキル",
    "rr": [
      "bashin_diff_behind",
      "is_overtake"
    ],
    "rv": [],
    "unc": 4
  },
  {
    "n": "プランチャ☆ガナドール",
    "e": "最終直線で余力を持って前にいるとより優位を保ちやすくなる",
    "dt": [],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "fixed",
      "fixed_point": "finalstraight"
    },
    "segs": [
      {
        "type": "fixed",
        "fixed_point": "finalstraight"
      }
    ],
    "raw": "is_last_straight==1&hp_per>=30&order<=2",
    "qty": 3000,
    "dur": 50000,
    "rar": 4,
    "rarj": "固有スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "ひらめき☆ランディング",
    "e": "最終コーナー以降に前の方で競り合うと抜け出しやすくなる",
    "dt": [],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "fixed",
      "fixed_point": "finalcorner"
    },
    "segs": [
      {
        "type": "fixed",
        "fixed_point": "finalcorner"
      }
    ],
    "raw": "is_finalcorner==1&blocked_side_continuetime>=2&order<=3",
    "qty": 3000,
    "dur": 50000,
    "rar": 4,
    "rarj": "固有スキル",
    "rr": [
      "blocked_side_continuetime"
    ],
    "rv": [],
    "unc": 2
  },
  {
    "n": "レッツ・アナボリック！",
    "e": "レース終盤以降のコーナーで中団にいると前の位置につこうとして加速力が上がる",
    "dt": [],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "fixed",
      "fixed_point": "phase2_corner"
    },
    "segs": [
      {
        "type": "fixed",
        "fixed_point": "phase2_corner"
      }
    ],
    "raw": "phase>=2&corner!=0&order_rate>=65&order_rate<=70",
    "qty": 4000,
    "dur": 40000,
    "rar": 4,
    "rarj": "固有スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "来ます来てます来させます！",
    "e": "レース終盤以降に3番手以降で前方が詰まるとお告げの力で道を切り開く",
    "dt": [],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "fixed",
      "fixed_point": "ls"
    },
    "segs": [
      {
        "type": "fixed",
        "fixed_point": "ls"
      }
    ],
    "raw": "phase>=2&order>=3&blocked_front==1",
    "qty": 1000,
    "dur": 50000,
    "rar": 4,
    "rarj": "固有スキル",
    "rr": [
      "blocked_front"
    ],
    "rv": [],
    "unc": 2
  },
  {
    "n": "レッドエース",
    "e": "レース後半に前の方で1番になる力をわずかに発揮する",
    "dt": [],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "random",
      "subtype": "dist_rate_after",
      "rv": 50
    },
    "segs": [
      {
        "type": "random",
        "subtype": "dist_rate_after",
        "rv": 50
      },
      {
        "type": "random",
        "subtype": "dist_rate_after",
        "rv": 50
      }
    ],
    "raw": "distance_rate>=50&order==1&bashin_diff_behind<=1@distance_rate>=50&order==2&is_overtake==1",
    "qty": 2000,
    "dur": 50000,
    "rar": 3,
    "rarj": "固有スキル（下位）",
    "rr": [
      "bashin_diff_behind",
      "is_overtake"
    ],
    "rv": [],
    "unc": 4
  },
  {
    "n": "熱血☆アミーゴ",
    "e": "最終直線で余力を持って前にいるとわずかに優位を保ちやすくなる",
    "dt": [],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "fixed",
      "fixed_point": "finalstraight"
    },
    "segs": [
      {
        "type": "fixed",
        "fixed_point": "finalstraight"
      }
    ],
    "raw": "is_last_straight==1&hp_per>=30&order<=2",
    "qty": 2000,
    "dur": 50000,
    "rar": 3,
    "rarj": "固有スキル（下位）",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "勝利のキッス☆",
    "e": "最終コーナー以降に前の方で競り合うとわずかに抜け出しやすくなる",
    "dt": [],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "fixed",
      "fixed_point": "finalcorner"
    },
    "segs": [
      {
        "type": "fixed",
        "fixed_point": "finalcorner"
      }
    ],
    "raw": "is_finalcorner==1&blocked_side_continuetime>=2&order<=3",
    "qty": 2000,
    "dur": 50000,
    "rar": 3,
    "rarj": "固有スキル（下位）",
    "rr": [
      "blocked_side_continuetime"
    ],
    "rv": [],
    "unc": 2
  },
  {
    "n": "燃えろ筋肉！",
    "e": "レース終盤以降のコーナーで中団にいると前の位置につこうとして加速力が少し上がる",
    "dt": [],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "fixed",
      "fixed_point": "phase2_corner"
    },
    "segs": [
      {
        "type": "fixed",
        "fixed_point": "phase2_corner"
      }
    ],
    "raw": "phase>=2&corner!=0&order_rate>=65&order_rate<=70",
    "qty": 3000,
    "dur": 40000,
    "rar": 3,
    "rarj": "固有スキル（下位）",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "来てください来てください！",
    "e": "レース終盤以降に3番手以降で前方が詰まるとお告げの力で少し道を切り開く",
    "dt": [],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "fixed",
      "fixed_point": "ls"
    },
    "segs": [
      {
        "type": "fixed",
        "fixed_point": "ls"
      }
    ],
    "raw": "phase>=2&order>=3&blocked_front==1",
    "qty": 1000,
    "dur": 50000,
    "rar": 3,
    "rarj": "固有スキル（下位）",
    "rr": [
      "blocked_front"
    ],
    "rv": [],
    "unc": 2
  },
  {
    "n": "曲線のソムリエ",
    "e": "華麗なコーナーワークで加速力が上がる",
    "dt": [],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "random",
      "subtype": "all_corner"
    },
    "segs": [
      {
        "type": "random",
        "subtype": "all_corner"
      }
    ],
    "raw": "all_corner_random==1",
    "qty": 4000,
    "dur": 30000,
    "rar": 2,
    "rarj": "金スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "一陣の風",
    "e": "直線で加速力が上がり速度がわずかに上がる",
    "dt": [],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "random",
      "subtype": "straight_random"
    },
    "segs": [
      {
        "type": "random",
        "subtype": "straight_random"
      }
    ],
    "raw": "straight_random==1",
    "qty": 4000,
    "dur": 30000,
    "rar": 2,
    "rarj": "金スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "ノンストップガール",
    "e": "ラストスパートの最中なら前が塞がれた時加速力が上がりコース取りが少しうまくなる",
    "dt": [],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "fixed",
      "fixed_point": "ls"
    },
    "segs": [
      {
        "type": "fixed",
        "fixed_point": "ls"
      }
    ],
    "raw": "infront_near_lane_time>=1&is_lastspurt==1&hp_per>=1",
    "qty": 4000,
    "dur": 30000,
    "rar": 2,
    "rarj": "金スキル",
    "rr": [
      "infront_near_lane_time"
    ],
    "rv": [],
    "unc": 1
  },
  {
    "n": "先手必勝",
    "e": "スタート時に加速力が上がる＜作戦・逃げ＞",
    "dt": [],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "always"
    },
    "segs": [
      {
        "type": "always"
      }
    ],
    "raw": "running_style==1&always==1",
    "qty": 4000,
    "dur": 12000,
    "rar": 2,
    "rarj": "金スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "逃亡者",
    "e": "最終コーナーで先頭だと加速力が上がる＜作戦・逃げ＞",
    "dt": [],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "random",
      "subtype": "finalcorner_random"
    },
    "segs": [
      {
        "type": "random",
        "subtype": "finalcorner_random"
      }
    ],
    "raw": "running_style==1&is_finalcorner_random==1&order==1",
    "qty": 4000,
    "dur": 30000,
    "rar": 2,
    "rarj": "金スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "乗り換え上手",
    "e": "レース終盤始めの方に中団以降にいると加速力が上がる＜作戦・差し＞",
    "dt": [],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "random",
      "subtype": "fh"
    },
    "segs": [
      {
        "type": "random",
        "subtype": "fh"
      }
    ],
    "raw": "running_style==3&phase_firsthalf_random==2&order_rate>=40",
    "qty": 4000,
    "dur": 18000,
    "rar": 2,
    "rarj": "金スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "迫る影",
    "e": "ラストスパートの最中なら直線で加速力が上がる＜作戦・追込＞",
    "dt": [],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "fixed",
      "fixed_point": "ls"
    },
    "segs": [
      {
        "type": "fixed",
        "fixed_point": "ls"
      }
    ],
    "raw": "running_style==4&is_lastspurt==1&corner==0",
    "qty": 4000,
    "dur": 9000,
    "rar": 2,
    "rarj": "金スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "スプリントターボ",
    "e": "レース終盤に加速力が上がる＜短距離＞",
    "dt": [
      1
    ],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "random",
      "subtype": "phase2"
    },
    "segs": [
      {
        "type": "random",
        "subtype": "phase2"
      }
    ],
    "raw": "distance_type==1&phase_random==2",
    "qty": 4000,
    "dur": 30000,
    "rar": 2,
    "rarj": "金スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "電撃の煌めき",
    "e": "レース終盤に後ろの方だと速度が上がり、加速力がちょっと上がる＜短距離＞",
    "dt": [
      1
    ],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "random",
      "subtype": "phase2"
    },
    "segs": [
      {
        "type": "random",
        "subtype": "phase2"
      }
    ],
    "raw": "distance_type==1&phase_random==2&order_rate>50",
    "qty": 1000,
    "dur": 30000,
    "rar": 2,
    "rarj": "金スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "豪脚",
    "e": "レース終盤に後ろの方だと加速力が上がる＜マイル＞",
    "dt": [
      2
    ],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "random",
      "subtype": "phase2"
    },
    "segs": [
      {
        "type": "random",
        "subtype": "phase2"
      }
    ],
    "raw": "distance_type==2&phase_random==2&order_rate>50",
    "qty": 4000,
    "dur": 30000,
    "rar": 2,
    "rarj": "金スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "勝利への執念",
    "e": "最終コーナー以降に詰め寄られると速度が上がり、加速力がちょっと上がる＜中距離＞",
    "dt": [
      3
    ],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "fixed",
      "fixed_point": "finalcorner"
    },
    "segs": [
      {
        "type": "fixed",
        "fixed_point": "finalcorner"
      }
    ],
    "raw": "distance_type==3&is_finalcorner==1&overtake_target_time>=2",
    "qty": 1000,
    "dur": 30000,
    "rar": 2,
    "rarj": "金スキル",
    "rr": [
      "overtake_target_time"
    ],
    "rv": [],
    "unc": 2
  },
  {
    "n": "プランX",
    "e": "レース終盤が迫ったとき前の方にいると加速力が上がる＜短距離＞",
    "dt": [
      1
    ],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "random",
      "subtype": "lh"
    },
    "segs": [
      {
        "type": "random",
        "subtype": "lh"
      }
    ],
    "raw": "distance_type==1&phase_laterhalf_random==1&order>=2&order_rate<=50",
    "qty": 4000,
    "dur": 30000,
    "rar": 2,
    "rarj": "金スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "準備万全！",
    "e": "レース中盤にしばらくの間コース取りが上手くなり加速力が少し上がる＜短距離＞",
    "dt": [
      1
    ],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "random",
      "subtype": "phase1"
    },
    "segs": [
      {
        "type": "random",
        "subtype": "phase1"
      }
    ],
    "raw": "distance_type==1&phase_random==1",
    "qty": 3000,
    "dur": 40000,
    "rar": 2,
    "rarj": "金スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "逃亡禁止令",
    "e": "レース序盤に後ろの方にいると前方のウマ娘を焦らせ動きを少し鈍くする＜短距離＞",
    "dt": [
      1
    ],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "random",
      "subtype": "phase0"
    },
    "segs": [
      {
        "type": "random",
        "subtype": "phase0"
      }
    ],
    "raw": "distance_type==1&phase_random==0&order_rate>50&accumulatetime>=5",
    "qty": -2000,
    "dur": 12000,
    "rar": 2,
    "rarj": "金スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "アクセル全開！",
    "e": "レース後半に追い抜くと加速力が上がる＜マイル＞",
    "dt": [
      2
    ],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "random",
      "subtype": "dist_rate_after",
      "rv": 50
    },
    "segs": [
      {
        "type": "random",
        "subtype": "dist_rate_after",
        "rv": 50
      }
    ],
    "raw": "distance_type==2&distance_rate>=50&change_order_onetime<0",
    "qty": 4000,
    "dur": 30000,
    "rar": 2,
    "rarj": "金スキル",
    "rr": [
      "change_order_onetime"
    ],
    "rv": [],
    "unc": 2
  },
  {
    "n": "布陣",
    "e": "レース序盤に後ろにいると前の動きを鈍くする＜マイル＞",
    "dt": [
      2
    ],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "random",
      "subtype": "phase0"
    },
    "segs": [
      {
        "type": "random",
        "subtype": "phase0"
      }
    ],
    "raw": "distance_type==2&phase_random==0&order_rate>50&accumulatetime>=3",
    "qty": -3000,
    "dur": 30000,
    "rar": 2,
    "rarj": "金スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "ライトニングステップ",
    "e": "レース中盤にしばらくの間コース取りが上手くなり加速力が少し上がる＜中距離＞",
    "dt": [
      3
    ],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "random",
      "subtype": "phase1"
    },
    "segs": [
      {
        "type": "random",
        "subtype": "phase1"
      }
    ],
    "raw": "distance_type==3&phase_random==1",
    "qty": 3000,
    "dur": 40000,
    "rar": 2,
    "rarj": "金スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "怒涛の追い上げ",
    "e": "レース終盤で追い抜くと速度が上がり加速力がちょっと上がる＜長距離＞",
    "dt": [
      4
    ],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "fixed",
      "fixed_point": "ls"
    },
    "segs": [
      {
        "type": "fixed",
        "fixed_point": "ls"
      }
    ],
    "raw": "distance_type==4&phase==2&change_order_onetime<0",
    "qty": 1000,
    "dur": 30000,
    "rar": 2,
    "rarj": "金スキル",
    "rr": [
      "change_order_onetime"
    ],
    "rv": [],
    "unc": 2
  },
  {
    "n": "再燃焼",
    "e": "レース終盤に持久力を少し使って加速力を上げる＜作戦・逃げ＞",
    "dt": [],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "random",
      "subtype": "phase2"
    },
    "segs": [
      {
        "type": "random",
        "subtype": "phase2"
      }
    ],
    "raw": "running_style==1&phase_random==2",
    "qty": 4000,
    "dur": 30000,
    "rar": 2,
    "rarj": "金スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "技巧派",
    "e": "左右に移動するとき加速力が少し上がる＜作戦・先行＞",
    "dt": [],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "random",
      "subtype": "other"
    },
    "segs": [
      {
        "type": "random",
        "subtype": "other"
      },
      {
        "type": "random",
        "subtype": "other"
      }
    ],
    "raw": "running_style==2&is_move_lane==1@running_style==2&is_move_lane==2",
    "qty": 3000,
    "dur": 30000,
    "rar": 2,
    "rarj": "金スキル",
    "rr": [
      "is_move_lane"
    ],
    "rv": [],
    "unc": 2
  },
  {
    "n": "決意の直滑降",
    "e": "下り坂で加速力が少し上がる＜作戦・先行＞",
    "dt": [],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "slope_down"
    },
    "segs": [
      {
        "type": "slope_down"
      }
    ],
    "raw": "running_style==2&down_slope_random==1",
    "qty": 3000,
    "dur": 30000,
    "rar": 2,
    "rarj": "金スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "くじけぬ精神",
    "e": "レース中盤に後ろの方にいると加速力が少し上がる＜作戦・先行＞",
    "dt": [],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "random",
      "subtype": "phase1"
    },
    "segs": [
      {
        "type": "random",
        "subtype": "phase1"
      }
    ],
    "raw": "running_style==2&phase_random==1&order_rate>40",
    "qty": 3000,
    "dur": 30000,
    "rar": 2,
    "rarj": "金スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "努力家",
    "e": "追い抜こうとするときしばらくの間加速力が少し上がる＜作戦・差し＞",
    "dt": [],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "random",
      "subtype": "other"
    },
    "segs": [
      {
        "type": "random",
        "subtype": "other"
      }
    ],
    "raw": "running_style==3&is_overtake==1&accumulatetime>=5",
    "qty": 3000,
    "dur": 40000,
    "rar": 2,
    "rarj": "金スキル",
    "rr": [
      "is_overtake"
    ],
    "rv": [],
    "unc": 2
  },
  {
    "n": "アオハル燃焼・力",
    "e": "レース終盤にアオハル魂が燃えレース中のチームメンバーのパワー合計が高いほど加速力が上がる",
    "dt": [],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "random",
      "subtype": "phase2"
    },
    "segs": [
      {
        "type": "random",
        "subtype": "phase2"
      }
    ],
    "raw": "phase_random==2",
    "qty": 4000,
    "dur": 12000,
    "rar": 2,
    "rarj": "金スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "アオハル燃焼・根",
    "e": "レース終盤にアオハル魂が燃えレース中のチームメンバーの根性合計が高いほど脚に力強さが宿る",
    "dt": [],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "random",
      "subtype": "phase2"
    },
    "segs": [
      {
        "type": "random",
        "subtype": "phase2"
      }
    ],
    "raw": "phase_random==2",
    "qty": 3000,
    "dur": 18000,
    "rar": 2,
    "rarj": "金スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "狙うは最前列！",
    "e": "レース終盤にコース取りが上手くなり加速力が少し上がる＜ダート＞",
    "dt": [],
    "gt": [
      2
    ],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "random",
      "subtype": "phase2"
    },
    "segs": [
      {
        "type": "random",
        "subtype": "phase2"
      }
    ],
    "raw": "ground_type==2&phase_random==2",
    "qty": 3000,
    "dur": 30000,
    "rar": 2,
    "rarj": "金スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "一番星",
    "e": "レース後半に呼吸を整え前へ踏み込む育成で重ねた勝利の数だけ効果が高まる",
    "dt": [],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "random",
      "subtype": "after50",
      "rv": 50
    },
    "segs": [
      {
        "type": "random",
        "subtype": "after50",
        "rv": 50
      }
    ],
    "raw": "distance_rate_after_random==50",
    "qty": 3000,
    "dur": 12000,
    "rar": 2,
    "rarj": "金スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "起死回生",
    "e": "レース終盤始めの方で中団以降にいると加速力が上がる＜中距離＞",
    "dt": [
      3
    ],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "random",
      "subtype": "fh"
    },
    "segs": [
      {
        "type": "random",
        "subtype": "fh"
      }
    ],
    "raw": "distance_type==3&phase_firsthalf_random==2&order_rate>=40",
    "qty": 4000,
    "dur": 18000,
    "rar": 2,
    "rarj": "金スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "鍔迫り合い",
    "e": "レース終盤始めの方で前方にいると加速力が上がる＜作戦・先行＞",
    "dt": [],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "random",
      "subtype": "fh"
    },
    "segs": [
      {
        "type": "random",
        "subtype": "fh"
      }
    ],
    "raw": "running_style==2&phase_firsthalf_random==2&order_rate<=50",
    "qty": 4000,
    "dur": 18000,
    "rar": 2,
    "rarj": "金スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "大胆不敵",
    "e": "レース後半に中団にいると速度が上がり加速力がちょっと上がる＜作戦・差し＞",
    "dt": [],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "random",
      "subtype": "after50",
      "rv": 50
    },
    "segs": [
      {
        "type": "random",
        "subtype": "after50",
        "rv": 50
      }
    ],
    "raw": "running_style==3&distance_rate_after_random==50&order_rate>=30&order_rate<=80",
    "qty": 1000,
    "dur": 24000,
    "rar": 2,
    "rarj": "金スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "目指せセンター！",
    "e": "レース終盤に前方にいると加速力が上がる＜ダート＞",
    "dt": [],
    "gt": [
      2
    ],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "random",
      "subtype": "phase2"
    },
    "segs": [
      {
        "type": "random",
        "subtype": "phase2"
      }
    ],
    "raw": "ground_type==2&phase_random==2&order_rate<=50",
    "qty": 4000,
    "dur": 30000,
    "rar": 2,
    "rarj": "金スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "爆走モード！",
    "e": "レース終盤に中団以降にいると加速力が上がる＜ダート＞",
    "dt": [],
    "gt": [
      2
    ],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "random",
      "subtype": "phase2"
    },
    "segs": [
      {
        "type": "random",
        "subtype": "phase2"
      }
    ],
    "raw": "ground_type==2&phase_random==2&order_rate>=50",
    "qty": 4000,
    "dur": 30000,
    "rar": 2,
    "rarj": "金スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "キミと勝ちたい",
    "e": "レース後半に中団以前だと速度が上がり加速力がわずかに上がるファンが多いほど効果が高まる",
    "dt": [],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "random",
      "subtype": "after50",
      "rv": 50
    },
    "segs": [
      {
        "type": "random",
        "subtype": "after50",
        "rv": 50
      }
    ],
    "raw": "distance_rate_after_random==50&order_rate<=65",
    "qty": 2000,
    "dur": 12000,
    "rar": 2,
    "rarj": "金スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "電光石火",
    "e": "レース終盤以降に後方で追い抜こうとすると加速力が上がる＜短距離/マイル＞",
    "dt": [
      1,
      2
    ],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "fixed",
      "fixed_point": "ls"
    },
    "segs": [
      {
        "type": "fixed",
        "fixed_point": "ls"
      },
      {
        "type": "fixed",
        "fixed_point": "ls"
      }
    ],
    "raw": "distance_type==1&phase>=2&order_rate>=50&is_overtake==1@distance_type==2&phase>=2&order_rate>=50&is_overtake==1",
    "qty": 4000,
    "dur": 20000,
    "rar": 2,
    "rarj": "金スキル",
    "rr": [
      "is_overtake"
    ],
    "rv": [],
    "unc": 2
  },
  {
    "n": "無我夢中",
    "e": "ラストスパートの最中なら中団以降にいると持久力を少し使って加速力が上がる＜差し・長距離＞",
    "dt": [
      4
    ],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "fixed",
      "fixed_point": "ls"
    },
    "segs": [
      {
        "type": "fixed",
        "fixed_point": "ls"
      }
    ],
    "raw": "distance_type==4&running_style==3&is_lastspurt==1&order_rate>=40",
    "qty": 4000,
    "dur": 15000,
    "rar": 2,
    "rarj": "金スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "快進撃",
    "e": "終盤が迫ったとき先頭にいるか先頭から4バ身以内だと速度と加速力が少し上がる＜先行・中距離＞",
    "dt": [
      3
    ],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "random",
      "subtype": "lh"
    },
    "segs": [
      {
        "type": "random",
        "subtype": "lh"
      }
    ],
    "raw": "distance_type==3&running_style==2&phase_laterhalf_random==1&distance_diff_top<=10",
    "qty": 3000,
    "dur": 30000,
    "rar": 2,
    "rarj": "金スキル",
    "rr": [
      "distance_diff_top"
    ],
    "rv": [],
    "unc": 2
  },
  {
    "n": "怪物",
    "e": "レース終盤目前に先頭か先頭から4バ身以内につけると、レース終盤に加速力が上がる＜先行・長距離＞",
    "dt": [
      4
    ],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "random",
      "subtype": "dist_rate_after",
      "rv": 60
    },
    "segs": [
      {
        "type": "random",
        "subtype": "dist_rate_after",
        "rv": 60
      }
    ],
    "raw": "distance_diff_top<=10&distance_rate>=60&phase==1&distance_type==4&running_style==2&phase==2",
    "qty": 4000,
    "dur": 12000,
    "rar": 2,
    "rarj": "金スキル",
    "rr": [
      "distance_diff_top"
    ],
    "rv": [],
    "unc": 2
  },
  {
    "n": "抜群の切れ味",
    "e": "レース終盤突入時まで掛からず後方に控え続けていると、終盤始めの方で加速力が上がる＜作戦・追込＞",
    "dt": [],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "random",
      "subtype": "dist_rate_after",
      "rv": 66
    },
    "segs": [
      {
        "type": "random",
        "subtype": "dist_rate_after",
        "rv": 66
      }
    ],
    "raw": "distance_rate>=66&order_rate_out50_continue==1&temptation_count==0&running_style==4&phase_firsthalf_random==2",
    "qty": 4000,
    "dur": 12000,
    "rar": 2,
    "rarj": "金スキル",
    "rr": [
      "temptation_count"
    ],
    "rv": [],
    "unc": 2
  },
  {
    "n": "大海の叡智",
    "e": "レース序盤の始めの方に加速力が上がる獲得したスキルの数に応じて効果が高まる",
    "dt": [],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "random",
      "subtype": "fh"
    },
    "segs": [
      {
        "type": "random",
        "subtype": "fh"
      }
    ],
    "raw": "phase_firsthalf_random==0",
    "qty": 4000,
    "dur": 15000,
    "rar": 2,
    "rarj": "金スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "未来を拓く奇跡",
    "e": "更なる奇跡を起こすべくレース終盤に加速力が上がる＜短距離＞",
    "dt": [
      1
    ],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "random",
      "subtype": "phase2"
    },
    "segs": [
      {
        "type": "random",
        "subtype": "phase2"
      }
    ],
    "raw": "distance_type==1&phase_random==2",
    "qty": 4000,
    "dur": 18000,
    "rar": 2,
    "rarj": "金スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "盤石の構え",
    "e": "レース序盤にスキルを多く発動すると加速力が上がる",
    "dt": [],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "random",
      "subtype": "other"
    },
    "segs": [
      {
        "type": "random",
        "subtype": "other"
      }
    ],
    "raw": "activate_count_start>=3",
    "qty": 4000,
    "dur": 30000,
    "rar": 2,
    "rarj": "金スキル",
    "rr": [
      "activate_count_start"
    ],
    "rv": [],
    "unc": 2
  },
  {
    "n": "ハイボルテージ",
    "e": "レース終盤始めの方で前方にいると加速力が上がる＜マイル＞",
    "dt": [
      2
    ],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "random",
      "subtype": "fh"
    },
    "segs": [
      {
        "type": "random",
        "subtype": "fh"
      }
    ],
    "raw": "distance_type==2&phase_firsthalf_random==2&order_rate<=50",
    "qty": 4000,
    "dur": 18000,
    "rar": 2,
    "rarj": "金スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "誰より前へ！",
    "e": "スタート時に加速力が上がる＜中距離＞",
    "dt": [
      3
    ],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "always"
    },
    "segs": [
      {
        "type": "always"
      }
    ],
    "raw": "distance_type==3&always==1",
    "qty": 4000,
    "dur": 15000,
    "rar": 2,
    "rarj": "金スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "王手",
    "e": "終盤以降の最終コーナーで中団以前にいる時ゴールまで遠いと加速力が上がる＜先行/差し＞",
    "dt": [],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "fixed",
      "fixed_point": "finalcorner"
    },
    "segs": [
      {
        "type": "fixed",
        "fixed_point": "finalcorner"
      },
      {
        "type": "fixed",
        "fixed_point": "finalcorner"
      }
    ],
    "raw": "running_style==2&phase>=2&is_finalcorner==1&corner!=0&remain_distance>=600&order_rate<=70@running_style==3&phase>=2&is_finalcorner==1&corner!=0&remain_distance>=600&order_rate<=70",
    "qty": 4000,
    "dur": 9000,
    "rar": 2,
    "rarj": "金スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "万里一空",
    "e": "ラストスパートの最中なら直線で前の方だと加速力が上がる＜逃げ・長距離＞",
    "dt": [
      4
    ],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "fixed",
      "fixed_point": "ls"
    },
    "segs": [
      {
        "type": "fixed",
        "fixed_point": "ls"
      }
    ],
    "raw": "distance_type==4&running_style==1&is_lastspurt==1&corner==0&order<=3",
    "qty": 4000,
    "dur": 9000,
    "rar": 2,
    "rarj": "金スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "ロケットスタート",
    "e": "スタート時に加速力が上がる＜短距離＞",
    "dt": [
      1
    ],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "always"
    },
    "segs": [
      {
        "type": "always"
      }
    ],
    "raw": "distance_type==1&always==1",
    "qty": 4000,
    "dur": 15000,
    "rar": 2,
    "rarj": "金スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "君臨",
    "e": "終盤以降の最終コーナーで中団以降にいると加速力が上がる＜追込・中距離＞",
    "dt": [
      3
    ],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "fixed",
      "fixed_point": "finalcorner"
    },
    "segs": [
      {
        "type": "fixed",
        "fixed_point": "finalcorner"
      }
    ],
    "raw": "distance_type==3&running_style==4&phase>=2&is_finalcorner==1&corner!=0&order_rate>=40",
    "qty": 4000,
    "dur": 9000,
    "rar": 2,
    "rarj": "金スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "究極のヒルクライマー",
    "e": "上り坂で加速力が上がる",
    "dt": [],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "slope_up"
    },
    "segs": [
      {
        "type": "slope_up"
      }
    ],
    "raw": "up_slope_random==1",
    "qty": 4000,
    "dur": 30000,
    "rar": 2,
    "rarj": "金スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "踏みしめる大地",
    "e": "レース終盤始めの方で前方にいると加速力が上がる＜先行・ダート＞",
    "dt": [],
    "gt": [
      2
    ],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "random",
      "subtype": "fh"
    },
    "segs": [
      {
        "type": "random",
        "subtype": "fh"
      }
    ],
    "raw": "ground_type==2&running_style==2&phase_firsthalf_random==2&order_rate<=50",
    "qty": 4000,
    "dur": 18000,
    "rar": 2,
    "rarj": "金スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "王道一途",
    "e": "レース終盤始めの方で前方にいると加速力が上がる＜中距離＞",
    "dt": [
      3
    ],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "random",
      "subtype": "fh"
    },
    "segs": [
      {
        "type": "random",
        "subtype": "fh"
      }
    ],
    "raw": "distance_type==3&phase_firsthalf_random==2&order_rate<=50",
    "qty": 4000,
    "dur": 18000,
    "rar": 2,
    "rarj": "金スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "まとわりつく霧",
    "e": "前向きな気持ちが霞みレース終盤以降に加速力が絶望的に下がる",
    "dt": [],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "fixed",
      "fixed_point": "ls"
    },
    "segs": [
      {
        "type": "fixed",
        "fixed_point": "ls"
      }
    ],
    "raw": "phase>=2",
    "qty": -16000,
    "dur": 40000,
    "rar": 2,
    "rarj": "金スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "一点集中",
    "e": "レース終盤始めの方早めに前の方にいると加速力が上がる＜先行・長距離＞",
    "dt": [
      4
    ],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "random",
      "subtype": "fq"
    },
    "segs": [
      {
        "type": "random",
        "subtype": "fq"
      }
    ],
    "raw": "running_style==2&distance_type==4&phase_firstquarter_random==2&order_rate<=50",
    "qty": 4000,
    "dur": 12000,
    "rar": 2,
    "rarj": "金スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "千載一遇",
    "e": "レース終盤始めの方早めに中団以降にいると加速力が上がる＜追込・長距離＞",
    "dt": [
      4
    ],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "random",
      "subtype": "fq"
    },
    "segs": [
      {
        "type": "random",
        "subtype": "fq"
      }
    ],
    "raw": "running_style==4&distance_type==4&phase_firstquarter_random==2&order_rate>=40",
    "qty": 4000,
    "dur": 12000,
    "rar": 2,
    "rarj": "金スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "勝負はここから！",
    "e": "終盤以降の最終コーナーで3番手以内にいると加速力が上がる＜逃げ・中距離＞",
    "dt": [
      3
    ],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "fixed",
      "fixed_point": "finalcorner"
    },
    "segs": [
      {
        "type": "fixed",
        "fixed_point": "finalcorner"
      }
    ],
    "raw": "distance_type==3&running_style==1&phase>=2&is_finalcorner==1&corner!=0&order<=3",
    "qty": 4000,
    "dur": 9000,
    "rar": 2,
    "rarj": "金スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "イニシアチブ",
    "e": "レース終盤始めの方で前方にいると加速力が上がる＜逃げ・短距離＞",
    "dt": [
      1
    ],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "random",
      "subtype": "fh"
    },
    "segs": [
      {
        "type": "random",
        "subtype": "fh"
      }
    ],
    "raw": "running_style==1&distance_type==1&phase_firsthalf_random==2&order_rate<=50",
    "qty": 4000,
    "dur": 18000,
    "rar": 2,
    "rarj": "金スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "丁々発止",
    "e": "レース終盤始めの方で前方にいると加速力が上がる＜先行・短距離＞",
    "dt": [
      1
    ],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "random",
      "subtype": "fh"
    },
    "segs": [
      {
        "type": "random",
        "subtype": "fh"
      }
    ],
    "raw": "running_style==2&distance_type==1&phase_firsthalf_random==2&order_rate<=50",
    "qty": 4000,
    "dur": 18000,
    "rar": 2,
    "rarj": "金スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "天真爛漫",
    "e": "レース終盤始めの方で中団以降にいると加速力が上がる＜マイル＞",
    "dt": [
      2
    ],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "random",
      "subtype": "fh"
    },
    "segs": [
      {
        "type": "random",
        "subtype": "fh"
      }
    ],
    "raw": "distance_type==2&phase_firsthalf_random==2&order_rate>=40",
    "qty": 4000,
    "dur": 18000,
    "rar": 2,
    "rarj": "金スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "夢の舞台へ",
    "e": "レース終盤始めの方早めに前方にいると加速力が上がる＜先行・中距離＞",
    "dt": [
      3
    ],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "random",
      "subtype": "fq"
    },
    "segs": [
      {
        "type": "random",
        "subtype": "fq"
      }
    ],
    "raw": "running_style==2&distance_type==3&phase_firstquarter_random==2&order_rate<=50",
    "qty": 4000,
    "dur": 12000,
    "rar": 2,
    "rarj": "金スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "ショーダウン",
    "e": "ラストスパートの最中なら直線で加速力が上がる＜作戦・先行＞",
    "dt": [],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "fixed",
      "fixed_point": "ls"
    },
    "segs": [
      {
        "type": "fixed",
        "fixed_point": "ls"
      }
    ],
    "raw": "running_style==2&is_lastspurt==1&corner==0",
    "qty": 4000,
    "dur": 9000,
    "rar": 2,
    "rarj": "金スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "天賦の才",
    "e": "レース終盤始めの方早めに中団以降にいると加速力が上がる＜差し・中距離＞",
    "dt": [
      3
    ],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "random",
      "subtype": "fq"
    },
    "segs": [
      {
        "type": "random",
        "subtype": "fq"
      }
    ],
    "raw": "running_style==3&distance_type==3&phase_firstquarter_random==2&order_rate>=40",
    "qty": 4000,
    "dur": 12000,
    "rar": 2,
    "rarj": "金スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "一世一代",
    "e": "レース終盤始めの方早めに中団以降にいると加速力が上がる＜差し・長距離＞",
    "dt": [
      4
    ],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "random",
      "subtype": "fq"
    },
    "segs": [
      {
        "type": "random",
        "subtype": "fq"
      }
    ],
    "raw": "running_style==3&distance_type==4&phase_firstquarter_random==2&order_rate>=40",
    "qty": 4000,
    "dur": 12000,
    "rar": 2,
    "rarj": "金スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "猪突猛進",
    "e": "終盤以降かつ残り600mを切っているとき先頭にいるか前方で追い抜こうとすると加速力が上がる＜逃げ/先行＞",
    "dt": [],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "random",
      "subtype": "remain_lte",
      "rv": 600
    },
    "segs": [
      {
        "type": "random",
        "subtype": "other"
      },
      {
        "type": "random",
        "subtype": "remain_lte",
        "rv": 600
      },
      {
        "type": "random",
        "subtype": "remain_lte",
        "rv": 600
      }
    ],
    "raw": "running_style==1@running_style==2&phase>=2&remain_distance<=600&order==1@phase>=2&remain_distance<=600&is_overtake==1&order_rate<=50",
    "qty": 4000,
    "dur": 15000,
    "rar": 2,
    "rarj": "金スキル",
    "rr": [
      "is_overtake"
    ],
    "rv": [],
    "unc": 2
  },
  {
    "n": "コーナー加速○",
    "e": "華麗なコーナーワークで加速力がわずかに上がる",
    "dt": [],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "random",
      "subtype": "all_corner"
    },
    "segs": [
      {
        "type": "random",
        "subtype": "all_corner"
      }
    ],
    "raw": "all_corner_random==1",
    "qty": 2000,
    "dur": 30000,
    "rar": 1,
    "rarj": "白スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "コーナー加速×",
    "e": "ぎこちないコーナーワークで加速力が少し下がる",
    "dt": [],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "random",
      "subtype": "all_corner"
    },
    "segs": [
      {
        "type": "random",
        "subtype": "all_corner"
      }
    ],
    "raw": "all_corner_random==1",
    "qty": -2000,
    "dur": 30000,
    "rar": 1,
    "rarj": "白スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "直線加速",
    "e": "直線で加速力がわずかに上がる",
    "dt": [],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "random",
      "subtype": "straight_random"
    },
    "segs": [
      {
        "type": "random",
        "subtype": "straight_random"
      }
    ],
    "raw": "straight_random==1",
    "qty": 2000,
    "dur": 30000,
    "rar": 1,
    "rarj": "白スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "垂れウマ回避",
    "e": "ラストスパートの最中なら前が塞がれた時加速力がわずかに上がりコース取りがちょっとうまくなる",
    "dt": [],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "fixed",
      "fixed_point": "ls"
    },
    "segs": [
      {
        "type": "fixed",
        "fixed_point": "ls"
      }
    ],
    "raw": "infront_near_lane_time>=1&is_lastspurt==1&hp_per>=1",
    "qty": 2000,
    "dur": 30000,
    "rar": 1,
    "rarj": "白スキル",
    "rr": [
      "infront_near_lane_time"
    ],
    "rv": [],
    "unc": 1
  },
  {
    "n": "先駆け",
    "e": "スタート時に加速力がわずかに上がる＜作戦・逃げ＞",
    "dt": [],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "always"
    },
    "segs": [
      {
        "type": "always"
      }
    ],
    "raw": "running_style==1&always==1",
    "qty": 2000,
    "dur": 12000,
    "rar": 1,
    "rarj": "白スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "押し切り準備",
    "e": "最終コーナーで先頭だと加速力がわずかに上がる＜作戦・逃げ＞",
    "dt": [],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "random",
      "subtype": "finalcorner_random"
    },
    "segs": [
      {
        "type": "random",
        "subtype": "finalcorner_random"
      }
    ],
    "raw": "running_style==1&is_finalcorner_random==1&order==1",
    "qty": 2000,
    "dur": 30000,
    "rar": 1,
    "rarj": "白スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "差し切り体勢",
    "e": "レース終盤始めの方に中団以降にいると加速力がわずかに上がる＜作戦・差し＞",
    "dt": [],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "random",
      "subtype": "fh"
    },
    "segs": [
      {
        "type": "random",
        "subtype": "fh"
      }
    ],
    "raw": "running_style==3&phase_firsthalf_random==2&order_rate>=40",
    "qty": 2000,
    "dur": 18000,
    "rar": 1,
    "rarj": "白スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "直線一気",
    "e": "ラストスパートの最中なら直線で加速力がわずかに上がる＜作戦・追込＞",
    "dt": [],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "fixed",
      "fixed_point": "ls"
    },
    "segs": [
      {
        "type": "fixed",
        "fixed_point": "ls"
      }
    ],
    "raw": "running_style==4&is_lastspurt==1&corner==0",
    "qty": 2000,
    "dur": 9000,
    "rar": 1,
    "rarj": "白スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "スプリントギア",
    "e": "レース終盤に加速力がわずかに上がる＜短距離＞",
    "dt": [
      1
    ],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "random",
      "subtype": "phase2"
    },
    "segs": [
      {
        "type": "random",
        "subtype": "phase2"
      }
    ],
    "raw": "distance_type==1&phase_random==2",
    "qty": 2000,
    "dur": 30000,
    "rar": 1,
    "rarj": "白スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "様子見",
    "e": "レース中盤に後ろの方だとわずかに疲れにくくなり加速力がちょっと上がる＜短距離＞",
    "dt": [
      1
    ],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "random",
      "subtype": "phase1"
    },
    "segs": [
      {
        "type": "random",
        "subtype": "phase1"
      }
    ],
    "raw": "distance_type==1&phase_random==1&order_rate>50",
    "qty": 1000,
    "dur": 30000,
    "rar": 1,
    "rarj": "白スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "詰め寄り",
    "e": "レース終盤に後ろの方だと速度がわずかに上がり、加速力がほんのちょっと上がる＜短距離＞",
    "dt": [
      1
    ],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "random",
      "subtype": "phase2"
    },
    "segs": [
      {
        "type": "random",
        "subtype": "phase2"
      }
    ],
    "raw": "distance_type==1&phase_random==2&order_rate>50",
    "qty": 500,
    "dur": 30000,
    "rar": 1,
    "rarj": "白スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "上昇気流",
    "e": "レース終盤に後ろの方だと加速力がわずかに上がる＜マイル＞",
    "dt": [
      2
    ],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "random",
      "subtype": "phase2"
    },
    "segs": [
      {
        "type": "random",
        "subtype": "phase2"
      }
    ],
    "raw": "distance_type==2&phase_random==2&order_rate>50",
    "qty": 2000,
    "dur": 30000,
    "rar": 1,
    "rarj": "白スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "食い下がり",
    "e": "最終コーナー以降に詰め寄られると速度がわずかに上がり、加速力がほんのちょっと上がる＜中距離＞",
    "dt": [
      3
    ],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "fixed",
      "fixed_point": "finalcorner"
    },
    "segs": [
      {
        "type": "fixed",
        "fixed_point": "finalcorner"
      }
    ],
    "raw": "distance_type==3&is_finalcorner==1&overtake_target_time>=2",
    "qty": 500,
    "dur": 30000,
    "rar": 1,
    "rarj": "白スキル",
    "rr": [
      "overtake_target_time"
    ],
    "rv": [],
    "unc": 2
  },
  {
    "n": "善後策",
    "e": "レース終盤が迫ったとき前の方にいると加速力がわずかに上がる＜短距離＞",
    "dt": [
      1
    ],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "random",
      "subtype": "lh"
    },
    "segs": [
      {
        "type": "random",
        "subtype": "lh"
      }
    ],
    "raw": "distance_type==1&phase_laterhalf_random==1&order>=2&order_rate<=50",
    "qty": 2000,
    "dur": 30000,
    "rar": 1,
    "rarj": "白スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "仕掛け準備",
    "e": "レース中盤にしばらくの間コース取りが少し上手くなり加速力がわずかに上がる＜短距離＞",
    "dt": [
      1
    ],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "random",
      "subtype": "phase1"
    },
    "segs": [
      {
        "type": "random",
        "subtype": "phase1"
      }
    ],
    "raw": "distance_type==1&phase_random==1",
    "qty": 2000,
    "dur": 40000,
    "rar": 1,
    "rarj": "白スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "抜け駆け禁止",
    "e": "レース序盤に後ろの方にいると前方のウマ娘をわずかに焦らせ動きをちょっと鈍くする＜短距離＞",
    "dt": [
      1
    ],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "random",
      "subtype": "phase0"
    },
    "segs": [
      {
        "type": "random",
        "subtype": "phase0"
      }
    ],
    "raw": "distance_type==1&phase_random==0&order_rate>50&accumulatetime>=5",
    "qty": -500,
    "dur": 12000,
    "rar": 1,
    "rarj": "白スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "アクセラレーション",
    "e": "レース後半に追い抜くと加速力がわずかに上がる＜マイル＞",
    "dt": [
      2
    ],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "random",
      "subtype": "dist_rate_after",
      "rv": 50
    },
    "segs": [
      {
        "type": "random",
        "subtype": "dist_rate_after",
        "rv": 50
      }
    ],
    "raw": "distance_type==2&distance_rate>=50&change_order_onetime<0",
    "qty": 2000,
    "dur": 30000,
    "rar": 1,
    "rarj": "白スキル",
    "rr": [
      "change_order_onetime"
    ],
    "rv": [],
    "unc": 2
  },
  {
    "n": "布石",
    "e": "レース序盤に後ろにいると前の動きをわずかに鈍くする＜マイル＞",
    "dt": [
      2
    ],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "random",
      "subtype": "phase0"
    },
    "segs": [
      {
        "type": "random",
        "subtype": "phase0"
      }
    ],
    "raw": "distance_type==2&phase_random==0&order_rate>50&accumulatetime>=3",
    "qty": -1000,
    "dur": 30000,
    "rar": 1,
    "rarj": "白スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "イナズマステップ",
    "e": "レース中盤にしばらくの間コース取りが少し上手くなり加速力がわずかに上がる＜中距離＞",
    "dt": [
      3
    ],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "random",
      "subtype": "phase1"
    },
    "segs": [
      {
        "type": "random",
        "subtype": "phase1"
      }
    ],
    "raw": "distance_type==3&phase_random==1",
    "qty": 2000,
    "dur": 40000,
    "rar": 1,
    "rarj": "白スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "追い上げ",
    "e": "レース終盤で追い抜くと速度がわずかに上がり加速力がほんのちょっと上がる＜長距離＞",
    "dt": [
      4
    ],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "fixed",
      "fixed_point": "ls"
    },
    "segs": [
      {
        "type": "fixed",
        "fixed_point": "ls"
      }
    ],
    "raw": "distance_type==4&phase==2&change_order_onetime<0",
    "qty": 500,
    "dur": 30000,
    "rar": 1,
    "rarj": "白スキル",
    "rr": [
      "change_order_onetime"
    ],
    "rv": [],
    "unc": 2
  },
  {
    "n": "二の矢",
    "e": "レース終盤に持久力を少し使って加速力をわずかに上げる＜作戦・逃げ＞",
    "dt": [],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "random",
      "subtype": "phase2"
    },
    "segs": [
      {
        "type": "random",
        "subtype": "phase2"
      }
    ],
    "raw": "running_style==1&phase_random==2",
    "qty": 2000,
    "dur": 30000,
    "rar": 1,
    "rarj": "白スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "リスタート",
    "e": "レース序盤にハナを取れていないと前のウマ娘の動きをわずかに鈍くする＜作戦・逃げ＞",
    "dt": [],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "random",
      "subtype": "phase0"
    },
    "segs": [
      {
        "type": "random",
        "subtype": "phase0"
      }
    ],
    "raw": "running_style==1&phase_random==0&order>=2&accumulatetime>=5",
    "qty": -1000,
    "dur": 30000,
    "rar": 1,
    "rarj": "白スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "巧みなステップ",
    "e": "左右に移動するとき加速力がわずかに上がる＜作戦・先行＞",
    "dt": [],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "random",
      "subtype": "other"
    },
    "segs": [
      {
        "type": "random",
        "subtype": "other"
      },
      {
        "type": "random",
        "subtype": "other"
      }
    ],
    "raw": "running_style==2&is_move_lane==1@running_style==2&is_move_lane==2",
    "qty": 2000,
    "dur": 30000,
    "rar": 1,
    "rarj": "白スキル",
    "rr": [
      "is_move_lane"
    ],
    "rv": [],
    "unc": 2
  },
  {
    "n": "直滑降",
    "e": "下り坂で加速力がわずかに上がる＜作戦・先行＞",
    "dt": [],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "slope_down"
    },
    "segs": [
      {
        "type": "slope_down"
      }
    ],
    "raw": "running_style==2&down_slope_random==1",
    "qty": 2000,
    "dur": 30000,
    "rar": 1,
    "rarj": "白スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "まき直し",
    "e": "レース中盤に後ろの方にいると加速力がわずかに上がる＜作戦・先行＞",
    "dt": [],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "random",
      "subtype": "phase1"
    },
    "segs": [
      {
        "type": "random",
        "subtype": "phase1"
      }
    ],
    "raw": "running_style==2&phase_random==1&order_rate>40",
    "qty": 2000,
    "dur": 30000,
    "rar": 1,
    "rarj": "白スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "がんばり屋",
    "e": "追い抜こうとするときしばらくの間加速力がわずかに上がる＜作戦・差し＞",
    "dt": [],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "random",
      "subtype": "other"
    },
    "segs": [
      {
        "type": "random",
        "subtype": "other"
      }
    ],
    "raw": "running_style==3&is_overtake==1&accumulatetime>=5",
    "qty": 2000,
    "dur": 40000,
    "rar": 1,
    "rarj": "白スキル",
    "rr": [
      "is_overtake"
    ],
    "rv": [],
    "unc": 2
  },
  {
    "n": "登山家",
    "e": "上り坂で加速力がわずかに上がる",
    "dt": [],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "slope_up"
    },
    "segs": [
      {
        "type": "slope_up"
      }
    ],
    "raw": "up_slope_random==1",
    "qty": 2000,
    "dur": 30000,
    "rar": 1,
    "rarj": "白スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "地固め",
    "e": "レース序盤にスキルを多く発動すると加速力がわずかに上がる",
    "dt": [],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "random",
      "subtype": "other"
    },
    "segs": [
      {
        "type": "random",
        "subtype": "other"
      }
    ],
    "raw": "activate_count_start>=3",
    "qty": 2000,
    "dur": 30000,
    "rar": 1,
    "rarj": "白スキル",
    "rr": [
      "activate_count_start"
    ],
    "rv": [],
    "unc": 2
  },
  {
    "n": "アオハル点火・力",
    "e": "レース終盤にアオハル魂が燃えレース中のチームメンバーのパワー合計が高いほど加速力がわずかに上がる",
    "dt": [],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "random",
      "subtype": "phase2"
    },
    "segs": [
      {
        "type": "random",
        "subtype": "phase2"
      }
    ],
    "raw": "phase_random==2",
    "qty": 2000,
    "dur": 12000,
    "rar": 1,
    "rarj": "白スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "アオハル点火・根",
    "e": "レース終盤にアオハル魂が燃えレース中のチームメンバーの根性合計が高いほど脚にちょっと力強さが宿る",
    "dt": [],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "random",
      "subtype": "phase2"
    },
    "segs": [
      {
        "type": "random",
        "subtype": "phase2"
      }
    ],
    "raw": "phase_random==2",
    "qty": 1000,
    "dur": 18000,
    "rar": 1,
    "rarj": "白スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "前列狙い",
    "e": "レース終盤にコース取りが少し上手くなり加速力がわずかに上がる＜ダート＞",
    "dt": [],
    "gt": [
      2
    ],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "random",
      "subtype": "phase2"
    },
    "segs": [
      {
        "type": "random",
        "subtype": "phase2"
      }
    ],
    "raw": "ground_type==2&phase_random==2",
    "qty": 2000,
    "dur": 30000,
    "rar": 1,
    "rarj": "白スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "真っ向勝負",
    "e": "レース終盤始めの方で前方にいると加速力がわずかに上がる＜作戦・先行＞",
    "dt": [],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "random",
      "subtype": "fh"
    },
    "segs": [
      {
        "type": "random",
        "subtype": "fh"
      }
    ],
    "raw": "running_style==2&phase_firsthalf_random==2&order_rate<=50",
    "qty": 2000,
    "dur": 18000,
    "rar": 1,
    "rarj": "白スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "綺羅星",
    "e": "レース後半にちょっと呼吸を整え前へ踏み込む育成で重ねた勝利の数だけ効果が高まる",
    "dt": [],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "random",
      "subtype": "after50",
      "rv": 50
    },
    "segs": [
      {
        "type": "random",
        "subtype": "after50",
        "rv": 50
      }
    ],
    "raw": "distance_rate_after_random==50",
    "qty": 1000,
    "dur": 12000,
    "rar": 1,
    "rarj": "白スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "ワンチャンス",
    "e": "レース終盤始めの方で中団以降にいると加速力がわずかに上がる＜中距離＞",
    "dt": [
      3
    ],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "random",
      "subtype": "fh"
    },
    "segs": [
      {
        "type": "random",
        "subtype": "fh"
      }
    ],
    "raw": "distance_type==3&phase_firsthalf_random==2&order_rate>=40",
    "qty": 2000,
    "dur": 18000,
    "rar": 1,
    "rarj": "白スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "恐れぬ心",
    "e": "レース後半に中団にいると速度がわずかに上がり加速力がほんのちょっと上がる＜作戦・差し＞",
    "dt": [],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "random",
      "subtype": "after50",
      "rv": 50
    },
    "segs": [
      {
        "type": "random",
        "subtype": "after50",
        "rv": 50
      }
    ],
    "raw": "running_style==3&distance_rate_after_random==50&order_rate>=30&order_rate<=80",
    "qty": 500,
    "dur": 24000,
    "rar": 1,
    "rarj": "白スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "超遊び癖",
    "e": "スタートがすごく苦手になり出遅れたりスタート時の加速力が低下したりするこのスキルは育成完了後に消滅する",
    "dt": [],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "always"
    },
    "segs": [
      {
        "type": "always"
      }
    ],
    "raw": "always==1",
    "qty": -180000,
    "dur": 20000,
    "rar": 1,
    "rarj": "白スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "意気込み十分",
    "e": "レース終盤に前方にいると加速力がわずかに上がる＜ダート＞",
    "dt": [],
    "gt": [
      2
    ],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "random",
      "subtype": "phase2"
    },
    "segs": [
      {
        "type": "random",
        "subtype": "phase2"
      }
    ],
    "raw": "ground_type==2&phase_random==2&order_rate<=50",
    "qty": 2000,
    "dur": 30000,
    "rar": 1,
    "rarj": "白スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "急浮上",
    "e": "レース終盤に中団以降にいると加速力がわずかに上がる＜ダート＞",
    "dt": [],
    "gt": [
      2
    ],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "random",
      "subtype": "phase2"
    },
    "segs": [
      {
        "type": "random",
        "subtype": "phase2"
      }
    ],
    "raw": "ground_type==2&phase_random==2&order_rate>=50",
    "qty": 2000,
    "dur": 30000,
    "rar": 1,
    "rarj": "白スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "夢の途中",
    "e": "レース後半に中団以前だと速度がわずかに上がり加速力がほんのわずかに上がるファンが多いほど効果が高まる",
    "dt": [],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "random",
      "subtype": "after50",
      "rv": 50
    },
    "segs": [
      {
        "type": "random",
        "subtype": "after50",
        "rv": 50
      }
    ],
    "raw": "distance_rate_after_random==50&order_rate<=65",
    "qty": 700,
    "dur": 12000,
    "rar": 1,
    "rarj": "白スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "一足飛び",
    "e": "レース終盤以降に後方で追い抜こうとすると加速力がわずかに上がる＜短距離/マイル＞",
    "dt": [
      1,
      2
    ],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "fixed",
      "fixed_point": "ls"
    },
    "segs": [
      {
        "type": "fixed",
        "fixed_point": "ls"
      },
      {
        "type": "fixed",
        "fixed_point": "ls"
      }
    ],
    "raw": "distance_type==1&phase>=2&order_rate>=50&is_overtake==1@distance_type==2&phase>=2&order_rate>=50&is_overtake==1",
    "qty": 2000,
    "dur": 20000,
    "rar": 1,
    "rarj": "白スキル",
    "rr": [
      "is_overtake"
    ],
    "rv": [],
    "unc": 2
  },
  {
    "n": "がむしゃら",
    "e": "ラストスパートの最中なら中団以降にいると持久力を少し使って加速力がわずかに上がる＜差し・長距離＞",
    "dt": [
      4
    ],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "fixed",
      "fixed_point": "ls"
    },
    "segs": [
      {
        "type": "fixed",
        "fixed_point": "ls"
      }
    ],
    "raw": "distance_type==4&running_style==3&is_lastspurt==1&order_rate>=40",
    "qty": 2000,
    "dur": 15000,
    "rar": 1,
    "rarj": "白スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "確かな足取り",
    "e": "終盤が迫ったとき先頭にいるか先頭から4バ身以内だと速度と加速力がちょっと上がる＜先行・中距離＞",
    "dt": [
      3
    ],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "random",
      "subtype": "lh"
    },
    "segs": [
      {
        "type": "random",
        "subtype": "lh"
      }
    ],
    "raw": "distance_type==3&running_style==2&phase_laterhalf_random==1&distance_diff_top<=10",
    "qty": 1000,
    "dur": 30000,
    "rar": 1,
    "rarj": "白スキル",
    "rr": [
      "distance_diff_top"
    ],
    "rv": [],
    "unc": 2
  },
  {
    "n": "レースの真髄・根",
    "e": "追い比べをするとき加速力がわずかに上がる",
    "dt": [],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "random",
      "subtype": "other"
    },
    "segs": [
      {
        "type": "random",
        "subtype": "other"
      }
    ],
    "raw": "compete_fight_count>0",
    "qty": 2000,
    "dur": 12000,
    "rar": 1,
    "rarj": "白スキル",
    "rr": [
      "compete_fight_count"
    ],
    "rv": [],
    "unc": 2
  },
  {
    "n": "本領発揮",
    "e": "レース終盤目前に先頭か先頭から4バ身以内につけると、レース終盤に加速力がわずかに上がる＜先行・長距離＞",
    "dt": [
      4
    ],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "random",
      "subtype": "dist_rate_after",
      "rv": 60
    },
    "segs": [
      {
        "type": "random",
        "subtype": "dist_rate_after",
        "rv": 60
      }
    ],
    "raw": "distance_diff_top<=10&distance_rate>=60&phase==1&distance_type==4&running_style==2&phase==2",
    "qty": 2000,
    "dur": 12000,
    "rar": 1,
    "rarj": "白スキル",
    "rr": [
      "distance_diff_top"
    ],
    "rv": [],
    "unc": 2
  },
  {
    "n": "切れ味",
    "e": "レース終盤突入時まで掛からず後方に控え続けていると、終盤始めの方で加速力がわずかに上がる＜作戦・追込＞",
    "dt": [],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "random",
      "subtype": "dist_rate_after",
      "rv": 66
    },
    "segs": [
      {
        "type": "random",
        "subtype": "dist_rate_after",
        "rv": 66
      }
    ],
    "raw": "distance_rate>=66&order_rate_out50_continue==1&temptation_count==0&running_style==4&phase_firsthalf_random==2",
    "qty": 2000,
    "dur": 12000,
    "rar": 1,
    "rarj": "白スキル",
    "rr": [
      "temptation_count"
    ],
    "rv": [],
    "unc": 2
  },
  {
    "n": "海の加護",
    "e": "レース序盤の始めの方に加速力がわずかに上がる、獲得したスキルの数に応じて効果が高まる",
    "dt": [],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "random",
      "subtype": "fh"
    },
    "segs": [
      {
        "type": "random",
        "subtype": "fh"
      }
    ],
    "raw": "phase_firsthalf_random==0",
    "qty": 2000,
    "dur": 15000,
    "rar": 1,
    "rarj": "白スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "ボルテージヒーロー",
    "e": "絶好調なら全ての基礎能力が上がりレース中常にスキルの不利な効果を受けなくなり加速力がちょっと上がる",
    "dt": [],
    "gt": [],
    "gc": [],
    "mv": 5,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "random",
      "subtype": "other"
    },
    "segs": [
      {
        "type": "random",
        "subtype": "other"
      }
    ],
    "raw": "motivation>=5",
    "qty": 1000,
    "dur": -1,
    "rar": 1,
    "rarj": "白スキル",
    "rr": [],
    "rv": [
      "motivation"
    ],
    "unc": 4
  },
  {
    "n": "サンライズヒーロー",
    "e": "天候が晴れでバ場状態が良のとき全ての基礎能力がすごく上がりレース中常に加速力がちょっと上がる",
    "dt": [],
    "gt": [],
    "gc": [
      1
    ],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "random",
      "subtype": "other"
    },
    "segs": [
      {
        "type": "random",
        "subtype": "other"
      }
    ],
    "raw": "weather==1&ground_condition==1",
    "qty": 1000,
    "dur": -1,
    "rar": 1,
    "rarj": "白スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "レイニーヒーロー",
    "e": "天候が雨でバ場状態が不良のときスピードとスタミナがものすごく上がりレース中常に加速力がわずかに上がる",
    "dt": [],
    "gt": [],
    "gc": [
      4
    ],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "random",
      "subtype": "other"
    },
    "segs": [
      {
        "type": "random",
        "subtype": "other"
      }
    ],
    "raw": "weather==3&ground_condition==4",
    "qty": 2000,
    "dur": -1,
    "rar": 1,
    "rarj": "白スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "インサイドヒーロー",
    "e": "枠番が1～3だとスタート後しばらくの間速度と加速力を少し上げ、その後終盤すぐ加速力を少し上げ持久力を回復する",
    "dt": [],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "random",
      "subtype": "other"
    },
    "segs": [
      {
        "type": "random",
        "subtype": "other"
      }
    ],
    "raw": "post_number<=3",
    "qty": 3000,
    "dur": 40000,
    "rar": 1,
    "rarj": "白スキル",
    "rr": [],
    "rv": [
      "post_number"
    ],
    "unc": 4
  },
  {
    "n": "リンケージヒーロー",
    "e": "チームのスキル発動数が6以上だと終盤以降に加速力を少し上げ持久力を回復する、発動数が10以上だと効果が増える",
    "dt": [],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "fixed",
      "fixed_point": "ls"
    },
    "segs": [
      {
        "type": "fixed",
        "fixed_point": "ls"
      }
    ],
    "raw": "phase>=2&activate_count_all_team>=10",
    "qty": 4000,
    "dur": 18000,
    "rar": 1,
    "rarj": "白スキル",
    "rr": [
      "activate_count_all_team"
    ],
    "rv": [],
    "unc": 2
  },
  {
    "n": "スパートヒーロー",
    "e": "レース終盤すぐにすごく前に出て持久力を回復し加速力をちょっと上げる",
    "dt": [],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "fixed",
      "fixed_point": "ls"
    },
    "segs": [
      {
        "type": "fixed",
        "fixed_point": "ls"
      }
    ],
    "raw": "phase>=2",
    "qty": 1000,
    "dur": 30000,
    "rar": 1,
    "rarj": "白スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "心弾んで",
    "e": "レース終盤始めの方で前方にいると加速力がわずかに上がる＜マイル＞",
    "dt": [
      2
    ],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "random",
      "subtype": "fh"
    },
    "segs": [
      {
        "type": "random",
        "subtype": "fh"
      }
    ],
    "raw": "distance_type==2&phase_firsthalf_random==2&order_rate<=50",
    "qty": 2000,
    "dur": 18000,
    "rar": 1,
    "rarj": "白スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "一番乗り",
    "e": "スタート時に加速力がわずかに上がる＜中距離＞",
    "dt": [
      3
    ],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "always"
    },
    "segs": [
      {
        "type": "always"
      }
    ],
    "raw": "distance_type==3&always==1",
    "qty": 2000,
    "dur": 15000,
    "rar": 1,
    "rarj": "白スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "会心の一歩",
    "e": "終盤以降の最終コーナーで中団以前にいる時ゴールまで遠いと加速力がわずかに上がる＜先行/差し＞",
    "dt": [],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "fixed",
      "fixed_point": "finalcorner"
    },
    "segs": [
      {
        "type": "fixed",
        "fixed_point": "finalcorner"
      },
      {
        "type": "fixed",
        "fixed_point": "finalcorner"
      }
    ],
    "raw": "running_style==2&phase>=2&is_finalcorner==1&corner!=0&remain_distance>=600&order_rate<=70@running_style==3&phase>=2&is_finalcorner==1&corner!=0&remain_distance>=600&order_rate<=70",
    "qty": 2000,
    "dur": 9000,
    "rar": 1,
    "rarj": "白スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "狙いを定めて",
    "e": "レース終盤始めの方早めに前の方にいると加速力がわずかに上がる＜先行・長距離＞",
    "dt": [
      4
    ],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "random",
      "subtype": "fq"
    },
    "segs": [
      {
        "type": "random",
        "subtype": "fq"
      }
    ],
    "raw": "running_style==2&distance_type==4&phase_firstquarter_random==2&order_rate<=50",
    "qty": 2000,
    "dur": 12000,
    "rar": 1,
    "rarj": "白スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "迷いなし",
    "e": "ラストスパートの最中なら直線で前の方だと加速力がわずかに上がる＜逃げ・長距離＞",
    "dt": [
      4
    ],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "fixed",
      "fixed_point": "ls"
    },
    "segs": [
      {
        "type": "fixed",
        "fixed_point": "ls"
      }
    ],
    "raw": "distance_type==4&running_style==1&is_lastspurt==1&corner==0&order<=3",
    "qty": 2000,
    "dur": 9000,
    "rar": 1,
    "rarj": "白スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "急発進",
    "e": "スタート時に加速力がわずかに上がる＜短距離＞",
    "dt": [
      1
    ],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "always"
    },
    "segs": [
      {
        "type": "always"
      }
    ],
    "raw": "distance_type==1&always==1",
    "qty": 2000,
    "dur": 15000,
    "rar": 1,
    "rarj": "白スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "渾身の足取り",
    "e": "終盤以降の最終コーナーで中団以降にいると加速力がわずかに上がる＜追込・中距離＞",
    "dt": [
      3
    ],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "fixed",
      "fixed_point": "finalcorner"
    },
    "segs": [
      {
        "type": "fixed",
        "fixed_point": "finalcorner"
      }
    ],
    "raw": "distance_type==3&running_style==4&phase>=2&is_finalcorner==1&corner!=0&order_rate>=40",
    "qty": 2000,
    "dur": 9000,
    "rar": 1,
    "rarj": "白スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "好機を捉えて",
    "e": "レース終盤始めの方早めに中団以降にいると加速力がわずかに上がる＜追込・長距離＞",
    "dt": [
      4
    ],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "random",
      "subtype": "fq"
    },
    "segs": [
      {
        "type": "random",
        "subtype": "fq"
      }
    ],
    "raw": "running_style==4&distance_type==4&phase_firstquarter_random==2&order_rate>=40",
    "qty": 2000,
    "dur": 12000,
    "rar": 1,
    "rarj": "白スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "力の限り",
    "e": "レース終盤始めの方で前方にいると加速力がわずかに上がる＜先行・ダート＞",
    "dt": [],
    "gt": [
      2
    ],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "random",
      "subtype": "fh"
    },
    "segs": [
      {
        "type": "random",
        "subtype": "fh"
      }
    ],
    "raw": "ground_type==2&running_style==2&phase_firsthalf_random==2&order_rate<=50",
    "qty": 2000,
    "dur": 18000,
    "rar": 1,
    "rarj": "白スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "正面突破",
    "e": "レース終盤始めの方で前方にいると加速力がわずかに上がる＜中距離＞",
    "dt": [
      3
    ],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "random",
      "subtype": "fh"
    },
    "segs": [
      {
        "type": "random",
        "subtype": "fh"
      }
    ],
    "raw": "distance_type==3&phase_firsthalf_random==2&order_rate<=50",
    "qty": 2000,
    "dur": 18000,
    "rar": 1,
    "rarj": "白スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "覚悟を決めて",
    "e": "レース終盤始めの方早めに前の方にいると加速力がわずかに上がる＜逃げ・長距離＞",
    "dt": [
      4
    ],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "random",
      "subtype": "fq"
    },
    "segs": [
      {
        "type": "random",
        "subtype": "fq"
      }
    ],
    "raw": "running_style==1&distance_type==4&phase_firstquarter_random==2&order_rate<=50",
    "qty": 2000,
    "dur": 12000,
    "rar": 1,
    "rarj": "白スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "駆け降り",
    "e": "下り坂で加速力がわずかに上がる＜作戦・差し＞",
    "dt": [],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "slope_down"
    },
    "segs": [
      {
        "type": "slope_down"
      }
    ],
    "raw": "running_style==3&down_slope_random==1",
    "qty": 2000,
    "dur": 30000,
    "rar": 1,
    "rarj": "白スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "逃げ切り体勢",
    "e": "終盤以降の最終コーナーで3番手以内にいると加速力がわずかに上がる＜逃げ・中距離＞",
    "dt": [
      3
    ],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "fixed",
      "fixed_point": "finalcorner"
    },
    "segs": [
      {
        "type": "fixed",
        "fixed_point": "finalcorner"
      }
    ],
    "raw": "distance_type==3&running_style==1&phase>=2&is_finalcorner==1&corner!=0&order<=3",
    "qty": 2000,
    "dur": 9000,
    "rar": 1,
    "rarj": "白スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "追い風に乗って",
    "e": "レース終盤始めの方早めに前方にいると加速力がわずかに上がる＜逃げ・中距離＞",
    "dt": [
      3
    ],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "random",
      "subtype": "fq"
    },
    "segs": [
      {
        "type": "random",
        "subtype": "fq"
      }
    ],
    "raw": "running_style==1&distance_type==3&phase_firstquarter_random==2&order_rate<=50",
    "qty": 2000,
    "dur": 12000,
    "rar": 1,
    "rarj": "白スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "憧れを越えて",
    "e": "レース終盤始めの方早めに前方にいると加速力がわずかに上がる＜先行・中距離＞",
    "dt": [
      3
    ],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "random",
      "subtype": "fq"
    },
    "segs": [
      {
        "type": "random",
        "subtype": "fq"
      }
    ],
    "raw": "running_style==2&distance_type==3&phase_firstquarter_random==2&order_rate<=50",
    "qty": 2000,
    "dur": 12000,
    "rar": 1,
    "rarj": "白スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "ターニングポイント",
    "e": "レース終盤始めの方に中団以降にいると加速力がわずかに上がる＜差し・短距離＞",
    "dt": [
      1
    ],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "random",
      "subtype": "fh"
    },
    "segs": [
      {
        "type": "random",
        "subtype": "fh"
      }
    ],
    "raw": "running_style==3&distance_type==1&phase_firsthalf_random==2&order_rate>=40",
    "qty": 2000,
    "dur": 18000,
    "rar": 1,
    "rarj": "白スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "譲れぬ一歩",
    "e": "レース終盤始めの方で前方にいると加速力がわずかに上がる＜逃げ・短距離＞",
    "dt": [
      1
    ],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "random",
      "subtype": "fh"
    },
    "segs": [
      {
        "type": "random",
        "subtype": "fh"
      }
    ],
    "raw": "running_style==1&distance_type==1&phase_firsthalf_random==2&order_rate<=50",
    "qty": 2000,
    "dur": 18000,
    "rar": 1,
    "rarj": "白スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "火花散らして",
    "e": "レース終盤始めの方で前方にいると加速力がわずかに上がる＜先行・短距離＞",
    "dt": [
      1
    ],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "random",
      "subtype": "fh"
    },
    "segs": [
      {
        "type": "random",
        "subtype": "fh"
      }
    ],
    "raw": "running_style==2&distance_type==1&phase_firsthalf_random==2&order_rate<=50",
    "qty": 2000,
    "dur": 18000,
    "rar": 1,
    "rarj": "白スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "垣間見た光",
    "e": "レース終盤始めの方早めに中団以降にいると加速力がわずかに上がる＜追込・中距離＞",
    "dt": [
      3
    ],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "random",
      "subtype": "fq"
    },
    "segs": [
      {
        "type": "random",
        "subtype": "fq"
      }
    ],
    "raw": "running_style==4&distance_type==3&phase_firstquarter_random==2&order_rate>=40",
    "qty": 2000,
    "dur": 12000,
    "rar": 1,
    "rarj": "白スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "足任せ",
    "e": "レース終盤始めの方で中団以降にいると加速力がわずかに上がる＜マイル＞",
    "dt": [
      2
    ],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "random",
      "subtype": "fh"
    },
    "segs": [
      {
        "type": "random",
        "subtype": "fh"
      }
    ],
    "raw": "distance_type==2&phase_firsthalf_random==2&order_rate>=40",
    "qty": 2000,
    "dur": 18000,
    "rar": 1,
    "rarj": "白スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "勇気の一歩",
    "e": "ラストスパートの最中なら直線で加速力がわずかに上がる＜作戦・先行＞",
    "dt": [],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "fixed",
      "fixed_point": "ls"
    },
    "segs": [
      {
        "type": "fixed",
        "fixed_point": "ls"
      }
    ],
    "raw": "running_style==2&is_lastspurt==1&corner==0",
    "qty": 2000,
    "dur": 9000,
    "rar": 1,
    "rarj": "白スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "頂を目指して",
    "e": "レース終盤始めの方早めに中団以降にいると加速力がわずかに上がる＜差し・中距離＞",
    "dt": [
      3
    ],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "random",
      "subtype": "fq"
    },
    "segs": [
      {
        "type": "random",
        "subtype": "fq"
      }
    ],
    "raw": "running_style==3&distance_type==3&phase_firstquarter_random==2&order_rate>=40",
    "qty": 2000,
    "dur": 12000,
    "rar": 1,
    "rarj": "白スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "ヒートアップ",
    "e": "レース終盤始めの方に中団以降にいると加速力がわずかに上がる＜追込・短距離＞",
    "dt": [
      1
    ],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "random",
      "subtype": "fh"
    },
    "segs": [
      {
        "type": "random",
        "subtype": "fh"
      }
    ],
    "raw": "running_style==4&distance_type==1&phase_firsthalf_random==2&order_rate>=40",
    "qty": 2000,
    "dur": 18000,
    "rar": 1,
    "rarj": "白スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "急降下",
    "e": "下り坂で加速力がわずかに上がる＜作戦・追込＞",
    "dt": [],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "slope_down"
    },
    "segs": [
      {
        "type": "slope_down"
      }
    ],
    "raw": "running_style==4&down_slope_random==1",
    "qty": 2000,
    "dur": 30000,
    "rar": 1,
    "rarj": "白スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "ここ一番",
    "e": "レース終盤始めの方早めに中団以降にいると加速力がわずかに上がる＜差し・長距離＞",
    "dt": [
      4
    ],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "random",
      "subtype": "fq"
    },
    "segs": [
      {
        "type": "random",
        "subtype": "fq"
      }
    ],
    "raw": "running_style==3&distance_type==4&phase_firstquarter_random==2&order_rate>=40",
    "qty": 2000,
    "dur": 12000,
    "rar": 1,
    "rarj": "白スキル",
    "rr": [],
    "rv": [],
    "unc": 0
  },
  {
    "n": "押しの一手",
    "e": "終盤以降かつ残り600mを切っているとき先頭にいるか前方で追い抜こうとすると加速力がわずかに上がる＜逃げ/先行＞",
    "dt": [],
    "gt": [],
    "gc": [],
    "mv": null,
    "track": [],
    "cd_ge": null,
    "cd_le": null,
    "cd_eq": null,
    "tm": {
      "type": "random",
      "subtype": "remain_lte",
      "rv": 600
    },
    "segs": [
      {
        "type": "random",
        "subtype": "other"
      },
      {
        "type": "random",
        "subtype": "remain_lte",
        "rv": 600
      },
      {
        "type": "random",
        "subtype": "remain_lte",
        "rv": 600
      }
    ],
    "raw": "running_style==1@running_style==2&phase>=2&remain_distance<=600&order==1@phase>=2&remain_distance<=600&is_overtake==1&order_rate<=50",
    "qty": 2000,
    "dur": 15000,
    "rar": 1,
    "rarj": "白スキル",
    "rr": [
      "is_overtake"
    ],
    "rv": [],
    "unc": 2
  }
];
