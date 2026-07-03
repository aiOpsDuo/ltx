import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { DURATION, EASE_OUT_EXPO, TRANSLATE_DISTANCE, prefersReducedMotion } from '../lib/motion';

interface UseRevealOptions {
  threshold?: number;
  /** Seconds between each child's animation. Omit to animate the ref node itself. */
  stagger?: number;
}

/** Fires once when the element enters the viewport — drives the brand's
 * fade + translate-up reveal via GSAP. Never re-fires (no scroll-jacking, one-shot). */
export function useReveal<T extends HTMLElement>({ threshold = 0.2, stagger = 0 }: UseRevealOptions = {}) {
  const ref = useRef<T | null>(null);

  useLayoutEffect(() => {
    const node = ref.current;
    if (!node) return;

    const targets = stagger ? Array.from(node.children) : [node];
    if (!targets.length || prefersReducedMotion()) return;

    gsap.set(targets, { opacity: 0, y: TRANSLATE_DISTANCE });

    const play = () => {
      gsap.to(targets, {
        opacity: 1,
        y: 0,
        duration: DURATION.lg,
        ease: EASE_OUT_EXPO,
        stagger,
        clearProps: 'opacity,transform',
      });
    };

    if (typeof IntersectionObserver === 'undefined') {
      play();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            play();
            observer.disconnect();
          }
        }
      },
      { threshold }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, stagger]);

  return ref;
}
