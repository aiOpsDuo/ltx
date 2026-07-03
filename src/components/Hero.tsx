import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { useDiagnosticoModal } from '../context/DiagnosticoModalContext';
import { DURATION, EASE_OUT_EXPO, TRANSLATE_DISTANCE, prefersReducedMotion } from '../lib/motion';

// COPY.md — 1ª Sessão: "A LTX entrega resultado (palavra altera para
// -performance, gestão, visibilidade, execução, processos, clareza)."
const ROTATING_WORDS = ['resultado', 'performance', 'gestão', 'visibilidade', 'execução', 'processos', 'clareza'];

// Each word holds for HOLD_SECONDS, then cross-fades over DURATION.lg —
// same ~2.4s-per-word cadence as the previous CSS-driven version.
const HOLD_SECONDS = 1.92;

export function Hero() {
  const { openModal } = useDiagnosticoModal();
  const wordRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const words = wordRefs.current.filter((el): el is HTMLSpanElement => el !== null);
    if (!words.length) return;

    if (prefersReducedMotion()) {
      gsap.set(words[0], { opacity: 1 });
      return;
    }

    gsap.set(words, { opacity: 0, y: TRANSLATE_DISTANCE });
    gsap.set(words[0], { opacity: 1, y: 0 });

    let index = 0;
    let timeoutId: number;

    const advance = () => {
      const current = words[index];
      const next = words[(index + 1) % words.length];
      gsap.to(current, { opacity: 0, y: TRANSLATE_DISTANCE, duration: DURATION.lg, ease: EASE_OUT_EXPO });
      gsap.fromTo(
        next,
        { opacity: 0, y: TRANSLATE_DISTANCE },
        {
          opacity: 1,
          y: 0,
          duration: DURATION.lg,
          ease: EASE_OUT_EXPO,
          onComplete: () => {
            index = (index + 1) % words.length;
            timeoutId = window.setTimeout(advance, HOLD_SECONDS * 1000);
          },
        }
      );
    };

    timeoutId = window.setTimeout(advance, HOLD_SECONDS * 1000);

    return () => {
      window.clearTimeout(timeoutId);
      gsap.killTweensOf(words);
    };
  }, []);

  return (
    <section className="hero" id="topo">
      <div className="hero-bg" aria-hidden="true">
        <img className="hero-bg-img" src="/images/mountain.png" alt="" />
      </div>
      <div className="hero-inner">
        <div className="hero-copy">
          <h1 className="hero-headline">
            <span className="hero-headline-lead">Consultorias entregam relatório. Ferramentas entregam dados.</span>
            <span className="hero-headline-payoff">
              A LTX entrega{' '}
              <span className="hero-rotator">
                {ROTATING_WORDS.map((word, index) => (
                  <span
                    key={word}
                    ref={(el) => {
                      wordRefs.current[index] = el;
                    }}
                    className="hero-rotator-item"
                  >
                    {word}.
                  </span>
                ))}
              </span>
            </span>
          </h1>
          <p className="hero-subhead">A LTX mostra o que fazer agora.</p>
          <div className="hero-actions">
            <button type="button" className="btn btn-primary btn-lg" onClick={() => openModal('hero')}>
              Agendar Diagnóstico
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
