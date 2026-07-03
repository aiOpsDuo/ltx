import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useDiagnosticoModal } from '../context/DiagnosticoModalContext';
import { DURATION, EASE_OUT_EXPO, TRANSLATE_DISTANCE, prefersReducedMotion } from '../lib/motion';

// COPY.md — 3ª Sessão (Círculo/Loop dos 4 Quadrantes). PRD 6.4: o método é
// representado como ciclo/roda (não linha reta) — Diagnóstico → Padrão →
// Medição → Desenvolvimento — cuja repetição contínua gera escala.
//
// Layout (PRD): roda com o nome das 4 etapas à esquerda, texto em destaque
// da etapa ativa + CTA à direita. Ao rolar a página a roda gira e o texto
// troca para a etapa seguinte — só em telas grandes e com motion permitido;
// no fallback (mobile ou prefers-reduced-motion), os mesmos 4 pontos viram
// botões estáticos que trocam o texto ao toque/clique.
const ENHANCED_QUERY = '(min-width: 1024px) and (prefers-reduced-motion: no-preference)';

const QUADRANTES = [
  {
    titulo: 'Diagnóstico',
    curto: 'Diagnóstico: saber exatamente onde a venda vaza',
    paragrafos: [
      'Antes de mexer em qualquer coisa, a gente entende o que está acontecendo de verdade. Não no achismo, com call real avaliada ao vivo, raio-x da operação e o gargalo apontado.',
      'O resultado que você sente aqui: sai da discussão "o vendedor é ruim" e entra na discussão concreta, onde, em qual etapa, por quê.',
    ],
  },
  {
    titulo: 'Padrão',
    curto: 'Padrão: o time inteiro sabe o que é uma boa call',
    paragrafos: [
      'Com o gargalo na mesa, define-se o "como deveria ser", o jeito certo de abordar, qualificar, conduzir uma reunião, fechar. Pelo critério da própria empresa, não por uma fórmula genérica.',
      'É aqui que nasce a régua que separa "fez" de "fez direito". Sem ela, todo mundo faz do seu jeito e ninguém consegue cobrar nada.',
    ],
  },
  {
    titulo: 'Medição',
    curto: 'Medição: 100% das interações avaliadas, todo dia',
    paragrafos: [
      'Não adianta ter padrão se ninguém acompanha. Aqui as interações passam a ser avaliadas 24/7, ligação, reunião, WhatsApp, sem depender do gestor puxar relatório.',
      'Quem está seguindo a régua, quem não está, e se a régua que você definiu está realmente funcionando. Dado vira direção, não relatório.',
    ],
  },
  {
    titulo: 'Desenvolvimento',
    curto: 'Desenvolvimento: cada vendedor evolui na competência que move o ponteiro',
    paragrafos: [
      'Com os dados claros, fica óbvio onde agir. Quem não está performando recebe um plano (PDI), trilhas e coaching 1:1 sobre uma call real. Quem performa vira referência.',
      'Não é treinar tudo. É treinar o gap que está travando o resultado, na competência que move o ponteiro daquele vendedor específico.',
    ],
  },
];

const LAST_INDEX = QUADRANTES.length - 1;

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
          rotor.style.setProperty('--rot', `${-self.progress * LAST_INDEX * 90}deg`);
          setActive(Math.min(LAST_INDEX, Math.round(self.progress * LAST_INDEX)));
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

  const atual = QUADRANTES[active];

  return (
    <section className="section metodologia" id="metodologia">
      <div className="metodologia-scroller" ref={scrollerRef}>
        <div className="metodologia-pin" ref={pinRef}>
          <div className="metodologia-pin-inner">
            <div className="container metodologia-pin-grid">
              <div className="metodologia-wheel-col">
                <div className="metodologia-wheel">
                  <div className="metodologia-ring" aria-hidden="true">
                    <div className="metodologia-ring-glow">
                      <ltx-grafismo variant="02" motion="wave" opacity="0.16" mono speed="8000" />
                    </div>
                  </div>
                  <span className="metodologia-pointer" aria-hidden="true" />
                  <span className="metodologia-hub-mark" aria-hidden="true">
                    <img src="/brand/logo/mark.svg" alt="" />
                  </span>

                  <div className="metodologia-rotor" ref={rotorRef}>
                    {QUADRANTES.map((quadrante, index) => (
                      <button
                        key={quadrante.titulo}
                        type="button"
                        className={`metodologia-node metodologia-node--${index}${active === index ? ' is-active' : ''
                          }`}
                        aria-pressed={active === index}
                        aria-controls="metodologia-panel"
                        onFocus={() => selectStage(index)}
                        onClick={() => selectStage(index)}
                      >
                        <span className="metodologia-node-label">
                          <span className="metodologia-node-index">0{index + 1}</span>
                          <span className="metodologia-node-title">{quadrante.titulo}</span>
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="metodologia-text-col">
                <div className="metodologia-panel" id="metodologia-panel" role="region" aria-live="polite" ref={panelRef}>
                  <span className="metodologia-panel-index">0{active + 1} / 04</span>
                  <p className="metodologia-panel-curto">{atual.curto}</p>
                  {atual.paragrafos.map((paragrafo) => (
                    <p className="metodologia-panel-body" key={paragrafo}>
                      {paragrafo}
                    </p>
                  ))}
                </div>

                <div className="metodologia-cta">
                  <button type="button" className="btn btn-primary btn-lg" onClick={() => openModal('metodologia')}>
                    Quero meu Diagnóstico Gratuito
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
