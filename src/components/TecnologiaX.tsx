import printSistema from '../assets/images/print-sistema.png';
import { useDiagnosticoModal } from '../context/DiagnosticoModalContext';

// COPY.md — 4ª Sessão (Produto/X). Tratamento enxuto por decisão de PRD §6.5:
// um print real do produto + um bloco de texto curto, X como parte do método
// (seção 3), nunca como "vitrine de plataforma" à parte.
export function TecnologiaX() {
  const { openModal } = useDiagnosticoModal();

  return (
    <section className="section tecnologia-x" id="tecnologia-x">
      <div className="container tecnologia-x-inner">
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
        <div className="tecnologia-x-copy">
          <h2 className="h2">X: uma central de comando para sua operação comercial.</h2>
          <p className="text-lead">
            O X é a tecnologia própria da LTX criada para aproximar gestão, vendedores e dados reais da operação. Ele
            ajuda a transformar conversas, atividades e movimentações do funil em uma visão mais clara sobre o que
            está acontecendo — e sobre o que precisa ser feito.
          </p>
          <p className="text-body tecnologia-x-punch">
            Menos ruído. Menos decisão baseada em impressão. <span className="text-accent">Mais clareza para vender
            melhor.</span>
          </p>
          <div>
            <button type="button" className="btn btn-secondary btn-md" onClick={() => openModal('tecnologia-x')}>
              Quero ver na prática
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
