import * as React from 'react';

export interface TestimonialAttribution {
  name: string;
  role?: string;
  business: string;
  city: string;
  avatar?: string;
}

export interface TestimonialOutcome {
  /** Big number — e.g. "34%", "R$ 2.4M". */
  value: string;
  /** Outcome description. */
  label: string;
}

export interface TestimonialProps extends React.HTMLAttributes<HTMLDivElement> {
  /** The quote. No marketing language — what the client actually said. */
  quote: string;
  attribution: TestimonialAttribution;
  /** Quantified outcome card on the right. Always real. */
  outcome?: TestimonialOutcome;
}

/** Case-study quote block. Real owner, real city, real outcome. */
export declare function Testimonial(props: TestimonialProps): JSX.Element;
