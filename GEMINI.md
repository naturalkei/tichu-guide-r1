# GEMINI Mandates - Tichu Guide R1

이 문서는 `tichu-guide-r1` 프로젝트를 위한 최우선 지시사항을 정의합니다.

## 프로젝트 개요
티츄 보드게임의 규칙과 가이드를 광고 없이 깔끔한 모바일 우선 UI로 제공하는 한국어 가이드 사이트입니다.

## 핵심 요구사항 (Mandates)

### 1. 제품 및 디자인 지향점
- **모바일 우선(Mobile-First):** 모든 UI 디자인은 모바일 환경에서 최적의 가독성을 보장해야 합니다.
- **광고 없음 & 깔끔한 UI:** 사용자 경험을 저해하는 요소 없이 명확한 정보 전달을 최우선으로 합니다.
- **한국어 지원:** 모든 가이드 내용은 정확하고 친절한 한국어로 작성되어야 합니다.

### 2. 기술 스택 및 환경
- **Package Manager:** `pnpm`을 기본 패키지 매니저로 사용합니다.
- **SPA (Single Page Application):** `tichu-board-r1` 프로젝트의 설정을 참고하여 SPA 환경을 구축합니다. (Solid JS, Vite, Tailwind CSS v4)
- **Linting & Formatting:** ESLint 9 (Flat Config) 및 Prettier를 사용하여 코드 품질을 관리합니다.
- **GitHub Pages 배포:** `main` 브랜치를 `release` 브랜치로 PR 보낼 때 GitHub Actions를 통해 GitHub Pages에 자동 배포되는 CI/CD 워크플로우를 구축합니다.
- **Release Automation:** `release-please` 워크플로우를 통해 버전 관리 및 CHANGELOG 생성을 자동화합니다.

### 3. 개발 워크플로우
- **브랜치 전략:** 모든 개별 작업 및 지시사항은 독립적인 피처 브랜치(feature branches)에서 수행하며, 작업 완료 후 `main` 브랜치에 병합(Merge)합니다.
- **배포 프로세스:** `release` 브랜치는 직접 병합하지 않으며, 반드시 `main` 브랜치에서 `release` 브랜치로 Pull Request를 생성하여 병합해야 합니다. 이 과정에서 자동 배포 및 버전 관리 파이프라인이 실행됩니다.
- **커밋 메시지:** [Conventional Commits](https://www.conventionalcommits.org/) 규격에 맞춰 작성합니다. (예: `feat:`, `fix:`, `docs:`, `chore:`)

### 4. 주요 콘텐츠 구성
- 티츄 게임 준비 방법
- 상세 규칙 설명
- 점수 계산 방식 및 팁
- 게임 진행 에티켓 및 주의사항
- 오픈소스 라이선스 및 Disclaimer 명시

## 운영 원칙
- 모든 기능 구현은 테스트 및 검증 단계를 포함해야 합니다.
- `README.md`와 `GEMINI.md`의 지침을 항상 최우선으로 준수합니다.
