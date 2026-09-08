# 💻 Portfolio App — Frontend Pessoal

<div align="center">

[![Deploy Frontend to GitHub Pages](https://github.com/tauisilva/Portfolio-app/actions/workflows/deploy.yml/badge.svg)](https://github.com/tauisilva/Portfolio-app/actions/workflows/deploy.yml)
![Angular](https://img.shields.io/badge/Angular_22-DD0031?style=for-the-badge&logo=angular&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript_6-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS_v4-38B2AC?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Vitest](https://img.shields.io/badge/Vitest-6E9F18?style=for-the-badge&logo=vitest&logoColor=white)

Aplicação web reativa de alta performance desenvolvida com **Angular 22** e **Tailwind CSS v4**, funcionando como o portal interativo do meu portfólio profissional, vitrine de projetos fullstack, trajetória e competências técnicas.

👉 **[Acessar Live Demo no GitHub Pages](https://tauisilva.github.io/Portfolio-app/)**

</div>

---

## 🔗 Backend & Arquitetura Fullstack

Esta interface consome dados dinâmicos e serviços da API RESTful cloud-native desenvolvida em **Java 21 LTS** e **Quarkus 3**:

👉 **[Portfolio API — Repositório do Backend (Quarkus 3, Java 21, Panache, PostgreSQL, Docker)](https://github.com/tauisilva/Portfolio-api)**

---

## ✨ Funcionalidades e Destaques Técnicos

- ⚡ **Angular 22 Zoneless:** Arquitetura moderna sem a sobrecarga do `zone.js`, utilizando reatividade refinada orientada a **Angular Signals** (`signal()`, `computed()`, `input()`, `output()`).
- 🌓 **Stitch Design System (Dark & Light):** Paleta pastel equilibrada e superfícies slate configuradas com Tailwind CSS v4 (`@theme`), comutáveis em tempo real via `ThemeStore` reativo com detecção de preferência de sistema e persistência em `localStorage`.
- 🌐 **Internacionalização (i18n):** Suporte planejado para 3 idiomas com chaveamento dinâmico — **Português (`pt-BR`)** como idioma padrão/fallback, **Inglês (`en`)** e **Espanhol (`es`)**.
- 🚀 **Prerender & SEO Otimizado:** Suporte a Server-Side Rendering (SSR) e prerender estático para indexação perfeita em motores de busca, metadados Open Graph e tipografia profissional (**Space Grotesk** e **JetBrains Mono**).
- 🧪 **Pipeline de Testes com Vitest:** Substituição completa do legado Karma/Jasmine por `@angular/build:unit-test` com Vitest 4 e ambiente `jsdom`, executando baterias de testes em milissegundos.
- 🤖 **CI/CD Automatizado via GitHub Actions:** Esteira de integração e entrega contínua que valida tipagem estrita (`tsc --noEmit`), executa os testes unitários (`test:ci`) e realiza o deploy automático no GitHub Pages a cada push na branch `main`.

---

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Versão | Finalidade |
| :--- | :---: | :--- |
| **Angular** | `22.1+` | Framework SPA reativo com suporte a SSR e Zoneless |
| **TypeScript** | `6.0+` | Tipagem estrita e modernas features ECMAScript |
| **Tailwind CSS** | `4.1+` | Engine CSS de alta performance com design tokens via `@theme` |
| **Vitest** | `4.1+` | Test runner moderno e veloz integrado com `@angular/build:unit-test` |
| **Express** | `5.1+` | Servidor Node.js para runtime e SSR prerender |
| **GitHub Actions** | `v4` | Esteira automatizada de build, quality gate e deploy no Pages |

---

## 📁 Estrutura Arquitetural (Clean Architecture)

```text
src/
├── app/
│   ├── core/                  # Serviços singleton, interceptors HTTP, clientes de API
│   ├── features/              # Feature slices (Hero, Projects, Tech-Stack, Contact)
│   ├── shared/                # Componentes reutilizáveis, pipes e ThemeStore
│   │   └── services/          # ThemeStore (gerenciamento reativo Dark/Light)
│   ├── models/                # Interfaces, tipos de domínio e DTOs
│   ├── app.ts                 # Componente raiz standalone
│   ├── app.html / app.css     # Template e estilos raiz
│   └── app.routes.ts          # Definição de rotas
├── assets/
│   └── i18n/                  # Dicionários de tradução (pt-BR, en, es)
└── styles.css                 # Import Tailwind v4, diretivas @theme e tokens semânticos
```

---

## 🚀 Como Executar Localmente

### 1. Pré-requisitos
- **Node.js**: `v20+` ou `v22+` (recomendado)
- **npm**: `v10+` ou `v11+`

### 2. Instalação

```bash
git clone https://github.com/tauisilva/Portfolio-app.git
cd Portfolio-app
npm install
```

### 3. Scripts Disponíveis

| Comando | Descrição |
| :--- | :--- |
| `npm start` | Inicia o servidor de desenvolvimento em `http://localhost:4200/` |
| `npm run build` | Compila o bundle de produção com prerendering estático |
| `npm run build:pages` | Compila o projeto configurando o `<base href="/Portfolio-app/">` para o GitHub Pages |
| `npm run test` | Executa os testes unitários com Vitest em modo interativo (watch) |
| `npm run test:ci` | Executa a suíte de testes unitários uma única vez (modo CI) |
| `npx tsc --noEmit` | Valida a integridade estática dos tipos TypeScript |

---

## 👨‍💻 Autor

Desenvolvido por **Taui Silva Lima**
- **Website / Portfólio:** [tauisilva.github.io/Portfolio-app](https://tauisilva.github.io/Portfolio-app/)
- **GitHub:** [@tauisilva](https://github.com/tauisilva)
- **LinkedIn:** [linkedin.com/in/tauisilva](https://www.linkedin.com/in/tauisilva/)
