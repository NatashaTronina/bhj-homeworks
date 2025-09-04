document.addEventListener("DOMContentLoaded", function() {
    const taskInput = document.getElementById('task__input');
    const tasksForm = document.getElementById('tasks__form'); 
    const tasksList = document.getElementById('tasks__list'); 


    function createTask(element){

    // tasksList.insertAdjacentHTML('afterbegin', "
    // <div class="task">
    //   <div class="task__title">
    //     ${title}
    //   </div>
    //   <a href="#" class="task__remove">&times;</a>
    // </div>");

        const task = document.createElement('div');
        task.classList.add('task');

        const taskTitle = document.createElement('div');
        taskTitle.classList.add('task__title');
        
        taskTitle.textContent = element;


        const taskRemove = document.createElement('a');
        taskRemove.classList.add('task__remove');

        taskRemove.href = "#";
        taskRemove.innerHTML = "&times;"

        taskRemove.addEventListener("click", (event) => {
            event.preventDefault(); 
            task.remove();
        })
        task.appendChild(taskTitle);
        task.appendChild(taskRemove);

        return task;
    }

    function addTask(){
        const text = taskInput.value.trim();

        if(text != ""){
            const newTask = createTask(text);
            tasksList.appendChild(newTask);
            taskInput.value = ''
        }
    }

    // const addBtn = document.getElementById('tasks__add');
    // addBtn.addEventListener('click', (event) => {
    //     event.preventDefault();
    //     addTask();
    // });

    tasksForm.addEventListener('submit', (event) => {
        event.preventDefault();
        addTask();
    })

});