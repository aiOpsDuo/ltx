import { useEffect, useRef, useState } from 'react';
import { prefersReducedMotion } from '../lib/motion';

// PRD 6.6 — pendência bloqueante: nenhum depoimento real recebido até o momento.
// Layout ajustado em sessão de refinamento para o padrão split + carrossel com
// dots (referência: Clari). O aviso textual de pendência foi removido a pedido,
// mas o conteúdo dos cards segue em lorem ipsum — não um depoimento fictício
// com nome/cargo/resultado que possa passar por real. PRD §6.6/§13 seguem
// bloqueantes para travar a copy final desta seção. Mais de 3 entradas aqui
// servem só para dar volume suficiente e validar visualmente o autoplay.
interface PlaceholderTestimonial {
  quote: string;
  name: string;
  role: string;
}

const PLACEHOLDER_TESTIMONIALS: PlaceholderTestimonial[] = [
  {
    quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
    name: 'Lorem Ipsum',
    role: 'Dolor Sit · Amet Corp',
  },
  {
    quote: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.',
    name: 'Consectetur Adipiscing',
    role: 'Elit Sed · Do Eiusmod',
  },
  {
    quote: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    name: 'Tempor Incididunt',
    role: 'Ut Labore · Et Dolore',
  },
  {
    quote: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est.',
    name: 'Magna Aliqua',
    role: 'Ut Enim · Ad Minim',
  },
  {
    quote: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
    name: 'Veniam Quis',
    role: 'Nostrud Exercitation · Ullamco',
  },
];

// Tempo de exibição de cada card antes do avanço automático. Pausa em hover,
// foco (teclado) e durante o arraste — nunca compete com uma interação ativa.
const AUTOPLAY_INTERVAL_MS = 5000;

function QuoteMark() {
  return (
    <svg className="depoimento-quote-mark" width="28" height="16" viewBox="0 0 28 16" aria-hidden="true">
      <path d="M0 16 6 0h6L6 16Z" fill="currentColor" />
      <path d="M14 16 20 0h6L20 16Z" fill="currentColor" />
    </svg>
  );
}

function ChevronIcon({ direction }: { direction: 'left' | 'right' }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d={direction === 'left' ? 'M15 18l-6-6 6-6' : 'M9 18l6-6-6-6'} />
    </svg>
  );
}

// scrollWidth - clientWidth pode ser menor que a distância real entre os
// cards (ex.: 3 cards largos numa track estreita) — por isso o índice ativo
// e o alvo do scroll usam passos proporcionais ao intervalo real navegável,
// em vez do offsetLeft de cada card, que o navegador nem sempre alcança.
function getStepSize(track: HTMLDivElement, count: number): number {
  const maxScroll = track.scrollWidth - track.clientWidth;
  return count > 1 ? maxScroll / (count - 1) : 0;
}

function getClosestIndex(track: HTMLDivElement, count: number): number {
  const step = getStepSize(track, count);
  return step > 0 ? Math.round(track.scrollLeft / step) : 0;
}

