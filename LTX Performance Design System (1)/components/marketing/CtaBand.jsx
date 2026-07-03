/**
 * CtaBand — closing CTA section. Uses theme classes.
 *
 * Variants:
 *   - `surface` (default) — `--ltx-surface` background (calm).
 *   - `accent` — Verde Neon background (loud — once per page max).
 */
import React from 'react';
import { Button } from '../core/Button.jsx';

export function CtaBand({
  overline,
  headline,
  subhead,
  primaryCta,
  secondaryCta,
  variant = 'surface',
  style,
  className = '',
  ...rest
}) {
  const isAccent = variant === 'accent';
  const bgClass = isAccent ? 'ltx-accent-bg' : 'ltx-surface';
  return (
    <section
      className={`${bgClass} ${className}`}
      style={{ padding: '96px 32px', ...style }}
      {...rest}
    >
      <div style={{
        maxWidth: 880,
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        gap: 16,
      }}>
        {overline ? (
          <span style={{
            fontFamily: 'var(--ltx-font-mono)',
            fontWeight: 700,
            fontSize: 12,
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            color: isAccent ? 'var(--ltx-text-on-accent)' : 'var(--ltx-accent)',
            opacity: isAccent ? 0.75 : 1,
          }}>{overline}</span>
        ) : null}
        <h2 style={{
          fontFamily: 'var(--ltx-font-mono)',
          fontWeight: 700,
          fontSize: 'clamp(28px, 4vw, 40px)',
          lineHeight: 1.15,
          letterSpacing: '-0.02em',
          color: isAccent ? 'var(--ltx-text-on-accent)' : 'var(--ltx-text-title)',
          margin: 0,
          maxWidth: 760,
        }}>{headline}</h2>
        {subhead ? (
          <p style={{
            fontFamily: 'var(--ltx-font-sans)',
            fontSize: 16,
            lineHeight: 1.55,
            color: isAccent ? 'var(--ltx-text-on-accent)' : 'var(--ltx-text-body)',
            opacity: isAccent ? 0.85 : 1,
            margin: 0,
            maxWidth: 560,
          }}>{subhead}</p>
        ) : null}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginTop: 16, justifyContent: 'center' }}>
          {primaryCta ? (
            <Button
              as="a"
              href={primaryCta.href}
              size="lg"
              style={isAccent ? { background: 'var(--ltx-text-on-accent)', color: 'var(--ltx-accent)' } : undefined}
            >
              {primaryCta.label}
            </Button>
          ) : null}
          {secondaryCta ? (
            <Button
              as="a"
              href={secondaryCta.href}
              size="lg"
              variant="ghost"
              style={isAccent ? { color: 'var(--ltx-text-on-accent)' } : undefined}
            >
              {secondaryCta.label}
            </Button>
          ) : null}
        </div>
      </div>
    </section>
  );
}
