# Instructions for Claude

## Skills obrigatórias para React e TypeScript

Este projeto tem duas skills dedicadas em `.claude/skills/`:

- `react-expert` — componentes, hooks, state management, performance, Server Components (`.claude/skills/react-expert/SKILL.md`)
- `typescript-pro` — tipos avançados, generics, type guards, tsconfig (`.claude/skills/typescript-pro/SKILL.md`)

**Sempre que for criar ou alterar código React (`.tsx`, `.jsx`) invoque a skill `react-expert` antes de editar.**
**Sempre que for criar ou alterar código TypeScript (`.ts`, `.tsx`) invoque a skill `typescript-pro` antes de editar.**

Para arquivos `.tsx`, invoque as duas skills (o arquivo é React e TypeScript ao mesmo tempo).

Isso vale para qualquer alteração — bugfix, refactor, nova feature ou componente — não só para trabalho "do zero".
