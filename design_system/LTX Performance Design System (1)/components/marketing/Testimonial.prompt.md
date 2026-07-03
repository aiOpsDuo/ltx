# Testimonial

The case-study quote block.

```jsx
<Testimonial
  quote="Sincronizamos a triagem de leads e o atendimento na mesma semana. O tempo de primeiro contato caiu de 4 horas para 7 minutos."
  attribution={{
    name: 'Marina Cardoso',
    role: 'Head de Vendas',
    business: 'Hospital São Lucas',
    city: 'Porto Alegre',
  }}
  outcome={{ value: '34%', label: 'redução de CAC em 8 semanas' }}
/>
```

## Rules
- Quote must be in the client's voice, not the brand's. No "transformou", no "incrível".
- Always include real `business` and `city`. No anonymous testimonials.
- `outcome` must be a number we can defend.
