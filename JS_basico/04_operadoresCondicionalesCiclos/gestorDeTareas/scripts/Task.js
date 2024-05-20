export class Task {
    constructor(title, description, state, id = null, createdAt = null, updatedAt = null, pomodoros) {
        this.id = id !== null ? id : crypto.randomUUID();
        this.title = title;
        this.description = description;
        this.state = state;
        this.createdAt = createdAt !== null ? createdAt : new Date();
        this.updatedAt = updatedAt !== null ? updatedAt : new Date();
        this.pomodoros = pomodoros;
    }
    edit(title, description) {
        this.title = title;
        this.description = description;
        this.updatedAt = new Date();
    }
    toggleState(newState) {
        this.state = newState;
        this.updatedAt = new Date();
    }
    addPomodoro(pomodoro) {
        this.pomodoros.push(pomodoro);
    }
    removePomodoro(pomodoro) {
        this.pomodoros.splice(this.pomodoros.indexOf(pomodoro), 1);
    }
    editPomodoro(pomodoro, focusTime, pauseTime) {
        pomodoro.edit(focusTime, pauseTime);
    }
}