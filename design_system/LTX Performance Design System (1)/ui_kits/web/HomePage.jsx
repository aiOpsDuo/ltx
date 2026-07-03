/**
 * HomePage — LTX Performance marketing home (cleaner, theme-aware).
 * Sections wrap in `.ltx-bg` classes (not inline var() backgrounds) so theme
 * switches cascade reliably.
 *
 * The ThemeSwitch is placed below the nav band (top: 92px) so it doesn't
 * collide with the right-side CTA.
 */

function ThemeSwitch({ value, onChange }) {
  return (
    <div
      role="group"
      aria-label="Theme switcher"
      className="ltx-surface"
      style={{
        position: 'fixed',
        top: 92,
        right: 24,
        zIndex: 100,
        display: 'flex',
        gap: 4,
        border: '1px solid var(--ltx-border-soft)',
        borderRadius: 9999,
        padding: 4,
        fontFamily: 'var(--ltx-font-mono)',
        fontSize: 11,
        letterSpacing: '0.04em',
        boxShadow: '0 2px 8px rgba(17,22,27,0.18)',
      }}
    >
      {['dark', 'light'].map((t) => (
        <button
          key={t}
          onClick={() => onChange(t)}
          aria-pressed={value === t}
          className={value === t ? 'ltx-accent-bg' : ''}
          style={{
            color: value === t ? 'var(--ltx-text-on-accent)' : 'var(--ltx-text-body)',
            border: 'none',
            background: value === t ? undefined : 'transparent',
            borderRadius: 9999,
            padding: '6px 14px',
            cursor: 'pointer',
            fontFamily: 'inherit',
            fontSize: 'inherit',
            letterSpacing: 'inherit',
            textTransform: 'uppercase',
            fontWeight: 700,
            transition: 'color 160ms',
          }}
        >{t}</button>
      ))}
    </div>
  );
}

const HpIcon = (path) => (p) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...p}>{path}</svg>
);
const HpWorkflow  = HpIcon(<><rect x="3" y="3" width="6" height="6" rx="1"/><rect x="15" y="15" width="6" height="6" rx="1"/><path d="M9 6h6a3 3 0 0 1 3 3v6"/></>);
const HpLineChart = HpIcon(<><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></>);
const HpClock     = HpIcon(<><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></>);

function HomePage({ basePath = '../..' }) {
  const ns = Object.keys(window).find(k => k.startsWith('LTXPerformanceDesignSystem_'));
  const DS = ns ? window[ns] : null;
  const [theme, setTheme] = React.useState('dark');

  React.useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  if (!DS) return <div style={{ padding: 32, fontFamily: 'system-ui' }}>Carregando design system…</div>;
  const { Nav, Hero, FeatureCard, Testimonial, CtaBand } = DS;

  return (
    <div key={theme} className="ltx-bg" style={{ minHeight: '100vh' }}>
      <ThemeSwitch value={theme} onChange={setTheme}/>

      <Nav
        basePath={basePath}
        links={[
          { label: 'Metodologia', href: '#metodo' },
          { label: 'Clientes',    href: '#clientes' },
          { label: 'Diagnóstico', href: '#contato' },
        ]}
        cta={{ label: 'Falar com consultor', href: '#contato' }}
      />

      <Hero
        overline="lógica em movimento"
        headline="Reduza em 40% o ciclo médio de vendas da sua equipe."
        subhead="Integramos seus canais de leads ao seu CRM em 3 dias. Sem planilhas manuais."
        primaryCta={{ label: 'Analisar minha operação', href: '#contato' }}
        secondaryCta={{ label: 'Ver metodologia', href: '#metodo' }}
        image={{ src: basePath + '/assets/images/sample02.png', alt: 'Silhueta de cliente em conversa' }}
      />

      <section id="metodo" className="ltx-bg" style={{ padding: '96px 32px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 56, maxWidth: 680 }}>
            <span style={{
              fontFamily: 'var(--ltx-font-mono)',
              fontWeight: 700,
              fontSize: 12,
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              color: 'var(--ltx-accent)',
            }}>por que LTX</span>
            <h2 style={{
              fontFamily: 'var(--ltx-font-mono)',
              fontWeight: 700,
              fontSize: 'clamp(28px, 3.4vw, 40px)',
              lineHeight: 1.15,
              letterSpacing: '-0.02em',
              color: 'var(--ltx-text-title)',
              margin: 0,
            }}>Operação coordenada, sem planilhas paralelas.</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
            <FeatureCard icon={<HpWorkflow/>} title="Triagem automática"
              body="Formulários conectados ao Pipedrive, com primeira mensagem em 3 segundos."/>
            <FeatureCard icon={<HpLineChart/>} title="Dados consolidados"
              body="WhatsApp Business, RD Station e HubSpot no mesmo histórico de cliente."/>
            <FeatureCard icon={<HpClock/>} title="Operação em 3 dias"
              body="Do diagnóstico ao primeiro fluxo, antes do próximo ciclo de fechamento."/>
          </div>
        </div>
      </section>

      <section id="clientes" className="ltx-bg" style={{ padding: '0 32px 96px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <Testimonial
            quote="Sincronizamos a triagem de leads e o atendimento na mesma semana. O primeiro contato caiu de 4 horas para 7 minutos."
            attribution={{
              name: 'Marina Cardoso',
              role: 'Head de Vendas',
              business: 'Hospital São Lucas',
              city: 'Porto Alegre',
            }}
            outcome={{ value: '34%', label: 'redução de CAC em 8 semanas' }}
          />
        </div>
      </section>

      <CtaBand
        id="contato"
        overline="diagnóstico inicial"
        headline="Pronto para tirar os gargalos da sua operação?"
        subhead="30 minutos. Mapeamos as 3 principais automações para sua equipe."
        primaryCta={{ label: 'Agendar diagnóstico', href: '#contato' }}
      />

      <SiteFooter basePath={basePath}/>
    </div>
  );
}

window.HomePage = HomePage;
