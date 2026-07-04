import type { ReactNode } from 'react';
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useDiagnosticoModal } from '../context/DiagnosticoModalContext';
import { DURATION, EASE_OUT_EXPO, TRANSLATE_DISTANCE, prefersReducedMotion } from '../lib/motion';

// COPY.md — 3ª Sessão (Círculo/Loop dos 4 Quadrantes + Escala). PRD 6.4: o
// método é representado como ciclo/roda (não linha reta) — Diagnóstico →
// Padrão → Medição → Desenvolvimento — cuja repetição contínua gera escala,
// representada como uma 5ª etapa fora do anel: ao alcançá-la (via scroll ou
// clique), o hub central (o "X"/avatar no meio da roda) se expande — cobrindo
// o anel — mas mantém o ícone visível, agora sobre fundo verde e com
// "Escala" escrito embaixo; o CTA à direita abre o mesmo DiagnosticoModal
// usado no resto do site (CtaFinal etc.), só muda o texto e o `source`.
//
// Layout (PRD): roda com o nome das etapas à esquerda, texto em destaque
// da etapa ativa + CTA à direita. Ao rolar a página a roda gira e o texto
// troca para a etapa seguinte — só em telas grandes e com motion permitido;
// no fallback (mobile ou prefers-reduced-motion), os mesmos pontos viram
// botões estáticos que trocam o texto ao toque/clique (a "Escala" também
// vira só um botão que troca pro formulário, sem a animação de expansão).
const ENHANCED_QUERY = '(min-width: 1024px) and (prefers-reduced-motion: no-preference)';

// Um ícone por etapa — substitui o número dentro do nó da roda (PRD:
// cada ponto do ciclo precisa se identificar visualmente, não só por índice).
type QuadranteIconName = 'search' | 'list-checks' | 'activity' | 'trending-up' | 'expand';

// As 4 etapas do ciclo ficam posicionadas no anel (ver metodologia.css,
// .metodologia-node--0..3, ângulos fixos de 90° em 90°). "Escala" é a 5ª
// etapa, alcançada ao final do scroll, mas não ocupa um ponto do anel — o
// discriminated union deixa essa diferença explícita no tipo em vez de um
// campo booleano solto.
type RingStage = {
  kind: 'ring';
  titulo: string;
  icon: QuadranteIconName;
  curto: string;
  paragrafos: string[];
};

type EscalaStage = {
  kind: 'escala';
  titulo: string;
  icon: QuadranteIconName;
  headline: string;
  subcopy: string;
};

type Stage = RingStage | EscalaStage;

const STAGES: Stage[] = [
  {
    kind: 'ring',
    titulo: 'Diagnóstico',
    icon: 'search',
    curto: 'Diagnóstico: saber exatamente onde a venda vaza',
    paragrafos: [
      'Antes de mexer em qualquer coisa, a gente entende o que está acontecendo de verdade. Não no achismo, com call real avaliada ao vivo, raio-x da operação e o gargalo apontado.',
      'O resultado que você sente aqui: sai da discussão "o vendedor é ruim" e entra na discussão concreta, onde, em qual etapa, por quê.',
    ],
  },
  {
    kind: 'ring',
    titulo: 'Padrão',
    icon: 'list-checks',
    curto: 'Padrão: o time inteiro sabe o que é uma boa call',
    paragrafos: [
      'Com o gargalo na mesa, define-se o "como deveria ser", o jeito certo de abordar, qualificar, conduzir uma reunião, fechar. Pelo critério da própria empresa, não por uma fórmula genérica.',
      'É aqui que nasce a régua que separa "fez" de "fez direito". Sem ela, todo mundo faz do seu jeito e ninguém consegue cobrar nada.',
    ],
  },
  {
    kind: 'ring',
    titulo: 'Medição',
    icon: 'activity',
    curto: 'Medição: 100% das interações avaliadas, todo dia',
    paragrafos: [
      'Não adianta ter padrão se ninguém acompanha. Aqui as interações passam a ser avaliadas 24/7, ligação, reunião, WhatsApp, sem depender do gestor puxar relatório.',
      'Quem está seguindo a régua, quem não está, e se a régua que você definiu está realmente funcionando. Dado vira direção, não relatório.',
    ],
  },
  {
    kind: 'ring',
    titulo: 'Desenvolvimento',
    icon: 'trending-up',
    curto: 'Desenvolvimento: cada vendedor evolui na competência que move o ponteiro',
    paragrafos: [
      'Com os dados claros, fica óbvio onde agir. Quem não está performando recebe um plano (PDI), trilhas e coaching 1:1 sobre uma call real. Quem performa vira referência.',
      'Não é treinar tudo. É treinar o gap que está travando o resultado, na competência que move o ponteiro daquele vendedor específico.',
    ],
  },
  {
    kind: 'escala',
    titulo: 'Escala',
    icon: 'expand',
    headline: 'Escale seu comercial conosco',
    subcopy: 'Diagnóstico, padrão, medição e desenvolvimento rodando juntos, toda semana. Entendemos o que limita os resultados, definimos um novo modelo de atuação, acompanhamos a performance e desenvolvemos o time com base em dados. Repetimos esse ciclo continuamente para escalar a operação comercial e a receita da empresa.',
  },
];

