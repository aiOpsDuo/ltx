import * as React from 'react';

export interface NavLink {
  label: string;
  href: string;
}

export interface NavProps extends React.HTMLAttributes<HTMLElement> {
  /** Nav link list — 3–5 items max. */
  links?: NavLink[];
  /** Right-side CTA. Renders as a primary Button. */
  cta?: { label: string; href: string };
  /** Path prefix to design-system root (forwarded to Logo). */
  basePath?: string;
  /** Sticky on scroll. Default true. */
  sticky?: boolean;
}

/**
 * Marketing site top bar.
 * @startingPoint section="Marketing" subtitle="Sticky header with logo + CTA" viewport="1200x80"
 */
export declare function Nav(props: NavProps): JSX.Element;
