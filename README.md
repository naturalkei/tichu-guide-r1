# Tichu Guide R1 (티츄 가이드 R1)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

티츄(Tichu) 보드게임 가이드 사이트 오픈소스 프로젝트입니다. 광고 없이 모바일 환경에서 최적화된 규칙과 정보를 제공하는 것을 목표로 합니다.

---

## 🌟 프로젝트 소개 (Introduction)

티츄의 규칙서는 인터넷에서 쉽게 찾아볼 수 있지만, 광고 없이 모바일(핸드폰) 화면에서 깔끔하게 게임 방법 및 규칙을 확인할 수 있는 잘 만들어진 (한국어) 가이드 사이트가 부족한 문제를 해결하고자 시작되었습니다.

- **목적:** 모든 티츄 플레이어가 모바일에서 쉽고 빠르게 규칙을 참조할 수 있는 오픈소스 가이드 제공
- **지향점:** 광고 없음, 모바일 우선 UI, 명확한 정보 전달

---

## 🚀 주요 기능 (Key Features)

- **티츄 게임 준비:** 카드 구성 및 초기 세팅 방법 안내
- **규칙 설명:** 상세한 게임 규칙 및 족보 설명
- **점수 계산 가이드:** 점수 계산 방식 및 실전 팁 제공
- **에티켓 도움말:** 게임 진행 중 주의사항 및 매너 팁
- **모바일 최적화:** 어디서든 편하게 볼 수 있는 모바일 우선 UI 디자인

---

## 🛠 기술 스택 (Tech Stack)

- **Frontend:** SPA (Single Page Application) 기반 (React / Vite 예정)
- **Deployment:** GitHub Pages (CI/CD: GitHub Actions)
- **Styling:** CSS-in-JS or Tailwind CSS (예정)

---

## 🤝 기여 안내 (Contribution Guide)

이 프로젝트는 오픈소스로 누구나 기여할 수 있습니다.

### 브랜치 전략
- 모든 작업은 개별 피처 브랜치(feature branches)에서 진행합니다.
- 작업 완료 후 `main` 브랜치로 Pull Request를 생성하여 병합합니다.

### 커밋 메시지 규칙
[Conventional Commits](https://www.conventionalcommits.org/ko/v1.0.0/) 규격에 따라 작성해 주세요:
- `feat:` 새로운 기능 추가
- `fix:` 버그 수정
- `docs:` 문서 수정 (README.md 등)
- `style:` 코드 스타일 변경 (포맷팅, 세미콜론 등)
- `refactor:` 코드 리팩토링
- `chore:` 빌드 작업, 패키지 매니저 설정 변경 등

---

## 📜 라이선스 및 고지사항 (License & Disclaimer)

### License
본 프로젝트는 **MIT License**에 따라 배포됩니다. 자유롭게 수정 및 배포가 가능합니다.

### Disclaimer
이 프로젝트는 티츄 게임의 공식 가이드가 아니며, 팬들이 제작한 비공식 오픈소스 프로젝트입니다. 모든 게임 규칙 및 저작권은 해당 원작자에게 있습니다.

---

## 🌐 배포 (Deployment)

`main` 브랜치의 변경 사항이 `release` 브랜치로 PR 되어 병합될 때, GitHub Actions를 통해 GitHub Pages에 자동으로 배포됩니다.