const QUADRANTE_ICON_PATHS: Record<QuadranteIconName, ReactNode> = {
  search: (
    <>
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </>
  ),
  'list-checks': (
    <>
      <path d="m3 17 2 2 4-4" />
      <path d="m3 7 2 2 4-4" />
      <path d="M13 6h8" />
      <path d="M13 12h8" />
      <path d="M13 18h8" />
    </>
  ),
  activity: <path d="M22 12h-4l-3 9L9 3l-3 9H2" />,
  'trending-up': (
    <>
      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
      <polyline points="16 7 22 7 22 13" />
    </>
  ),
  expand: (
    <>
      <polyline points="15 3 21 3 21 9" />
      <polyline points="9 21 3 21 3 15" />
      <line x1="21" y1="3" x2="14" y2="10" />
      <line x1="3" y1="21" x2="10" y2="14" />
    </>
  ),
};

// Seta decorativa indicando o sentido de giro do anel — 4 marcas fixas nos
// vãos diagonais entre os nós (45/135/225/315°), puramente visuais. Só o
// ">" (sem haste), igual à referência.
function RotationHintIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 6l6 6-6 6" />
    </svg>
  );
}

function QuadranteIcon({ name }: { name: QuadranteIconName }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {QUADRANTE_ICON_PATHS[name]}
    </svg>
  );
}

const LAST_INDEX = STAGES.length - 1;
const ESCALA_INDEX = STAGES.findIndex((stage) => stage.kind === 'escala');
// O anel só tem pontos fixos (0/90/180/270°, ver metodologia.css) pras
// etapas de kind 'ring' — a rotação some depois da última delas, congelada
// enquanto o scroll avança até "Escala".
const RING_LAST_INDEX = STAGES.filter((stage) => stage.kind === 'ring').length - 1;
const ROTATION_HINT_INDEXES = [0, 1, 2, 3];

