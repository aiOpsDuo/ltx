import type { DetailedHTMLProps, HTMLAttributes } from 'react';

// `<ltx-grafismo>` — design_system/.../assets/graphics/ltx-grafismo.js.
// A plain custom element (no React wrapper), registered as a side effect by
// src/vendor/ltx-grafismo.js. This just teaches JSX its attributes.
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'ltx-grafismo': DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> & {
        variant?: '01' | '02' | '03';
        motion?: 'flow' | 'wave' | 'reveal' | 'none';
        opacity?: string | number;
        speed?: string | number;
        bg?: boolean;
        mono?: boolean;
        flip?: boolean;
        theme?: 'light' | 'dark';
      };
    }
  }
}
