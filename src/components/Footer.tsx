import { useTheme } from '../context/ThemeContext';

export function Footer() {
  const { theme } = useTheme();

  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-brand">
          <img
            src={theme === 'light' ? '/brand/logo/lockup-horizontal-light.svg' : '/brand/logo/lockup-horizontal.svg'}
            alt="LTX Performance"
          />
          <span className="footer-tagline">Lógica em Movimento</span>
        </div>
        <ul className="footer-nav">
          <li><a className="footer-nav-link" href="#faq">Perguntas frequentes</a></li>
        </ul>
      </div>
      <div className="container">
        <p className="footer-copyright">© {new Date().getFullYear()} LTX Performance. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
