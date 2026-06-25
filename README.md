# persian-portefølje

Personal portfolio for **Persian Moradi** — frontend & design engineer.
Next.js (App Router) · TypeScript · Tailwind · Framer Motion.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Scripts

- `npm run dev` — local dev server
- `npm run build` — production build
- `npm run start` — serve the production build
- `npm run lint` — lint

## Where to edit things

- **Your details / links / bio:** `content/site.ts`
- **Projects (swap placeholders for real case studies):** `content/projects.ts`
  Keep the `problem → build → outcome` shape.
- **Design tokens (colors, type, the Persian-blue accent):** `app/globals.css`
  and `tailwind.config.ts`
- **Fonts:** loaded in `app/layout.tsx` (Clash Display + Satoshi via Fontshare,
  JetBrains Mono via Google Fonts). To make it faster, self-host with `next/font/local`.

## Design + planning docs

See `/docs`: `discovery.md`, `competitor-research.md`, `design-system.md`,
`architecture.md`. Project conventions and review gates live in `CLAUDE.md`.

## Deploy

Push to GitHub and import on [Vercel](https://vercel.com) — zero config. Then set your
real domain and update `url` in `content/site.ts`.
