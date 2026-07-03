/**
 * Card — surface container, theme-aware via classes (survives React reconciliation).
 */
import React from 'react';

const PADDING = { none: 0, sm: 16, md: 24, lg: 32 };

export function Card({
  variant = 'surface',
  padding = 'md',
  hoverable = false,
  as: Tag = 'div',
  className = '',
  style,
  children,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const p = PADDING[padding] ?? PADDING.md;

  const bgClass = variant === 'ghost' ? '' : 'ltx-surface';
  const borderLeft = variant === 'accent' ? '2px solid var(--ltx-accent)' : undefined;

  return (
    <Tag
      className={`${bgClass} ${className}`}
      onMouseEnter={hoverable ? () => setHover(true) : undefined}
      onMouseLeave={hoverable ? () => setHover(false) : undefined}
      style={{
        border: variant === 'ghost' ? '1px solid var(--ltx-border)' : '1px solid var(--ltx-border-soft)',
        borderLeft,
        padding: p,
        borderRadius: 12,
        transition: 'transform 240ms cubic-bezier(0.22,1,0.36,1), border-color 160ms, box-shadow 160ms',
        transform: hoverable && hover ? 'translateY(-2px)' : 'translateY(0)',
        boxShadow: hoverable && hover ? '0 1px 2px rgba(17,22,27,0.08)' : 'none',
        ...style,
      }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

export function CardHeader({ children, style, ...rest }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6, marginBottom: 12, ...style }} {...rest}>
      {children}
    </div>
  );
}

export function CardTitle({ children, style, ...rest }) {
  return (
    <h3 style={{
      fontFamily: 'var(--ltx-font-mono)',
      fontWeight: 700,
      fontSize: 18,
      lineHeight: 1.3,
      color: 'var(--ltx-text-title)',
      letterSpacing: '-0.01em',
      margin: 0,
      ...style,
    }} {...rest}>{children}</h3>
  );
}

export function CardBody({ children, style, ...rest }) {
  return (
    <div style={{
      fontFamily: 'var(--ltx-font-sans)',
      fontSize: 14,
      lineHeight: 1.55,
      color: 'var(--ltx-text-body)',
      ...style,
    }} {...rest}>{children}</div>
  );
}
