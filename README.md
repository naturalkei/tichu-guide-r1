# Tichu Guide R1

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

An open-source project for the Tichu board game guide site. It aims to provide rules and information optimized for the mobile environment without advertisements.

---

## 🌟 Introduction

While Tichu rulebooks are easily found on the internet, this project was started to address the lack of a well-made (Korean) guide site that allows users to check game methods and rules cleanly on a mobile (phone) screen without ads.

- **Purpose:** Provide an open-source guide for all Tichu players to easily and quickly refer to rules on mobile
- **Goal:** No ads, mobile-first UI, clear information delivery

---

## 🚀 Key Features

- **Tichu Game Preparation:** Guide on card composition and initial setting
- **Rule Description:** Detailed game rules and hand descriptions
- **Score Calculation Guide:** Score calculation methods and practical tips
- **Etiquette Help:** Precautions and manner tips during gameplay
- **Mobile Optimization:** Mobile-first UI design for comfortable viewing anywhere

---

## 🛠 Tech Stack

- **Frontend:** Solid JS + Vite
- **Deployment:** GitHub Pages (CI/CD: GitHub Actions)
- **Styling:** Tailwind CSS v4
- **Package Manager:** pnpm

---

## 🌐 Deployment

When changes from the `main` branch are PRed and merged into the `release` branch, it is automatically deployed to GitHub Pages via GitHub Actions.

---

## 🤝 Contribution Guide

This project is open-source, and anyone can contribute.

### Branch Strategy
- All tasks are performed in individual feature branches.
- After task completion, create a Pull Request to the `main` branch for merging.
- Delete feature branches immediately after they are merged.

### Commit Message Rules
Please write according to the [Conventional Commits](https://www.conventionalcommits.org/) specification:
- `feat:` Addition of a new feature
- `fix:` Bug fix
- `docs:` Documentation modification (README.md, etc.)
- `style:` Code style change (formatting, semicolons, etc.)
- `refactor:` Code refactoring
- `chore:` Build tasks, package manager configuration changes, etc.

---

## 📜 License & Disclaimer

### License
This project is distributed under the **MIT License**. Free modification and distribution are allowed.

### Disclaimer
This project is not an official guide for the Tichu game; it is an unofficial open-source project created by fans. All game rules and copyrights belong to the respective original authors.
