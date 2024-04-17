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

  user_tasks.forEach((task, index) => {
    let card = document.createElement("div");
    card.className = "card mb-3";
    card.innerHTML = `
      <div class="card-body">
        <h5 class="card-title">${task.task}</h5>
        <p class="card-text">${task.completed ? 'Completed' : 'Incomplete'}</p>
      <div>
    `;
    taskListContainer.appendChild(card);
  });
}

showTasks();