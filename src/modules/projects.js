import ToDoList from './toDoList';

const Projects = (() => {
    let activeProjects = [];

    const activeProjectsDiv = document.getElementById("active-projects");

    const projectFactory = (title) => {
        let tasks = [];
        let date = [];
        return {title, tasks, date};
    };
    
    const renderProjects = () => {
        activeProjectsDiv.innerText = '';
        for(let i = 0; i < activeProjects.length; i++) {
            let listItem = document.createElement('div');
            let itemName = document.createElement('p');
            let deleteButton = document.createElement('div')
            listItem.setAttribute('id', 'activeList');
            listItem.classList.add(`${i}`);
            deleteButton.setAttribute('id', `${i}`);
            deleteButton.classList.add('delete-button');
            deleteButton.innerText = 'Delete';
            itemName.innerHTML = activeProjects[i].title;
            listItem.appendChild(itemName);
            listItem.appendChild(deleteButton);
            activeProjectsDiv.appendChild(listItem);
            deleteProject();
            addEvent();
        }
    };

    const deleteProject = () => {
        const deleteButton = document.querySelectorAll('.delete-button');
        deleteButton.forEach((button) => {
            if (button.classList.contains("eventOn")) {
                return;
            };
            button.classList.add("eventOn");
            button.addEventListener('click', (e) => {
                activeProjects.splice(e.srcElement.id, 1);
                renderProjects();
            })
        });
    };  

    const addEvent = () => {
        const projectDiv = document.querySelectorAll('#activeList');
        projectDiv.forEach((div) => {
            if (div.classList.contains("displayEvent")) {
                return;
            };
            div.classList.add("displayEvent");
            div.addEventListener('click', (e) => {
                ToDoList.renderList(e.srcElement.classList[0]);
            });
        })
    };

    return {
        projectFactory,
        renderProjects,
        activeProjects,
    };
})();

export default Projects;