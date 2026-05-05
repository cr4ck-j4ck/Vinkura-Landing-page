# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

```bash
npm run dev      # Start dev server (Turbopack)
npm run build    # Production build
npm run start    # Run production server
npm run lint     # ESLint check
```

## Stack

- **Next.js 16.2.4** with React 19 — read `node_modules/next/dist/docs/` before writing any Next.js code, APIs may differ from training data
- **Tailwind CSS v4** — config-free, no `tailwind.config.js`; use `@tailwindcss/postcss` in `postcss.config.mjs`
- **TypeScript**, fonts via `next/font/google` (Inter + Outfit)

## Architecture

### Page pattern
Each route has two files:
- `page.tsx` — thin server component (exports metadata, renders UI component)
- `*UI.tsx` — `'use client'` component with all markup and `<style jsx>` blocks

Styles are co-located in `<style jsx>` inside each `*UI.tsx`, not in external CSS files (except global resets in `app/globals.css`).

### Route structure
```
app/
  page.tsx                          # Homepage
  layout.tsx                        # Root layout: Navbar + Footer + JSON-LD SEO
  products/[product]/               # 7 product pages (ddms, e-ctc, e-maalkhana, forge, orbit, sentinel, vinkura-core, voice)
  case-studies/[slug]/              # Individual case study pages (trinetra, sentinel, orbit, etc.)
  research/[slug]/                  # Dynamic + static research paper pages
  company/newsroom/                 # Newsroom with filter UI
  company/about|careers|...         # Company sub-pages
  contact/                          # Contact form (currently no backend — form just shows alert())
  solutions/                        # Solutions pages
components/                         # Shared layout components (Navbar, Footer, Hero, CTA, etc.)
public/                             # Static assets (product screenshots, logos)
```

### SEO setup
Global metadata, OpenGraph, Twitter cards, and JSON-LD schema are all in `app/layout.tsx`. Individual pages export their own `metadata` objects to override title/description via the `template: "%s | Vinkura AI"` pattern.

## Key issues (known)

### Form submission — NOT wired up
`app/contact/ContactUI.tsx` has `onSubmit={(e) => e.preventDefault()}` and only fires an `alert()`. No email is sent. To fix: create a Server Action or API route that uses a mail service (Resend, Nodemailer, etc.) and replace the handler.

### Research page UI issues
The `req-card` in research pages uses `pt: 1.5rem` (invalid JSX style shorthand — should be `paddingTop: '1.5rem'`). The `.container` max-width is 1000px but padding is 4rem on each side, making it very narrow on mid-size screens.

## Content data
News items, case study data, and research content are hardcoded directly inside each `*UI.tsx` component — there is no CMS or data layer. To add/edit content, modify the data arrays/objects at the top of the relevant UI component.
