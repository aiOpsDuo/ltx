/**
 * SiteFooter — minimal LTX site footer. Theme-aware via classes.
 */
function SiteFooter({ basePath = '../..' }) {
  const ns = Object.keys(window).find(k => k.startsWith('LTXPerformanceDesignSystem_'));
  const DS = ns ? window[ns] : {};
  const { Logo } = DS;
  const [theme, setTheme] = React.useState('dark');
  React.useEffect(() => {
    setTheme(document.documentElement.getAttribute('data-theme') || 'dark');
    // re-read on toggle
    const obs = new MutationObserver(() => {
      setTheme(document.documentElement.getAttribute('data-theme') || 'dark');
    });
    obs.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
    return () => obs.disconnect();
  }, []);

  return (
    <footer className="ltx-bg" style={{
      borderTop: '1px solid var(--ltx-border-soft)',
      padding: '56px 32px 32px',
    }}>
      <div style={{
        maxWidth: 1200,
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        gap: 40,
        flexWrap: 'wrap',
      }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14, maxWidth: 380 }}>
          {Logo ? <Logo variant="horizontal" theme={theme === 'light' ? 'light' : 'dark'} height={22} basePath={basePath}/> : null}
          <p style={{
            fontFamily: 'var(--ltx-font-sans)',
            fontSize: 13,
            lineHeight: 1.5,
            color: 'var(--ltx-text-muted)',
            margin: 0,
          }}>
            Aceleração comercial e estruturação de operações de vendas B2B.
          </p>
        </div>
        <nav style={{ display: 'flex', gap: 32 }}>
          {['Metodologia', 'Clientes', 'Preços', 'LinkedIn'].map((it) => (
            <a key={it} href="#" style={{
              fontFamily: 'var(--ltx-font-sans)',
              fontSize: 13,
              color: 'var(--ltx-text-body)',
              textDecoration: 'none',
            }}>{it}</a>
          ))}
        </nav>
      </div>
      <div style={{
        maxWidth: 1200,
        margin: '40px auto 0',
        paddingTop: 24,
        borderTop: '1px solid var(--ltx-border-soft)',
        display: 'flex',
        justifyContent: 'space-between',
        fontFamily: 'var(--ltx-font-mono)',
        fontSize: 11,
        letterSpacing: '0.04em',
        color: 'var(--ltx-text-muted)',
      }}>
        <span>© LTX Performance</span>
        <span>lógica em movimento.</span>
      </div>
    </footer>
  );
}

window.SiteFooter = SiteFooter;
