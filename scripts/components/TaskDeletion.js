import GetListItem from "./GetListItem.js";

const TaskDeletionEvent = (event) => { GetListItem(event).remove(); }

const TaskDeletionButton = () => {

    const button = document.createElement("button");

    button.classList.add("delete-button");

    button.textContent = "apagar";

    button.addEventListener("click", (clique) => {

        clique.preventDefault();
        
        console.log(`Apaguei a tarefa "${button.parentElement.querySelector("span").textContent}"`);

        TaskDeletionEvent(clique);
    });

    return button;
}
    
export default TaskDeletionButton;