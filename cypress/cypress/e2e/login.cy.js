describe('Login Form', () => {
  beforeEach(() => {
    // Visita a página antes de cada teste
    cy.visit('http://localhost:3000')
  })

  it('deve exibir mensagem de erro com credenciais inválidas', () => {
    // Preenche o formulário com dados inválidos
    cy.get('#username').type('usuario_invalido')
    cy.get('#password').type('senha_invalida')
    
    // Clica no botão de login
    cy.get('#loginButton').click()
    
    // Verifica se a mensagem de erro aparece
    cy.get('#feedback')
      .should('be.visible')
      .and('have.text', 'Usuário ou senha incorretos.')
  })

  it('deve fazer login com sucesso usando credenciais válidas', () => {
    // Preenche o formulário com dados válidos
    cy.get('#username').type('admin')
    cy.get('#password').type('1234')
    
    // Clica no botão de login
    cy.get('#loginButton').click()
    
    // Verifica se a mensagem de sucesso aparece
    cy.get('#feedback')
      .should('be.visible')
      .and('have.text', 'Login bem-sucedido!')
      
    // Aguarda o redirecionamento (se implementado)
    cy.url({ timeout: 10000 }).should('include', '/home')
  })
})