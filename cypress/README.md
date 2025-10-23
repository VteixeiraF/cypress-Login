# Projeto de Teste com Cypress

![CI](https://github.com/VteixeiraF/cypress-examples/actions/workflows/ci.yml/badge.svg)

Este é um projeto básico para prática de testes E2E usando Cypress. Ele inclui um formulário de login simples com testes automatizados.

## Requisitos

- Node.js (versão 14 ou superior)
- NPM (Node Package Manager)

## Instalação

1. Clone este repositório
2. Instale as dependências:
```bash
npm install
```

## Estrutura do Projeto

- `/public` - Arquivos estáticos (HTML, CSS, JavaScript)
- `/cypress` - Arquivos de teste do Cypress
  - `/e2e` - Testes end-to-end
  - `/support` - Arquivos de suporte do Cypress
- `server.js` - Servidor Express
- `cypress.config.js` - Configuração do Cypress

## Como Executar

# Projeto de Teste com Cypress

![CI](https://github.com/VteixeiraF/cypress-examples/actions/workflows/ci.yml/badge.svg)

Um projeto mínimo para praticar testes E2E com Cypress. Contém uma página de login simples, um servidor Express para servir os arquivos estáticos e um conjunto de testes que verificam cenários de sucesso e erro no formulário de login.

## Conteúdo principal

- `public/` - arquivos estáticos (HTML, CSS, JS)
- `server.js` - servidor Express simples (porta 3000 por padrão)
- `cypress/e2e/login.cy.js` - testes E2E do Cypress
- `cypress.config.js` - configuração do Cypress
- `.github/workflows/ci.yml` - workflow do GitHub Actions que executa os testes

## Requisitos

- Node.js >= 14 (recomendo Node 18)
- npm

## Instalação (local)

1. Instale as dependências:

```powershell
npm install
```

2. Inicie o servidor (porta 3000):

```powershell
npm start
# ou: node server.js
```

3. Em outro terminal, abra o Cypress (UI) ou rode em modo headless:

```powershell
npx cypress open    # executar interativamente
npx cypress run     # executar headless (CI)
```

Observação: o `baseUrl` do Cypress está configurado para `http://localhost:3000` no `cypress.config.js`.

## Como os testes funcionam

- Cenário de erro: preenche com credenciais inválidas e verifica a mensagem de erro.
- Cenário de sucesso: preenche com `admin` / `1234`, verifica mensagem de sucesso e redirecionamento para `/home`.

## Executando no CI (GitHub Actions)

O repositório já inclui um workflow em `.github/workflows/ci.yml` que:

1. Faz checkout do código
2. Instala dependências (npm ci)
3. Inicia o servidor
4. Executa `npx cypress run --browser electron`

O badge no topo do README aponta para o status desse workflow.

## Contribuindo

- Faça um fork e crie uma branch com a sua feature/bugfix
- Execute os testes localmente antes de abrir PR
- Abra um Pull Request para `main`

## Dicas de troubleshooting

- Se o Cypress não encontrar a página, confirme se o servidor está rodando em `http://localhost:3000`.
- Para problemas com navegador no CI, verifique os logs do Actions e aumente timeouts no `cypress.config.js` se necessário.

## Credenciais de teste

- Usuário: `admin`
- Senha: `1234`

---

Se quiser que eu adicione badges adicionais, workflows (por exemplo: múltiplos navegadores) ou publique relatórios/snapshots como artefatos no CI, me avise.