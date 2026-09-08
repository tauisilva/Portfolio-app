# AGENTS.md — Development Guidelines for Portfolio-app

This document establishes the official engineering guidelines, architectural rules, code quality standards, and development workflows for **Portfolio-app** (Angular 22+). Any AI agent, contributor, or developer modifying this repository MUST strictly comply with these rules.

---

## 1. Universal English Rule (Strict)

- **Language of Code**: All source code, identifiers, and development artifacts MUST be written exclusively in **English**.
  - Variables, functions, methods, classes, interfaces, types, enums, records, and constants.
  - File and folder names in kebab-case (e.g., `project-card.ts`, `theme-store.ts`).
  - Code comments, docstrings, and commit messages.
  - Git branch names and PR descriptions.

### 1.1. Modern Angular File Naming (Drop Technical Suffixes)
In compliance with the modern Angular Style Guide (Angular 20+ / 22), **technical suffixes (`.component`, `.service`, `.directive`) are strictly dropped** in favor of functional, semantic names:
- **Components**: Name by feature/purpose rather than type:
  - ❌ `project-card.component.ts` ➔ ✅ `project-card.ts`
  - ❌ `hero-section.component.ts` ➔ ✅ `hero.ts` (or `hero-view.ts`)
- **Services / Stores / APIs**: Name by responsibility:
  - ❌ `theme.service.ts` ➔ ✅ `theme-store.ts` (or `theme.ts`)
  - ❌ `project.service.ts` ➔ ✅ `projects-api.ts`
- **Tests**: Keep the `.spec.ts` suffix for test runners:
  - ✅ `project-card.spec.ts`, `theme-store.spec.ts`

### 1.2. Pair-Programming & Collaboration Rules
- **Instructional & Architectural Clarity**: Always provide clear step-by-step instructions on *how* to implement changes, accompanied by the engineering rationale (*the "why"*) behind every architectural decision.
- **Strict Commit Confirmation**: **NEVER run `git commit` or `git push` automatically.** Always propose the changes, review the diff with the user, and explicitly ask for permission before executing any commit.

- **User-Facing Content Exception**: Any user-facing copy in Portuguese or Spanish MUST live strictly in the i18n translation assets, never hardcoded in TypeScript or HTML templates.

---

## 2. Angular 22 Modern Standards

### 2.1. Standalone Components & Modern Structure
- **No NgModules**: All components, directives, and pipes MUST be `standalone: true` (default in modern Angular).
- **Control Flow Syntax**: Strictly use modern template control flow:
  - `@if (...) { ... } @else { ... }` (Never `*ngIf`).
  - `@for (item of items; track item.id) { ... } @empty { ... }` (Never `*ngFor`).
  - `@switch (...) { @case (...) { ... } @default { ... } }` (Never `*ngSwitch`).
  - `@let myComputed = value;` for local template variables.
- **Deferrable Views (`@defer`)**: Heavy sections, below-the-fold cards, or interactive widgets MUST use `@defer` with loading/placeholder triggers (e.g., `@defer (on viewport) { <app-projects-grid /> }`).

### 2.2. Signals & Reactivity
- **Signals First**: State management must rely primarily on Angular Signals:
  - `signal()` for reactive local state.
  - `computed()` for derived state.
  - `input<T>()` and `input.required<T>()` instead of legacy `@Input()`.
  - `output<T>()` instead of legacy `@Output()`.
  - `model<T>()` for two-way bindings.
- **Dependency Injection**: Use `inject(Service)` instead of constructor parameter injection boilerplate.
- **RxJS Usage**: Restrict RxJS to asynchronous streams where necessary (HTTP requests, WebSocket events, debouncing). Convert observables to signals at the boundary via `toSignal()`.

---

## 3. Clean Architecture & Folder Structure

The project follows domain-driven separation of concerns into distinct architectural layers:

```text
src/app/
├── core/                  # Singletons, HTTP interceptors, global guards, API clients
│   ├── api/               # API clients communicating with the Quarkus backend
│   └── interceptors/      # Auth, error, and i18n header interceptors
├── features/              # Feature slices (Smart components, pages, domain views)
│   ├── hero/              # Hero section, value proposition, live architecture card
│   ├── projects/          # Showcase of fullstack projects (cards, filters)
│   ├── articles/          # DEV.to articles & thought leadership
│   ├── tech-stack/        # Tech matrix (Frontend, Backend, DevOps)
│   └── contact/           # Contact and social networking section
├── shared/                # Dumb/presentational UI components, directives, pipes, services
│   ├── components/        # Buttons, badges, modal dialogs, cards
│   ├── services/          # ThemeService (Dark/Light), LanguageService
│   └── pipes/             # Generic presentation pipes
├── models/                # Pure TypeScript domain models, interfaces, DTOs, and enums
└── assets/
    └── i18n/              # Translation dictionaries (en.json, pt-BR.json, es.json)
```

