import * as React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual treatment. Default `primary`. */
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger';
  /** Size token. Marketing CTAs are `lg`. Default `lg`. */
  size?: 'sm' | 'md' | 'lg';
  /** Pill on marketing CTAs (default). `md` for product UI. */
  rounded?: 'full' | 'md';
  /** Render as a different element (e.g. `as="a"`). */
  as?: React.ElementType;
  /** Icon node to render before the label (Lucide). */
  leadingIcon?: React.ReactNode;
  /** Icon node to render after the label (Lucide). */
  trailingIcon?: React.ReactNode;
  /** Stretch to fill the container. */
  fullWidth?: boolean;
}

/**
 * LTX primary action. Pill-shaped by default.
 *
 * @startingPoint section="Core" subtitle="Primary CTA, sizes, and ghost variants" viewport="700x180"
 */
export declare function Button(props: ButtonProps): JSX.Element;
