/**
 * Logo — renders one of the LTX lockups inline as an <img>.
 *
 * `theme` picks the right asset:
 *   - 'dark'  (default) — Branco Gelo letters + Verde Neon Suave X. For dark canvases.
 *   - 'light' — Preto Profundo letters + Verde brand-800 X. For light canvases.
 *   - 'mono'  — Single-color (all dark). For greyscale / one-color print.
 */
import React from 'react';

const SOURCES = {
  dark: {
    horizontal: 'assets/logo/lockup-horizontal.svg',
    stacked:    'assets/logo/lockup-stacked.svg',
    mark:       'assets/logo/mark.svg',
    favicon:    'assets/logo/favicon.svg',
  },
  light: {
    horizontal: 'assets/logo/lockup-horizontal-light.svg',
    stacked:    'assets/logo/lockup-stacked-light.svg',
    mark:       'assets/logo/mark-light.svg',
    favicon:    'assets/logo/favicon.svg',
  },
  mono: {
    horizontal: 'assets/logo/wordmark.svg',
    stacked:    'assets/logo/wordmark.svg',
    mark:       'assets/logo/mark-inverse.svg',
    favicon:    'assets/logo/favicon.svg',
  },
};

export function Logo({ variant = 'horizontal', theme = 'dark', height = 32, basePath = '', style, ...rest }) {
  const themeSet = SOURCES[theme] || SOURCES.dark;
  const file = themeSet[variant] || themeSet.horizontal;
  const src = (basePath ? basePath.replace(/\/$/, '') + '/' : '') + file;
  return (
    <img
      src={src}
      alt="LTX Performance"
      style={{
        height,
        width: 'auto',
        display: 'block',
        ...style,
      }}
      {...rest}
    />
  );
}
