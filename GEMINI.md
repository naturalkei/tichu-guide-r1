# GEMINI Mandates - Tichu Guide R1

This document defines the top-priority mandates for the `tichu-guide-r1` project.

## Project Overview
A Korean guide site that provides Tichu board game rules and guides with a clean, mobile-first UI and no advertisements.

## Core Requirements (Mandates)

### 1. Product & Design Goals
- **Mobile-First:** All UI designs must ensure optimal readability in a mobile environment.
- **No Ads & Clean UI:** Prioritize clear information delivery without elements that hinder user experience.
- **Korean Language Support:** All guide content must be written in accurate and friendly Korean.

### 2. Tech Stack & Environment
- **Package Manager:** Use `pnpm` as the default package manager.
- **SPA (Single Page Application):** Build the SPA environment referring to the settings of the `tichu-board-r1` project. (Solid JS, Vite, Tailwind CSS v4)
- **Linting & Formatting:** Manage code quality using ESLint 9 (Flat Config) and Prettier.
- **GitHub Pages Deployment:** Build a CI/CD workflow that automatically deploys to GitHub Pages via GitHub Actions when a PR is sent from the `main` branch to the `release` branch.
- **Release Automation:** Automate versioning and CHANGELOG generation through the `release-please` workflow.

### 3. Development Workflow
- **Branch Strategy:** Every single instruction or task must be performed in a new feature branch (e.g., `feat/`, `fix/`, `docs/`). After completing the task and verification, the branch must be merged into the `main` branch.
- **Deployment Process:** Do not merge directly into the `release` branch; you must create a Pull Request from the `main` branch to the `release` branch for merging. During this process, the automatic deployment and release management pipeline will run.
- **Branch Cleanup:** Immediately delete the target feature branch from local and remote repositories after merging or completion of the Pull Request to keep the repository clean.
- **Commit Messages:** Write according to the [Conventional Commits](https://www.conventionalcommits.org/) specification. (e.g., `feat:`, `fix:`, `docs:`, `chore:`)

### 4. Main Content Structure
- Tichu game preparation methods
- Detailed rule descriptions
- Score calculation methods and tips
- Gameplay etiquette and precautions
- Explicit open-source license and Disclaimer

## Operating Principles
- All functional implementations must include testing and verification steps.
- Always comply with the instructions in `README.md` and `GEMINI.md` as the highest priority.
