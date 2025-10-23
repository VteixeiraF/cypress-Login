document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('loginForm')
  const feedback = document.getElementById('feedback')

  form.addEventListener('submit', (e) => {
    e.preventDefault()
    const username = document.getElementById('username').value.trim()
    const password = document.getElementById('password').value.trim()

    if (username === 'admin' && password === '1234') {
      feedback.textContent = 'Login bem-sucedido!'
      feedback.className = 'success'
      // pequeno atraso para o usuário ver a mensagem antes do redirecionamento
      setTimeout(() => {
        window.location.href = '/home'
      }, 1000)
    } else {
      feedback.textContent = 'Usuário ou senha incorretos.'
      feedback.className = 'error'
    }
  })
})
