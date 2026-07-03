/**
 * Nav — sticky top bar. Theme-aware via CSS variables.
 * Auto-picks logo theme from the document's [data-theme] attribute.
 */
import React from 'react';
import { Button } from '../core/Button.jsx';
import { Logo } from '../core/Logo.jsx';

export function Nav({
  links = [],
  cta,
  basePath = '',
  sticky = true,
  style,
  ...rest
}) {
  const [stuck, setStuck] = React.useState(false);
  const [theme, setTheme] = React.useState('dark');

  React.useEffect(() => {
    const read = () => setTheme(document.documentElement.getAttribute('data-theme') || 'dark');
    read();
    const obs = new MutationObserver(read);
    obs.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
    return () => obs.disconnect();
  }, []);

  React.useEffect(() => {
    if (!sticky) return;
    const on = () => setStuck(window.scrollY > 12);
    on();
    window.addEventListener('scroll', on, { passive: true });
    return () => window.removeEventListener('scroll', on);
  }, [sticky]);

  const stuckBg = theme === 'light'
    ? 'rgba(255, 255, 255, 0.88)'
    : 'rgba(17, 22, 27, 0.85)';

  return (
    <header
      style={{
        position: sticky ? 'sticky' : 'relative',
        top: 0, left: 0, right: 0,
        zIndex: 40,
        background: stuck ? stuckBg : 'transparent',
        backdropFilter: stuck ? 'blur(8px)' : 'none',
        WebkitBackdropFilter: stuck ? 'blur(8px)' : 'none',
        borderBottom: stuck ? '1px solid var(--ltx-border-soft)' : '1px solid transparent',
        transition: 'background 240ms, border-color 240ms',
        ...style,
      }}
      {...rest}
    >
      <div style={{
        maxWidth: 1200,
        margin: '0 auto',
        padding: '14px 32px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 32,
      }}>
        <a href="/" aria-label="LTX Performance" style={{ display: 'inline-flex', alignItems: 'center' }}>
          <Logo variant="horizontal" theme={theme === 'light' ? 'light' : 'dark'} height={26} basePath={basePath} />
        </a>

        <nav style={{ display: 'flex', alignItems: 'center', gap: 28 }}>
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              style={{
                fontFamily: 'var(--ltx-font-sans)',
                fontSize: 14,
                fontWeight: 500,
                color: 'var(--ltx-text-body)',
                textDecoration: 'none',
                transition: 'color 160ms',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--ltx-text-title)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--ltx-text-body)')}
            >
              {l.label}
            </a>
          ))}
        </nav>

        {cta ? (
          <Button as="a" href={cta.href} size="md">
            {cta.label}
          </Button>
        ) : null}
      </div>
    </header>
  );
}
