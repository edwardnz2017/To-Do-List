import Projects from './modules/projects';
import ToDoList from './modules/toDoList';

//Adds new project and renders the project array
const projectNameInput = document.getElementById('new-project-input');
const addProjectButton = document.getElementById('new-project-button');
addProjectButton.addEventListener('click', () => {
    const newProject = Projects.projectFactory(projectNameInput.value);
    Projects.activeProjects.push(newProject);
    Projects.renderProjects();
});