export function Metodologia() {
  const { openModal } = useDiagnosticoModal();
  const [active, setActive] = useState(0);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const rotorRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<ScrollTrigger | null>(null);
  const isFirstRender = useRef(true);

  // A roda gira e a etapa ativa avança conforme o scroll vertical da página
  // (PRD 6.4: navegação sem depender de clique). Só roda em telas ≥1024px
  // com motion permitido — gsap.matchMedia cria/destrói o ScrollTrigger
  // automaticamente ao cruzar o breakpoint ou mudar a preferência do SO.
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const mm = gsap.matchMedia();

    mm.add(ENHANCED_QUERY, () => {
      const scroller = scrollerRef.current;
      const pin = pinRef.current;
      const rotor = rotorRef.current;
      if (!scroller || !pin || !rotor) return;

      const trigger = ScrollTrigger.create({
        trigger: scroller,
        start: 'top top',
        end: 'bottom bottom',
        pin,
        scrub: 0.4,
        onUpdate(self) {
          const step = self.progress * LAST_INDEX;
          const rotationStep = Math.min(step, RING_LAST_INDEX);
          rotor.style.setProperty('--rot', `${-rotationStep * 90}deg`);
          setActive(Math.min(LAST_INDEX, Math.round(step)));
        },
      });
      triggerRef.current = trigger;

      return () => {
        triggerRef.current = null;
        trigger.kill();
      };
    });

    return () => mm.revert();
  }, []);

  // Cross-fade do texto em destaque a cada troca de etapa — fade + 8px,
  // mesmo token de motion do resto do site (src/lib/motion.ts).
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    const node = panelRef.current;
    if (!node || prefersReducedMotion()) return;
    gsap.fromTo(
      node,
      { opacity: 0, y: TRANSLATE_DISTANCE },
      { opacity: 1, y: 0, duration: DURATION.md, ease: EASE_OUT_EXPO }
    );
  }, [active]);

  // Clique manual numa etapa: se a roda estiver sob controle do scroll,
  // também rola a página até o ponto correspondente, pra não ser
  // imediatamente sobrescrito pelo próximo evento de scroll.
  const selectStage = (index: number) => {
    const trigger = triggerRef.current;
    if (trigger) {
      trigger.scroll(trigger.start + (index / LAST_INDEX) * (trigger.end - trigger.start));
    } else {
      setActive(index);
    }
  };

  const atual = STAGES[active];
  const isEscalaActive = active === ESCALA_INDEX;

  return (
    <section className="section metodologia" id="metodologia">
      <div className="metodologia-scroller" ref={scrollerRef}>
        <div className="metodologia-pin" ref={pinRef}>
          <div className="container metodologia-header">
            <h2 className="h2 section-heading">O Nosso Método</h2>
          </div>
          <div className="metodologia-pin-inner">
            <div className="container metodologia-pin-grid">
              <div className="metodologia-wheel-col">
                <div className={`metodologia-wheel${isEscalaActive ? ' is-escala-active' : ''}`}>
                  <div className="metodologia-ring" aria-hidden="true" />
                  <span className="metodologia-pointer" aria-hidden="true" />
                  <div className="metodologia-rotation-hints" aria-hidden="true">
                    {ROTATION_HINT_INDEXES.map((index) => (
                      <span key={index} className={`metodologia-rotation-hint metodologia-rotation-hint--${index}`}>
                        <RotationHintIcon />
                      </span>
                    ))}
                  </div>
                  <span
                    className={`metodologia-hub-mark${isEscalaActive ? ' metodologia-hub-mark--expanded' : ''}`}
                    aria-hidden="true"
                  >
                    <img src="/brand/logo/avatar-icon.svg" alt="" />
                    {isEscalaActive && <span className="metodologia-hub-mark-label">Escala</span>}
                  </span>

                  <div className="metodologia-rotor" ref={rotorRef}>
                    {STAGES.map((stage, index) => (
                      <button
                        key={stage.titulo}
                        type="button"
                        className={`metodologia-node metodologia-node--${index}${active === index ? ' is-active' : ''
                          }`}
                        aria-pressed={active === index}
                        aria-controls="metodologia-panel"
                        onFocus={() => selectStage(index)}
                        onClick={() => selectStage(index)}
                      >
                        <span className="metodologia-node-label">
                          <span className="metodologia-node-index">
                            <QuadranteIcon name={stage.icon} />
                          </span>
                          <span className="metodologia-node-title">{stage.titulo}</span>
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="metodologia-text-col">
                <div className="metodologia-panel" id="metodologia-panel" role="region" aria-live="polite" ref={panelRef}>
                  <span className="metodologia-panel-step">0{active + 1}</span>
                  <span className="visually-hidden">
                    Etapa {active + 1} de {STAGES.length}
                  </span>
                  {atual.kind === 'ring' ? (
                    <>
                      <p className="metodologia-panel-curto">{atual.curto}</p>
                      {atual.paragrafos.map((paragrafo) => (
                        <p className="metodologia-panel-body" key={paragrafo}>
                          {paragrafo}
                        </p>
                      ))}
                    </>
                  ) : (
                    <>
                      <p className="metodologia-panel-curto">{atual.headline}</p>
                      <p className="metodologia-panel-body">{atual.subcopy}</p>
                    </>
                  )}
                </div>

                <div className="metodologia-cta">
                  <button
                    type="button"
                    className="btn btn-primary btn-lg"
                    onClick={() => openModal(atual.kind === 'ring' ? 'metodologia' : 'metodologia-escala')}
                  >
                    {atual.kind === 'ring' ? 'Quero meu Diagnóstico Gratuito' : 'Quero escalar meu comercial'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
