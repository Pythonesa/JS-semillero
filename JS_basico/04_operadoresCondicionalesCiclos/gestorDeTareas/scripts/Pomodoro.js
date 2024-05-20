export class Pomodoro {
    constructor(focusTime, pauseTime, id = null) {
        this.id = id !== null ? id : crypto.randomUUID();
        this.focusTime = focusTime;
        this.pauseTime = pauseTime;
    }
    
    edit(focusTime, pauseTime) {
        this.focusTime = focusTime;
        this.pauseTime = pauseTime;
    }
}