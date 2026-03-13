export const dict = {
  ko: {
    title: 'Tichu Guide',
    subtitle: '티츄 보드게임의 모든 규칙과 팁',
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
    },
    rules: {
      tabs: {
        setup: '준비',
        cards: '카드',
        hands: '족보',
        special: '특수'
      },
      setup: {
        title: '게임 준비',
        step1: '4명의 플레이어가 2명씩 팀을 이룹니다. (같은 팀끼리 마주 보고 앉습니다)',
        step2: '총 56장의 카드를 1장씩 돌아가며 모두 나눠 갖습니다. (각자 14장)',
        step3: '라지 티츄 선언: 카드를 8장 받았을 때 선언할 수 있습니다.',
        step4: '카드 교환: 팀원에게 1장, 상대 팀 2명에게 각 1장씩 총 3장을 동시에 교환합니다.'
      },
      cards: {
        title: '카드 구성',
        normal: '일반 카드 (52장)',
        normal_desc: '4가지 문양, 각 2~A까지 13장',
        special: '특수 카드 (4장)',
        special_desc: '참새(1), 봉(Mah Jong), 개(Dog), 용(Dragon)'
      },
      hands: {
        title: '족보 (조합)',
        single: '싱글',
        single_desc: '카드 1장',
        pair: '페어',
        pair_desc: '숫자가 같은 카드 2장',
        consecutive_pair: '연속 페어',
        consecutive_pair_desc: '숫자가 이어지는 2개 이상의 페어',
        triple: '트리플',
        triple_desc: '숫자가 같은 카드 3장',
        full_house: '풀하우스',
        full_house_desc: '트리플 + 페어',
        straight: '스트레이트',
        straight_desc: '5장 이상의 연속된 숫자',
        bomb: '폭탄 (Bomb)',
        bomb_desc: '포카(숫자 4장) 또는 스트레이트 플러시(5장 이상). 언제든 난입 가능!'
      },
      special: {
        title: '특수 카드 상세',
        dragon: '용 (Dragon)',
        dragon_desc: '최강의 싱글 카드. 승리 시 딴 카드를 상대에게 주어야 함.',
        mahjong: '봉 (Mah Jong)',
        mahjong_desc: '숫자 1로 간주. 시작 플레이어가 됨. 특정 숫자 호출 가능.',
        phoenix: '참새 (Phoenix)',
        phoenix_desc: '조커 카드. 어떤 숫자로도 변신 가능. (폭탄 제외)',
        dog: '개 (Dog)',
        dog_desc: '자신의 턴에 내면 팀원에게 턴을 넘김.'
      }
    },
    score: {
      title: '점수 계산',
      info_title: '점수 계산의 기초',
      info_desc: '게임이 끝나면 획득한 카드들의 점수를 합산합니다. 전체 카드의 점수 총합은 항상 100점입니다.',
      card_points: '카드별 점수',
      special_bonus: '특수 상황 보너스',
      one_two: '원투 (1-2위 승리)',
      one_two_desc: '같은 팀이 1위와 2위를 모두 차지하면 점수 합산 없이 즉시 200점 획득.',
      tichu_bonus: '스몰 티츄 / 그랜드 티츄',
      tichu_bonus_desc: '성공 시 각각 +100점 / +200점, 실패 시 동일한 점수 감점.',
      calculator: '퀵 점수 계산기',
      team_a: '우리 팀',
      team_b: '상대 팀',
      calc_note: '라운드별 합산 점수를 기록하세요.'
    },
    tips: {
      title: '매너 및 팁',
      hero_title: '티츄는 신사적인 게임입니다',
      hero_desc: '함께 즐기는 플레이어들을 배려할 때 더욱 즐거운 게임이 됩니다.',
      etiquette: '진행 에티켓',
      etiquette_items: [
        { title: '카드 교환 매너', desc: '모든 플레이어가 카드를 엎어놓을 때까지 기다린 후 동시에 확인합니다.' },
        { title: '불필요한 딜레이 방지', desc: '자신의 차례가 오기 전에 미리 낼 카드를 생각하여 원활한 진행을 돕습니다.' },
        { title: '팀원과의 소통', desc: '게임 중 직접적인 대화로 정보를 공유하는 것은 금지되어 있습니다.' }
      ],
      dos_donts: "Do's & Don'ts",
      dos_donts_items: [
        { type: 'do', title: '팀원의 티츄 응원하기', desc: '팀원이 티츄를 불렀다면, 자신이 1등을 하기보다 팀원의 1등을 돕는 플레이를 하세요.' },
        { type: 'dont', title: '늦은 티츄 선언', desc: '이미 카드가 나간 뒤에 티츄를 선언하는 것은 에티켓에 어긋납니다.' }
      ],
      footer_quote: '“승패보다 중요한 것은 즐거운 게임을 만드는 태도입니다.”'
    }
  },
  en: {
    title: 'Tichu Guide',
    subtitle: 'All rules and tips for Tichu board game',
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
    },
    rules: {
      tabs: {
        setup: 'Setup',
        cards: 'Cards',
        hands: 'Hands',
        special: 'Special'
      },
      setup: {
        title: 'Game Setup',
        step1: '4 players form 2 teams. (Teammates sit across from each other)',
        step2: 'Deal all 56 cards one by one. (14 cards each)',
        step3: 'Grand Tichu: Can be declared after receiving first 8 cards.',
        step4: 'Card Exchange: Exchange 1 card with teammate and 1 each with opponents (3 total).'
      },
      cards: {
        title: 'Card Composition',
        normal: 'Normal Cards (52)',
        normal_desc: '4 suits, 13 cards each (2 to A)',
        special: 'Special Cards (4)',
        special_desc: 'Mah Jong(1), Phoenix, Dog, Dragon'
      },
      hands: {
        title: 'Hands (Combinations)',
        single: 'Single',
        single_desc: '1 card',
        pair: 'Pair',
        pair_desc: '2 cards of the same rank',
        consecutive_pair: 'Consecutive Pairs',
        consecutive_pair_desc: '2 or more pairs of consecutive ranks',
        triple: 'Triple',
        triple_desc: '3 cards of the same rank',
        full_house: 'Full House',
        full_house_desc: 'Triple + Pair',
        straight: 'Straight',
        straight_desc: '5 or more cards in numerical order',
        bomb: 'Bomb',
        bomb_desc: '4 of a kind or Straight Flush (5+). Can be played at any time!'
      },
      special: {
        title: 'Special Card Details',
        dragon: 'Dragon',
        dragon_desc: 'The strongest single card. Must give the trick to an opponent.',
        mahjong: 'Mah Jong',
        mahjong_desc: 'Ranked as 1. Becomes starting player. Can call a rank.',
        phoenix: 'Phoenix',
        phoenix_desc: 'Joker card. Can be any rank (except for bombs).',
        dog: 'Dog',
        dog_desc: 'Passes the turn to your teammate.'
      }
    },
    score: {
      title: 'Score Calculation',
      info_title: 'Basics of Scoring',
      info_desc: 'At the end of the game, sum the points of cards you won. The total points of all cards is always 100.',
      card_points: 'Points per Card',
      special_bonus: 'Special Bonuses',
      one_two: '1-2 Victory (Double Out)',
      one_two_desc: 'If a team takes 1st and 2nd place, they immediately gain 200 points without card counting.',
      tichu_bonus: 'Small Tichu / Grand Tichu',
      tichu_bonus_desc: 'Successful: +100 / +200 points. Failure: deduction of the same amount.',
      calculator: 'Quick Score Calculator',
      team_a: 'Our Team',
      team_b: 'Opponents',
      calc_note: 'Record the cumulative score for each round.'
    },
    tips: {
      title: 'Manner & Tips',
      hero_title: 'Tichu is a Gentlemanly Game',
      hero_desc: 'The game becomes more enjoyable when you consider other players.',
      etiquette: 'Gameplay Etiquette',
      etiquette_items: [
        { title: 'Card Exchange Manner', desc: 'Wait until all players have placed their cards face down before checking them.' },
        { title: 'Avoid Unnecessary Delays', desc: 'Think about your move before your turn to ensure smooth gameplay.' },
        { title: 'Communication', desc: 'Directly sharing information about your hand is strictly forbidden.' }
      ],
      dos_donts: "Do's & Don'ts",
      dos_donts_items: [
        { type: 'do', title: 'Support Teammate’s Tichu', desc: 'If your teammate calls Tichu, play to help them finish 1st rather than trying to finish 1st yourself.' },
        { type: 'dont', title: 'Late Tichu Declaration', desc: 'Declaring Tichu after a card has already been played is against etiquette.' }
      ],
      footer_quote: '“What matters more than winning or losing is the attitude that makes the game enjoyable.”'
    }
  },
  ja: {
    title: 'Tichu Guide',
    subtitle: 'ティチュの全ルールとチップ',
    footer_credit: 'Designed by naturalkei',
    nav: {
      home: '홈',
      rules: 'ルール',
      score: 'スコア',
      tips: 'チップ'
    },
    menu: {
      setup: '準備',
      setup_desc: '카드 구성과配布',
      rules: '詳細ルール',
      rules_desc: '役と進行方法',
      score: '得点計算',
      score_desc: '計算機とボーナス',
      tips: 'マナー',
      tips_desc: 'エチケットガイド'
    },
    rules: {
      tabs: {
        setup: '準備',
        cards: 'カード',
        hands: '役',
        special: '特殊'
      },
      setup: {
        title: 'ゲーム準備',
        step1: '4人のプレイヤーが2人ずつチームを組みます。(チームメイトは向かい合って座ります)',
        step2: '全56枚のカードを1枚ずつ配ります。(各自14枚)',
        step3: 'グランドティチュ：最初の8枚を受け取った時点で宣言可能。',
        step4: '카드 교환: 味方に1枚, 相手2人に各1枚, 計3枚를 동시에 교환합니다.'
      },
      cards: {
        title: 'カード構成',
        normal: '通常カード (52枚)',
        normal_desc: '4つのスート, 各2〜Aまでの13枚',
        special: '特殊カード (4枚)',
        special_desc: '雀(1), 鳳凰, 犬, 龍'
      },
      hands: {
        title: '役 (組み合わせ)',
        single: 'シングル',
        single_desc: 'カード1枚',
        pair: 'ペア',
        pair_desc: '同じ数字のカード2枚',
        consecutive_pair: '連続ペア',
        consecutive_pair_desc: '数字が続く2つ以上のペア',
        triple: 'スリーカード',
        triple_desc: '同じ数字のカード3枚',
        full_house: 'フルハウス',
        full_house_desc: 'スリーカード + ペア',
        straight: 'ストレート',
        straight_desc: '5枚以上の連続した数字',
        bomb: '爆弾 (Bomb)',
        bomb_desc: '4枚の同数 또는 5枚以上のストレートフラッシュ. いつでも出せます!'
      },
      special: {
        title: '特殊カード詳細',
        dragon: '龍 (Dragon)',
        dragon_desc: '最強のシングル。勝利したトリックは相手に渡さなければなりません。',
        mahjong: '雀 (Mah Jong)',
        mahjong_desc: '数字の1。最初のプレイヤーになります。数字をコールできます。',
        phoenix: '鳳凰 (Phoenix)',
        phoenix_desc: 'ジョーカー。爆弾以外のどの数字にもなれます。',
        dog: '犬 (Dog)',
        dog_desc: '自分のターンに使うと, 味方にターンを回します。'
      }
    },
    score: {
      title: '得点計算',
      info_title: '計算の基本',
      info_desc: 'ゲーム終了時に獲得したカードの点数を合計します。全カードの合計は常に100点です。',
      card_points: 'カード別の点数',
      special_bonus: '特殊ボーナス',
      one_two: 'ワンツー (1-2位独占)',
      one_two_desc: '同じチームが1位と2位を独占した場合, 点数計算なしで即座に200点獲得。',
      tichu_bonus: '스몰 / 그랜드티츄',
      tichu_bonus_desc: '成功: +100 / +200点。失敗: 同等の減점.',
      calculator: 'クイック計算機',
      team_a: '自チーム',
      team_b: '相手チーム',
      calc_note: 'ラウンドごとの累計得点を記録してください。'
    },
    tips: {
      title: 'マナー＆チップ',
      hero_title: '티츄는 신사적인 게임입니다',
      hero_desc: '他のプレイヤーへの配慮がゲームをより楽しくします。',
      etiquette: '進行マナー',
      etiquette_items: [
        { title: '카드 교환의 매너', desc: '전원이 카드를 엎을 때까지 기다린 후, 동시에 확인합니다.' },
        { title: '지연 방지', desc: '자신의 차례가 오기 전에 낼 카드를 생각하여 원활한 진행을 돕습니다.' },
        { title: '커뮤니케이션', desc: '손패에 관한 직접적인 정보 공유는 금지되어 있습니다.' }
      ],
      dos_donts: "Do's & Don'ts",
      dos_donts_items: [
        { type: 'do', title: '맛의 티츄를 응원', desc: '味方がティチュを宣言したら, 自分が上がるより味方の1位を助けるプレイをしましょう。' },
        { type: 'dont', title: '너무 늦은 티츄 선언', desc: '既にカードが出された後にティチュを宣言するのはマナー違反입니다.' }
      ],
      footer_quote: '「勝敗よりも大切なのは, 楽しいゲームを作る態度です」'
    }
  },
  zh: {
    title: 'Tichu Guide',
    subtitle: '提储桌游的所有规则和技巧',
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
    },
    rules: {
      tabs: {
        setup: '准备',
        cards: '卡牌',
        hands: '牌型',
        special: '特殊'
      },
      setup: {
        title: '游戏准备',
        step1: '4名玩家分为两队。(队友面对面而坐)',
        step2: '依次分发全部56张卡牌。(每人14张)',
        step3: '大提储(Grand Tichu)：收到前8张牌时可以宣布。',
        step4: '交换卡牌：与队友交换1张，与两名对手各交换1张(共3张)。'
      },
      cards: {
        title: '卡牌构成',
        normal: '普通牌 (52张)',
        normal_desc: '4种花色，每种从2到A各13张',
        special: '特殊牌 (4장)',
        special_desc: '雀(1), 凤, 狗, 龙'
      },
      hands: {
        title: '牌型 (组合)',
        single: '单张',
        single_desc: '1张牌',
        pair: '对子',
        pair_desc: '2张数字相同的牌',
        consecutive_pair: '连对',
        consecutive_pair_desc: '2个 or 更多连续数字的对子',
        triple: '三张',
        triple_desc: '3张数字相同的牌',
        full_house: '葫芦',
        full_house_desc: '三张 + 对子',
        straight: '顺子',
        straight_desc: '5张 or 更多连续数字的牌',
        bomb: '炸弹 (Bomb)',
        bomb_desc: '4张同号 or 5张以上同花顺. 可以在任何时候打出!'
      },
      special: {
        title: '特殊牌详情',
        dragon: '龙 (Dragon)',
        dragon_desc: '最强单张。赢得的牌必须交给对手。',
        mahjong: '雀 (Mah Jong)',
        mahjong_desc: '数字为1。作为起始玩家。可以要求特定数字。',
        phoenix: '凤 (Phoenix)',
        phoenix_desc: '百搭牌。可以代替除炸弹外的任何数字。',
        dog: '狗 (Dog)',
        dog_desc: '在自己的回合打出, 将出牌权交给队友。'
      }
    },
    score: {
      title: '分数计算',
      info_title: '计分基础',
      info_desc: '游戏结束时，计算获得的卡牌分数值。所有卡牌的总分始终为100分。',
      card_points: '每张卡的点数',
      special_bonus: '特殊奖励',
      one_two: '一二名胜利',
      one_two_desc: '如果同队获得第一和第二名，则无需计分，直接获得200分。',
      tichu_bonus: '小提储 / 大提储',
      tichu_bonus_desc: '成功：+100 / +200分。失败：扣除相应分数。',
      calculator: '快速计分器',
      team_a: '我方队伍',
      team_b: '对手队伍',
      calc_note: '记录每轮的累计分数。'
    },
    tips: {
      title: '礼仪与技巧',
      hero_title: '提储是一项绅士游戏',
      hero_desc: '尊重和体谅其他玩家会让游戏更加愉快。',
      etiquette: '游戏礼仪',
      etiquette_items: [
        { title: '换牌礼仪', desc: '等待所有玩家都放好换牌后，再同时查看。' },
        { title: '避免不必要的延迟', desc: '在轮到自己之前先想好要出的牌，以确保游戏流畅。' },
        { title: '沟通', desc: '严禁直接通过对话分享手牌信息。' }
      ],
      dos_donts: "Do's & Don'ts",
      dos_donts_items: [
        { type: 'do', title: '支持队友的提储', desc: '如果队友喊了提储，应协助其获得第一，而不是自己争第一。' },
        { type: 'dont', title: '过晚喊提储', desc: '在已经有人出牌后才喊提储是不符合礼仪의。' }
      ],
      footer_quote: '“比起胜负，更重要的是创造愉快游戏氛围的态度。”'
    }
  }
}

export type Locale = keyof typeof dict
export type RawDict = typeof dict.ko
