import printSistema from '../assets/images/print-sistema.png';
import { useDiagnosticoModal } from '../context/DiagnosticoModalContext';

// COPY.md — 4ª Sessão (Produto/X). Tratamento enxuto por decisão de PRD §6.5:
// um print real do produto + um bloco de texto curto, X como parte do método
// (seção 3), nunca como "vitrine de plataforma" à parte. Layout centralizado:
// kicker + headline no topo, print centralizado, CTA abaixo.
export function TecnologiaX() {
  const { openModal } = useDiagnosticoModal();

  return (
    <section className="section tecnologia-x" id="tecnologia-x">
      <div className="section-grafismo" aria-hidden="true">
        <ltx-grafismo variant="01" motion="flow" opacity="0.05" speed="10600" />
      </div>
      <div className="container tecnologia-x-inner">
        <h2 className="h2 tecnologia-x-heading">A central de comando da sua operação comercial.</h2>

        <div className="tecnologia-x-media-wrap">
          <div className="tecnologia-x-media-glow" aria-hidden="true">
            <ltx-grafismo variant="02" motion="wave" opacity="0.4" mono speed="7800" />
          </div>
          <div className="tecnologia-x-media">
            <img
              className="tecnologia-x-media-img"
              src={printSistema}
              alt="Tela do X mostrando o radar do dia: pendências do vendedor e sugestão de próxima ação"
              loading="lazy"
            />
          </div>
        </div>

        <div className="tecnologia-x-cta">
          <button type="button" className="btn btn-primary btn-lg" onClick={() => openModal('tecnologia-x')}>
            Quero ver isso na prática →
          </button>
        </div>
      </div>
    </section>
  );
}
