# Damas Technologies Landing Page

Modern React + Vite + Tailwind landing page for a Software & AI Transformation startup.

## Stack

- React
- Vite
- Tailwind CSS

## Requirements

- Node.js 18+ (recommended)
- npm

## Install

```bash
npm install
```

## Run locally (development)

```bash
npm run dev
```

Open the local URL printed in terminal (usually `http://localhost:5173` or next available port).

## Production build

```bash
npm run build
```

Build output is generated in the `dist/` directory.

## Preview production build

```bash
npm run preview
```

## GitHub Pages deployment

This project is configured for GitHub Pages with:

- Production Vite base path: `/damastechnologies/`
- SPA fallback support (`public/404.html`) for direct links like `/company-overview`
- GitHub Actions workflow at `.github/workflows/deploy-pages.yml`

To publish correctly, use **GitHub Actions Pages deployment** (do not publish repository root as static files).

In GitHub repository settings:

1. Go to **Settings → Pages**
2. Set **Source** to **GitHub Actions**
3. Push to `main` to trigger deployment

## Project structure

```text
src/
  App.jsx
  main.jsx
  index.css
  images/
```

