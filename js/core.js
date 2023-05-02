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
