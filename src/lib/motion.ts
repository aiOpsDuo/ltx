/**
 * GSAP motion tokens — the JS-side mirror of the durations/easing declared as
 * CSS variables in src/styles/tokens/_theme.css. Keep the two in sync:
 * plain CSS transitions still drive hover/focus micro-interactions, GSAP
 * drives anything sequenced, looped, or triggered from JS (see README →
 * Animação).
 */

export const DURATION = {
  xs: 0.08, // --ltx-dur-xs
  sm: 0.16, // --ltx-dur-sm
  md: 0.24, // --ltx-dur-md
  lg: 0.48, // --ltx-dur-lg
} as const;

// GSAP's built-in "expo.out" is the closest named ease to the brand's
// cubic-bezier(0.22, 1, 0.36, 1) (--ltx-ease-out-expo).
export const EASE_OUT_EXPO = 'expo.out';

// Brand rule (see design_system → brand-motion-banned): fade + up to 8px
// translate only. Never scale, rotate, or bounce.
export const TRANSLATE_DISTANCE = 8;

/** GSAP tweens run outside CSS, so the global reduced-motion media query in
 * _theme.css doesn't reach them — check this explicitly before animating. */
export function prefersReducedMotion() {
  return typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}
