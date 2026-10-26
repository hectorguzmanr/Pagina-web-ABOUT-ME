# AGENTS.md

## Stack
- Vite + React 19 + TypeScript (ESM). Entry: `index.html` loads `/src/main.tsx`, app root in `src/App.tsx`.
- Tailwind CSS v4 via `@tailwindcss/vite`. CSS in `src/index.css`.
- Path alias: `@/*` → project root (`./*`) in `tsconfig.json` and `vite.config.ts`.
- Integrates `@google/genai`; expects `GEMINI_API_KEY` (see `.env.example`). Also `APP_URL` referenced.
- AI Studio app (see `README.md`, `metadata.json`).

## Commands (package.json)
- `npm install` — deps.
- `npm run dev` — Vite dev server on `--port=3000 --host=0.0.0.0` (HMR behavior modified by `DISABLE_HMR`).
- `npm run build` — `vite build`.
- `npm run preview` — preview built app.
- `npm run lint` — `tsc --noEmit` (typecheck only; no ESLint configured).
- `npm run clean` — `rm -rf dist server.js` (Unix shell; on Windows may need adjustment).

## Environment
- Copy/configure env per `.env.example`: `GEMINI_API_KEY` required for Gemini calls; `APP_URL` for self-referential links/OAuth/API endpoints (injected by AI Studio in hosted env).

## Build/dev notes
- `vite.config.ts`: `base: './'`, React + Tailwind plugins, `@` alias. If `DISABLE_HMR=true`, file watching disabled (AI Studio behavior; don't change without reason).
- `tsconfig.json`: strict-ish bundler setup, `noEmit: true`, `allowImportingTsExtensions: true`, `moduleResolution: "bundler"`, JSX `react-jsx`.
- `metadata.json` declares server-side Gemini capability.
