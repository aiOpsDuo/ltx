# Implementação das Seções 2 a 8 (Landing Page LTX)

Este plano detalha a construção das próximas seções da Landing Page, baseando-se nos PDFs de consolidação fornecidos para cada seção. As mudanças serão feitas respeitando o Design System atual e as tecnologias do projeto.

## User Review Required

> [!IMPORTANT]
> **Seção 3 (Metodologia):** O PDF sugere um infográfico circular interativo com quadrantes clicáveis. Para manter a performance e a acessibilidade, construiremos um componente responsivo: em telas grandes, um layout circular ou em grid interativo; em telas menores, uma lista expansível (accordion) ou cards para melhor usabilidade.
>
> **Imagens/Assets:** Alguns blocos como "Tecnologia X" (Seção 4) e "Mentores" (Seção 6) precisarão de imagens reais cadastradas no WordPress (ACF). Deixaremos a estrutura pronta para que você faça o upload dessas imagens pelo painel do WP.

## Open Questions

> [!WARNING]
> - **Depoimentos e Mentores (Seção 5 e 6):** O tema atual possui Custom Post Types (CPTs) criados para Depoimentos e Mentores, puxando os dados de lá. Eu devo atualizar os textos padrão de fallback na `front-page.php`, mas os dados reais precisam estar preenchidos no WordPress. Confirma que usaremos a estrutura dinâmica de CPTs atual?
> - **Infográfico Circular (Seção 3):** Você prefere que eu desenhe a lógica circular com CSS e JS puros (mais leve) ou prefere um layout de cards/tabs que é mais fácil de editar no futuro via painel do WordPress? Vou seguir com a opção em CSS/JS puro para o infográfico circular caso não haja preferência.

## Proposed Changes

---

### Componentes CSS e JS (`front-page.css` e `front-page.js`)

Implementação de estilos e lógicas exclusivas das novas seções:

#### [MODIFY] [front-page.css](file:///c:/Users/uliss/Local%20Sites/ltx/app/public/wp-content/themes/duo/assets/css/front-page.css)
- Adição dos estilos da Seção 2 (Pilares) com layout flexível.
- Adição da animação e layout do círculo interativo da Seção 3 (Metodologia), simulando os 4 quadrantes e a central de expansão de texto.
- Adição dos estilos do layout de 2 colunas da Seção 4 (Tecnologia X).
- Ajustes de grid para Depoimentos e Mentores (Seções 5 e 6).
- Estilos refinados do Accordion para o FAQ (Seção 7).
- Estilização do grande box de destaque do CTA final (Seção 8).

#### [MODIFY] [front-page.js](file:///c:/Users/uliss/Local%20Sites/ltx/app/public/wp-content/themes/duo/assets/js/front-page.js)
- Adição da lógica de interatividade da Seção 3 (Metodologia): clique nos quadrantes para expandir a explicação e alterar o conteúdo dinâmico (Diagnóstico, Padrão, Medição, Desenvolvimento).
- Lógica para o Accordion da Seção 7 (FAQ) (se o componente nativo precisar de ajustes).

---

### Template da Landing Page

#### [MODIFY] [front-page.php](file:///c:/Users/uliss/Local%20Sites/ltx/app/public/wp-content/themes/duo/front-page.php)
Atualização completa da marcação HTML, integrando-se aos campos do ACF e substituindo os placeholders atuais:

- **Seção 2 (Pilares):**
  - Título e subtítulo alinhados com o texto do PDF ("Melhoramos expressivamente o resultado...").
  - Criação dos 4 blocos de pilares (Pessoas, Execução, Clareza, Processos) mantendo o design limpo.
- **Seção 3 (Metodologia):**
  - Construção do HTML do infográfico circular (4 quadrantes) e do painel lateral/inferior de expansão com as notas de implementação solicitadas.
- **Seção 4 (Tecnologia X):**
  - Layout dividido com a "central de comando" no texto à esquerda e a área para print/mockup à direita.
  - CTA "Quero ver na prática" linkando para a seção de conversão.
- **Seção 5 (Depoimentos):**
  - Ajuste do layout de grid para exibir corretamente as citações de resultado, performance e processo.
- **Seção 6 (Mentores):**
  - Adição do headline "A LTX foi criada por quem entende os dois lados..." e ajuste na listagem (que buscará Tiago e Leonardo via CPT).
- **Seção 7 (FAQ):**
  - Estruturação do accordion com as 5 perguntas e respostas contidas no documento de referência.
- **Seção 8 (CTA / Conversão):**
  - Novo design do box de fechamento com a copy: "O que sua operação comercial está deixando de enxergar hoje?" e CTA direto.

## Verification Plan

### Manual Verification
1. Verificarei se o layout no navegador está responsivo e se adequando tanto a desktop quanto mobile.
2. Testarei a interação do infográfico da Seção 3 para garantir que o painel de leitura atualiza ao clicar nos quadrantes.
3. Testarei os Accordions da Seção 7.
4. Verificarei se todos os estilos estão corretamente mapeados em classes no `front-page.css` sem inline styles no PHP.
