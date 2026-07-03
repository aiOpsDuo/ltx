# LTX Performance — Design System

> *Lógica em movimento.*

The single source of truth for designing anything LTX-branded: marketing site, pitch decks, LinkedIn carousels, infographics, ads, and product UI. Read this file first; it tells you exactly where to go next.

## Who LTX is

LTX Performance is a B2B sales acceleration and commercial-ops methodology. Customers: sócios-diretores, CTOs, and heads de vendas at médio/grande companies who want to stop maintaining parallel spreadsheets and start running a coordinated pipeline. Co-founders Leonardo dos Reis (process / data engineering) and Tiago Souza (commercial leadership). Real verticals served: medical/hospital networks, regulated e-commerce (pharma), and family offices.

The brand's 5-second test: *"these people understand the gears of my business and know exactly how to organize commercial chaos to generate profit."*

## Source materials

- `design-system/` — the brand owner's source-of-truth files (read-only, mounted). Specifically:
  - `BRAND-SUMMARY.md`, `CLAUDE.md` — positioning + non-negotiable rules.
  - `foundations/` — color, typography, voice, motion, iconography, imagery, radius, shadow, spacing, vocabulary.
  - `voice/examples.md`, `voice/homepage-copy.md` — do/don't and ready-to-paste copy.
  - `applications/{web,presentations,social-instagram,social-linkedin,email,ads,infographics}.md` — per-surface manuals.
  - `tokens/{tokens.css,tokens.json,tailwind.preset.js}` — original technical tokens.
  - `logo/`, `assets/templates/{avatar,graphics,images}/` — official assets (copied into `assets/`).

## Visual foundations

**Canvas.** Two themes. **Dark** (`#11161B`) is the default for marketing, decks, social, and ads. **Light** (`#FFFFFF`) is the documented alternative for print, email, internal reports, and any landing where the dark canvas isn't appropriate. Flip themes by setting `data-theme="light"` on `<html>` — every CSS variable cascades automatically; no component code changes needed.

**Accent.** Verde Neon Suave `#BCFFB7` on dark canvas. On light canvas, the brand-mandated readable green `#1F9E17` (brand-800) takes over — BCFFB7 is illegible on white. The Logo component swaps artwork files automatically based on `data-theme`.

**Typography.** Two families, two roles. **Space Mono** (400 + 700) carries every headline, kicker, number, and code block — its monospaced rhythm is the brand's engineering signal. **Sora** (300/400/500/600/700) carries every paragraph, label, and input. Never introduce a third family. Headlines are always sentence case.

**Spacing.** A 4px base scale (`--ltx-space-*`) drives every gap. Sections breathe at 96–128px on desktop, 48–64px on mobile. The marketing container is 1200px max with 32px gutters; reading-width copy caps at 680px.

**Radius.** Marketing CTAs are `radius-full` (pill). Inputs and product buttons are `radius-md` (8px). Cards and surfaces are `radius-lg` (12px). Logos and silhouette imagery are `radius-none`. Concentric rule: inner radius = outer − padding.

**Shadow.** Flat by default. Use surface contrast (`#1A1F26` on `#11161B`) instead of elevation. Allowed: `xs` on hover (cards), `sm` on focused inputs, `md` on popovers, `lg` only on full overlays. Never colored shadows.

**Background imagery.** Three official vector graphics live in `assets/graphics/` (`ltx_graph01`–`03`), to be used at 10–20% opacity in Branco Gelo over dark sections — texture, never decoration. Avoid invented patterns, generic AI tech meshes, gradients, glassmorphism, glow, or 3D.

**Animation.** Quiet. Fade + ≤8px translate-up at 160/240/480ms. `ease-out-expo` for reveals, `ease-in-out-ui` for moving elements. Honor `prefers-reduced-motion`. Never parallax, scroll-jacking, typewriter headlines, bounces, or text shimmer.

**Hover / press.** Buttons: background lightens (primary: `#92EF8C`); 160ms transition; press scales to 98%. Links: color transitions from `#A9B5B5` to `#EDEEF4`. Cards (hoverable): translate-y −2px + `shadow-xs`; hairline darkens.

**Borders.** A single hairline weight (1px). Strong border `#3B403F` (Cinza Grafite) for visible dividers and active hairlines; soft border `#282C2B` for inside-card lines. Border-left `2px solid #BCFFB7` is reserved for *the* featured card on a page (one only).

**Transparency / blur.** Used only on the sticky nav after scroll — `rgba(17,22,27,0.85)` with `backdrop-filter: blur(8px)`. Nowhere else. Glass effects are banned.

