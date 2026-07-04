import type { ReactNode } from 'react';
import { useReveal } from '../hooks/useReveal';

// COPY.md — 2ª Sessão (Metodologia): "Melhoramos expressivamente o resultado
// comercial da sua empresa com uma metodologia pautada em 4 Pilares."
// Ordem oficial confirmada pela copy: Pessoas, Execução, Clareza, Processos.
// A copy só define o nome de cada pilar — sem texto de apoio por pilar.
type IconName = 'users' | 'check' | 'target' | 'workflow';

const PILARES: { title: string; icon: IconName }[] = [
  { title: 'Pessoas', icon: 'users' },
  { title: 'Execução', icon: 'check' },
  { title: 'Clareza', icon: 'target' },
  { title: 'Processos', icon: 'workflow' },
];

const ICON_PATHS: Record<IconName, ReactNode> = {
  users: (
    <>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </>
  ),
  check: <path d="M20 6 9 17l-5-5" />,
  target: (
    <>
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </>
  ),
  workflow: (
    <>
      <rect width="8" height="8" x="3" y="3" rx="2" />
      <path d="M7 11v4a2 2 0 0 0 2 2h4" />
      <rect width="8" height="8" x="13" y="13" rx="2" />
    </>
  ),
};

function PilarIcon({ name }: { name: IconName }) {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {ICON_PATHS[name]}
    </svg>
  );
}

export function Pilares() {
  const ref = useReveal<HTMLDivElement>({ stagger: 0.08 });

  return (
    <section className="section pilares" id="metodologia-pilares">
      <div className="section-grafismo" aria-hidden="true">
        <ltx-grafismo variant="01" motion="flow" opacity="0.09" speed="9200" />
      </div>
      <div className="container">
        <div className="pilares-body">
          <div className="pilares-copy">
            <h2 className="h2 section-heading">
              Melhoramos expressivamente o resultado comercial da sua empresa com uma metodologia pautada em 4
              pilares.
            </h2>
          </div>

          <div className="pilares-grid" ref={ref}>
            {PILARES.map((pilar) => (
              <div key={pilar.title} className="pilar-card" tabIndex={0}>
                <span className="pilar-chip">
                  <PilarIcon name={pilar.icon} />
                </span>
                <h3 className="pilar-title">{pilar.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
