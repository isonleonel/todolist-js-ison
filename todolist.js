let user_tasks = [
    { task : "Lorem ipsum", completed : false },
    { task : "dolor sit", completed : false },
    { task : "amet consectetur", completed : false },
    { task : "adipisicing elit", completed : false },
    { task : "Doloribus quam dolor", completed : false },
    { task : "temporibus esse repellendus", completed : false },
]

// Funcion para recuperar las tareas del localStorage
const getTasksFromLocalStorage = () => {
  const storedTasks = localStorage.getItem('user_tasks');
  return storedTasks ? JSON.parse(storedTasks) : [];
}

// Funcion para guardar las tareas en el localStorage
const saveTasksToLocalStorage = (tasks) => {
  localStorage.setItem('user_tasks', JSON.stringify(tasks));
}

// Agregar tareas al array y actualizar el localStorage
const addTask = (taskName) => {
  const tasks = getTasksFromLocalStorage();
  tasks.push({ task: taskName, completed: false });
  saveTasksToLocalStorage(tasks);
  showTasks(tasks);
};

// Funcion para eliminar una tarea y actualizar el localStorage
const deleteTask = (index) => {
  const tasks = getTasksFromLocalStorage();
  tasks.splice(index, 1);
  saveTasksToLocalStorage(tasks);
  showTasks(tasks);
};

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
  const tasks = getTasksFromLocalStorage();
  showTasks(tasks);
};

// Funcion para ver solo las tareas completadas
const showCompletedTasks = () => {
  const tasks = getTasksFromLocalStorage().filter(task => task.completed);
  showTasks(tasks);
};

// Funcion para ver las tareas incompletas
const showIncompleteTasks = () => {
  const tasks = getTasksFromLocalStorage().filter(task => !task.completed);
  showTasks(tasks);
};

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

// Cambiar el estado del boton y actualiza el localStorage
const toggleTaskState = (index) => {
  const tasks = getTasksFromLocalStorage();
  tasks[index].completed = !tasks[index].completed;
  saveTasksToLocalStorage(tasks);
  showTasks(tasks);
};

// Event listener para agregar la tarea
document.getElementById("addTaskForm").addEventListener("submit", (event) => {
    event.preventDefault(); 

    let taskNameInput = document.getElementById("taskName");
    let taskName = taskNameInput.value.trim();
    
    if (taskName !== "") {
      addTask(taskName);
      taskNameInput.value = "";
  } else {
      alert("Por favor, ingrese el nombre de una tarea.");
  }
});


showAllTasks();