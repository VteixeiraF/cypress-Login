# 🚀 Projeto de Teste com Cypress + CI

Um projeto básico para **prática de testes E2E (end-to-end)** utilizando **Cypress**.  
Inclui um **formulário de login simples**, um **servidor Express** para servir os arquivos estáticos e um **workflow CI com GitHub Actions** para executar os testes automaticamente.

---

## 🧩 Estrutura do Projeto

📂 public/ → Arquivos estáticos (HTML, CSS, JS)
📂 cypress/
┣ 📂 e2e/ → Testes E2E (ex: login.cy.js)
┣ 📂 support/ → Arquivos de suporte do Cypress
📂 .github/workflows/ → Configuração do CI (ci.yml)
⚙️ cypress.config.js → Configuração do Cypress
⚙️ server.js → Servidor Express (porta 3000 por padrão)


---

## 🧰 Requisitos

- [Node.js](https://nodejs.org/) **>= 14** (recomendado **Node 18**)
- [npm](https://www.npmjs.com/)

---

## 💻 Instalação (local)

Clone este repositório e instale as dependências:

```bash
npm install


Inicie o servidor local (porta 3000):

npm start
# ou:
node server.js


Em outro terminal, execute o Cypress:

# Modo interativo
npx cypress open

# Modo headless (usado no CI)
npx cypress run


⚙️ O baseUrl está configurado como http://localhost:3000
 em cypress.config.js.

🧪 Cenários de Teste
🔴 Cenário de erro

Preenche o formulário com credenciais inválidas

Verifica se a mensagem de erro é exibida corretamente

✅ Cenário de sucesso

Preenche com usuário admin e senha 1234

Verifica a mensagem de sucesso e o redirecionamento para /home

⚙️ Execução no CI (GitHub Actions)

Este projeto já inclui um workflow pronto em:

.github/workflows/ci.yml


O pipeline realiza as seguintes etapas:

Faz o checkout do código

Instala as dependências (npm ci)

Inicia o servidor local

Executa os testes com npx cypress run --browser electron

Um badge de status pode ser adicionado ao topo deste README para indicar o status do CI.

👥 Contribuindo

Faça um fork do projeto

Crie uma branch para sua alteração:

git checkout -b feature/sua-feature


Execute os testes localmente antes de abrir o PR

Envie um Pull Request para a branch main

🧭 Dicas de Troubleshooting

⚠️ Se o Cypress não encontrar a página, confirme se o servidor está rodando em
http://localhost:3000

🕐 Para falhas no CI (navegador ou timeout), verifique os logs do Actions
e aumente os timeouts no cypress.config.js se necessário.

🔐 Credenciais de Teste
Campo	Valor
Usuário	admin
Senha	1234
