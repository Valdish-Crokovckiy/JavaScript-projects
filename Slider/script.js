const imgs = document.querySelector('#imgs'),
  imgEl = document.querySelectorAll('#imgs img'),
  leftBtn = document.querySelector('#left'),
  rightBtn = document.querySelector('#right')

let idx = 0,
  paused = false

function showSlides(n) {
  if (n > imgEl.length - 1) idx = 0
  if (n < 0) idx = imgEl.length - 1

  imgs.style.transform = `translateX(${-idx * 500}px)`
}

showSlides(idx)

function plusSlides(n) {
  showSlides((idx += n))
}

leftBtn.addEventListener('click', () => {
  plusSlides(-1)
})
rightBtn.addEventListener('click', () => {
  plusSlides(+1)
})

function activateAnimation() {
  paused = setInterval(function () {
    plusSlides(1)
  }, 1500)
}

function pause() {
  imgEl[0].parentNode.addEventListener('mouseenter', () => {
    clearInterval(paused)
  })
  imgEl[0].parentNode.addEventListener('mouseleave', () => {
    activateAnimation()
  })
  leftBtn.addEventListener('mouseenter', () => {
    clearInterval(paused)
  })
  leftBtn.addEventListener('mouseleave', () => {
    activateAnimation()
  })
  rightBtn.addEventListener('mouseenter', () => {
    clearInterval(paused)
  })
  rightBtn.addEventListener('mouseleave', () => {
    activateAnimation()
  })
}

activateAnimation()
pause()