**Imagery color vibe.** Cool, contained, natural light. Real photography of decision-makers in real offices and silhouetted/background-removed objects. Never AI-generated humans, never stock "diverse team around laptop," never blue-glow tech.

**Cards.** Surface `#1A1F26` over canvas `#11161B`, 1px `#282C2B` hairline, `radius-lg`, 24–32px padding. Flat at rest. Hover lifts 2px and darkens the border to `#3B403F`. The "accent" variant adds a 2px Verde Neon left border — use once per page, on whatever you're recommending.

## Content fundamentals — voice

**Person.** Second-person singular (`você`), never `nós` or third-person. Talk to *one* head of sales reading on their phone.

**Casing.** Sentence case for every headline, subtitle, button, and card title — capitalize only the first letter. No Title Case. No ALL CAPS except for overlines/kickers (max 3 words, +0.06em tracking).

**Length.** ≤15 words per sentence. ≤40 words per slide. Reading width 680px max. Short, declarative, ends with a period — periods do work that exclamation marks pretend to.

**Headline formula.** `verb (infinitive) + quantified gain + timeframe / context`. Example: *"Reduza em 40% o ciclo médio de vendas em 6 semanas."*

**Specificity over abstraction.** Substitute concrete nouns for vague ones — `WhatsApp Business`, `Pipedrive`, `RD Station`, `n8n`, `formulário`, `pipeline`, `CRM`, `CAC`, `ROI`, `taxa de conversão` — never `solução`, `plataforma`, `sistema` alone.

**Banned words on public surfaces:**
`revolutionary`, `game-changing`, `cutting-edge`, `next-generation`, `supercharge`, `unleash`, `leverage`, `transform`, `seamless`, `robust`, `AI-powered`, `10x`. Also `alavancar`, `potencializar`, `transformar`, `revolucionar`, `solução de IA`.

**CTAs are direct.** *"Analisar minha operação"*, *"Falar com consultor"*, *"Agendar diagnóstico"* — never *"Book a Demo Now"* and never with an exclamation mark.

**Claims are data-bound.** Every claim cites a number or a real client (Hospital São Lucas, Pensalab, Mercado Torre, RE4LL). No "studies show". No round metaphors.

**Bullets.** Capitalize first letter, end with period unless it's a single word.

**Voice references for ready-to-paste copy:** `voice/examples.md` + `voice/homepage-copy.md` in `design-system/`.

## Iconography

**Library.** Lucide Icons exclusively — outline style, 1.5px stroke width, never filled (unless representing an active UI state like a star). Lucide is loaded **from CDN** in HTML cards and slides (e.g. `https://unpkg.com/lucide-static@latest/icons/<name>.svg`) — we do not vendor icon SVGs into `assets/` because the catalog is enormous and Lucide is stable. *Substitution flagged:* the original brand also mentioned Feather Icons as acceptable — we standardized on Lucide alone since it's a superset of Feather with the same visual rules.

**Sizes by context.** 14px inline · 18px in CTAs · 20px in nav · 24px in feature chips · 32px hero illustration.

**Feature chip pattern.** 40×40 square, `radius-md`, background Cinza Grafite `#3B403F`, icon Verde Neon `#BCFFB7` at 1.5 stroke. The signature "this thing matters" container on every feature card. See `components/core/FeatureChip.jsx`.

**Color.** Icons inherit `currentColor` so they adapt to whatever text color they sit on. Status icons take semantic colors (success/warn/danger). Never gradient strokes.

**Banned.** Emoji in headlines or marketing UI. Mixed icon libraries on the same surface. Icons inside perfect circles (use the chip).

**Assets actually shipped:**
- `assets/logo/` — `mark.svg`, `mark-inverse.svg`, `wordmark.svg`, `lockup-horizontal.svg`, `lockup-stacked.svg`, `favicon.svg`, `avatar-icon.svg`.
- `assets/patterns/` — `grid.svg`, `brand-wash.svg`.
- `assets/graphics/` — `ltx_graph01.svg` (vector field), `ltx_graph02.svg` (traffic), `ltx_graph03.svg` (flow curves).
- `assets/avatar/` — `avatar_ltx.png` + `.svg`.
- `assets/images/` — `mountain.png`, `sample01.png`, `sample02.png` (placeholder photography references).

## Index — what lives where

