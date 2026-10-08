# Pitt AI in Medicine website

Source for [pittaims.com](https://pittaims.com), the site of Pitt AI in Medicine (also known as
Pitt AIMs): a student-run club at the University of Pittsburgh that's open to everyone.

It's a static site built with [Astro](https://astro.build). Every page is plain HTML at build
time, so search engines and link previews (iMessage, Slack, LinkedIn) see the real content.

## Updating content

Most edits are in `src/data/`. You shouldn't need to touch page markup.

| To change… | Edit |
| --- | --- |
| Officers, past officers, founders, faculty | `src/data/people.ts`. Add earlier boards to `pastOfficers`. Incoming officers start as "Announced soon" placeholders in `incomingOfficers`; swap in names as they're announced, then make them the current board. |
| Meetings and events ("Coming up" on the homepage) | `src/data/events.ts`. Leave `date` out and it shows "TBA". |
| Headshots | Add a square photo (~480px JPG) to `public/images/people/` and set `photo` in `people.ts`. Anyone without one gets a colored initials tile. |
| Research: "Coming out" items (under review, preprints, submitted abstracts), and the groups (who's in each, example papers, abstracts) | `src/data/research.ts`. Keep the writing plain and skip statistics. |
| Research highlights (homepage and /research) | `src/data/spotlights.ts` |
| Papers | `src/data/publications.ts` (newest first; put member names in `members` to highlight them). A paper shows up on /research once its DOI is listed in a group in `research.ts`. |
| Course dates, schedule, status | `src/data/course.ts` (set `status` to `"Open"`, `"In session"`, or `"Completed"`) |
| Contact email, press coverage, nav | `src/data/site.ts` |

Only use images you have rights to. The PDGrapher figure comes from the
[PDGrapher repository](https://github.com/mims-harvard/PDGrapher) (MIT License) and is credited on the page.

Page layouts live in `src/pages/`, shared pieces in `src/components/`, and styling in
`src/styles/global.css` (colors, type, buttons) plus a `<style>` block per page.

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
