# Phase 5 — Architecture

_Project: persian-portefølje · Date: 2026-06-25_

## Stack

- **Next.js (App Router) + TypeScript (strict)** — SSR/SSG for SEO, file-based routing,
  clean path to a future blog/CMS.
- **Tailwind CSS** + **shadcn/ui** (restyled to design tokens).
- **Motion (Framer Motion)** for the signature interactions.
- **next/font** (self-hosted Clash Display, Satoshi, JetBrains Mono) — zero layout shift.
- **Supabase** — not needed for v1 static content; reserved for later dynamic bits
  (contact form storage, the AI feature backend). Kept out of the critical path for now.
- **Deploy:** Vercel (first-class Next.js, preview deploys, analytics).

## Information architecture (v1 = single page + room to grow)

Single long-scroll landing page for v1 (fastest to ship, best for a scan), with routes
pre-structured so sections can graduate into full pages later.

```
/                     Home (hero · selected work · about · contact)
/work/[slug]          Case study pages (placeholder entries now, real later)
/about                (optional graduation of the about section)
/blog        (future) MDX-based, scaffolded but hidden until content exists
```

Home sections, in order: Hero (signature reveal) → Selected Work (3 project cards) →
About (photo, story, skills, "learning AI daily" note) → Contact CTA ("hire me") → Footer
(GitHub ×2, LinkedIn, email).

## Project structure

```
app/
  layout.tsx            Root: fonts, theme provider, metadata, skip-link
  page.tsx              Home composition
  work/[slug]/page.tsx  Case study (generateStaticParams from content)
  sitemap.ts, robots.ts, opengraph-image.tsx
components/
  ui/                   shadcn primitives, token-skinned
  sections/             Hero, SelectedWork, About, ContactCTA, Footer
  ProjectCard.tsx, ThemeToggle.tsx, Nav.tsx, MotionPrimitives.tsx
content/
  projects.ts           Typed project data (SWAP-IN POINT for real work)
  site.ts               Name, links, bio, SEO defaults
lib/
  utils.ts, motion.ts (variants + reduced-motion helper)
styles/
  globals.css           Token CSS variables (light/dark)
```

## Content model (the swap-in design)

Projects are typed data, not hardcoded JSX — adding a real case study = editing
`content/projects.ts`, no layout work. This directly counters the "stale portfolio"
trust-killer from Phase 3.

```ts
type Project = {
  slug: string;
  title: string;
  summary: string;        // one line
  problem: string;        // case-study shape
  build: string;          // what was built + stack
  outcome: string;        // result / metric / learning
  tags: string[];
  links?: { live?: string; repo?: string };
  cover: string;          // /public image
  featured: boolean;
};
```

Placeholders ship in this exact shape so the narrative structure is real from day one.

## SEO

Per-route metadata via the Metadata API, dynamic OG images (`opengraph-image.tsx`),
`sitemap.ts` + `robots.ts`, JSON-LD `Person` schema, semantic headings, descriptive alt
text. SSG output = fast crawl + indexable content.

## Performance budget

LCP < 2.0s, CLS < 0.05, INP < 200ms, Lighthouse ≥ 95 across the board. Self-hosted fonts,
`next/image` with explicit dimensions, lazy media below the fold, route-level code
splitting, motion that never causes layout shift.

## Accessibility & quality gates

WCAG AA enforced (see design-system §7). Each feature passes the 5-point definition of
done in `CLAUDE.md`; Phase 7 runs the 5 review personas + accessibility-review skill.

## The AI feature (woven in, per positioning)

A small, real LLM-powered touch — candidate: an "ask my portfolio" command-palette (⌘K)
that answers questions about Persian's skills/projects, backed by a Supabase edge function.
Scoped as a post-v1 enhancement so it doesn't delay launch, but the command-palette shell
is built into v1 so it slots in cleanly.

## Build order (Phase 6, incremental — review after each)

1. Scaffold (Next.js + TS + Tailwind + tokens + fonts + theme toggle).
2. Layout shell: Nav, Footer, Section wrapper, skip-link, metadata.
3. Hero + signature reveal.
4. Selected Work + ProjectCard (placeholder data).
5. About + Contact CTA.
6. Case study route from content model.
7. SEO, OG images, sitemap; performance pass.
8. (Post-v1) ⌘K AI feature.

After every step: UX / a11y / performance / mobile / code-quality review, then refactor.
