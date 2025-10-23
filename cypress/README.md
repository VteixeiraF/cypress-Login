# Projeto de Teste com Cypress

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

1. Inicie o servidor:
```bash
node server.js
```

2. Em outro terminal, execute os testes do Cypress:

Para abrir o Cypress Test Runner:
```bash
npx cypress open
```

Para executar os testes em modo headless:
```bash
npx cypress run
```

## Credenciais de Teste

- Usuário válido: `admin`
- Senha válida: `1234`