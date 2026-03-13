# Tichu Guide

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

An open-source project for the Tichu board game guide site. It provides comprehensive rules and information optimized for mobile devices with a clean and simple interface.

---

## 🌟 Introduction

This project addresses the need for a modern, accessible, and multi-language guide for the Tichu board game. It offers a distraction-free experience for players to check rules, combinations, and scoring anytime, anywhere.

- **Purpose:** A mobile-first, open-source guide for Tichu players globally.
- **Goal:** Clean UI, clear information, and zero distractions.

---

## 🚀 Key Features

- **Multi-language Support:** Full support for English, Korean, Japanese, and Chinese (Simplified).
- **Language Persistence:** Automatically detects and remembers your preferred language via URL and local storage.
- **Tichu Game Preparation:** Comprehensive guide on card composition and initial setup.
- **Detailed Rules:** Interactive guide for hands (combinations), special cards, and declarations.
- **Score Calculator:** Quick calculator for round-by-round point tracking.
- **Etiquette & Tips:** Essential manners and strategic advice for a better gaming experience.
- **Mobile Optimized:** Responsive design specifically tailored for mobile browsers.

---

## 🛠 Tech Stack

- **Frontend:** [Solid JS](https://www.solidjs.com/) + [Vite](https://vitejs.dev/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons:** [Lucide Solid](https://lucide.dev/)
- **Internationalization:** Custom i18n system using Solid JS `createContext`
- **Package Manager:** [pnpm](https://pnpm.io/)
- **CI/CD:** GitHub Actions (Automated testing and deployment)
- **Versioning:** [release-please](https://github.com/googleapis/release-please)

---

## 🌐 Deployment

The site is automatically deployed to GitHub Pages when changes are merged into the `release` branch.
Visit the live site: [https://naturalkei.github.io/tichu-guide-r1/](https://naturalkei.github.io/tichu-guide-r1/)

---

## 🤝 Contribution Guide

Contributions are welcome! Please follow these guidelines:

### Branch Strategy
- Every task must be performed in a new feature branch (e.g., `feat/`, `fix/`, `docs/`).
- After completion and verification, merge the branch into `main`.
- Feature branches should be deleted immediately after they are merged.

### Commit Message Rules
We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:
- `feat:` New features
- `fix:` Bug fixes
- `docs:` Documentation updates
- `style:` Formatting, missing semicolons, etc.
- `refactor:` Code changes that neither fix a bug nor add a feature
- `chore:` Updating build tasks, package manager configs, etc.

---

## 📜 License & Disclaimer

### License
This project is licensed under the **MIT License**. You are free to modify and distribute it.

### Disclaimer
This is an unofficial fan-made project. All game rules, trademarks, and copyrights belong to their respective original authors and publishers.
