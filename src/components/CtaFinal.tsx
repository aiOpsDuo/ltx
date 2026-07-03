import { useDiagnosticoModal } from '../context/DiagnosticoModalContext';

export function CtaFinal() {
  const { openModal } = useDiagnosticoModal();

  return (
    <section className="section cta-final" id="cta-final">
      <div className="section-grafismo" aria-hidden="true">
        <ltx-grafismo variant="03" motion="wave" opacity="0.1" mono speed="7200" />
      </div>
      <div className="container cta-final-inner">
        <span className="section-kicker">Última chance</span>
        {/* Headline de referência da call era mais longa — o próprio time pediu para
            lapidar (PRD §6.9). Versão abaixo é o ponto de partida para refinar junto. */}
        <h2 className="cta-final-headline">
          Sua operação está <span className="text-accent">perdendo receita</span> agora.
        </h2>
        <p className="text-lead">Cada semana sem diagnóstico é receita que já vazou.</p>
        <button type="button" className="btn btn-primary btn-lg" onClick={() => openModal('cta-final')}>
          Quero meu Diagnóstico Gratuito
        </button>
      </div>
    </section>
  );
}
