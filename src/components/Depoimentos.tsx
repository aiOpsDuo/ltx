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

function getClosestIndex(track: HTMLDivElement): number {
  const trackLeft = track.getBoundingClientRect().left;
  let closest = 0;
  let closestDist = Infinity;
  Array.from(track.children).forEach((child, index) => {
    const dist = Math.abs(child.getBoundingClientRect().left - trackLeft);
    if (dist < closestDist) {
      closestDist = dist;
      closest = index;
    }
  });
  return closest;
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
    setActive(getClosestIndex(track));
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
  };

  const handleScroll = () => {
    const track = trackRef.current;
    if (!track) return;
    setActive(getClosestIndex(track));
  };

  const scrollToIndex = (index: number) => {
    const track = trackRef.current;
    const card = track?.children[index] as HTMLElement | undefined;
    if (!track || !card) return;
    track.scrollTo({
      left: card.offsetLeft - track.offsetLeft,
      behavior: prefersReducedMotion() ? 'auto' : 'smooth',
    });
  };

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
        </div>
      </div>
    </section>
  );
}
