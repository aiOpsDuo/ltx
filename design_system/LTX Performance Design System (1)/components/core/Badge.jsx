/**
 * Badge — small status pill, theme-aware via CSS variables.
 */
import React from 'react';

const TONES = {
  neutral: { bg: 'color-mix(in srgb, var(--ltx-text-title) 8%, transparent)', fg: 'var(--ltx-text-title)', border: '1px solid color-mix(in srgb, var(--ltx-text-title) 18%, transparent)' },
  brand:   { bg: 'color-mix(in srgb, var(--ltx-accent) 12%, transparent)', fg: 'var(--ltx-accent)', border: '1px solid color-mix(in srgb, var(--ltx-accent) 30%, transparent)' },
  success: { bg: 'rgba(31,157,107,0.12)', fg: '#1F9D6B', border: '1px solid rgba(31,157,107,0.3)' },
  warn:    { bg: 'rgba(192,132,21,0.12)', fg: '#C08415', border: '1px solid rgba(192,132,21,0.3)' },
  danger:  { bg: 'rgba(200,56,47,0.12)', fg: '#C8382F', border: '1px solid rgba(200,56,47,0.3)' },
  outline: { bg: 'transparent', fg: 'var(--ltx-text-body)', border: '1px solid var(--ltx-border)' },
};

export function Badge({ tone = 'neutral', uppercase = false, children, style, ...rest }) {
  const t = TONES[tone] || TONES.neutral;
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        padding: '4px 10px',
        borderRadius: 9999,
        fontFamily: uppercase ? 'var(--ltx-font-mono)' : 'var(--ltx-font-sans)',
        fontSize: 11,
        fontWeight: uppercase ? 700 : 500,
        letterSpacing: uppercase ? '0.06em' : '0',
        textTransform: uppercase ? 'uppercase' : 'none',
        lineHeight: 1.4,
        background: t.bg,
        color: t.fg,
        border: t.border,
        ...style,
      }}
      {...rest}
    >
      {children}
    </span>
  );
}
