---
name: ltx-performance-design
description: Use this skill to generate well-branded interfaces and assets for LTX Performance, either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

# LTX Performance — design skill

Read `readme.md` in this skill folder before doing anything. It is the manifest for the whole design system: the brand's voice rules, color palette, typography, motion, iconography, and where every asset lives. Then explore:

- `styles.css` + `tokens/` — drop these into any HTML file and the variables (`--ltx-*`) work.
- `assets/` — the only legal logos, patterns, and reference imagery.
- `components/` — React component sources (Button, Hero, Card, Testimonial, …) — copy or read for reference.
- `ui_kits/web/` — full marketing-site composition as a reference for layout, copy, and section order.
- `slides/` — seven 1280×720 templates for proposals and pitch decks.
- `cards/` — small specimen cards showing every foundation in isolation.

## When to use what

- **Slides / proposals / pitch decks** → start from `slides/0X-*.html`, change copy, keep the footer and page numbers.
- **Landing page / marketing section** → copy `ui_kits/web/HomePage.jsx` and edit; reuse `Nav`, `Hero`, `FeatureCard`, `Testimonial`, `CtaBand`.
- **Social carousel (LinkedIn / IG)** → 1080×1350 canvas on `#11161B`, Space Mono headline, Sora body, footer with `lockup-stacked` at small size. Apply the same kicker → headline → body rhythm as a slide.
- **Email** → light canvas exception. Headline Space Mono `#11161B` on `#EDEEF4`, single CTA, no images at the top.
- **Infographic / data** → Space Mono numbers in `#BCFFB7`, Sora labels in `#EDEEF4`, hairlines `#3B403F`, source citation in mono `#696F6D`.
- **Production code** → import `styles.css` (or the individual token files), use the React components in `components/` as a starting point.

## Non-negotiables

1. Background `#11161B`, accent `#BCFFB7` only, Space Mono for display, Sora for body. No third font, no extra accent color.
2. Sentence case everywhere. No exclamation marks. No banned words (`revolutionary`, `supercharge`, `unleash`, `transform`, `seamless`, `robust`, `AI-powered`, `10x`, `alavancar`, `potencializar`).
3. CTAs are pill-shaped and direct: *"Analisar minha operação"*, *"Falar com consultor"*, *"Agendar diagnóstico"*.
4. Lucide icons at 1.5 stroke width, currentColor.
5. No gradients, glassmorphism, glow, 3D, generic AI tech meshes, or AI-generated humans.
6. Motion is fade + ≤8px translate at 160/240/480ms. Respect `prefers-reduced-motion`.

If you're producing a visual artifact (slide, mock, throwaway prototype), copy the assets you need into the output and write static HTML files for the user to view. If you're working on production code, the same guidelines apply — read `readme.md` and treat them as a contract.

If the user invokes this skill with no other guidance, ask them what they want to build, then act as an expert LTX designer who outputs HTML artifacts or production code, depending on the need.
