import { todoManagement } from './lib/todoManagement.js'
import {
  showTodoItem,
  showNumberOfDone,
  showNumberOfNotDone
} from './UI/todoList.js'
const { addTodo, getNumberOfDone, getNumberOfNotDone } = todoManagement()

const newId1 = addTodo('shopping')
showTodoItem(newId1, 'shopping')
showNumberOfDone(getNumberOfDone())
showNumberOfNotDone(getNumberOfNotDone())
const newId2 = addTodo('shopping')
showTodoItem(newId2, 'review paper')
showNumberOfDone(getNumberOfDone())
showNumberOfNotDone(getNumberOfNotDone())
