# Grimes, Fay & Kopp — Blueprint WebStudio Concept

Independent, non-official redesign concept for https://www.gfklawfirm.com/ (Grimes, Fay & Kopp, LLC, Columbia and Centralia, MO).
Preview: https://gfk.blueprintwebstudio.com (noindex).

Custom one-page build: content in `src/App.jsx`, styles in `src/styles.css`, concept widget in `src/concept.jsx`.

## Local setup
```bash
npm ci
cp .env.example .env.local
npm run dev
```

## Deployment
Vercel project `grimes-fay-kopp` (framework Vite); pushes to `main` deploy automatically. Domain `gfk.blueprintwebstudio.com` is a CNAME at Porkbun.
Optional env vars: `VITE_CONCEPT_END_DATE` (defaults to 2026-12-03), `RESEND_API_KEY` / `CONTACT_TO_EMAIL` / `CONTACT_FROM_EMAIL` for the consultation form (`api/contact.js`; demo mode without them).

## Design
- Logo: their original GFK "Attorneys At Law" logo from the current site, on a white plate that hangs from the black header (as on the original). Favicon is their own gold scales icon.
- Palette from the original: black and their signature gold #f2cc32, on warm paper, with a darker gold for text on light backgrounds.
- Fonts: Archivo (wide, heavy uppercase headings, echoing the original's "GRIMES, FAY & KOPP" banner) and Source Serif 4 (body).
- Motif: the black diagonal wedge from the GFK logo. The hero's black panel is cut on a diagonal over their courthouse photo; wedge marks on eyebrows, list bullets, timeline markers and card corners; gold highlighter under key words.
- Photos: their own images from the current site (courthouse, downtown Columbia skyline, brick building, attorney photo), cropped out of the slider's curved masks.
- Section order: gold top bar with both phones and hours → header → hero with both office phones and hours in a gold strip → six practice areas as numbered tabs (accordion on phones) → how we work, with the attorney photo and the free 30-minute consultation → 1946–today history ledger → their testimonial → two offices, conference room rental and counties served → consultation form → footer with their attorney-advertising disclaimer.
- Reviews: the one testimonial on their site ("Thomas"), quoted word for word and labelled as from the gfklawfirm.com testimonials page. No Google rating is shown.
- Awards: none on the original site.

## What changed from the current site
- Footer still reads "Copyright © 2014", and the design is a 2014 template; refreshed throughout.
- No responsive layout: the phone view is a shrunk desktop page. Now fully responsive (checked at 1280px and 390px, no sideways scrolling).
- Contradictory history: "more than 50 years of combined experience", "serving clients for more than 50 years" and "started over 60 years ago" all appear; the concept uses the one firm fact, founded in 1946.
- The services overview page has a stray "-->" code fragment showing on the page; removed.
- Hours were only on the contact page and the Centralia address only on the location page; both phones, both addresses and the hours are now in the first screen and the footer.
- Typos fixed ("non-nonsense", "all are of family", "clams", "where to receive").
- Contact form asked for first/last/daytime/evening phone; simplified to name, phone, email, practice area and a short note.

## Owner should confirm
- Which attorneys currently practice at the firm (Elton W. Fay and Andrew C. Kopp are named only as joining in 1973 and 2005), and who is in the attorney photo; a sharper photo would help (the only copy is 162×232px).
- "80 years" / "eight decades" (from the 1946 founding) vs the site's "more than 50 years" wording.
- That the complimentary 30-minute consultation is still offered, and for all practice areas.
- The Centralia office address (203 S Allen Street) and phone, and whether it keeps the same hours as Columbia.
- Counties served (Boone, Cooper, Cole, Callaway, Audrain, Randolph and surrounding).
- Conference room rental is still offered, and its hours (Mon–Fri 8–5).
- Practice-area sub-items, which combine the service pages and the Our Firm list (e.g. workers' compensation, traffic defense is listed on the old site but not featured here).
- That "Melody" (named in the testimonial) is still with the firm, and permission to keep using the testimonial.
- Photo rights for the courthouse, skyline and building images (taken from the current site), and a higher-resolution logo file.
- Attorney-advertising wording against Missouri Rule 4-7 (the concept keeps the firm's own disclaimer, lightly edited).
