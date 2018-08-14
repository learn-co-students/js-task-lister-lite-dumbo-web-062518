document.addEventListener("DOMContentLoaded", () => {

  const form = document.getElementById('create-task-form')
  const newTaskDescription = document.getElementById('new-task-description')
  const taskList = new TaskList();

  const taskUl = document.getElementById("tasks")

  const renderApp = () => (taskUl.innerHTML = taskList.renderTasks());

  form.addEventListener("submit", (e) => {
    e.preventDefault()
    taskList.createNewTask(newTaskDescription.value)
    renderApp()
  })

  taskUl.addEventListener("click", (e) => {
    if (e.target.nodeName === "BUTTON") {
      taskList.deleteTask(e.target.dataset.description);
      renderApp();
    }
  })

})
