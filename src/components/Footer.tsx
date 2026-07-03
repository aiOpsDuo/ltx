export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-brand">
          <img src="/brand/logo/lockup-horizontal.svg" alt="LTX Performance" />
          <span className="footer-tagline">Lógica em Movimento</span>
        </div>
        <ul className="footer-nav">
          <li><a className="footer-nav-link" href="#faq">Perguntas frequentes</a></li>
          <li><a className="footer-nav-link" href="mailto:contato@ltxperformance.com">Contato</a></li>
        </ul>
      </div>
      <div className="container">
        <p className="footer-copyright">© {new Date().getFullYear()} LTX Performance. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
