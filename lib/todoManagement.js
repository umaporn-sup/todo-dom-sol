import { Todo } from './todo.js'
function todoManagement() {
  let todos = []
  function addTodo(desc) {
    todos.push(new Todo(desc))
    return todos[todos.length - 1].id
  }
  function clearTodo() {
    todos = []
  }
  function removeTodo(removeId) {
    todos = todos.filter((todo) => todo.id !== removeId)
  }
  function findTodo(searchId) {
    return todos.find((todo) => todo.id === searchId)
  }
  function findIndexTodo(searchId) {
    return todos.findIndex((todo) => todo.id === searchId)
  }
  function getTodos() {
    return todos
  }
  function getNumberOfDone() {
    return todos.filter((todo) => todo.done === true).length
  }
  function getNumberOfNotDone() {
    return todos.filter((todo) => todo.done === false).length
  }

  return {
    addTodo,
    removeTodo,
    findTodo,
    findIndexTodo,
    getTodos,
    getNumberOfDone,
    getNumberOfNotDone,
    clearTodo
  }
}
export { todoManagement }
