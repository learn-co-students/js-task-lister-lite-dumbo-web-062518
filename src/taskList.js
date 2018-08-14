class TaskList {

  constructor(){
    const form = document.getElementById('create-task-form')
    const submitButton = document.getElementById('submit-button')
    let todoId = 0
    submitButton.addEventListener('click', addItemToList)

    function addItemToList(event){
      event.preventDefault()
      const ul = document.getElementById('tasks')
      let description = document.getElementById('new-task-description').value

      if (description === ''){
        alert('please fill out the task description')
      }
      else{
        const li = document.createElement('li')
        const button = document.createElement('button')
        button.innerText = "X"
        button.dataset.id = `${++todoId}`
        button.id = `btn-${todoId}`
        button.addEventListener('click', TaskList.removeItemFromList)
        li.id = `todo-${todoId}`
        li.dataset.id = `${todoId}`
        li.innerText = description + "   "
        // description = ''
        li.append(button)
        ul.append(li)
        // TaskList.clearFields
      }

    }

  }

  static removeItemFromList(e){
    const ulul = document.getElementById('tasks')
    const lili = document.querySelector(`#todo-${e.target.dataset.id}`)
    ulul.removeChild(lili)
  }

  static clearFields(){
    let description = document.getElementById('new-task-description').value
    description = " "
  }


}
