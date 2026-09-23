# Zahin Kabir — engineering portfolio

Astro static site. No React, client-side router, runtime backend, external fonts, or third-party analytics. All content and navigation render as HTML without JavaScript.

## Run locally

Use Node.js 22 or 24 and pnpm 11.

```sh
pnpm install --frozen-lockfile
pnpm dev
pnpm build
pnpm preview
```

The production output is `dist/`. The default local development URL is printed by Astro (normally http://localhost:4321).

## Edit content

- `src/data/projects.js`: all four primary case studies and factual status labels.
- `src/pages/projects/additional.astro`: Ourobio and EPICS.
- `src/pages/experience.astro`, `about.astro`, `resume.astro`, `contact.astro`: background and contact.
- `src/components/Visual.astro`: public-safe scope and proposed-architecture diagrams.
- `src/styles/global.css`: visual system and responsive layouts.
- `public/assets/`: only selected public imagery. Do not put private source files here.

The current resume route uses a request link. Once the real approved PDF is supplied, add it under `public/assets/resume/` and replace the request link with a download link. Never fabricate a PDF or employment dates to fill this gap.

## Free hosting from GitHub

Create a repository containing **only this `portfolio/` directory**, with its contents at repository root. The parent workspace contains internal source materials and must not be uploaded as a public repository.

For Cloudflare Pages, Netlify, or Vercel, connect that repository and use:

- Framework: Astro / static
- Install: `pnpm install --frozen-lockfile`
- Build: `pnpm build`
- Output directory: `dist`
- Node.js: 22 or 24
- Environment: set `SITE_URL` to the final HTTPS site URL

No domain purchase is necessary; use the provider's free subdomain. `SITE_URL` enables canonical and Open Graph URL metadata. Title, description, and Open Graph text metadata are already present. No fabricated social-preview image is supplied.

For GitHub Pages, set `BASE_PATH=/repository-name/` for a project site and `SITE_URL=https://username.github.io`. Build and publish only `dist/` using a Pages artifact workflow. A root user site uses `BASE_PATH=/`. Paths in the source respect Astro's base setting.

## Review before release

Read the four review documents in the parent workspace. They are local editorial records, not site assets. No deployment, GitHub account action, domain purchase, or public release was performed as part of this local implementation.

Known content limits: resume incorporation pending; roaster white paper and additional photos pending; NERA/customer Shinkei media withheld; cleared rigor/TPA/HSI images integrated; recovered pressure-tester and EPICS images have limited resolution; contact relies on the existing Squarespace form.

## Ready-to-use GitHub Pages deployment

See [PUBLISHING.md](PUBLISHING.md) for the upload commands and Pages setup. The included workflow handles builds, local-link verification, repository subpaths, and deployment on pushes to main.
