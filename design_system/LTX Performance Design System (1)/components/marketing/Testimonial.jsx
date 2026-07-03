/**
 * Testimonial — quote + attribution + outcome stat. Uses theme classes for surfaces.
 */
import React from 'react';

export function Testimonial({ quote, attribution, outcome, style, ...rest }) {
  return (
    <figure
      className="ltx-surface"
      style={{
        border: '1px solid var(--ltx-border-soft)',
        borderRadius: 12,
        padding: 40,
        display: 'grid',
        gridTemplateColumns: outcome ? '1fr 220px' : '1fr',
        gap: 36,
        alignItems: 'start',
        margin: 0,
        ...style,
      }}
      {...rest}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
        <blockquote style={{
          fontFamily: 'var(--ltx-font-mono)',
          fontWeight: 700,
          fontSize: 'clamp(20px, 2.4vw, 26px)',
          lineHeight: 1.3,
          letterSpacing: '-0.015em',
          color: 'var(--ltx-text-title)',
          margin: 0,
        }}>
          “{quote}”
        </blockquote>
        <figcaption style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          {attribution.avatar ? (
            <img
              src={attribution.avatar}
              alt=""
              style={{ width: 44, height: 44, borderRadius: '50%', objectFit: 'cover', background: 'var(--ltx-chip-bg)' }}
            />
          ) : (
            <div style={{ width: 44, height: 44, borderRadius: '50%', background: 'var(--ltx-chip-bg)' }} aria-hidden />
          )}
          <div>
            <div style={{ fontFamily: 'var(--ltx-font-sans)', fontSize: 14, fontWeight: 600, color: 'var(--ltx-text-title)' }}>
              {attribution.name}
            </div>
            <div style={{ fontFamily: 'var(--ltx-font-sans)', fontSize: 13, color: 'var(--ltx-text-body)' }}>
              {[attribution.role, attribution.business, attribution.city].filter(Boolean).join(' · ')}
            </div>
          </div>
        </figcaption>
      </div>
      {outcome ? (
        <aside className="ltx-bg" style={{
          border: '1px solid var(--ltx-border)',
          borderLeft: '2px solid var(--ltx-accent)',
          borderRadius: 8,
          padding: 20,
        }}>
          <div style={{
            fontFamily: 'var(--ltx-font-mono)',
            fontWeight: 700,
            fontSize: 40,
            lineHeight: 1,
            letterSpacing: '-0.02em',
            color: 'var(--ltx-accent)',
          }}>{outcome.value}</div>
          <div style={{
            fontFamily: 'var(--ltx-font-sans)',
            fontSize: 13,
            lineHeight: 1.45,
            color: 'var(--ltx-text-body)',
            marginTop: 10,
          }}>{outcome.label}</div>
        </aside>
      ) : null}
    </figure>
  );
}
