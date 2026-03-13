# Tichu Guide R1 - Development Roadmap

티츄 가이드 사이트 개발을 위한 단계별 로드맵 및 이슈 계획입니다.

## Phase 1: Infrastructure & Core Setup (인프라 및 핵심 설정)
- [ ] **Issue #1:** SPA 개발 환경 초기화 및 CI/CD 워크플로우 구성
  - Solid JS, Vite, Tailwind CSS 설정
  - GitHub Actions를 통한 GitHub Pages 자동 배포 (release 브랜치 PR 시)
- [ ] **Issue #2:** 기본 레이아웃 및 내비게이션 구현
  - 모바일 우선 반응형 레이아웃
  - 하단 탭 바 또는 사이드 메뉴 (Quick Navigation)

## Phase 2: Content Implementation (콘텐츠 구현)
- [ ] **Issue #3:** 티츄 게임 준비 및 기본 규칙 페이지 작성
  - 카드 구성 (참새, 봉, 개, 용 등 특수 카드 포함)
  - 초기 세팅 및 카드 분배 방식
- [ ] **Issue #4:** 족보 및 상세 규칙 페이지 작성
  - 싱글, 페어, 연속 페어, 트리플, 풀하우스, 스트레이트
  - 티츄 선언 (그랜드 티츄, 스몰 티츄) 및 폭탄 규칙
- [ ] **Issue #5:** 점수 계산 및 팁 페이지 작성
  - 카드별 점수 (5, 10, K 등) 및 보너스 점수 계산법
  - 실전 점수 계산 팁 UI 구성

## Phase 3: UI/UX Enhancement (UI/UX 고도화)
- [ ] **Issue #6:** 모바일 최적화 및 인터랙션 강화
  - Framer Motion (또는 Solid equivalent)을 활용한 매끄러운 전환 효과
  - 다크 모드 지원 및 가독성 개선
- [ ] **Issue #7:** 에티켓 및 주의사항 안내 섹션 추가
  - 게임 진행간 매너 및 흔한 실수 방지 가이드

## Phase 4: Finalization & Launch (마무리 및 런칭)
- [ ] **Issue #8:** 최종 QA 및 성능 최적화
  - Lighthouse 점수 최적화 (SEO, 접근성)
  - 라이선스 및 Disclaimer 최종 확인
- [ ] **Issue #9:** 배포 자동화 및 메인 브랜치 병합
  - main -> release PR 생성 및 자동 배포 확인
