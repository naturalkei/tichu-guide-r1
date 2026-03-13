# Tichu Guide R1 - Development Roadmap

Step-by-step roadmap and issue plan for the development of the Tichu guide site.

## Phase 1: Infrastructure & Core Setup
- [x] **Issue #1:** Initialize SPA development environment and configure CI/CD workflow
  - Solid JS, Vite, Tailwind CSS settings
  - Automatic GitHub Pages deployment via GitHub Actions (on PR to release branch)
- [x] **Issue #2:** Implement base layout and navigation
  - Mobile-first responsive layout
  - Bottom tab bar or side menu (Quick Navigation)

## Phase 2: Content Implementation
- [x] **Issue #3:** Draft Tichu game preparation and basic rules page
  - Card composition (including special cards: Sparrow, Phoenix, Dog, Dragon)
  - Initial setup and card distribution methods
- [x] **Issue #4:** Draft hands (pedigree) and detailed rules page
  - Singles, Pairs, Consecutive Pairs, Triples, Full House, Straights
  - Tichu declarations (Grand Tichu, Small Tichu) and Bomb rules
- [x] **Issue #5:** Draft score calculation and tips page
  - Score per card (5, 10, K, etc.) and bonus point calculation
  - Score calculation tip UI structure

## Phase 3: UI/UX Enhancement
- [x] **Issue #6:** Mobile optimization and interaction reinforcement
  - Smooth transition effects using Framer Motion (or Solid equivalent)
  - Dark mode support and readability improvement
- [x] **Issue #7:** Add etiquette and precaution guide section
  - Manner guide and common mistake prevention during gameplay

## Phase 4: Finalization & Launch
- [x] **Issue #8:** Final QA and performance optimization
  - Lighthouse score optimization (SEO, Accessibility)
  - Final verification of license and Disclaimer
- [x] **Issue #9:** Deployment automation and main branch merge
  - Create main -> release PR and verify automatic deployment
