# Logo

Renders the right LTX lockup for the canvas you're on.

```jsx
<Logo variant="horizontal" theme="dark"  basePath="../.." />  {/* default */}
<Logo variant="horizontal" theme="light" basePath="../.." />  {/* on white */}
<Logo variant="mark"       theme="dark"  height={48} basePath="../.." />
```

## Themes
- `dark` — Branco Gelo letters + **Verde Neon Suave `#BCFFB7`** X. For Preto Profundo canvas.
- `light` — Preto Profundo letters + **deeper Verde brand-800 `#1F9E17`** X (BCFFB7 is illegible on white; this is the documented light-canvas exception).
- `mono` — All single-color. For greyscale print and stamping.

## Variants
- `horizontal` — site headers, proposals (default).
- `stacked` — centered uses (slide opener, social).
- `mark` — symbol only.
- `favicon` — the green-on-dark glyph.

## Rules
Minimum widths: 80px horizontal · 32px mark. Never tint, rotate, 3D-render, add stroke, or shadow.
