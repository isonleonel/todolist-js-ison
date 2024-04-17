let user_tasks = [
    { task : "Lorem ipsum", completed : false },
    { task : "dolor sit", completed : false },
    { task : "amet consectetur", completed : false },
    { task : "adipisicing elit", completed : false },
    { task : "Doloribus quam dolor", completed : false },
    { task : "temporibus esse repellendus", completed : false },
]

const showTasks = () => {
  let taskListContainer = document.getElementById("taskList");
  taskListContainer.innerHTML = "";

  user_tasks.forEach((task, index) => {
    let card = document.createElement("div");
    card.className = "card mb-3";
    card.innerHTML = `
      <div class="card-body">
        <h5 class="card-title">${task.task}</h5>
        <p class="card-text">${task.completed ? 'Completado' : 'Sin completar'}</p>
      <div>
    `;
    taskListContainer.appendChild(card);
  });
}

document.getElementById("addTaskForm").addEventListener("submit", (event) => {
    event.preventDefault(); 
    
    
    let taskNameInput = document.getElementById("taskName");
    let taskName = taskNameInput.value.trim();
    
    if (taskName !== "") {
      
      user_tasks.push({ task: taskName, completed: false });
      
      
      taskNameInput.value = "";
      
      showTasks();
    } else {
      alert("Por favor, ingrese el nombre de una tarea.");
    }
  });


showTasks();