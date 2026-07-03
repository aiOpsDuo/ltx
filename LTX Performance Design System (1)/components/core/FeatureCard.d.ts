import * as React from 'react';

export interface FeatureCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Lucide icon to render inside a brand chip. */
  icon?: React.ReactNode;
  /** Card title — 4–7 words, sentence case. */
  title: string;
  /** Body copy — 1–2 sentences, max ~30 words. */
  body: string;
  /** Hover lift. Default true. */
  hoverable?: boolean;
}

/** Chip + title + body card for feature grids. Composes Card + FeatureChip. */
export declare function FeatureCard(props: FeatureCardProps): JSX.Element;
