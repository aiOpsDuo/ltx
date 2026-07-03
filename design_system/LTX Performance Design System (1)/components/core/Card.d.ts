import * as React from 'react';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Visual treatment. `accent` adds a Verde Neon left border — one per page max. */
  variant?: 'surface' | 'ghost' | 'accent';
  /** Inner padding. */
  padding?: 'none' | 'sm' | 'md' | 'lg';
  /** Lift 2px + hairline darken on hover. */
  hoverable?: boolean;
  /** Render as a custom element. */
  as?: React.ElementType;
}

/** Surface container on the dark canvas. lg radius. Flat by default. */
export declare function Card(props: CardProps): JSX.Element;

export declare function CardHeader(props: React.HTMLAttributes<HTMLDivElement>): JSX.Element;
export declare function CardTitle(props: React.HTMLAttributes<HTMLHeadingElement>): JSX.Element;
export declare function CardBody(props: React.HTMLAttributes<HTMLDivElement>): JSX.Element;
