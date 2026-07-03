# Walkthrough: LTX Landing Page (Seções 2 a 8)

A implementação das novas seções da Landing Page foi concluída conforme o [Plano de Implementação](file:///c:/Users/uliss/Local%20Sites/ltx/app/public/wp-content/themes/duo/implementation_plan.md).

## Resumo das Modificações

> [!NOTE]
> Todos os textos e conteúdos padrão solicitados (fallbacks) foram embutidos diretamente no código como array de dados, garantindo que o layout seja exibido perfeitamente mesmo que os campos do ACF (Advanced Custom Fields) ainda não tenham sido preenchidos no WordPress.

### 1. Seção 2: Pilares
- Adicionada a nova headline: *"Melhoramos expressivamente o resultado da sua operação através de 4 pilares:"*.
- Estrutura configurada para exibir 4 cards limpos e responsivos focados nos pilares: Pessoas, Execução, Clareza e Processos.

### 2. Seção 3: Metodologia
- **Infográfico Interativo**: Foi criado um layout circular dividido em 4 quadrantes usando CSS puro (gradients e border-radius) para manter a performance excelente.
- **Interatividade**: Ao clicar nos quadrantes de 1 a 4, a central de informações ao lado direito atualiza suavemente via JavaScript, mostrando os detalhes da respectiva etapa do "Ciclo LTX" (Diagnóstico, Padrão, Medição, Desenvolvimento).

### 3. Seção 4: Tecnologia X
- Layout configurado em duas colunas. A coluna da esquerda abriga a "central de comando" em texto e o CTA *"Quero ver na prática"*.
- A coluna da direita tem o espaço reservado para o print da plataforma, com um placeholder estilizado caso a imagem ainda não tenha sido carregada via painel.

### 4. Seções 5 e 6: Depoimentos e Mentores
- Preservada a lógica original de puxar os dados de **Custom Post Types (CPTs)**.
- Adicionados blocos de fallback com conteúdo estático de demonstração para Depoimentos (Empresa A, B e C) e Mentores (Tiago e Leonardo). Isso possibilita ver o layout final imediatamente enquanto o banco não é populado.

### 5. Seção 7: FAQ
- Atualizadas as perguntas e respostas com os textos definitivos da LTX.
- Estrutura de *Accordion* mantida para garantir legibilidade e expansão sob demanda, mantendo o usuário engajado.

### 6. Seção 8: CTA Final (Conversão)
- Atualizada a copy final com: *"O que sua operação comercial está deixando de enxergar hoje?"* para dar mais apelo à conversão.
- Preservada a integração ao formulário via `get_template_part`.

## Próximos Passos (Validação)

> [!TIP]
> **Como testar:**
> 1. Acesse o ambiente local do WordPress (`http://ltx.local/` ou equivalente) no navegador.
> 2. Teste o scroll para observar a apresentação visual.
> 3. Na **Seção 3 (Metodologia)**, clique nas numerações do círculo para verificar se o texto de expansão troca adequadamente.
> 4. Acesse pelo celular (ou inspecione via DevTools em mobile) para confirmar a responsividade, especialmente do grid de Pilares e Mentores.

## Arquivos Modificados
- [front-page.php](file:///c:/Users/uliss/Local%20Sites/ltx/app/public/wp-content/themes/duo/front-page.php)
- [front-page.css](file:///c:/Users/uliss/Local%20Sites/ltx/app/public/wp-content/themes/duo/assets/css/front-page.css)
- [front-page.js](file:///c:/Users/uliss/Local%20Sites/ltx/app/public/wp-content/themes/duo/assets/js/front-page.js)
