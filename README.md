# LTX Performance — Landing Page

## Sobre o cliente

A **LTX Performance** vende uma combinação de consultoria comercial especializada e
tecnologia própria (o "X") para empresas B2B que já vendem, mas não enxergam onde a
receita trava. Fundadores: **Leonardo dos Reis** (processos / engenharia de dados) e
**Tiago Souza** (liderança comercial). Metodologia própria em 4 pilares: **Clareza,
Processo, Pessoas e Execução**.

Cliente-alvo: sócios-diretores, CTOs e heads de vendas de empresas médias/grandes que
querem sair de planilhas paralelas e rodar um pipeline comercial coordenado. Verticais
reais atendidas: redes médico-hospitalares, e-commerce regulado (farma) e family offices.
Teste dos 5 segundos da marca: *"essas pessoas entendem as engrenagens do meu negócio e
sabem exatamente como organizar o caos comercial pra gerar lucro."*

Este repositório é a **landing page** (single-page, sem rotas adicionais) cujo objetivo é
converter um visitante *problem-aware* (sabe que perde receita, não sabe onde) em lead
qualificado através do formulário do **Diagnóstico Gratuito**. Detalhes completos de
objetivos, persona, arquitetura de seções e critérios de aceite por seção estão no
[PRD.pdf](PRD.pdf).

## Regras obrigatórias antes de qualquer alteração

Qualquer mudança de copy, estrutura ou visual — não só features novas — precisa respeitar
estes dois documentos-fonte:

- **[PRD.pdf](PRD.pdf)** — decisões de copy e design já validadas com o cliente, seção por
  seção da página (objetivo de conversão, decisão de conteúdo, requisito de design e
  critério de aceite de cada seção). Não introduza narrativa nova sem checar se já não foi
  decidida/descartada aqui.
- **[`design_system/LTX Performance Design System (1)/`](design_system/LTX%20Performance%20Design%20System%20(1)/readme.md)** —
  fonte única de verdade visual: paleta, tipografia (Space Mono para headlines/números,
  Sora para corpo/label), espaçamento, radius, motion, iconografia (Lucide) e voz de marca.
  Qualquer decisão visual nova precisa caber nos tokens já formalizados — não inventar
  padrão visual novo.

Na dúvida sobre uma decisão de copy/layout, o PRD manda; na dúvida sobre um valor visual
(cor, espaçamento, animação, ícone), o design system manda.

## Skills do Claude Code

Este projeto tem duas skills em `.claude/skills/`, que devem ser invocadas **sempre** que
uma alteração envolver código React ou TypeScript (bugfix, refactor, feature nova — não só
trabalho do zero):

- **`react-expert`** — componentes, hooks, state management, performance, Server
  Components (`.claude/skills/react-expert/SKILL.md`).
- **`typescript-pro`** — tipos avançados, generics, type guards, tsconfig
  (`.claude/skills/typescript-pro/SKILL.md`).

Arquivos `.tsx` são React e TypeScript ao mesmo tempo — invoque as duas. Ver
[CLAUDE.md](CLAUDE.md) para o detalhamento dessa regra.

## Tech stack

- **React 19** + **TypeScript** (`tsc -b` no build)
- **Vite 8** (dev server / bundler) com `@vitejs/plugin-react`
- **GSAP** — biblioteca de animação orquestrada (timelines, reveal-on-scroll). Transições
  simples de hover/focus ficam em CSS puro usando os tokens de
  [`src/styles/tokens/_theme.css`](src/styles/tokens/_theme.css). Ver seção "Animação —
  GSAP" abaixo para as regras completas.
- **Oxlint** — linter (`npm run lint`)
- CSS puro organizado por tokens + camadas atomic design (sem framework de CSS/UI)

## Como rodar o projeto

Pré-requisito: Node.js (versão compatível com Vite 8 / React 19 — recomendado Node 20+).

```bash
npm install
npm run dev       # inicia o servidor de dev do Vite em http://localhost:5173
```

Outros scripts disponíveis:

```bash
npm run build      # tsc -b && vite build — build de produção
npm run preview    # serve o build de produção localmente
npm run lint        # roda o Oxlint
```

Se estiver usando o Claude Code neste projeto, o servidor de dev também pode ser iniciado
via `preview_start` com a configuração `react-app` já definida em
[`.claude/launch.json`](.claude/launch.json).

## Estrutura de pastas

```
├── PRD.pdf                        # requisitos de copy/design por seção (fonte de verdade de conteúdo)
├── COPY.md                        # rascunho de copy da landing page, seção por seção
├── design_system/                 # design system da marca LTX (fonte de verdade visual)
├── .claude/
│   ├── skills/                    # react-expert, typescript-pro (skills obrigatórias — ver acima)
│   ├── launch.json                # config do dev server para o Claude Code preview
│   └── dev.sh                     # script que sobe `npm run dev` (usado via WSL)
├── public/                        # assets estáticos (fontes, logo, vídeos, favicon)
├── src/
│   ├── App.tsx                    # composição das seções da página, na ordem do PRD §5
│   ├── main.tsx                   # entry point
│   ├── components/                # uma seção da landing page por componente
│   │   ├── Header.tsx / Hero.tsx / Pilares.tsx / Metodologia.tsx
│   │   ├── TecnologiaX.tsx / Depoimentos.tsx / Founders.tsx
│   │   ├── Faq.tsx / CtaFinal.tsx / Footer.tsx
│   │   └── DiagnosticoModal.tsx   # modal do formulário de Diagnóstico Gratuito
│   ├── context/                   # ThemeContext (dark/light) e DiagnosticoModalContext
│   ├── hooks/useReveal.ts         # reveal-on-scroll (fade + translate-up) via IntersectionObserver
│   ├── lib/motion.ts              # tokens de duração/easing compartilhados com o design system, p/ GSAP
│   ├── styles/
│   │   ├── tokens/_theme.css      # variáveis de tema (cor, duração, easing) do design system
│   │   ├── components/{atoms,molecules,organisms}/  # CSS por componente, organizado em atomic design
│   │   ├── utilities/
│   │   └── main.css               # entry point de estilos
│   ├── types/                     # tipos compartilhados (ex.: ltx-grafismo.d.ts)
│   └── vendor/ltx-grafismo.js     # script de grafismo dinâmico de marca
└── vite.config.ts / tsconfig*.json
```

A ordem das seções em [`App.tsx`](src/App.tsx) segue literalmente o PRD §5: Header → Hero
→ Credibilidade/Pilares → Metodologia/Diferencial → Tecnologia X → Depoimentos → Quem está
por trás (Founders) → FAQ → CTA final → Footer. Segundo o PRD, as seções 1–3 são
prioritárias em investimento de copy/visual (é onde a maioria das conversões acontece); as
seções 4–8 têm tratamento mais enxuto.

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

## Notas de setup do Vite/React (template original)

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

### React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

### Expanding the Oxlint configuration

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
