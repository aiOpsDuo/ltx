import { useDiagnosticoModal } from '../context/DiagnosticoModalContext';

export function CtaFinal() {
  const { openModal } = useDiagnosticoModal();

  return (
    <section className="section cta-final" id="cta-final">
      <div className="section-grafismo" aria-hidden="true">
        <ltx-grafismo variant="03" motion="wave" opacity="0.1" mono speed="7200" />
      </div>
      <div className="container cta-final-inner">
        {/* Copy final — COPY.md, 8ª Sessão. PRD §6.9: headline não pode exceder a
            extensão da versão de referência da call; CTA idêntico ao resto da página. */}
        <h2 className="cta-final-headline">
          O que sua operação comercial está <span className="text-accent">deixando de enxergar</span> hoje?
        </h2>
        <p className="text-lead">
          Se sua empresa já vende, mas ainda não tem clareza de onde a receita trava, o próximo passo é simples:
        </p>
        <button type="button" className="btn btn-primary btn-lg" onClick={() => openModal('cta-final')}>
          Quero meu Diagnóstico Gratuito
        </button>
      </div>
    </section>
  );
}
