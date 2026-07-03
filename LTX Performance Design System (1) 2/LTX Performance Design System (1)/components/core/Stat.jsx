/**
 * Stat — big number + label + optional source. Theme-aware.
 */
import React from 'react';

const SIZES = {
  sm: { num: 32, label: 13 },
  md: { num: 48, label: 14 },
  lg: { num: 64, label: 15 },
};

export function Stat({ value, label, source, align = 'left', size = 'md', style, ...rest }) {
  const s = SIZES[size] || SIZES.md;
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 8,
        textAlign: align,
        alignItems: align === 'center' ? 'center' : 'flex-start',
        ...style,
      }}
      {...rest}
    >
      <div style={{
        fontFamily: 'var(--ltx-font-mono)',
        fontWeight: 700,
        fontSize: s.num,
        lineHeight: 1,
        letterSpacing: '-0.02em',
        color: 'var(--ltx-accent)',
      }}>
        {value}
      </div>
      <div style={{
        fontFamily: 'var(--ltx-font-sans)',
        fontSize: s.label,
        lineHeight: 1.45,
        color: 'var(--ltx-text-title)',
        maxWidth: '32ch',
      }}>
        {label}
      </div>
      {source ? (
        <div style={{
          fontFamily: 'var(--ltx-font-mono)',
          fontSize: 11,
          letterSpacing: '0.04em',
          color: 'var(--ltx-text-muted)',
          marginTop: 4,
        }}>— {source}</div>
      ) : null}
    </div>
  );
}
