import * as React from 'react';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Color tone. Default `neutral`. */
  tone?: 'neutral' | 'brand' | 'success' | 'warn' | 'danger' | 'outline';
  /** Render in Space Mono uppercase (kicker/overline look). */
  uppercase?: boolean;
}

/** Small category or status pill — never an action. */
export declare function Badge(props: BadgeProps): JSX.Element;
