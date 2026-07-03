import * as React from 'react';

export interface FeatureChipProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Lucide icon node (svg). Will receive stroke-width 1.5. */
  icon: React.ReactNode;
  /** Box size. 40px is the default brand chip. */
  size?: 'sm' | 'md' | 'lg';
  /** `graphite` (default) or `accent` (rare — emphasize one chip). */
  tone?: 'graphite' | 'accent';
}

/** The 40×40 icon chip pattern — Cinza Grafite tile, Verde Neon icon. */
export declare function FeatureChip(props: FeatureChipProps): JSX.Element;
