import { deleteTask, completeTask, openEditTaskModal, runTask } from "./editHandlers.js";
import { openPomodorosModal } from "./pomodorosHandlers.js";
import { getTasksList } from "./localStorage.js";

export function renderTaskList() {
    const tasksList = getTasksList();
    const taskListUL = document.getElementById("taskList");
    taskListUL.innerHTML = "";
    for (let task of tasksList) {
        let newImg = document.createElement("img");
        let newLI = document.createElement("li");
        newLI.id = task.id;
        switch (task.state) {
            case "doing":
                newImg.src = "./images/doing.png";
                newImg.alt = "Un reloj en un círculo de colores que indica que la tarea se está realizando";
                newImg.title = "Tarea en proceso";
                newLI.classList.add("justify-center","gap-3", "flex", "flex-row", "bg-purple-800", "p-1", "rounded-lg", "border-2", "border-purple-500", "text-lime-200", "w-full", "mb-2");
                break;
            case "pending":
                newImg.src = "./images/pending.png";
                newImg.alt = "Un blanco de objetivo que indica que la tarea está pendiente";
                newImg.title = "Tarea pendiente";
                newLI.classList.add("justify-center","gap-3", "flex", "flex-row", "bg-yellow-800", "p-1", "rounded-lg", "border-2", "border-yellow-500", "text-lime-200", "w-full", "mb-2");
                break;
            case "completed":
                newImg.src = "./images/complete.png";
                newImg.alt = "Fuegos artificiales que indican que la tarea ha sido completada";
                newImg.title = "Tarea completada";
                newLI.classList.add("justify-center", "gap-3", "flex", "flex-row", "bg-lime-800", "p-1", "rounded-lg", "border-2", "border-lime-500", "text-lime-200", "w-full", "mb-2");
                break;
            default:
                break;
        }
        newImg.classList.add("w-6", "h-6", "self-center");
        newLI.appendChild(newImg);
        task.pomodoros.length > 0 && newLI.appendChild(createPomodoroImg(task.id));
        newLI.appendChild(document.createTextNode(`${task.title}: ${task.description}`));
        newLI.appendChild(createEditImg(task.id));
        newLI.appendChild(createDeleteImg(task.id));
        task.state === "pending" && newLI.appendChild(createDoingImg(task.id));
        (task.state === "pending" || task.state === "doing") && newLI.appendChild(createSetCompleteImg(task.id));
        taskListUL.appendChild(newLI);
    }
}

function createPomodoroImg(taskId) {
    const pomImg = document.createElement("img");
    pomImg.src = "./images/pomodoro.png";
    pomImg.classList.add("w-6", "h-6", "self-center");
    pomImg.alt = "Un cronómetro que indica que la tarea tiene pomodoros";
    pomImg.title = "La tarea contiene pomodoros";
    pomImg.addEventListener("click", () => openPomodorosModal(taskId));
    return pomImg;
}

function createEditImg(taskId) {
    const editImg = document.createElement("img");
    editImg.src = "./images/edit.png";
    editImg.classList.add("w-6", "h-6", "self-center");
    editImg.alt = "Un icono de editar";
    editImg.title = "Editar tarea";
    editImg.addEventListener("click", () => openEditTaskModal(taskId));
    return editImg;
}

function createDeleteImg(taskId) {
    const deleteImg = document.createElement("img");
    deleteImg.src = "./images/delete.png";
    deleteImg.classList.add("w-6", "h-6", "self-center");
    deleteImg.alt = "Un icono de borrar";
    deleteImg.title = "Eliminar tarea";
    deleteImg.addEventListener("click", () => deleteTask(taskId));
    return deleteImg;
}

function createDoingImg(taskId) {
    const doingImg = document.createElement("img");
    doingImg.src = "./images/go.png";
    doingImg.classList.add("w-6", "h-6", "self-center");
    doingImg.alt = "Un reloj en un círculo de colores que indica que la tarea se está realizando";
    doingImg.title = "Ejecutar tarea";
    doingImg.addEventListener("click", () => runTask(taskId));
    return doingImg;
}

function createSetCompleteImg(taskId) {
    const setCompleteImg = document.createElement("img");
    setCompleteImg.src = "./images/setComplete.png";
    setCompleteImg.classList.add("w-6", "h-6", "self-center");
    setCompleteImg.alt = "Fuegos artificiales que indican que la tarea ha sido completada";
    setCompleteImg.title = "Completar tarea";
    setCompleteImg.addEventListener("click", () => completeTask(taskId));
    return setCompleteImg;
}
