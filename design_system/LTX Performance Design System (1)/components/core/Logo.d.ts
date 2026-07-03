import * as React from 'react';

export interface LogoProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  /** Which lockup to render. */
  variant?: 'horizontal' | 'stacked' | 'mark' | 'favicon';
  /** Background theme. `dark` = Verde Neon Suave on dark; `light` = Verde brand-800 on light; `mono` = single-color. */
  theme?: 'dark' | 'light' | 'mono';
  /** Render height in px. Width auto-scales. */
  height?: number;
  /** Path prefix to the design-system root (e.g. "../.." or absolute URL). */
  basePath?: string;
}

/** Renders an LTX logo file. Min 80px wide for horizontal lockup. */
export declare function Logo(props: LogoProps): JSX.Element;
