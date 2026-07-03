# Plano de Implementação: Reutilização do Design System

A pasta `assets-library` contém o Design System da LTX Performance em formato estático (HTML/CSS Vanilla). Para que esses elementos possam ser de fato reutilizados no WordPress (conforme solicitado), precisamos transformá-los em **Componentes Reutilizáveis (Template Parts)** e integrar o CSS nativamente no tema.

## User Review Required

> [!IMPORTANT]
> Vou converter o HTML estático do `assets-library` em arquivos PHP independentes dentro de `template-parts/components/`. Dessa forma, você poderá chamá-arlos no `front-page.php` passando os dados do ACF.
> 
> Além disso, importaremos o CSS do Design System para que ele seja carregado corretamente pelo WordPress.

## Proposed Changes

### 1. Estruturação do CSS no Tema

#### [MODIFY] [functions.php](file:///c:/Users/uliss/Local%20Sites/ltx/app/public/wp-content/themes/duo/functions.php)
Atualizaremos o `duo_enqueue_assets` para registrar e carregar o arquivo `main.css` do `assets-library` como a folha de estilos principal do site, substituindo a folha padrão vazia ou rodando em conjunto com ela.

### 2. Conversão de Átomos e Moléculas em Template Parts

Vamos criar uma nova subpasta `template-parts/components/` e fatiar os elementos do `assest-library.html` para lá:

#### [NEW] [template-parts/components/button.php](file:///c:/Users/uliss/Local%20Sites/ltx/app/public/wp-content/themes/duo/template-parts/components/button.php)
Componente reutilizável para botões. Aceitará argumentos como `$args['text']`, `$args['url']`, `$args['type']` (primary, outline, text).

#### [NEW] [template-parts/components/badge.php](file:///c:/Users/uliss/Local%20Sites/ltx/app/public/wp-content/themes/duo/template-parts/components/badge.php)
Componente reutilizável para badges. Aceitará argumentos de texto e estilo (success, warning, info).

#### [NEW] [template-parts/components/card.php](file:///c:/Users/uliss/Local%20Sites/ltx/app/public/wp-content/themes/duo/template-parts/components/card.php)
Componente de card básico (muito usado em pilares e metodologias).

#### [NEW] [template-parts/components/accordion.php](file:///c:/Users/uliss/Local%20Sites/ltx/app/public/wp-content/themes/duo/template-parts/components/accordion.php)
Componente para o FAQ, aplicando o design de `<details>` e `<summary>`.

### 3. Ajuste nos Organismos Atuais

#### [MODIFY] [header.php](file:///c:/Users/uliss/Local%20Sites/ltx/app/public/wp-content/themes/duo/header.php)
Aplicaremos as classes de UI do `assets-library` (ex: `.site-header`, `.glass`, `.btn-primary`) no nosso cabeçalho dinâmico.

#### [MODIFY] [front-page.php](file:///c:/Users/uliss/Local%20Sites/ltx/app/public/wp-content/themes/duo/front-page.php)
Ao invés de HTML misturado com PHP de forma engessada, as 8 seções da Landing Page passarão a utilizar a função `get_template_part('template-parts/components/nome-do-componente', null, $args)` passando os dados puxados do ACF para dentro dos componentes estáticos convertidos.

## Verification Plan

### Manual Verification
1. Ao carregar a página inicial no LocalWP, o site deverá exibir os estilos exatos catalogados no `assest-library.html`.
2. O código fonte da `front-page.php` estará limpo e modular, focado apenas em extrair dados do ACF e injetá-los nas `template-parts/components/`.
