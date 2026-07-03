import { useEffect, useState } from 'react';
import { useDiagnosticoModal } from '../context/DiagnosticoModalContext';
import { useTheme } from '../context/ThemeContext';

export function Header() {
  const [isStuck, setIsStuck] = useState(false);
  const { openModal } = useDiagnosticoModal();
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setIsStuck(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`header${isStuck ? ' is-stuck' : ''}`}>
      <div className="container header-container">
        <a href="#topo" className="header-brand" aria-label="LTX Performance">
          <img
            src={theme === 'light' ? '/brand/logo/lockup-horizontal-light.svg' : '/brand/logo/lockup-horizontal.svg'}
            alt="LTX Performance"
          />
        </a>

        <div className="header-actions">
          <button type="button" className="btn btn-secondary btn-md" onClick={() => openModal('header')}>
            Falar com consultor
          </button>

          <div className="theme-toggle" role="group" aria-label="Selecionar tema">
            <button
              type="button"
              className={`theme-toggle-option${theme === 'dark' ? ' is-active' : ''}`}
              aria-pressed={theme === 'dark'}
              onClick={() => setTheme('dark')}
            >
              Dark
            </button>
            <button
              type="button"
              className={`theme-toggle-option${theme === 'light' ? ' is-active' : ''}`}
              aria-pressed={theme === 'light'}
              onClick={() => setTheme('light')}
            >
              Light
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
