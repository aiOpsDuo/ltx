# Button

The single brand action. Pill-shaped by default; only product-internal buttons use `rounded="md"`.

```jsx
<Button leadingIcon={<ArrowRight size={16} strokeWidth={1.5} />}>
  Analisar minha operação
</Button>
```

## Variants
- `primary` — Verde Neon Suave on Preto Profundo (the CTA).
- `secondary` — outlined Branco Gelo on transparent.
- `ghost` — bare label, no border.
- `danger` — only for destructive product actions.

## Sizes
- `sm` — table/inline (text 14, py 8).
- `md` — product actions.
- `lg` — marketing CTAs (default).

## Rules
- Never stack two primary buttons. Pair primary + secondary or primary + ghost.
- Never add a colored shadow.
- Copy must be direct ("Analisar minha operação"), never hyped or punctuated with `!`.
