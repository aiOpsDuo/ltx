/**
 * Hero — marketing hero block. Uses theme classes.
 */
import React from 'react';
import { Button } from '../core/Button.jsx';

export function Hero({
  overline,
  headline,
  subhead,
  primaryCta,
  secondaryCta,
  image,
  align = 'left',
  className = '',
  style,
  ...rest
}) {
  const centered = align === 'center' || !image;
  return (
    <section
      className={`ltx-bg ${className}`}
      style={{
        padding: '96px 32px',
        position: 'relative',
        overflow: 'hidden',
        ...style,
      }}
      {...rest}
    >
      <div style={{
        maxWidth: 1200,
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: image ? '1.1fr 1fr' : '1fr',
        gap: 64,
        alignItems: 'center',
      }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: centered ? 'center' : 'flex-start',
          textAlign: centered ? 'center' : 'left',
          maxWidth: centered ? 760 : 'none',
          margin: centered ? '0 auto' : 0,
        }}>
          {overline ? (
            <span style={{
              fontFamily: 'var(--ltx-font-mono)',
              fontWeight: 700,
              fontSize: 12,
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              color: 'var(--ltx-accent)',
              marginBottom: 16,
            }}>{overline}</span>
          ) : null}
          <h1 style={{
            fontFamily: 'var(--ltx-font-mono)',
            fontWeight: 700,
            fontSize: 'clamp(36px, 5vw, 56px)',
            lineHeight: 1.08,
            letterSpacing: '-0.02em',
            color: 'var(--ltx-text-title)',
            margin: 0,
            maxWidth: 720,
          }}>{headline}</h1>
          {subhead ? (
            <p style={{
              fontFamily: 'var(--ltx-font-sans)',
              fontWeight: 400,
              fontSize: 18,
              lineHeight: 1.55,
              color: 'var(--ltx-text-body)',
              marginTop: 20,
              maxWidth: 540,
            }}>{subhead}</p>
          ) : null}
          {(primaryCta || secondaryCta) ? (
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 12,
              marginTop: 36,
              justifyContent: centered ? 'center' : 'flex-start',
            }}>
              {primaryCta ? (
                <Button as="a" href={primaryCta.href} size="lg">{primaryCta.label}</Button>
              ) : null}
              {secondaryCta ? (
                <Button as="a" href={secondaryCta.href} size="lg" variant="secondary">{secondaryCta.label}</Button>
              ) : null}
            </div>
          ) : null}
        </div>
        {image ? (
          <div className="ltx-surface" style={{
            aspectRatio: '4 / 5',
            borderRadius: 12,
            overflow: 'hidden',
            border: '1px solid var(--ltx-border-soft)',
          }}>
            <img
              src={image.src}
              alt={image.alt || ''}
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </div>
        ) : null}
      </div>
    </section>
  );
}
