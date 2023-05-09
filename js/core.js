const questions = document.querySelectorAll('.question')

questions.forEach((question) => {
  question.addEventListener('click', () => {
    const answer = question.nextElementSibling
    answer.classList.toggle('show')
  })
})

// Contato
const nome = document.querySelector('#nome')
const assunto = document.querySelector('#assunto')
const email = document.querySelector('#email')
const celular = document.querySelector('#celular')
const descricao = document.querySelector('#descricao')

// RegEx
const nameRegex = /[A-Z][a-z]* [A-Z][a-z]*/
const emailRegex = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g

// error

const SendForm = () => {
  if (!nameRegex.test(nome.value)) {
    document.getElementById('error-nome').style.display = 'block'
    document.getElementById('nome').focus()
  } else {
    document.getElementById('error-nome').style.display = 'none'
    document.getElementById('assunto').focus()
    if (assunto.value === '') {
      document.getElementById('error-assunto').style.display = 'block'
      document.getElementById('assunto').focus()
    } else {
      document.getElementById('error-assunto').style.display = 'none'
      document.getElementById('email').focus()
      if (!emailRegex.test(email.value)) {
        document.getElementById('error-email').style.display = 'block'
        document.getElementById('email').focus()
      } else {
        document.getElementById('error-email').style.display = 'none'
        document.getElementById('celular').focus()
        if (celular.value.length < 8) {
          document.getElementById('error-celular').style.display = 'block'
          document.getElementById('celular').focus()
        } else {
          document.getElementById('error-celular').style.display = 'none'
          document.getElementById('descricao').focus()
          if (descricao.value.length < 15) {
            document.getElementById('error-descricao').style.display = 'block'
            document.getElementById('descricao').focus()
          } else {
            document.getElementById('error-descricao').style.display = 'none'
            window.open(
              `https://wa.me/5551991697961?text=Nome:++${nome.value}%0D%0DE-mail:++${assunto.value}%0D%0DE-mail:++${email.value}%0D%0DCelular:++${celular.value}%0D%0DProjeto:++${descricao.value}`
            )
            window.alert('Enviado com sucesso')
          }
        }
      }
    }
  }
}
