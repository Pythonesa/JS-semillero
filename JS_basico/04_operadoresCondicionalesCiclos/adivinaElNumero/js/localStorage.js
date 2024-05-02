import { Game } from "./Game.js";
import { Top } from "./Tops.js";

//función para guardar currentGame en LocalStorage:
export function saveCurrentGame(currentGame){
    localStorage.setItem("currentGame", JSON.stringify(currentGame));
}

//función para obtener currentGame de LocalStorage:
export function getCurrentGame(){
    const parsedGame = JSON.parse(localStorage.getItem("currentGame"));
    const currentGame = new Game(parsedGame.id, parsedGame.nick, parsedGame.count, parsedGame.number, parsedGame.isOver, parsedGame.isGuessed, parsedGame.guesses, parsedGame.startTime, parsedGame.endTime, parsedGame.time);
    return currentGame;
}

//funciones para obtener y guardar los top3:
export function saveTopTime(topTime){
    localStorage.setItem("topTime", JSON.stringify(topTime));
}

export function getTopTime(){
    const parsedTopTime = JSON.parse(localStorage.getItem("topTime"));
    if (!parsedTopTime) return null;
    const games = parsedTopTime.games.map(game => new Game(
        game.id,
        game.nick,
        game.count,
        game.number,
        game.isOver,
        game.isGuessed,
        game.guesses,
        game.startTime,
        game.endTime,
        game.time
    ));
    const topTime = new Top("time", games);
    return topTime;
}

export function saveTopCount(topCount){
    localStorage.setItem("topCount", JSON.stringify(topCount));
}

export function getTopCount(){
    const parsedTopCount = JSON.parse(localStorage.getItem("topCount"));
    if (!parsedTopCount) return null;
    const games = parsedTopCount.games.map(game => new Game(
        game.id,
        game.nick,
        game.count,
        game.number,
        game.isOver,
        game.isGuessed,
        game.guesses,
        game.startTime,
        game.endTime,
        game.time
    ));
    const topCount = new Top("count", games);
    return topCount;
}

