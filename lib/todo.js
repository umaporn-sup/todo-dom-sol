class Todo {
  static runningId = 1

  static setRunningId(loadingId) {
    Todo.runningId = loadingId
  }

  constructor(description, done = false) {
    this.id = Todo.runningId++
    this.description = description
    this.done = done
  }

  getTodo() {
    return this
  }
  setDescription(newDescription) {
    this.description = newDescription
  }
  setDone(value) {
    this.done = value
  }
}

export { Todo }
