import Projects from './projects';

const ToDoList = (() => {
    const listDiv = document.getElementById('list-div');
    const activeList = document.createElement('div');
    activeList.classList.add('MainTaskList');
    //renders task list
    const renderList = (array) => {
        listDiv.innerText = '';
        activeList.innerText = '';
        addToListDiv(array);
        const taskLength = Projects.activeProjects[array].tasks.length;
        for(let i = 0; i < taskLength; i++){
            const activeTaskDiv = document.createElement('div');
            const taskOutput = document.createElement('div');
            const dateOutput = document.createElement('div');
            activeTaskDiv.setAttribute('id', 'active-task-div');
            taskOutput.innerText = Projects.activeProjects[array].tasks[i];
            dateOutput.innerText = Projects.activeProjects[array].date[i];
            activeTaskDiv.appendChild(taskOutput);
            activeTaskDiv.appendChild(dateOutput);
            activeTaskDiv.addEventListener('click', () => {
                deleteTask(array, i);
                renderList(array);
            });
            activeList.appendChild(activeTaskDiv);
            listDiv.appendChild(activeList);
        }
    };
    //add toDo
    const addToList = (i) => {
        const addInput = document.getElementById('new-task-input')
        const dateInput = document.getElementById('task-date-input');
        Projects.activeProjects[i].tasks.push(addInput.value);
        Projects.activeProjects[i].date.push(dateInput.value); 
    }
    //addToList Function
    const addToListDiv = (i) => {
        const addDiv = document.createElement('div');
        const addForm = document.createElement('form');
        const addInput = document.createElement('input');
        const dateInput = document.createElement('input');
        const addButton = document.createElement('div');

        addDiv.setAttribute('id', 'add-task-div');
        addForm.setAttribute('id', 'add-form');

        addInput.setAttribute('placeholder', 'New Task');
        addInput.setAttribute('type', 'text');
        addInput.setAttribute('id', 'new-task-input')

        dateInput.setAttribute('type', 'date');
        dateInput.setAttribute('id', 'task-date-input');

        addButton.setAttribute('id', 'add-task-button');

        addButton.addEventListener('click', () => {
            addToList(i);
            renderList(i);
        });

        addForm.appendChild(addInput);
        addForm.appendChild(dateInput);
        addForm.appendChild(addButton);
        addDiv.appendChild(addForm)
        listDiv.appendChild(addDiv);
    }
    //remove toDo
    const deleteTask = (arrayPosition, taskPosition) => {
        Projects.activeProjects[arrayPosition].tasks.splice(taskPosition, 1);
        Projects.activeProjects[arrayPosition].date.splice(taskPosition, 1);
    };
    return {
        renderList,
        addToList
    }
})();

export default ToDoList;