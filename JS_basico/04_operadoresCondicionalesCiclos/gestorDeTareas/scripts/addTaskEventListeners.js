import { showHidePomodorosDiv, openAddTaskModal, cancelAddTaskModal, saveNewTask } from "./addTaskHandlers.js";
import { cancelEditTaskModal, showHideEditPomodorosDiv, editTask } from "./editHandlers.js";
import { cancelPomodorosModal } from "./pomodorosHandlers.js";

export function addTaskEventListeners() {
    document.getElementById("includesPomodoros").addEventListener("change", showHidePomodorosDiv);
    document.getElementById("addTaskButton").addEventListener("click", openAddTaskModal);
    document.getElementById("addTaskSubmitButton").addEventListener("click", saveNewTask);
    document.getElementById("addTaskCancelButton").addEventListener("click", cancelAddTaskModal);
    document.getElementById("editTaskCancelButton").addEventListener("click", cancelEditTaskModal);
    document.getElementById("editIncludesPomodoros").addEventListener("change", showHideEditPomodorosDiv);
    document.getElementById("editTaskSubmitButton").addEventListener("click", editTask);
    document.getElementById("pomodorosModalClose").addEventListener("click", cancelPomodorosModal);
}