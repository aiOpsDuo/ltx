import { useReveal } from '../hooks/useReveal';
import { useDiagnosticoModal } from '../context/DiagnosticoModalContext';

// COPY.md — 6ª Sessão (Fundadores). Nomes completos por Tiago Souza (liderança
// comercial) e Leonardo dos Reis (processo/engenharia de dados) — ver
// design_system readme.md, seção de contexto da marca.
// PRD 6.7 — fotos reais ainda não recebidas (pendência §13). Tratamento
// oficial enquanto isso: silhueta duotone (fundo verde neon + figura em preto
// profundo), conforme design_system/cards/brand-silhouette.html.
const FOUNDERS = [
  {
    name: 'Tiago Souza',
    quote:
      'Gestão comercial precisa de clareza. Sem ela, o time trabalha muito, mas a liderança decide tarde.',
  },
  {
    name: 'Leonardo Machado',
    quote: 'Quando a tecnologia mostra o que realmente importa, a operação ganha velocidade para agir.',
  },
];

function SilhouetteIcon() {
  return (
    <svg viewBox="0 0 100 100" fill="currentColor" aria-hidden="true">
      <circle cx="50" cy="34" r="18" />
      <path d="M8 100v-6c0-25 19-45 42-45s42 20 42 45v6H8Z" />
    </svg>
  );
}

export function Founders() {
  const ref = useReveal<HTMLDivElement>({ stagger: 0.08 });
  const { openModal } = useDiagnosticoModal();

  return (
    <section className="section founders" id="founders">
      <div className="section-grafismo" aria-hidden="true">
        <ltx-grafismo variant="01" motion="flow" opacity="0.08" flip speed="9600" />
      </div>
      <div className="container founders-container">
        <h2 className="h2 section-heading">
          A LTX foi criada por quem entende os dois lados da performance:{' '} <br />
          <span className="text-accent">gestão e tecnologia</span>.
        </h2>
        <div className="founders-grid" ref={ref}>
          {FOUNDERS.map((founder) => (
            <article className="founder-card" key={founder.name}>
              <div className="founder-portrait">
                <SilhouetteIcon />
              </div>
              <div className="founder-info">
                <h3 className="founder-name">{founder.name}</h3>
                <span className="founder-role">Founder</span>
              </div>
              <blockquote className="founder-quote">
                <p>{founder.quote}</p>
              </blockquote>
            </article>
          ))}
        </div>
        <div className="founders-cta">
          <button type="button" className="btn btn-primary btn-lg" onClick={() => openModal('founders')}>
            Fale com nossa equipe
          </button>
        </div>
      </div>
    </section>
  );
}
