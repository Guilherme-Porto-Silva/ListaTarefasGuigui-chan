import GetListItem from "./GetListItem.js";

const TaskConclusionEvent = (event) => { GetListItem(event).toggle("done"); }

const TaskConclusionButton = () => {

    const button = document.createElement("button");

    button.classList.add("check-button");

    button.textContent = "concluir";

    button.addEventListener("click", (clique) => {

        clique.preventDefault();
        
        console.log(`A tarefa "${button.parentElement.querySelector("span").textContent}" foi concluída.`);
        
        TaskConclusionEvent(clique);
    });

    return button;
}
    
export default TaskConclusionButton;