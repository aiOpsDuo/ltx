import { useRef, useState } from 'react';
import { prefersReducedMotion } from '../lib/motion';

// PRD 6.6 — pendência bloqueante: nenhum depoimento real recebido até o momento.
// Layout ajustado em sessão de refinamento para o padrão split + carrossel com
// dots (referência: Clari). O aviso textual de pendência foi removido a pedido,
// mas o conteúdo dos 3 cards segue em lorem ipsum — não um depoimento fictício
// com nome/cargo/resultado que possa passar por real. PRD §6.6/§13 seguem
// bloqueantes para travar a copy final desta seção.
const PLACEHOLDERS = [1, 2, 3];
const PLACEHOLDER_QUOTE =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.';

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

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    const track = trackRef.current;
    if (!track || e.pointerType !== 'mouse') return;
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
    setActive(getClosestIndex(track, PLACEHOLDERS.length));
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
    if (track) scrollToIndex(getClosestIndex(track, PLACEHOLDERS.length));
  };

  const handleScroll = () => {
    const track = trackRef.current;
    if (!track) return;
    setActive(getClosestIndex(track, PLACEHOLDERS.length));
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
    const step = getStepSize(track, PLACEHOLDERS.length);
    setActive(index);
    track.scrollTo({
      left: index * step,
      behavior: prefersReducedMotion() ? 'auto' : 'smooth',
    });
  };

  const canGoPrev = active > 0;
  const canGoNext = active < PLACEHOLDERS.length - 1;
  const goPrev = () => scrollToIndex(active - 1);
  const goNext = () => scrollToIndex(active + 1);

  return (
    <section className="section depoimentos" id="depoimentos">
      <div className="section-grafismo" aria-hidden="true">
        <ltx-grafismo variant="03" motion="flow" opacity="0.07" flip speed="10200" />
      </div>
      <div className="container depoimentos-layout">
        <div className="depoimentos-intro">
          <h2 className="h2 section-heading">Quem já estruturou a operação com a LTX.</h2>
        </div>

        <div className="depoimentos-carousel">
          <div
            className="depoimentos-track"
            ref={trackRef}
            onScroll={handleScroll}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={stopDragging}
            onPointerCancel={stopDragging}
          >
            {PLACEHOLDERS.map((n) => (
              <figure className="card depoimento-card" key={n}>
                <QuoteMark />
                <blockquote className="depoimento-quote">{PLACEHOLDER_QUOTE}</blockquote>
                <figcaption className="depoimento-attribution">
                  <span className="depoimento-avatar" aria-hidden="true" />
                  <span>
                    <div className="depoimento-name">Lorem Ipsum</div>
                    <div className="depoimento-role">Dolor Sit · Amet Corp</div>
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
              {PLACEHOLDERS.map((n, index) => (
                <button
                  key={n}
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
