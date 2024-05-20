import { Task } from "./Task.js";
import { Pomodoro } from "./Pomodoro.js";

export function getTasksList() {
    const tasksList = JSON.parse(localStorage.getItem("tasksList"));
    if (tasksList) {
        const parsedTaskList = tasksList.map(task => {
            if (Array.isArray(task.pomodoros)) {
                return new Task(
                    task.title,
                    task.description,
                    task.state,
                    task.id,
                    task.createdAt,
                    task.updatedAt,
                    task.pomodoros.map(pomodoro => new Pomodoro(
                        pomodoro.focusTime,
                        pomodoro.pauseTime,
                        pomodoro.id,
                    ),
                ));
            } else {
                return new Task(
                    task.title,
                    task.description,
                    task.state,
                    task.id,
                    task.createdAt,
                    task.updatedAt,
                    [],
                );
            }
        });
        return parsedTaskList;
    } else {
        return [];
    }
}

export function saveTasksList(tasksList) {
    localStorage.setItem("tasksList", JSON.stringify(tasksList));
}