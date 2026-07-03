import * as React from 'react';

export interface CtaBandProps extends React.HTMLAttributes<HTMLElement> {
  overline?: string;
  /** Closing headline. 6–12 words. Sentence case. */
  headline: string;
  subhead?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  /** `dark` (default) = surface; `accent` = Verde Neon background. */
  variant?: 'dark' | 'accent';
}

/** Closing CTA band. Use once per page near the bottom. */
export declare function CtaBand(props: CtaBandProps): JSX.Element;
