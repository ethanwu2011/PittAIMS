# Pitt AIMs website

Source for [pittaims.com](https://pittaims.com), the site of the Pitt AI in Medicine Society, a
student-led machine learning research group at the University of Pittsburgh School of Medicine.

It's a static site built with [Astro](https://astro.build). Every page is plain HTML at build
time, so search engines and link previews (iMessage, Slack, LinkedIn) see the real content.

## Updating content

Most edits are in `src/data/`. You shouldn't need to touch page markup.

| To change… | Edit |
| --- | --- |
| Officers, founders, faculty | `src/data/people.ts` |
| Publications | `src/data/publications.ts` (newest first; put member names in `members` to bold them) |
| Course dates, schedule, status | `src/data/course.ts` (set `status` to `"Open"`, `"In session"`, or `"Completed"`) |
| Contact email, press coverage, nav | `src/data/site.ts` |

Page layouts live in `src/pages/`, shared pieces in `src/components/`, and all styling in
`src/styles/global.css` plus a `<style>` block per page.

## Running locally

Requires Node 22.12 or newer.

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # type-check, then build to dist/
```

## Deploying

Pushing to `main` builds and deploys to GitHub Pages through `.github/workflows/static.yml`.
Pull requests run the same build as a check, so a broken change can't merge silently.

## Promotion assets

- Link preview image: `public/og.png` (1200×630), used automatically on every page.
- QR code for flyers and slides: `public/brand/pittaims-qr.svg` and `.png`, also served at
  `pittaims.com/brand/pittaims-qr.png`.
- Sitemap: generated at `/sitemap-index.xml`. Submit it once in
  [Google Search Console](https://search.google.com/search-console) to get indexed faster.
