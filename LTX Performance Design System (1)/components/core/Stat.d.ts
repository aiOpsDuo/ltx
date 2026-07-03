import * as React from 'react';

export interface StatProps extends React.HTMLAttributes<HTMLDivElement> {
  /** The big number — e.g. "40%", "3 dias", "R$ 2.4M". */
  value: string;
  /** Short description below the number — keep under 14 words. */
  label: string;
  /** Real client / source citation. Renders below in muted mono. */
  source?: string;
  /** Horizontal alignment. */
  align?: 'left' | 'center';
  /** Number size token. */
  size?: 'sm' | 'md' | 'lg';
}

/** Big-number stat block. Always cite a real source. */
export declare function Stat(props: StatProps): JSX.Element;
