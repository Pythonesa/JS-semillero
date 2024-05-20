import { getTasksList, saveTasksList } from "./localStorage.js";
import { renderTaskList } from "./taskListHandlers.js";

export function deleteTask(id) {
    const tasksList = getTasksList();
    const newTasksList = tasksList.filter(task => task.id !== id);
    saveTasksList(newTasksList);
    renderTaskList();
}

export function completeTask(id) {
    const tasksList = getTasksList();
    const newTasksList = tasksList.map(task => {
        if (task.id === id) {
            task.state = "completed";
        }
        return task;
    });
    saveTasksList(newTasksList);
    renderTaskList();
}

export function runTask(id) {
    const tasksList = getTasksList();
    const newTasksList = tasksList.map(task => {
        if (task.id === id) {
            task.state = "doing";
        }
        return task;
    });
    saveTasksList(newTasksList);
    renderTaskList();
}

export function openEditTaskModal(id) {
    const modal = document.getElementById("modalEditTask");
    modal.showModal();
    const task = getTasksList().find(task => task.id === id);
    document.getElementById("editTaskId").innerText = `Identificador: ${task.id}`;
    document.getElementById("editTitle").value = task.title;
    document.getElementById("editDescription").value = task.description;
    document.getElementById("editState").value = task.state;
    document.getElementById("editIncludesPomodoros").checked = task.pomodoros.length > 0;
    if (task.pomodoros.length > 0) {
        document.getElementById("editPomodorosDiv").style.display = "flex";
        document.getElementById("editPomodoros").value = task.pomodoros.length;
        document.getElementById("editPomodoroDuration").value = task.pomodoros[0].focusTime;
        document.getElementById("editPomodoroInterval").value = task.pomodoros[0].pauseTime;
    } else document.getElementById("editPomodorosDiv").style.display = "none";
}

export function cancelEditTaskModal() {
    const modal = document.getElementById("modalEditTask");
    modal.close();
}

export function showHideEditPomodorosDiv() {
    const checkbox = document.getElementById("editIncludesPomodoros");
    const pomodorosDiv = document.getElementById("editPomodorosDiv");
    
    if (checkbox.checked) {
        pomodorosDiv.style.display = "flex";
    } else {
        pomodorosDiv.style.display = "none";
    }
}

export function editTask() {
    const tasksList = getTasksList();
    const newTasksList = tasksList.map(task => {
        if (task.id === document.getElementById("editTaskId").innerText.split(": ")[1]) {
            task.title = document.getElementById("editTitle").value;
            task.description = document.getElementById("editDescription").value;
            task.state = document.getElementById("editState").value;
            task.pomodoros = [];
            if (document.getElementById("editIncludesPomodoros").checked) {
                for (let i = 0; i < document.getElementById("editPomodoros").value; i++) {
                    task.pomodoros.push({
                        focusTime: document.getElementById("editPomodoroDuration").value,
                        pauseTime: document.getElementById("editPomodoroInterval").value
                    });
                }
            }
        }
        return task;
    });
    saveTasksList(newTasksList);
    renderTaskList();
}