// PRD 6.7 — fotos reais de Tiago e Leonardo ainda não recebidas (pendência §13).
// Tratamento oficial enquanto isso: silhueta duotone (preto profundo + verde neon).
const FOUNDERS = [
  {
    name: 'Tiago Souza',
    role: 'Liderança comercial',
    quote: '[Citação de Tiago — importar o texto validado na copy da Etapa 1]',
  },
  {
    name: 'Leonardo dos Reis',
    role: 'Processo e engenharia de dados',
    quote: '[Citação de Leonardo — importar o texto validado na copy da Etapa 1]',
  },
];

function SilhouetteIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 12c2.76 0 5-2.69 5-6s-2.24-6-5-6-5 2.69-5 6 2.24 6 5 6Zm0 2c-4.42 0-9 2.24-9 5v3h18v-3c0-2.76-4.58-5-9-5Z" />
    </svg>
  );
}

export function Founders() {
  return (
    <section className="section founders" id="founders">
      <div className="section-grafismo" aria-hidden="true">
        <ltx-grafismo variant="03" motion="flow" opacity="0.08" speed="9600" />
      </div>
      <div className="container">
        <span className="section-kicker">Quem está por trás</span>
        <h2 className="h2 section-heading">Sócios que já viveram o problema do outro lado.</h2>
        <div className="founders-grid">
          {FOUNDERS.map((founder) => (
            <article className="founder-card" key={founder.name}>
              <div className="founder-portrait">
                <SilhouetteIcon />
              </div>
              <div>
                <h3 className="founder-name">{founder.name}</h3>
                <p className="founder-role">{founder.role}</p>
              </div>
              <p className="founder-quote">{founder.quote}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
