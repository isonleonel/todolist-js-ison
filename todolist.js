let user_tasks = [
    { task : "Lorem ipsum", completed : false },
    { task : "dolor sit", completed : false },
    { task : "amet consectetur", completed : false },
    { task : "adipisicing elit", completed : false },
    { task : "Doloribus quam dolor", completed : false },
    { task : "temporibus esse repellendus", completed : false },
]

// Event listener para el dropdown
const addDropdownListeners = () => {
  document.getElementById("allTasks").addEventListener("click", showAllTasks);
  document.getElementById("completedTasks").addEventListener("click", showCompletedTasks);
  document.getElementById("incompleteTasks").addEventListener("click", showIncompleteTasks);
}

// Event listener para el boton de borrar tarea
const addCloseButtonListeners = () => {
  const closeButtons = document.querySelectorAll('.close-button');
  closeButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
      deleteTask(index);
    });
  });
}

// Funcion para mostrar todas las tareas
const showAllTasks = () => {
  showTasks(user_tasks);
}

// Funcion para ver solo las tareas completadas
const showCompletedTasks = () => {
  const completedTasks = user_tasks.filter(task => task.completed);
  showTasks(completedTasks);
}

// Funcion para ver las tareas incompletas
const showIncompleteTasks = () => {
  const incompleteTasks = user_tasks.filter(task => !task.completed);
  showTasks(incompleteTasks);
}

// Funcion para eliminar una tarea
const deleteTask = (index) => {
  user_tasks.splice(index, 1); 
  showTasks(user_tasks); 
}

// Renderizar las tareas
const showTasks = (tasks) => {
  let taskListContainer = document.getElementById("taskList");
  taskListContainer.innerHTML = "";

  tasks.forEach((task, index) => {
    let card = document.createElement("div");
    card.className = "col-md-4";
    card.innerHTML = `
    <div class="card mb-3">
      <div class="card-body">
        <h5 class="card-title">${task.task}</h5>
        <p class="card-text">
          <button type="button" class="btn ${
            task.completed ? 'btn-success' : 'btn-danger'
          }" onclick="toggleTaskState(${index})">${
            task.completed ? 'Completada' : 'Sin completar'
          }</button>
        </p>
        <button type="button" class="btn-close close-button" aria-label="Close"></button>
      </div>
    </div>
    `;
    taskListContainer.appendChild(card);
  });

  addCloseButtonListeners();
  addDropdownListeners();
  
}

// Cambiar el estado del boton
const toggleTaskState = (index) => {
    user_tasks[index].completed = !user_tasks[index].completed;
    showTasks(user_tasks);
  }

// Agregar tarea
document.getElementById("addTaskForm").addEventListener("submit", (event) => {
    event.preventDefault(); 

    let taskNameInput = document.getElementById("taskName");
    let taskName = taskNameInput.value.trim();
    
    if (taskName !== "") {

      user_tasks.push({ task: taskName, completed: false });
      taskNameInput.value = "";
      showTasks(user_tasks);

    } else {
      alert("Por favor, ingrese el nombre de una tarea.");
    }
});


showTasks(user_tasks);