# Agnostic Component Library

Uma biblioteca de componentes de interface de usuário (UI) moderna, agnóstica de framework e focada em performance e consistência visual. 

Baseada na metodologia **Atomic Design**, esta biblioteca fornece desde elementos básicos (átomos) até seções complexas (organismos), utilizando apenas **HTML**, **CSS Vanilla** e **JavaScript Vanilla**.

## 🚀 Principais Características

- **Framework Agnostic:** Pode ser usada com React, Vue, Angular, Svelte, ou apenas HTML/JS puro.
- **Design Tokens:** Facilmente customizável através de variáveis CSS centrais.
- **Responsiva:** Componentes adaptáveis a qualquer tamanho de tela.
- **Premium Design:** Foco em estética moderna (glassmorphism, micro-interações, tipografia fluida).
- **Sem Dependências:** Construída do zero, sem bibliotecas externas pesadas (como Tailwind ou Bootstrap).

## 📁 Estrutura do Projeto

O projeto segue a arquitetura de **Atomic Design**:

```
components-library/
├── tokens/
│   └── _theme.css          # Design Tokens (Cores, Tipografia, Espaçamentos, etc.)
├── utilities/
│   └── _layout.css         # Classes utilitárias (flexbox, margens, containers)
├── components/
│   ├── atoms/              # Elementos indivisíveis (Botões, Inputs, Badges, Tipografia)
│   ├── molecules/          # Composições simples (Cards, Alerts, Form Groups)
│   └── organisms/          # Seções complexas (Header, Footer, Hero, Pricing Table)
└── main.css                # Arquivo principal que importa todos os estilos
```

## 🛠️ Como usar em Projetos Futuros

A principal vantagem desta biblioteca é ser "plug-and-play". Você pode adotar a biblioteca inteira ou apenas os componentes que precisar.

### Opção 1: Uso Completo (Recomendado)

1. Copie as pastas `tokens`, `utilities` e `components` para o seu projeto.
2. Copie o arquivo `main.css`.
3. No arquivo principal de estilos ou no `<head>` do seu HTML, importe o `main.css`:

```html
<link rel="stylesheet" href="caminho/para/main.css">
```

4. Use as classes HTML conforme a documentação (veja o arquivo `index.html` para exemplos práticos de cada componente).

### Opção 2: Uso Modular (Componentes Específicos)

Se quiser apenas componentes específicos (ex: apenas Botões e Cards):

1. Copie a pasta `tokens` (obrigatório, pois contém as variáveis de design).
2. Copie a pasta `utilities` (obrigatório para o layout e responsividade).
3. Copie apenas os arquivos `.css` desejados das pastas `atoms`, `molecules` ou `organisms`.
4. Importe-os no seu CSS principal:

```css
/* Obrigatórios */
@import url('tokens/_theme.css');
@import url('utilities/_layout.css');

/* Componentes Selecionados */
@import url('components/atoms/button.css');
@import url('components/molecules/card.css');
```

### Inicializando Scripts (Organismos Interativos)

Alguns componentes complexos (como o Header com menu mobile) possuem comportamentos JavaScript.
Certifique-se de importar os scripts correspondentes no final do `<body>` do seu HTML:

```html
<script src="caminho/para/components/organisms/menu.js"></script>
```

## 🎨 Como Customizar (Design Tokens)

Toda a identidade visual da biblioteca é controlada pelo arquivo `tokens/_theme.css`. 
Para alterar o tema do seu projeto, você não precisa editar os componentes individuais, basta alterar as variáveis CSS.

Abra o arquivo `tokens/_theme.css` e modifique:

- `--color-brand-primary`: Altera a cor principal da marca.
- `--font-family-base` e `--font-family-heading`: Altera as fontes utilizadas.
- `--radius-md` e `--radius-lg`: Altera o arredondamento dos cantos dos componentes.
- `--breakpoint-md` e `--breakpoint-lg`: Ajusta os pontos de quebra para dispositivos móveis e tablets.

## 📱 Suporte a Telas e Breakpoints

A biblioteca utiliza uma abordagem *Mobile First*. As media queries são definidas usando as variáveis de breakpoint (atualmente literais de pixels dentro do CSS por limitações nativas, mas controláveis centralmente pelo design system):

- `sm`: 640px
- `md`: 768px (Tablet)
- `lg`: 1024px (Desktop)
- `xl`: 1280px

## 🧪 Visualizando o Catálogo (Showcase)

Para visualizar todos os componentes funcionando, basta abrir o arquivo `index.html` em qualquer navegador moderno. Ele serve como um catálogo vivo da biblioteca.
# biblioteca-componentes
