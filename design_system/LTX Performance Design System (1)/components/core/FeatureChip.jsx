/**
 * FeatureChip — 40×40 icon tile, theme-aware.
 */
import React from 'react';

const SIZES = {
  sm: { box: 32, icon: 16 },
  md: { box: 40, icon: 20 },
  lg: { box: 48, icon: 24 },
};

export function FeatureChip({ icon, size = 'md', tone = 'graphite', style, ...rest }) {
  const s = SIZES[size] || SIZES.md;
  const bg = tone === 'accent'
    ? 'color-mix(in srgb, var(--ltx-accent) 14%, transparent)'
    : 'var(--ltx-chip-bg)';
  return (
    <span
      aria-hidden
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: s.box,
        height: s.box,
        background: bg,
        color: 'var(--ltx-accent)',
        borderRadius: 8,
        flexShrink: 0,
        ...style,
      }}
      {...rest}
    >
      {React.isValidElement(icon)
        ? React.cloneElement(icon, { width: s.icon, height: s.icon, strokeWidth: 1.5 })
        : icon}
    </span>
  );
}
