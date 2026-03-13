export const dict = {
  ko: {
    title: '티츄 가이드 R1',
    subtitle: '광고 없이 깔끔하게 확인하는 티츄 보드게임의 모든 규칙과 팁',
    footer_credit: 'Designed by naturalkei',
    nav: {
      home: '홈',
      rules: '규칙',
      score: '점수',
      tips: '팁'
    },
    menu: {
      setup: '게임 준비',
      setup_desc: '카드 구성 및 분배',
      rules: '상세 규칙',
      rules_desc: '족보 및 진행 방식',
      score: '점수 계산',
      score_desc: '계산기 및 보너스',
      tips: '매너 팁',
      tips_desc: '에티켓 가이드'
    }
  },
  en: {
    title: 'Tichu Guide R1',
    subtitle: 'All rules and tips for Tichu board game, cleanly without ads',
    footer_credit: 'Designed by naturalkei',
    nav: {
      home: 'Home',
      rules: 'Rules',
      score: 'Score',
      tips: 'Tips'
    },
    menu: {
      setup: 'Setup',
      setup_desc: 'Card composition & distribution',
      rules: 'Rules',
      rules_desc: 'Hands & gameplay',
      score: 'Score',
      score_desc: 'Calculator & bonuses',
      tips: 'Manner Tips',
      tips_desc: 'Etiquette guide'
    }
  },
  ja: {
    title: 'ティチュガイド R1',
    subtitle: '広告なしでスッキリ 확인できるティチュの全ルールとチップ',
    footer_credit: 'Designed by naturalkei',
    nav: {
      home: 'ホーム',
      rules: 'ルール',
      score: 'スコア',
      tips: 'チップ'
    },
    menu: {
      setup: '準備',
      setup_desc: 'カード構成と配布',
      rules: '詳細ルール',
      rules_desc: '役と進行方法',
      score: '得点計算',
      score_desc: '計算機とボーナス',
      tips: 'マナー',
      tips_desc: 'エチケットガイド'
    }
  },
  zh: {
    title: '提储指南 R1',
    subtitle: '无广告，清晰查看提储桌游的所有规则和技巧',
    footer_credit: 'Designed by naturalkei',
    nav: {
      home: '首页',
      rules: '规则',
      score: '分数',
      tips: '技巧'
    },
    menu: {
      setup: '游戏准备',
      setup_desc: '卡牌构成与分配',
      rules: '详细规则',
      rules_desc: '牌型与流程',
      score: '分数计算',
      score_desc: '计算器与奖励',
      tips: '礼仪技巧',
      tips_desc: '礼仪指南'
    }
  }
}

export type Locale = keyof typeof dict
export type RawDict = typeof dict.ko
