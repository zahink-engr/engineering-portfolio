# First-version quality check

## Completed

- Production build: 12 HTML pages, including 404.
- Static checker: 223 local references resolved, including case-study anchors; 22 image references have descriptive alt text.
- No client JavaScript files or script tags in production HTML. Case studies, diagrams, navigation, and contact link are static HTML/CSS.
- Total production output: approximately 1.99 MB, including all HTML, CSS, favicon, and eleven WebP assets. Home HTML is approximately 2.2 KB gzipped. These are asset-size checks, not a Lighthouse score.
- Browser inspection: desktop home at 1440 px; case-study desktop layout at 1280 px; mobile home and technical case study at 390 px.
- All 11 content routes opened at mobile width with one H1 and no horizontal page overflow.
- Selected images loaded in the rendered project pages. Home images are intentionally lazy-loaded.
- Actual project-card navigation and roaster section-anchor navigation tested.
- Diagram clipping found during mobile inspection and corrected with sufficient intrinsic height.
- Additional 320 px home/pressure-page check completed. Intrinsic grid-width overflow on the homepage was fixed and rechecked at 320 px.
- Keyboard-visible focus styles, skip link, semantic headings, table headers, reduced-motion styles, and image alt text included.
- Names and titles checked against the supplied handoff, deck, and recovered public archive. Unverified KDP dates omitted.
- Shared pressure-tester ownership retained. EPICS described as team work. No unverified model performance or completed roast trials claimed.
- Six user-cleared rigor/TPA/HSI images included. No full presentation, NERA designs, customer context, or source-review files in `dist/`.

## Content limitations

- Two roaster fabrication photos are now integrated. The white paper and additional photos are pending. A newly supplied resume PDF awaits incorporation. See the parent workspace's CONTENT_QUESTIONS.md.
- Cleared Shinkei hardware photography and CAD now replace the scope-only presentation.
- The roaster architecture is explicitly proposed. Structural welding/fabrication is now documented; completed operation, controls, or roast trials are not claimed.
- Pressure-tester and EPICS public images are low resolution. They are preserved honestly rather than synthetically enhanced.
- Contact displays zkabir@purdue.edu and opens a mailto draft. No test email was sent.
- Hosting URL: https://zahink-engr.github.io/engineering-portfolio/. The workflow sets SITE_URL and BASE_PATH.
- GitHub Pages deployment is active on pushes to main.

## Re-run production checks

```sh
pnpm build
node scripts/verify.mjs
```

## Shinkei / GitHub Pages update

Six cleared Shinkei assets rendered and checked in browser. Desktop homepage and mobile case-study layout checked without overflow. Both root and /engineering-portfolio/ production builds pass the reference checker. GitHub Actions workflow prepared but cannot be executed on GitHub until the repository is uploaded and Pages is enabled.


## September 28 theme and contact update

- Dark black/red/green CSS theme with abstract print textures inspired by supplied references; no reference artwork copied.
- Production build: 12 pages, 210 validated local references, 22 image references, zero client JavaScript files, no checker errors.
- Desktop homepage and mobile home/contact inspected at 390 px; contact and Shinkei inspected at 320 px with no horizontal overflow.


## Project voice and evidence update

Shinkei and KDP prose revised to first-person, conversational copy at the user's request. Technical limits and shared ownership remain explicit. Personal coffee-roaster content compared with the prior commit and unchanged.

Added eleven Shinkei still images from cleared rigor/TPA slides, the original 48-frame rigor GIF plus its still poster, and four KDP context/results slides already published in the original portfolio. The animation opens and closes through a native disclosure control. New gallery images link to their full-size asset. Decorative slide assets and private message screenshots were not used.

Production verification: 12 pages, 242 local references, 39 image references, no errors, no client JavaScript. Mobile gallery and animation disclosure checked in the browser. The private-source checker allows only the specifically approved rigor GIF.
