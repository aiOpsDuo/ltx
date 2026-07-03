# Input

Labeled form field on the dark canvas.

```jsx
<Input
  label="E-mail corporativo"
  type="email"
  placeholder="voce@empresa.com.br"
  hint="Resposta em até 24h por um sócio."
  required
/>
```

## Rules
- Always provide `label`. Placeholders are hints only.
- Set `error` for validation failure — recolors border and replaces hint.
- For multi-line, pass `as="textarea"` (and optionally `rows`).
- Never `rounded="full"` an input.
