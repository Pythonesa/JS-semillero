import { getTasksList, saveTasksList } from "./localStorage.js";
import { Task } from "./Task.js";
import { Pomodoro } from "./Pomodoro.js";

export function showHidePomodorosDiv() {
    const checkbox = document.getElementById("includesPomodoros");
    const pomodorosDiv = document.getElementById("pomodorosDiv");
    
    if (checkbox.checked) {
        pomodorosDiv.style.display = "flex";
    } else {
        pomodorosDiv.style.display = "none";
    }
}

export function openAddTaskModal() {
    const modal = document.getElementById("modalAddTask");
    modal.showModal();
}

export function cancelAddTaskModal() {
    const modal = document.getElementById("modalAddTask");
    clearModalForm();
    modal.close();
}

export function saveNewTask() {
    const tasks = getTasksList();
    const newTitle = document.getElementById("title").value;
    const newDescription = document.getElementById("description").value;
    const newState = document.getElementById("state").value;
    if (newTitle.trim() && newDescription.trim()) {
        const includesPomodoros = document.getElementById("includesPomodoros").checked;
        const pomList = [];
        if (includesPomodoros) {
            const pomNumber = document.getElementById("pomodoros");
            const pomFocus = document.getElementById("pomodoroDuration");
            const pomInterval = document.getElementById("pomodoroInterval");
            for (let i = 0; i < pomNumber.value; i++) {
                pomList.push(new Pomodoro(pomFocus.value, pomInterval.value));
            }
        }
        const task = new Task(newTitle, newDescription, newState, null, null, null, pomList);
        tasks.push(task);
        saveTasksList(tasks);
        setTimeout(cancelAddTaskModal, 100);
    }
}

function clearModalForm() {
    document.getElementById("title").value = "";
    document.getElementById("description").value = "";
    document.getElementById("state").value = "pending";
    document.getElementById("pomodoros").value = "4";
    document.getElementById("pomodoroDuration").value = "25";
    document.getElementById("pomodoroInterval").value = "5";
}