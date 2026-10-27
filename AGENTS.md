# AGENTS.md

## Stack
- Vite + React 19 + TypeScript (ESM). Entry: `index.html` loads `/src/main.tsx`, app root in `src/App.tsx`.
- Tailwind CSS v4 via `@tailwindcss/vite`. CSS in `src/index.css`.
- Path alias: `@/*` → project root (`./*`) in `tsconfig.json` and `vite.config.ts`.
- Static portfolio with no server or AI dependencies. Deployed to GitHub Pages via `.github/workflows/deploy.yml`.

## Commands (package.json)
- `npm install` — deps.
- `npm run dev` — Vite dev server on `--port=3000 --host=0.0.0.0` (HMR behavior modified by `DISABLE_HMR`).
- `npm run build` — `vite build`.
- `npm run preview` — preview built app.
- `npm run lint` — `tsc --noEmit` (typecheck only; no ESLint configured).
- `npm run clean` — borra `dist/` (multiplataforma, vía Node).

## Environment
- No hay variables de entorno requeridas para desarrollo local. El proyecto es un portafolio estático.

## UI
- `src/App.tsx`: Portafolio minimalista de Héctor Guzmán (estudiante de ingeniería civil en la Universidad Dominicana O&M). Incluye enlaces de contacto (Email, GitHub, LinkedIn) animados con `motion/react`. Footer con copyright dinámico + "Con mucho Amor."
- Accesibilidad: `MotionConfig reducedMotion="user"`, contraste mínimo `neutral-500`, foco visible y fallback `<noscript>`.
- `index.html`: Idioma `es`, canonical/Open Graph/Twitter apuntando a `https://hectorguzmanr.github.io/Pagina-web-ABOUT-ME/`, JSON-LD `Person` y favicon enlazado.

## Git y cambios
- Al hacer commits/pushes solicitados, **solo realizar hasta `git commit`**. El `git push` lo hará **únicamente el usuario**. Nunca hacer `git push` automáticamente.
- **Siempre preguntar antes de hacer cualquier cambio** (editar archivos, crear, eliminar, ejecutar comandos que modifiquen el repo). No asumir, pedir confirmación explícita.

## Build/dev notes
- Dependencias fijadas en `package-lock.json`; el CI instala con `npm ci` (no editar el lock a mano).
- `vite.config.ts`: `base: './'`, React + Tailwind plugins, `@` alias. Si `DISABLE_HMR=true`, se desactiva el file watching (comportamiento de AI Studio; no cambiar sin razón).
- `tsconfig.json`: configuración bundler, `noEmit: true`, `allowImportingTsExtensions: true`, `moduleResolution: "bundler"`, JSX `react-jsx`.
- Assets estáticos en `public/` (servidos desde la raíz).