export function Depoimentos() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  // overflow-x:auto só recebe scroll nativo de touch/trackpad — arrastar com o
  // mouse precisa desse handler dedicado (touch continua tratado pelo navegador).
  const drag = useRef({ active: false, startX: 0, startScrollLeft: 0 });
  // O efeito de autoplay roda uma única vez (ver useEffect abaixo) e por isso
  // lê o índice atual por ref, não pelo state `active` — evita recriar o
  // interval a cada troca de card.
  const activeRef = useRef(active);
  activeRef.current = active;
  const autoplayPausedRef = useRef(false);

  const pauseAutoplay = () => {
    autoplayPausedRef.current = true;
  };
  const resumeAutoplay = () => {
    autoplayPausedRef.current = false;
  };

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    const track = trackRef.current;
    if (!track || e.pointerType !== 'mouse') return;
    pauseAutoplay();
    drag.current = { active: true, startX: e.clientX, startScrollLeft: track.scrollLeft };
    track.classList.add('is-dragging');
    try {
      track.setPointerCapture(e.pointerId);
    } catch {
      // Alguns navegadores recusam a captura fora de um press ativo real;
      // o arraste continua funcionando pelos handlers de pointermove/up.
    }
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const track = trackRef.current;
    if (!track || !drag.current.active) return;
    track.scrollLeft = drag.current.startScrollLeft - (e.clientX - drag.current.startX);
    // Setar scrollLeft por script dentro de um handler de ponteiro nem sempre
    // dispara o evento nativo `scroll` a tempo (varia por navegador) — por
    // isso o dot ativo é recalculado aqui direto, sem depender de onScroll.
    setActive(getClosestIndex(track, PLACEHOLDER_TESTIMONIALS.length));
  };

  const stopDragging = (e: React.PointerEvent<HTMLDivElement>) => {
    const track = trackRef.current;
    drag.current.active = false;
    track?.classList.remove('is-dragging');
    try {
      track?.releasePointerCapture(e.pointerId);
    } catch {
      // Sem captura ativa (ex.: setPointerCapture já havia sido recusado) — nada a liberar.
    }
    // Sem scroll-snap nativo (ver scrollToIndex), o arraste solta o card onde
    // o ponteiro parou — este assentamento no passo mais próximo faz as vezes
    // do snap que o CSS faria.
    if (track) scrollToIndex(getClosestIndex(track, PLACEHOLDER_TESTIMONIALS.length));
    resumeAutoplay();
  };

  const handleScroll = () => {
    const track = trackRef.current;
    if (!track) return;
    setActive(getClosestIndex(track, PLACEHOLDER_TESTIMONIALS.length));
  };

  const scrollToIndex = (index: number) => {
    const track = trackRef.current;
    if (!track) return;
    // scrollWidth - clientWidth pode ser bem menor que a distância real entre
    // os cards (caso desta seção, com só 235px de sobra pra 364px de intervalo
    // entre cards) — por isso o alvo usa passos proporcionais ao intervalo
    // navegável, e não o offsetLeft de cada card. CSS scroll-snap corrigiria
    // esse alvo de volta pro offset bruto (inalcançável), por isso a track
    // não usa scroll-snap-type — o assentamento é todo feito aqui.
    const step = getStepSize(track, PLACEHOLDER_TESTIMONIALS.length);
    setActive(index);
    track.scrollTo({
      left: index * step,
      behavior: prefersReducedMotion() ? 'auto' : 'smooth',
    });
  };

  const canGoPrev = active > 0;
  const canGoNext = active < PLACEHOLDER_TESTIMONIALS.length - 1;
  const goPrev = () => scrollToIndex(active - 1);
  const goNext = () => scrollToIndex(active + 1);

  // Avanço automático dos cards — roda uma única vez (sem depender de `active`
  // nas deps) para não recriar o interval a cada troca; o índice corrente é
  // lido via activeRef. Desliga de vez com prefers-reduced-motion e pausa
  // enquanto o usuário interage (hover, foco por teclado ou arraste).
  useEffect(() => {
    if (prefersReducedMotion() || PLACEHOLDER_TESTIMONIALS.length < 2) return;
    const id = window.setInterval(() => {
      if (autoplayPausedRef.current) return;
      const next = (activeRef.current + 1) % PLACEHOLDER_TESTIMONIALS.length;
      scrollToIndex(next);
    }, AUTOPLAY_INTERVAL_MS);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section className="section depoimentos" id="depoimentos">
      <div className="section-grafismo" aria-hidden="true">
        <ltx-grafismo variant="03" motion="flow" opacity="0.07" flip speed="10200" />
      </div>
      <div className="container depoimentos-layout">
        <div className="depoimentos-intro">
          <h2 className="h2 section-heading">Quem já estruturou a operação com a LTX.</h2>
        </div>

        <div
          className="depoimentos-carousel"
          onMouseEnter={pauseAutoplay}
          onMouseLeave={resumeAutoplay}
          onFocus={pauseAutoplay}
          onBlur={(e) => {
            if (!e.currentTarget.contains(e.relatedTarget as Node | null)) resumeAutoplay();
          }}
        >
          <div
            className="depoimentos-track"
            ref={trackRef}
            onScroll={handleScroll}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={stopDragging}
            onPointerCancel={stopDragging}
          >
            {PLACEHOLDER_TESTIMONIALS.map((testimonial) => (
              <figure className="card depoimento-card" key={testimonial.name}>
                <QuoteMark />
                <blockquote className="depoimento-quote">{testimonial.quote}</blockquote>
                <figcaption className="depoimento-attribution">
                  <span className="depoimento-avatar" aria-hidden="true" />
                  <span>
                    <div className="depoimento-name">{testimonial.name}</div>
                    <div className="depoimento-role">{testimonial.role}</div>
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>

          <div className="depoimentos-controls">
            <button
              type="button"
              className="depoimentos-arrow"
              onClick={goPrev}
              disabled={!canGoPrev}
              aria-label="Depoimento anterior"
            >
              <ChevronIcon direction="left" />
            </button>

            <div className="depoimentos-dots" role="tablist" aria-label="Navegar depoimentos">
              {PLACEHOLDER_TESTIMONIALS.map((testimonial, index) => (
                <button
                  key={testimonial.name}
                  type="button"
                  role="tab"
                  className={`depoimentos-dot${active === index ? ' is-active' : ''}`}
                  aria-selected={active === index}
                  aria-label={`Depoimento ${index + 1}`}
                  onClick={() => scrollToIndex(index)}
                />
              ))}
            </div>

            <button
              type="button"
              className="depoimentos-arrow"
              onClick={goNext}
              disabled={!canGoNext}
              aria-label="Próximo depoimento"
            >
              <ChevronIcon direction="right" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
