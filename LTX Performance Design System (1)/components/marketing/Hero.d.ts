import * as React from 'react';

export interface HeroCta { label: string; href: string; }
export interface HeroImage { src: string; alt?: string; }

export interface HeroProps extends React.HTMLAttributes<HTMLElement> {
  /** All-caps Space Mono kicker — max 3 words, no period. */
  overline?: string;
  /** Headline. Sentence case. 6–14 words. Verb + metric + timeframe. */
  headline: string;
  /** Subhead. Max 28 words. */
  subhead?: string;
  /** Primary CTA — direct, specific ("Analisar minha operação"). */
  primaryCta?: HeroCta;
  /** Secondary CTA. Use only when truly necessary. */
  secondaryCta?: HeroCta;
  /** Right-side image (real photography, never AI). Renders 4:5. */
  image?: HeroImage;
  /** `left` (default with image) or `center` (no image). */
  align?: 'left' | 'center';
}

/**
 * Marketing hero. Reads the brand's hero recipe.
 * @startingPoint section="Marketing" subtitle="Headline + subhead + CTA + optional image" viewport="1200x720"
 */
export declare function Hero(props: HeroProps): JSX.Element;
