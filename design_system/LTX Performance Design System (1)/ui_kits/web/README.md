# LTX Performance — Web UI kit

The marketing site. A slim, theme-aware composition: Nav → Hero → Why → Testimonial → CTA → Footer. Toggle dark/light from the floating switch in the top-right.

## Files
- `index.html` — landing page (mounts `HomePage`, with the DS bundle).
- `HomePage.jsx` — full composition + ThemeSwitch.
- `SiteFooter.jsx` — minimal footer.

## Sections in order
1. Sticky **Nav** — translucent on scroll, brand logo, 3 links + primary CTA. Logo auto-swaps to the light variant when theme="light".
2. **Hero** — kicker + headline (40% reduction) + subhead + 2 CTAs + photo.
3. **Why grid** — 3 FeatureCards: triagem · dados consolidados · 3 dias.
4. **Testimonial** — Hospital São Lucas case with outcome card.
5. **CtaBand** — closing diagnostic CTA.
6. **Footer** — wordmark + minimal nav + brand line.

## Why slim
Earlier draft had 6 feature cards, a metrics bar, a methodology timeline, and a pricing grid. We trimmed to the 4 sections that actually carry the brand promise. To add a Methodology / Pricing section to a real page, copy the patterns from previous drafts in git or compose new components against the same CSS variables.

## Theming
The whole page reads CSS variables. Setting `data-theme="light"` on `<html>` flips:
- Canvas: `#11161B` → `#FFFFFF`
- Accent: `#BCFFB7` → `#1F9E17` (brand-800, the documented light-canvas exception)
- Borders, surfaces, text — all cascade via tokens/colors.css.

The Logo component picks the right artwork file by reading `data-theme` itself.
