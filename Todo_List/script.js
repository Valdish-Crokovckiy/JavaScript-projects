const form = document.querySelector('#form'),
  input = document.querySelector('#input'),
  todoList = document.querySelector('#todos'),
  todoStor = JSON.parse(localStorage.getItem('todosLocal'))

if (todoStor) {
  todoStor.forEach((item) => addTodo(item))
}

form.addEventListener('submit', (e) => {
  e.preventDefault()
  addTodo()
})

function addTodo(item) {
  let todoText = input.value
  if (item) {
    todoText = item.text
  }

  if (todoText) {
    const todoEl = document.createElement('li')
    if (item && item.complet) {
      todoEl.classList.add('completed')
    }

    todoEl.innerText = todoText
    todoEl.addEventListener('click', () => {
      todoEl.classList.toggle('completed')
      updateLS()
    })

    todoEl.addEventListener('contextmenu', (e) => {
      e.preventDefault()
      todoEl.remove()
      updateLS()
    })

    todoList.appendChild(todoEl)
    input.value = ''
    updateLS()
  }
}

function updateLS() {
  todosEl = document.querySelectorAll('li')

  const todosLS = []
  todosEl.forEach((item) => {
    todosLS.push({
      text: item.innerText,
      complet: item.classList.contains('completed'),
    })
  })

  localStorage.setItem('todosLocal', JSON.stringify(todosLS))
}
