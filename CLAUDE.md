# CLAUDE.md — TAFKEEK Company Portfolio

> Context for Claude Code on this project. Read before making changes.

---

## 1. What this project is

A **premium, multi-page static company website** for **TAFKEEK**, a design studio covering
Interior Design, Exterior/Architectural Design and BIM & Technical Documentation. Built
2026-09-22.

**Company-only, no personal attribution (2026-09-22 revision)**: the user explicitly asked to
strip out anything specific to the individual behind TAFKEEK — no name, no portrait/photo, no
personal work history (prior employers), no CV download, no personal LinkedIn. The site now
speaks only in studio voice ("TAFKEEK", "the studio", "we design") and never names, pictures, or
links to a specific person. The only individual-scoped detail retained is the real contact email
(`studiotafkeek@gmail.com`, TAFKEEK's own business inbox — swapped in 2026-09-22, replacing the
personal `architect.abdelrhmanmohsen@gmail.com` address used in the first draft). The TAFKEEK
logo (`img/tafkeek-icon.webp` in the nav, `img/tafkeek-logo-full.webp` in the homepage hero) and
the real slogan "Rethinking Space, Redefining Form" (copied from the existing single-page
TAFKEEK site's JSON-LD `slogan` field) were also added in this revision — both were missing from
the first draft.

- `index.html` — company homepage (hero, services overview, selected work, BIM workflow strip,
  why-work-with-TAFKEEK, about, client testimonials, contact).
- `interior.html` — Interior Design capability/portfolio page.
- `exterior.html` — Exterior/Architectural Design capability/portfolio page.
- `bim.html` — BIM & Technical Documentation capability/portfolio page (the studio's core
  technical differentiator: modeling, coordination, clash detection, documentation).
- `styles.css` — shared design system for every page.
- `script.js` — shared behavior (nav toggle, scroll-reveal, animated stat counters, gallery
  filter tabs, lightbox, lazy-loaded video, contact-form mailto).
- `img/` — imagery copied from the personal-portfolio project (see §3).

No build step, no framework. Plain HTML/CSS/JS, same conventions as both sister projects below.

### Sister projects (read-only references, not part of this project)

- **`D:\por\personal porfolio\`** — Abdelrhman Mohsen's **personal** portfolio (multi-page:
  `index.html` + `work/*.html` case studies + full-gallery pages). This is the **source of
  truth** for every fact and every image used here — its own `CLAUDE.md` documents exactly what
  is confirmed real vs. representative for each image, and that discipline is inherited
  wholesale by this project. Do not edit that project from here.
- **`C:\Users\compu line\Downloads\tafkeek-portfolio\index.html`** — an existing single-page
  TAFKEEK brand site (cream/ink/gold palette, Fraunces serif display + Inter body, inline
  `<style>` block). This project reuses its exact color tokens and font stack, extended into a
  proper shared `styles.css` for a multi-page site. Do not edit that file from here.

This project exists because the user asked to reuse the **TAFKEEK** name/identity (confirmed via
a clarifying question) for a **company-facing** portfolio — not a personal brand site — covering
interior, exterior and BIM work for a B2B/corporate client audience, built from the same
underlying CV/portfolio facts as the personal site but reframed in studio voice ("we design",
"our practice") without inventing any company facts that aren't in the source material.

---

## 2. Source of truth for all content

Everything traces back to the same two source PDFs used by the personal-portfolio project (CV +
37-page portfolio deck) — see `D:\por\personal porfolio\CLAUDE.md` §2 for their names and full
content breakdown. They are **not** copied into this project (company-only site — no personal CV
document is distributed here); read them from the personal-portfolio project if source
verification is needed.

**Never fabricate company facts**: no invented team size, founding date, office address, or client
logos, and no project names beyond what's real in the CV/portfolio. Where a company fact isn't
confirmed anywhere (headcount, founding year, office location), the site omits it or phrases
generically. The studio is never described as having a specific number of employees or a
specific office address, because neither is confirmed anywhere, and it is never attributed to a
named individual anywhere on the site (see the company-only note in §1).

**Testimonials are real, not fabricated**: the six client reviews on the homepage's "Client
Voices" section were copied verbatim from the existing single-page TAFKEEK site at
`C:\Users\compu line\Downloads\tafkeek-portfolio\index.html` (its `#testimonials` section,
present in the markup but not linked in that site's nav) — real client quotes with first-name +
initial attribution and project type, unedited except for two quotes' "designer"/pronoun wording
left as originally written (real client words are not rewritten). Do not add more testimonials
without a real source.

Stats reused on the homepage (4+ years, 150K+ m² delivered, 30+ structures, 4+ countries) are
the same verified numbers already used on the personal-portfolio site — no new numbers were
invented for this project.

### Image-to-project attribution — same caveat as the personal-portfolio project

Only **Square Business Hub** is confirmed by named, captioned source material to depict that
specific project (`exterior.html` says so explicitly). Several other real studio renders used
here — e.g. the La-Mer Compound-context residential exterior on `exterior.html` and the homepage
— are **not** confirmed to belong to one specific named project and are captioned as
representative rather than attributed to a project name, exactly following the personal-portfolio
project's disclosure pattern (see that project's `CLAUDE.md` §2 for the full reasoning). **Do
not remove these disclosures or re-caption a representative image as if it depicts a specific
named project.**

The Supply Chain — Riyadh drawings used on `bim.html` (`bim-supplychain-elev-north.jpg`,
`bim-supplychain-detail-wall.jpg`) are real, confirmed issued-for-tender drawings for the
"Supply Administration Building & its Related Services" project (King Saud Medical City) — see
the personal-portfolio `CLAUDE.md` §6c for full provenance. These are stated as real, not
representative.

There is no confirmed photo of a physical TAFKEEK office, team photo, or client logo anywhere in
the source material — none is used or implied anywhere on this site.

---

## 3. Images (`img/`)

All images were **copied from** `D:\por\personal porfolio\img\` (real files only) into this
project's own `img/` folder — nothing here references a path outside this project. A curated
subset (~50 files) was copied, covering:

- **Exterior** (`ext-*`): hero/Square Business Hub, villa exteriors (Villa 108, M3MAR Villa),
  ESTRA7A, master plan aerial, commercial night render, La-Mer-context compound unit, mall/mixed
  use night renders, Lamar Business Park.
- **Interior** (`int-*`): bedroom, bathroom, kitchen, living room (L-shape and cozy), dining,
  private office, entry hall, hallway, meeting room, retail boutique, retail coffee shop.
- **BIM** (`bim-*`, plus `floorplan.webp`, `model3d.webp`, `exploded.webp`, `navisworks.webp`,
  `schedule.webp`, `cde.webp`, `elevation.webp`): plans, 3D model views, clash-detection
  before/after, the real Supply Chain — Riyadh issued-for-tender elevation and wall detail.
- `modern-facade.mp4` / `modern-facade-poster.webp` — the featured video walkthrough, used on
  `exterior.html`.
- `favicon-16.png` / `favicon-32.png` / `favicon-180.png` — reused as-is from the personal site.
- `tafkeek-icon.webp` (nav mark) / `tafkeek-logo-full.webp` (homepage hero lockup) — TAFKEEK's
  real logo assets, copied from `C:\Users\compu line\Downloads\tafkeek-portfolio\img\`.
- `img/thumbs/` — matching 560px JPEG thumbnails copied alongside, for the same lazy-load pattern
  as the personal-portfolio project (full-resolution image only loads in the lightbox via
  `data-full`). One thumb (`bim-supplychain-elev-north.jpg`) didn't have a pre-generated thumb in
  the source and was copied at full resolution instead — fine for now, but worth generating a
  real 560px thumb later if page weight becomes a concern.

If more images are needed later (e.g. from the personal portfolio's fuller BIM/Architecture/
Interior galleries, or from the `Designs/` raw render folder documented in the personal
project's `CLAUDE.md` §6c), copy them into this project's `img/` first — never reference the
personal-portfolio project's `img/` path from this project's HTML.

---

## 4. Shared systems

- **Design tokens**: `styles.css` `:root` — `--cream #f4efe6`, `--cream-alt #faf7f1`,
  `--ink #38352f`, `--ink-soft #6d675d`, `--ink-faint #a29a8c`, `--gold #a9834f`,
  `--gold-deep #8a6a3d`, `--line #ddd3c1`, `--deep #211f1b` — taken directly from the Downloads
  TAFKEEK single-pager. Layout classes (`.hero`, `.work-row`, `.editorial-gallery`, `.bim-flow`,
  `.cap-grid`, `.why-grid`, `.contact-grid`, etc.) are adapted from the personal-portfolio
  project's `styles.css` component patterns, retextured to this palette, with headings set in
  `--font-display: 'Fraunces'` and body/UI text in `--font: 'Inter'` (TAFKEEK's identity,
  distinct from the personal site's Inter-only system).
- **Gallery filter**: same `data-tabs-for="#gallerySelector"` + `data-group` pattern as both
  sister sites. A new gallery item needs a `data-group` or the filter hides it.
- **Lightbox**: `[data-lightbox-scope]` scope with `[data-lightbox]` + `data-caption` children;
  each page includes its own `#lightbox` markup at the end of `<body>` — copy that block when
  adding a page.
- **Reveal-on-scroll**: class `reveal` / `reveal-left` / `reveal-right` / `reveal-scale`,
  IntersectionObserver-driven, respects `prefers-reduced-motion`.
- **Animated counters**: `data-count="150K+"` pattern, same as the personal site.
- **Lazy video**: `<video data-src="...">` + `preload="none"`, played only within 25% of viewport
  (used on `exterior.html`'s featured video block).
- **Contact form**: `#inquiryForm` on the homepage only — no backend (static site). `script.js`
  builds a `mailto:` link to `studiotafkeek@gmail.com` from the field values, exactly
  mirroring the personal-portfolio project's pattern, including the disclosure note under the
  submit button. If real form submissions are wanted, that needs a form service or backend added
  explicitly (ask first — third-party integration).

---

## 5. Contact info

- **Email:** `studiotafkeek@gmail.com` (TAFKEEK's own business inbox).
- **Phone / WhatsApp:** `+20 109 208 3829`.

No separate TAFKEEK email, phone or physical address is confirmed anywhere in the source
material — don't invent one. The personal LinkedIn profile used on the personal-portfolio site
is deliberately NOT linked here (company-only site, no personal-profile links — see §1).

---

## 6. Pending items

- [ ] `og:url` left empty on every page — fill in only once there's a real live URL. Do not
      invent one.
- [ ] No deployment target confirmed yet.
- [ ] Contact form is `mailto:`-only (no backend) — confirm with the user before wiring in any
      third-party form service.
- [ ] Homepage galleries are curated/representative rather than exhaustive — if a fuller
      per-discipline gallery is wanted later (matching the personal site's dedicated
      `bim-portfolio.html` / `architecture-portfolio.html` / `interior-portfolio.html` /
      `technical-documentation.html` pattern), expand `interior.html` / `exterior.html` /
      `bim.html` using the same tab-filtered `.editorial-gallery` pattern, pulling more images
      from the personal-portfolio project's `img/` into this project's `img/` first.
- [ ] No confirmed company-level facts exist yet for: founding year, team size/headcount, office
      address, client logos, testimonials. None of these appear anywhere on the site. Add them
      only once the user confirms real values — do not guess.

---

## 7. Working style

- Prefer small, surgical edits over rewrites once the site is stable.
- After any change: verify images resolve, nav anchors resolve (including cross-page links like
  `interior.html` → `index.html#contact`), `rel="noopener"` on external links, gallery filter +
  lightbox behave, mobile layout holds (~390px) and desktop holds, no console errors.
- Site language is English (`<html lang="en">`).
- Never fabricate a fact about TAFKEEK as a company that isn't traceable to the two source PDFs
  or to what's already stated on the personal-portfolio site. When in doubt, phrase generically
  or omit — the same discipline documented in `D:\por\personal porfolio\CLAUDE.md` §2 applies
  here without exception.
