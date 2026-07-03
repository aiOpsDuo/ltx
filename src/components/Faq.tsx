import { useState } from 'react';

// PRD 6.8 — 6 perguntas da Etapa 1 menos a de CRM (removida por decisão explícita
// da call); pergunta 6 usa a redação corrigida validada na call, não a da Etapa 1.
const FAQ_ITEMS = [
  {
    question: 'O Diagnóstico é gratuito mesmo?',
    answer: 'Sim. Você não paga nada pelo Diagnóstico e não assume nenhum compromisso para participar.',
  },
  {
    question: 'É uma reunião comercial disfarçada?',
    answer:
      'Não. É uma conversa para mapear onde sua operação comercial está travando. A decisão de seguir ou não é sua.',
  },
  {
    question: 'A LTX é consultoria ou tecnologia?',
    answer:
      'As duas coisas juntas: consultoria, tecnologia, gestão comercial especializada e acompanhamento contínuo. Nosso compromisso é com a entrega, não com a ferramenta.',
  },
  {
    question: 'Preciso ter processo comercial estruturado antes de falar com a LTX?',
    answer: 'Não. Entender em que ponto sua operação está hoje faz parte do próprio diagnóstico.',
  },
  {
    question: 'Para quem a LTX não é indicada?',
    answer:
      'Para quem não tem interesse em criar ou melhorar uma operação comercial. O critério é disposição, não a maturidade atual da operação.',
  },
];

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section faq" id="faq">
      <div className="section-grafismo" aria-hidden="true">
        <ltx-grafismo variant="02" motion="flow" opacity="0.06" mono speed="9800" />
      </div>
      <div className="container faq-container">
        <div className="faq-header">
          <h2 className="h2 section-heading">Antes de você decidir.</h2>
        </div>
        <div className="faq-list">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            const panelId = `faq-panel-${index}`;
            return (
              <div className={`faq-item${isOpen ? ' is-open' : ''}`} key={item.question}>
                <button
                  type="button"
                  className="faq-trigger"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <span>{item.question}</span>
                  <span className="faq-icon" aria-hidden="true" />
                </button>
                <div className="faq-panel" id={panelId} role="region">
                  <div className="faq-panel-inner">
                    <p className="faq-answer">{item.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
