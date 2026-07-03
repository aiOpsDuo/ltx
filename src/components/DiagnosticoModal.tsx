import { useEffect, useRef, useState, type FormEvent } from 'react';
import { useDiagnosticoModal } from '../context/DiagnosticoModalContext';

const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';

export function DiagnosticoModal() {
  const { isOpen, source, closeModal } = useDiagnosticoModal();
  const panelRef = useRef<HTMLDivElement>(null);
  const firstFieldRef = useRef<HTMLInputElement>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    setIsSubmitted(false);
    const previouslyFocused = document.activeElement as HTMLElement | null;
    firstFieldRef.current?.focus();
    document.body.style.overflow = 'hidden';

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        closeModal();
        return;
      }
      if (e.key !== 'Tab' || !panelRef.current) return;
      const focusable = Array.from(panelRef.current.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR));
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }

    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
      previouslyFocused?.focus();
    };
  }, [isOpen, closeModal]);

  if (!isOpen) return null;

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO(SDD): enviar para o endpoint/webhook que a LTX definir (PRD §7).
    // Confirmação visual não depende dessa integração estar pronta.
    console.info('Diagnóstico Gratuito solicitado via CTA:', source);
    setIsSubmitted(true);
  }

  return (
    <div
      className={`modal-overlay${isOpen ? ' is-open' : ''}`}
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) closeModal();
      }}
    >
      <div
        className="modal-panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby="diagnostico-modal-title"
        ref={panelRef}
      >
        <button type="button" className="modal-close" aria-label="Fechar" onClick={closeModal}>
          ×
        </button>

        {isSubmitted ? (
          <div className="modal-success">
            <span className="modal-success-icon" aria-hidden="true">✓</span>
            <h2 className="h3" id="diagnostico-modal-title">Recebemos seus dados.</h2>
            <p className="text-body">A LTX entra em contato para agendar seu horário. Retorno em até 24h úteis.</p>
            <button type="button" className="btn btn-secondary btn-md" onClick={closeModal}>
              Fechar
            </button>
          </div>
        ) : (
          <>
            <div className="modal-header">
              <h2 className="modal-title" id="diagnostico-modal-title">Vamos entender sua operação comercial</h2>
              <p className="modal-subtitle">Preencha seus dados e a LTX entra em contato para agendar o seu horário.</p>
            </div>
            <form className="form-grid" onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="input-label" htmlFor="diagnostico-nome">Nome<span className="input-label-required">*</span></label>
                <input ref={firstFieldRef} id="diagnostico-nome" name="nome" className="input-base" required autoComplete="name" />
              </div>
              <div className="form-group">
                <label className="input-label" htmlFor="diagnostico-email">E-mail<span className="input-label-required">*</span></label>
                <input id="diagnostico-email" name="email" type="email" className="input-base" required autoComplete="email" />
              </div>
              <div className="form-group">
                <label className="input-label" htmlFor="diagnostico-empresa">Empresa<span className="input-label-required">*</span></label>
                <input id="diagnostico-empresa" name="empresa" className="input-base" required autoComplete="organization" />
              </div>
              <div className="form-group">
                <label className="input-label" htmlFor="diagnostico-telefone">Telefone<span className="input-label-required">*</span></label>
                <input id="diagnostico-telefone" name="telefone" type="tel" className="input-base" required autoComplete="tel" />
              </div>
              <div className="form-group form-group-full">
                <button type="submit" className="btn btn-primary btn-lg btn-full">Quero meu Diagnóstico Gratuito</button>
              </div>
            </form>
            <p className="modal-microcopy">Sem custo. Sem compromisso. Você recebe retorno em até 24h úteis.</p>
          </>
        )}
      </div>
    </div>
  );
}
