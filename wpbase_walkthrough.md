# Walkthrough: Integração do Design System Agnóstico

Transformamos o Design System estático (`assets-library`) em um ecossistema nativo do WordPress para o tema Duo.

## O Que Foi Feito

### 1. Injeção de CSS Global (`functions.php`)
Ao invés de copiar os estilos ou depender do CSS padrão vazio, passamos a enfileirar nativamente o arquivo `assets-library/main.css` como dependência (`duo-design-system`). Isso garante que todas as variáveis globais (`tokens/_theme.css`), utilitários de layout e classes da biblioteca estejam globalmente acessíveis no painel e no front-end.

### 2. Criação da Biblioteca de Componentes (`template-parts/components/`)
Extraímos os átomos e moléculas do arquivo HTML estático de amostra (`assest-library.html`) e os transformamos em arquivos modulares em PHP:
- **`button.php`**: Renderiza botões ou links `btn-primary`, `btn-outline`, com suporte a variação de tamanhos.
- **`badge.php`**: Tags indicadoras (`success`, `info`, `warning`, `primary`).
- **`card.php`**: Um card genérico e robusto que suporta imagem (ou injeção de SVG), badges, título e texto. Usado intensivamente em Depoimentos, Pilares, e Fundadores.
- **`accordion.php`**: Componente nativo HTML5 (`<details>`) recriado em PHP para o FAQ.

### 3. Refatoração Completa do `front-page.php`
Ao invés de HTML puro e estático para os blocos repetitivos, refatoramos a Home inteira:
- Todo o layout agora utiliza **Design Tokens** (ex: `var(--spacing-12)`, `var(--color-bg-surface-elevated)`).
- Os blocos que buscam dados do ACF agora repassam esses dados para os componentes recém-criados usando a função `get_template_part()`.
  - Exemplo: O loop de **Metodologia** busca no ACF e ejeta as informações chamando o `card.php`, resultando num código extremamente enxuto e manutenível.

### 4. Upgrade do `header.php`
Revisamos a estrutura para refletir o design do organismo *Header* do Design System (vidro/glassmorphism com blur, padding modular, e o botão dinâmico gerado pelo nosso novo componente `button.php`).

## Validação e Próximos Passos

> [!TIP]
> A grande vantagem dessa arquitetura é que as variáveis (`tokens`) regem o site inteiro. Se no futuro for necessário mudar o `border-radius` padrão de `12px` para `8px` ou alterar a `font-family`, basta modificar no arquivo `_theme.css` da biblioteca original, e todos os componentes e o layout do WP seguirão a mesma regra automaticamente.
> 
> Você pode abrir a home page no LocalWP para visualizar os estilos já aplicados diretamente nos textos inseridos via painel do ACF!
