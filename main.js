var button = document.getElementById('button')
var input = document.getElementById('input')
var tasksList = document.getElementById('task-list')
var xButtons = document.getElementById('xButton')

function createTask(task) {
  var taskBody  = document.createElement('li')  // Creating a list item (body of our task)
  var taskText = document.createElement('p')
  var doneButton = document.createElement('button')

  taskText.textContent = task
  doneButton.textContent = 'DONE!'
  doneButton.id = 'xButton'

  tasksList.appendChild(taskBody)
  taskBody.appendChild(taskText)
  taskBody.appendChild(doneButton)

  taskBody.style.border = '1px solid black'
  taskBody.style.marginTop = '10px'

  doneButton.addEventListener('click', () => {
    doneButton.parentElement.remove()
  })

  input.value = ''
}


button.addEventListener('click', () => {
  if (input.value) createTask(input.value)
  else incorrectInput()
})
