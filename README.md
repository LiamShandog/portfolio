# Portfolio — Liam Shannon

A warm, professional personal portfolio built to be skimmable in ~30 seconds:
a single-page scroll (Hero → About → Projects → Contact) plus a dedicated
`/resume` page with a PDF download. Project cards pull live GitHub stats at
build time.

**Stack:** Next.js 16 (App Router) · TypeScript · Tailwind CSS v4 · Vitest +
React Testing Library. Deploys to Vercel.

## Getting started

> Requires Node.js 20+ and npm.

```bash
npm install
npm run dev      # http://localhost:3000
```

Other scripts:

```bash
npm run build    # production build (also fetches GitHub stats)
npm start        # serve the production build
npm test         # run the test suite
npm run lint     # lint
```

## Customizing the content

All content lives in typed data files — edit these, not the components:

- **`data/profile.ts`** — name, role, tagline, bio, skills, socials, email.
- **`data/projects.ts`** — your 2–3 featured projects. Set `githubRepo`
  (`"owner/name"`) to show live stars; add `liveUrl` for a demo link.
- **`data/resume.ts`** — summary, experience, education, grouped skills.

Then:

- **Résumé PDF:** replace `public/resume.pdf` with your real file (the
  "Download PDF" button links to it).
- **Headshot:** the hero shows an initials avatar. To use a photo, drop it in
  `public/` and swap the placeholder block in `components/Hero.tsx`.
- **Metadata / domain:** update `metadataBase` and titles in `app/layout.tsx`.

## How GitHub stats work

`lib/github.ts` fetches each project's public repo data from the GitHub API at
build time (with periodic revalidation). If a request fails — offline, rate
limited, or the repo doesn't exist — it falls back to the project's own data,
so the build never breaks and no empty state ships.

## Design system

Warm design tokens (terracotta accent, warm neutrals) are defined as Tailwind
`@theme` colors in `app/globals.css`, surfaced as utilities like `bg-accent`
and `text-muted`. Reusable primitives live in `components/ui/`
(`Container`, `Section`, `Button`, `Badge`, `Card`).

## Deploying to Vercel

Push to GitHub, import the repo at [vercel.com/new](https://vercel.com/new),
and deploy — no configuration needed. Every push redeploys and refreshes the
GitHub stats.

## Tests

```bash
npm test
```

Covers the UI primitives, section components, the GitHub fetch fallback, the
project cards, and the resume view/download.
