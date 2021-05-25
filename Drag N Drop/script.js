const fill = document.querySelector('.fill'),
  empties = document.querySelectorAll('.empty')

fill.addEventListener('dragstart', dragStart)
fill.addEventListener('dragend', dragEnd)

empties.forEach((item) => {
  item.addEventListener('dragover', dragOver)
  item.addEventListener('dragenter', dragEnter)
  item.addEventListener('dragleave', dragLeave)
  item.addEventListener('drop', dragDrop)
})

function dragStart() {
  this.className += ' hold'
  setTimeout(() => (this.className = 'invisible'), 0)
}
function dragEnd() {
  this.className = 'fill'
}
function dragOver(e) {
  e.preventDefault()
}

function dragEnter(e) {
  e.preventDefault()
  this.className += ' hovered'
}
function dragLeave() {
  this.className = 'empty'
}

function dragDrop() {
  this.className = 'empty'
  this.append(fill)
}
