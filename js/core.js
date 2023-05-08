const carouselItems = document.querySelectorAll('.carousel-item')
let currentIndex = 0

function changeSlide() {
  // oculta o slide atual
  carouselItems[currentIndex].classList.remove('active')

  // incrementa o índice do slide atual
  currentIndex++

  // verifica se o índice é maior do que o número de slides
  if (currentIndex >= carouselItems.length) {
    currentIndex = 0
  }

  // exibe o próximo slide
  carouselItems[currentIndex].classList.add('active')
}

// exibe o primeiro slide
carouselItems[currentIndex].classList.add('active')

// alterna os slides a cada 5 segundos
setInterval(changeSlide, 5000)

const questions = document.querySelectorAll('.question')

questions.forEach((question) => {
  question.addEventListener('click', () => {
    const answer = question.nextElementSibling
    answer.classList.toggle('show')
  })
})

// Contato
var nome = document.querySelector('#nome')
var assunto = document.querySelector('#assunto')
var email = document.querySelector('#email')
var celular = document.querySelector('#celular')
var descricao = document.querySelector('#descricao')

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
