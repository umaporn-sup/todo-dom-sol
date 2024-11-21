function showTodoItem(newId, newDescription) {
  const listTodoDiv = document.getElementById('listTodo')
  //create new <div>
  const newTodoDiv = document.createElement('div')
  newTodoDiv.className = 'todoItem'
  newTodoDiv.setAttribute('id', newId)

  //create new <p>
  const newTodoItem = document.createElement('p')
  newTodoItem.textContent = newDescription
  newTodoDiv.appendChild(newTodoItem)

  //create done button
  const doneButton = document.createElement('button')
  doneButton.textContent = 'Not Done'
  newTodoDiv.appendChild(doneButton)

  //create remove button
  const removeButton = document.createElement('button')
  removeButton.textContent = 'remove'
  newTodoDiv.appendChild(removeButton)

  listTodoDiv.appendChild(newTodoDiv)
}
function showNumberOfDone(numberOfDone) {
  const doneP = document.getElementById('done')
  doneP.textContent = `Number of Done:${numberOfDone}`
}
function showNumberOfNotDone(numberOfNotDone) {
  const notDoneP = document.getElementById('notDone')
  notDoneP.textContent = `Number of Not Done:${numberOfNotDone}`
}

export { showTodoItem, showNumberOfDone, showNumberOfNotDone }
