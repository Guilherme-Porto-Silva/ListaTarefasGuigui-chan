import TaskConclusionButton from "./TaskConclusion.js";

import TaskDeletionButton from "./TaskDeletion.js";

const taskInput = document.querySelector("[data-form-input]");

const tasksList = document.querySelector("[data-tasks-list]");

const TaskCreationButton = () => {

    document.querySelector("[data-form-button]").addEventListener("click", () => {
        
        tasksList.appendChild(CreateTask());
    });
}

const CreateTask = () => {

    const newTask = document.createElement("li");

    newTask.classList.add("task");

    const content = document.createElement("span");

    content.classList.add("content");

    content.textContent = taskInput.value;

    newTask.appendChild(content);

    newTask.appendChild(TaskConclusionButton());
    
    newTask.appendChild(TaskDeletionButton());

    taskInput.value = "";

    return newTask;
}

export default TaskCreationButton;