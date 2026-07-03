# Nav

Sticky top bar on the marketing site. Background fades to a translucent black after 12px of scroll.

```jsx
<Nav
  basePath="../.."
  links={[
    { label: 'Metodologia', href: '#metodo' },
    { label: 'Clientes',    href: '#clientes' },
    { label: 'Preços',      href: '#precos' },
  ]}
  cta={{ label: 'Falar com consultor', href: '#contato' }}
/>
```

Keep nav copy nominal (`Metodologia`, `Clientes`) — never imperative ("Get started"). CTA is always a Button primary, never `secondary` in a row.
