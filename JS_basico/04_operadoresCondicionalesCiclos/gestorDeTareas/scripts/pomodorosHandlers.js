import { getTasksList, saveTasksList } from "./localStorage.js";

export async function openPomodorosModal(id) {
    const modal = document.getElementById("modalPomodoros");
    const task = getTasksList().find(task => task.id === id);
    document.getElementById("pomodorosModalTitle").innerText = `Pomodoros de la tarea ${task.title}`

    task.state !== "doing" && alert("La tarea debe estar en ejecución para realizar sus pomodoros.");

    if (task.state === "doing") {
        const preview = document.getElementById("pomodorosModalPreview");
        preview.innerHTML = "";
        for (let i = 0; i < task.pomodoros.length; i++) {
            const pomodoro = task.pomodoros[i];
            const newDivFocus = document.createElement("div");
            newDivFocus.id = `focus${i}`;
            newDivFocus.classList.add("flex", "flex-row", "justify-center", "gap-3", "bg-lime-800", "p-1", "rounded-lg", "border-2", "border-lime-500", "text-lime-200", "w-full", "mb-2");
            newDivFocus.innerHTML = `${pomodoro.focusTime} min`;
            preview.appendChild(newDivFocus);
            const newDivPause = document.createElement("div");
            newDivPause.id = `pause${i}`;
            newDivPause.classList.add("flex", "flex-row", "justify-center", "gap-3", "bg-yellow-800", "p-1", "rounded-lg", "border-2", "border-yellow-500", "text-yellow-200", "w-full", "mb-2");
            newDivPause.innerHTML = `${pomodoro.pauseTime} min`;
            preview.appendChild(newDivPause);
        }
        modal.showModal();
        const timer = document.getElementById("pomodorosModalTimer");
        for (let i = 0; i < task.pomodoros.length; i++) {
            await startTimer(task.pomodoros[i].focusTime);
            const focusDiv = document.getElementById(`focus${i}`);
            focusDiv.classList.replace("bg-lime-800", "bg-gray-500");
            await startTimer(task.pomodoros[i].pauseTime);
            const pauseDiv = document.getElementById(`pause${i}`);
            pauseDiv.classList.replace("bg-yellow-800", "bg-gray-500");
        }
    }
}

export function cancelPomodorosModal() {
    const modal = document.getElementById("modalPomodoros");
    modal.close();
}

export function startTimer(timeInMinutes) {
    return new Promise((resolve) => {
        const timer = document.getElementById("pomodorosModalTimer");
        let time = timeInMinutes * 60;
        timer.innerText = `${timeInMinutes}:00`;
        const interval = setInterval(() => {
            time--;
            const minutes = Math.floor(time / 60);
            const seconds = time % 60;
            timer.innerText = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
            if (time === 0) {
                clearInterval(interval);
                const alarm = new Audio('alarm.mp3');
                alarm.play();
                resolve();
            }
        }, 1000);
    });
}
