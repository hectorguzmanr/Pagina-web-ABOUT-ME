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
- No hay variables de entorno requeridas para desarrollo local. El proyecto es un portafolio estático.

## UI
- `src/App.tsx`: Portafolio minimalista de Héctor Guzmán (estudiante de ingeniería civil en la Universidad Dominicana O&M). Incluye enlaces de contacto (Email, GitHub, LinkedIn) animados con `motion/react`. Footer con "Con mucho Amor." 
- Favicon: `public/favicon.svg` (monograma HG) enlazado en `index.html`.

## Build/dev notes
- `vite.config.ts`: `base: './'`, React + Tailwind plugins, `@` alias. Si `DISABLE_HMR=true`, se desactiva el file watching (comportamiento de AI Studio; no cambiar sin razón).
- `tsconfig.json`: configuración bundler, `noEmit: true`, `allowImportingTsExtensions: true`, `moduleResolution: "bundler"`, JSX `react-jsx`.
- `metadata.json` declara capacidad server-side de Gemini.
- Assets estáticos en `public/` (servidos desde la raíz).