```
LTX Performance Design System/
├── README.md                — this guide
├── SKILL.md                 — agent-skill manifest
├── styles.css               — entry-point (imports every token + font file)
├── tokens/
│   ├── fonts.css            — Google Fonts @import
│   ├── colors.css           — brand · ink · surface · semantic
│   ├── typography.css       — families, scale, .ltx-* utility classes
│   ├── spacing.css          — 4px scale + container widths
│   ├── radius.css           — none → full
│   ├── shadow.css           — none → lg
│   └── motion.css           — durations · easings · reduced-motion reset
├── components/
│   ├── core/                — Button, Badge, Input, Card, Stat, FeatureChip, FeatureCard, Logo
│   └── marketing/           — Nav, Hero, CtaBand, Testimonial
├── ui_kits/
│   └── web/                 — LTX marketing site (Nav + Hero + Features + Methodology + Testimonial + Pricing + Cta + Footer)
├── slides/                  — 7 sample 1280×720 slide templates
├── cards/                   — 16 foundation specimen cards (Colors · Type · Spacing · Brand)
└── assets/                  — logos, graphics, patterns, sample imagery
```

## Components reference

- **`Button`** — primary / secondary / ghost / danger. Pill default. `leadingIcon`, `trailingIcon`, `fullWidth`.
- **`Badge`** — neutral / brand / success / warn / danger / outline. `uppercase` flag for the kicker treatment.
- **`Input`** — labeled field. `as="textarea"` for multi-line. Brand focus ring.
- **`Card`** (+ `CardHeader`, `CardTitle`, `CardBody`) — surface / ghost / accent. `hoverable` adds lift.
- **`Stat`** — big number + label + source. `sm` / `md` / `lg`.
- **`FeatureChip`** — the 40×40 brand icon tile.
- **`FeatureCard`** — chip + title + body, the "Por que LTX" grid card.
- **`Logo`** — horizontal / stacked / mark / wordmark / favicon variants.
- **`Nav`** — sticky marketing top bar.
- **`Hero`** — kicker + headline + subhead + CTAs + optional 4:5 image.
- **`CtaBand`** — closing band (`dark` or `accent` variant).
- **`Testimonial`** — quote + attribution + outcome stat.

## UI kit

- `ui_kits/web/` — the full LTX marketing home. Open `index.html` to see the composition.

## Caveats noted to the user

- **Fonts.** Self-hosted from `assets/fonts/` (Space Mono 400/700 + italics; Sora 100–800). Vendored TTFs, no CDN dependency. Brandbook direction is **thin-first** — default weight for Space Mono headlines is 400 (not 700) and for Sora body is 300 (not 400). Reach for 500/700 only as spot emphasis. Previously loaded from Google Fonts CDN — swap was made after the brandbook's `.ttf` binaries were vendored — the brand's documented loader (`design-system/foundations/typography.md`).
- **Light-canvas accent green.** The brand canon names exactly one accent (`#BCFFB7`). On white that color is illegible, so we use `#1F9E17` (brand-800) as the documented light-canvas exception, matching the Logo's `theme="light"` artwork files.
- **Icons.** Lucide Icons via `unpkg.com/lucide-static`. The original brand spec lists "Lucide or Feather"; we standardized on Lucide. Substitute Feather if explicitly requested.
- **Photography.** Three sample images (`mountain.png`, `sample01.png`, `sample02.png`) are in `assets/images/` as references. Real client photography is required for production work — the brand explicitly bans stock and AI humans.
- **Brand graphics + silhouettes.** Three official vector compositions live in `assets/graphics/` (`ltx_graph01.svg` Cinza Grafite abertura · `ltx_graph02.svg` Cinza Sage com mark verde · `ltx_graph03.svg` Preto Profundo com três Xs). Use as full-bleed slide openers, social card backgrounds, or section quebras. The silhouette portrait `assets/images/sample02.png` (black on Verde Neon `#BCFFB7`) is the primary brand human imagery — use it in heros, LinkedIn carousels, and proposal capas. See the `Grafismos LTX` and `Silhuetas em Verde Neon` cards in the Brand tab.
- **Theme toggle in the editor preview pane.** The dark→light switch on `ui_kits/web/index.html` flips `data-theme="light"` on `<html>` and updates the CSS variables correctly. In the editor preview iframe (this environment), some React-rendered elements paint as if their styles were pinned to first-render values — a quirk of the preview instrumentation, not the design system. In a normal browser the toggle flips colors as expected. To force a clean visual in the preview, reload the page.
- **Product UI / app screens.** Not built. LTX is a services + consulting brand; their public surface is the marketing site and decks. If product screens are added later, the existing primitives compose to it.
