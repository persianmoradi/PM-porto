# Phase 4 — Design System

_Project: persian-portefølje · Date: 2026-06-25 · Direction: refined-minimal canvas,
bold signature moments, confident & polished._

## 0. The idea in one line

A quiet, exquisitely-typeset neutral canvas, punctuated by a few high-craft moments in
**Persian Blue** — a personal-brand hook tied directly to Persian's name. Restraint is the
default; boldness is rationed so it lands.

## 1. Typography

Deliberate pairing with a point of view. None of the banned defaults
(Inter/Roboto/Arial/system/Space Grotesk). All free, production-grade, self-hosted via
`next/font` for zero layout shift.

- **Display / headings — Clash Display** (Fontshare). Geometric, confident, a little
  unusual — carries personality in the hero and section titles.
- **Body / UI — Satoshi** (Fontshare). Clean, modern grotesque with warmth; highly legible
  at all sizes.
- **Mono — JetBrains Mono.** Used for code, labels, metadata — a subtle "engineer who
  ships" signal, never decorative.

_Alt high-taste option if you want editorial instead of geometric: **Fraunces** (variable
serif) for display + Satoshi body. Flag if you prefer this._

### Type scale (modular, ~1.25 on mobile → 1.333 desktop, 8px rhythm)

| Token | Size (desktop) | Use |
|---|---|---|
| `display` | 72–96px (clamp) | Hero statement only |
| `h1` | 48px | Page titles |
| `h2` | 32px | Section headers |
| `h3` | 24px | Subsections / project titles |
| `body-lg` | 20px | Lead paragraphs |
| `body` | 16px | Default text |
| `small` | 14px | Captions, meta |
| `mono-label` | 13px, tracked +0.08em, uppercase | Eyebrows, tags |

Line-height: 1.1 for display/headings, 1.6 for body. Max measure 65–72ch for reading.

## 2. Color

Refined-minimal: ~95% neutral, accent used surgically. Defined as CSS variables / Tailwind
theme tokens (semantic, not raw hex in components — enforced in review).

### Light (default)

- `--paper` #FAFAF7 (warm off-white, not pure white)
- `--ink` #111114 (near-black, primary text)
- `--ink-soft` #5A5A60 (secondary text)
- `--line` #E6E5DF (hairline borders)
- `--surface` #FFFFFF (cards)
- `--accent` #1C39BB (**Persian Blue** — signature)
- `--accent-hover` #2C49D0

### Dark

- `--paper` #0C0C0E
- `--ink` #F4F4F0
- `--ink-soft` #A0A0A8
- `--line` #1F1F24
- `--surface` #141417
- `--accent` #5B73FF (brightened Persian Blue for contrast on dark)

Dark mode strategy: ship both, default to **system preference**, with a manual toggle
persisted in a cookie (works with SSR, no flash). All pairs verified ≥ WCAG AA (see §7).

Accent rules: Persian Blue appears only on (a) the primary CTA, (b) interactive/focus
states, (c) one or two signature moments. Never as large fills. Restraint = premium.

## 3. Grid & layout

- 12-column grid, max content width 1200px, generous gutters.
- Mobile-first: single column at 375px; 8px base unit throughout.
- Breakpoints (Tailwind defaults): sm 640 / md 768 / lg 1024 / xl 1280.
- Asymmetry and whitespace do the work — avoid filling space for its own sake.

## 4. Spacing scale (8px base)

`4, 8, 12, 16, 24, 32, 48, 64, 96, 128`. Section vertical rhythm: 96–128px desktop,
64–80px mobile. Consistent rhythm is most of what makes minimal look intentional.

## 5. Motion principles

Targeted, signature, flawless — calm everywhere else.

- **Durations:** micro 120ms, standard 240ms, entrance 400–600ms. Nothing slower without
  reason.
- **Easing:** custom `cubic-bezier(0.22, 1, 0.36, 1)` (expo-out) for entrances;
  ease-in-out for hovers. No linear, no bounce.
- **Signature moments (budget = 3):** (1) hero reveal on load, (2) one project-card
  transition, (3) scroll-linked section focus. Everything else: subtle fades/translates.
- **Library:** Motion (Framer Motion). Respect `prefers-reduced-motion` globally —
  reduced = instant/opacity-only, never disabled functionality.
- Never block content on animation; never animate layout in a way that shifts CLS.

## 6. Component library (shadcn/ui base, restyled to tokens)

Core set for v1: Button (primary/ghost/link), Card (project), Badge/Tag (mono labels),
Nav + mobile menu, ThemeToggle, Section wrapper, ProjectCard, CaseStudy layout, ContactCTA,
Footer. All built from shadcn primitives but skinned with the tokens above — no default
shadcn look. Each component: typed props, no hardcoded color/spacing, documented states
(default/hover/focus/active/disabled).

## 7. Accessibility (WCAG 2.1 AA — non-negotiable)

- Contrast ≥ 4.5:1 text, ≥ 3:1 large text/UI. Persian Blue pairs verified against paper.
- Visible focus states everywhere (Persian Blue ring, 2px offset). Never `outline:none`
  without replacement.
- Semantic HTML, one `h1`/page, logical heading order, landmarks.
- Full keyboard nav incl. menu and toggle; skip-to-content link.
- Alt text on all imagery; `prefers-reduced-motion` honored.
- Run the **accessibility-review** skill at each feature gate.

## 8. Definition of done (per component)

Passes UX, a11y, performance, mobile (375px+), and code-quality gates from `CLAUDE.md`
before it's considered shipped. Reviewed through the 5 personas at Phase 7.
