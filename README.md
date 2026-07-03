# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

## Animação — GSAP

[GSAP](https://gsap.com/) é a biblioteca de animação principal do projeto. Qualquer animação orquestrada em
JS — timelines, loops, cross-fades sequenciados, reveal-on-scroll — deve ser construída com GSAP, não com
`setInterval`/toggle de classe CSS nem com bibliotecas concorrentes (Framer Motion, react-spring, etc.).

Transições simples de hover/focus (botão, card, link) continuam em CSS puro, usando os tokens de
`src/styles/tokens/_theme.css` (`--ltx-dur-*`, `--ltx-ease-out-expo`) — não há necessidade de JS para esses
casos, e o CSS já herda a regra global de `prefers-reduced-motion`.

**Tokens compartilhados:** `src/lib/motion.ts` espelha em segundos os mesmos `--ltx-dur-*` do design system e
expõe `EASE_OUT_EXPO` (a ease nomeada do GSAP mais próxima do `cubic-bezier(0.22, 1, 0.36, 1)` da marca) e
`prefersReducedMotion()`. Toda animação em GSAP deve importar desses tokens em vez de usar números soltos —
isso é o que mantém a motion consistente com o design system.

```ts
import { gsap } from 'gsap';
import { DURATION, EASE_OUT_EXPO, TRANSLATE_DISTANCE, prefersReducedMotion } from '../lib/motion';

if (!prefersReducedMotion()) {
  gsap.to(el, { opacity: 1, y: 0, duration: DURATION.lg, ease: EASE_OUT_EXPO });
}
```

**Onde já é usado:**
- [`src/components/Hero.tsx`](src/components/Hero.tsx) — timeline em loop que faz o cross-fade da palavra em
  destaque no headline.
- [`src/hooks/useReveal.ts`](src/hooks/useReveal.ts) — reveal-on-scroll (fade + translate-up, opcionalmente com
  `stagger` entre filhos), disparado uma única vez via `IntersectionObserver`.

**Regras de marca (design_system → `brand-motion*`), válidas também para GSAP:**
- Só fade + translate de até 8px (`TRANSLATE_DISTANCE`). Nunca scale, rotate ou bounce.
- Nunca shake, shimmer/gradient sweep ou efeito de "typewriter".
- GSAP roda fora do CSS, então a media query global de `prefers-reduced-motion` (`_theme.css`) **não** alcança
  essas animações — cheque `prefersReducedMotion()` explicitamente antes de qualquer `gsap.to`/`timeline`
  (ver os dois usos acima como referência).

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend enabling type-aware lint rules by installing `oxlint-tsgolint` and editing `.oxlintrc.json`:

```json
{
  "$schema": "./node_modules/oxlint/configuration_schema.json",
  "plugins": ["react", "typescript", "oxc"],
  "options": {
    "typeAware": true
  },
  "rules": {
    "react/rules-of-hooks": "error",
    "react/only-export-components": ["warn", { "allowConstantExport": true }]
  }
}
```

See the [Oxlint rules documentation](https://oxc.rs/docs/guide/usage/linter/rules) for the full list of rules and categories.
