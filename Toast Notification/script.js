const button = document.querySelector('#button'),
  toasts = document.querySelector('#toasts')

const messages = ['Messege One', 'Messege Two', 'Messege Three', 'Messege Four']

const types = ['info', 'success', 'error']

button.addEventListener('click', () => createNotification())

function createNotification() {
  const notify = document.createElement('div')
  notify.classList.add('toast')
  notify.classList.add(getRandomType())
  toasts.appendChild(notify)

  notify.innerHTML = getRandomMessege()

  function getRandomMessege() {
    return messages[Math.floor(Math.random() * messages.length)]
  }
  function getRandomType() {
    return types[Math.floor(Math.random() * types.length)]
  }

  setTimeout(() => {
    notify.remove()
  }, 3000)
}
