import { addTaskEventListeners } from "./addTaskEventListeners.js";
import { renderTaskList } from "./taskListHandlers.js";


window.addEventListener('DOMContentLoaded', () => {
    addTaskEventListeners();
    renderTaskList();
});