### 3.1. Architectural Rules
- **Smart vs. Dumb Components**:
  - `features/`: Smart components (fetch data via services, orchestrate feature logic, handle navigation).
  - `shared/components/`: Pure presentational components (stateless or signal-input driven, highly reusable, zero direct HTTP calls).
- **Unidirectional Data Flow**: Data flows down via `input()`; events flow up via `output()`.
- **No Circular Dependencies**: A module or file must never import from a layer that depends on it.

---

## 4. Code Quality & SonarQube Compliance (Clean Code)

To ensure high maintainability, avoid technical debt, and prevent SonarQube / linter quality gate failures:

### 4.1. Complexity & Size Thresholds
- **Cognitive Complexity**: Maximum **15** per function or method. Decompose nested conditionals and complex logic into small, descriptive helper functions.
- **Cyclomatic Complexity**: Maximum **10** per function.
- **Function Length**: Maximum **30 lines** per function. A function must perform exactly one thing at a single level of abstraction (SRP).
- **File Length**: Maximum **300 lines** per component, service, or spec file. Split when growing beyond this limit.
- **Parameter Count**: Maximum **3 parameters** per function. Use a typed configuration object / interface for 4 or more parameters.

### 4.2. Strict Typing & Quality Gates
- **Zero `any`**: The use of `any` is strictly prohibited. Use explicit types, generics, `unknown` (with type narrowing), or domain interfaces.
- **No Magic Literals**: Constants, status codes, route paths, and configuration values MUST be defined as constants or enums.
- **No Redundant Code (DRY)**: Abstract duplicate patterns into shared services, utility helpers, or custom pipes.
- **Immutability**: Prefer `readonly` properties and immutable transformations (spread operator, `map`, `filter`) over mutable arrays and objects.

---

## 5. Internationalization (i18n)

The application supports three primary languages:
1. **Portuguese (`pt-BR`)** — **Default / Base Language** (initial display and fallback).
2. **English (`en`)** — Secondary Language.
3. **Spanish (`es`)** — Secondary Language.

### 5.1. Rules for Text Content
- **Zero Hardcoded Strings**: No human-readable string may be hardcoded directly into `.html` templates or `.ts` alert/toast strings.
- **Translation Files**: All translations live in `src/assets/i18n/{lang}.json`.
- **Key Hierarchy**: Keys must be scoped by feature and element:
  ```json
  {
    "nav": {
      "about": "About",
      "projects": "Projects",
      "articles": "Articles",
      "stack": "Stack",
      "contact": "Contact"
    },
    "hero": {
      "status_badge": "Available for Full Stack Projects",
      "headline": "Building resilient architectures with Java & modern interfaces with Angular.",
      "subtitle": "Fullstack Software Engineer delivering end-to-end solutions from pixel to database."
    }
  }
  ```
- **Language Switcher**: The UI must provide a clean language switcher allowing real-time language toggling persisted in `localStorage`.

---

## 6. Styling & Design System (Tailwind CSS)

- **Framework**: Use pure **Tailwind CSS** with utility classes.
- **Design Tokens**: Utilize the pastel and dark slate tokens established in the Stitch Design System:
  - Sage Green: `#A8C5B5` / `#2D6A4F`
  - Soft Lavender: `#C5B4E3` / `#5B4282`
  - Powder Blue: `#A5C4D4` / `#2C5E8A`
  - Warm Peach: `#F5CBA7` / `#A05022`
  - Dark Surface: `#181926` / `#1E2030`
  - Light Surface: `#F8F9FA` / `#FFFFFF`
- **Dark & Light Mode**: All components MUST implement both states via Tailwind's `dark:` variant (e.g., `bg-[#F8F9FA] dark:bg-[#181926] text-slate-900 dark:text-slate-100`).

---

## 7. Testing & Verification

- **Unit Tests**: Every service, utility, and component must have associated Vitest spec files (`*.spec.ts`) running on `@angular/build:unit-test` with jsdom.
- **Pre-commit Verification**:
  ```bash
  # Check type safety
  npx tsc --noEmit

  # Build production bundle
  npm run build

  # Run test suite
  npm run test:ci
  ```
