/**
 * Button — LTX Performance primary/secondary/ghost/danger.
 * Uses CSS variables so [data-theme="light"] flips colors automatically.
 */
import React from 'react';

const SIZE = {
  sm: { padY: 8,  padX: 16, font: 14 },
  md: { padY: 12, padX: 22, font: 14 },
  lg: { padY: 14, padX: 28, font: 15 },
};

export function Button({
  variant = 'primary',
  size = 'lg',
  rounded = 'full',
  as: Tag = 'button',
  leadingIcon,
  trailingIcon,
  fullWidth,
  disabled,
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [active, setActive] = React.useState(false);
  const s = SIZE[size] || SIZE.lg;

  const variants = {
    primary: {
      base:  { background: 'var(--ltx-accent)', color: 'var(--ltx-text-on-accent)', border: '1px solid transparent' },
      hover: { background: 'var(--ltx-accent-hover)' },
    },
    secondary: {
      base:  { background: 'transparent', color: 'var(--ltx-text-title)', border: '1px solid var(--ltx-text-title)' },
      hover: { background: 'color-mix(in srgb, var(--ltx-text-title) 8%, transparent)' },
    },
    ghost: {
      base:  { background: 'transparent', color: 'var(--ltx-text-title)', border: '1px solid transparent' },
      hover: { background: 'color-mix(in srgb, var(--ltx-text-title) 6%, transparent)' },
    },
    danger: {
      base:  { background: '#C8382F', color: '#FFFFFF', border: '1px solid transparent' },
      hover: { background: '#A52E26' },
    },
  };
  const v = variants[variant] || variants.primary;

  const merged = {
    display: fullWidth ? 'flex' : 'inline-flex',
    width: fullWidth ? '100%' : 'auto',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    fontFamily: 'var(--ltx-font-sans)',
    fontWeight: 600,
    fontSize: s.font,
    lineHeight: 1,
    padding: `${s.padY}px ${s.padX}px`,
    borderRadius: rounded === 'md' ? 8 : 9999,
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.5 : 1,
    transition: 'background 160ms cubic-bezier(0.22,1,0.36,1), transform 80ms ease-out',
    transform: active ? 'scale(0.98)' : 'scale(1)',
    textDecoration: 'none',
    whiteSpace: 'nowrap',
    ...v.base,
    ...(hover && !disabled ? v.hover : null),
    ...style,
  };

  return (
    <Tag
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => { setHover(false); setActive(false); }}
      onMouseDown={() => setActive(true)}
      onMouseUp={() => setActive(false)}
      disabled={Tag === 'button' ? disabled : undefined}
      style={merged}
      {...rest}
    >
      {leadingIcon ? <span aria-hidden style={{ display: 'inline-flex' }}>{leadingIcon}</span> : null}
      <span>{children}</span>
      {trailingIcon ? <span aria-hidden style={{ display: 'inline-flex' }}>{trailingIcon}</span> : null}
    </Tag>
  );
}
