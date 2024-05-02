import { getCurrentGame, saveCurrentGame, 
    getTopTime, getTopCount, saveTopTime, saveTopCount } 
    from "./localStorage.js";
import { Game } from "./Game.js";
import { Top } from "./Tops.js";
import { loadTops } from "../main.mjs";

//auxiliares:
function greaterOrLowerMsg(number, currentGame){
    if(number > currentGame.number){
        return "El número ingresado es mayor al buscado.";
    } else {
        return "El número ingresado es menor al buscado.";
    }
}

function lesserAndHigherThan(number, actualNumber){
    const currentLesser = Number(document.getElementById("nearLowest").innerText);
    const currentHigher = Number(document.getElementById("nearHighest").innerText);
    if(number < actualNumber && number > currentLesser){
        const spanNearLowest = document.getElementById("nearLowest");
        spanNearLowest.innerText = number;
    } else if (number > actualNumber && number < currentHigher){
        const spanNearHighest = document.getElementById("nearHighest");
        spanNearHighest.innerText = number;
    }
}

//función para manejar cuando se gana:
async function onWin(){
    let topTime = getTopTime();
    let topCount = getTopCount();
    const modal = document.getElementById("modal");
    console.log(modal.style.display);
    if (topTime) {
        if (!topTime.games[2]){
            showModal();
            await waitForModalClose();
            topTime.update(getCurrentGame());
            saveTopTime(topTime);
        } else if (getCurrentGame().time < topTime.games[2].time){
            showModal();
            await waitForModalClose();
            topTime.update(getCurrentGame());
            saveTopTime(topTime);
        }
    } else {
        showModal();
        await waitForModalClose();
        topTime = new Top("time", [getCurrentGame()]);
        saveTopTime(topTime);
    }
    if (topCount) {
        if (!topCount.games[2]){
            if (!getCurrentGame().nick || getCurrentGame().nick === "Anónimo" || getCurrentGame().nick === "") showModal();
            await waitForModalClose();
            topCount.update(getCurrentGame());
            saveTopCount(topCount);
        } else if (getCurrentGame().count < topCount.games[2].count){
            if (!getCurrentGame().nick || getCurrentGame().nick === "Anónimo" || getCurrentGame().nick === "") showModal();
            await waitForModalClose();
            topCount.update(getCurrentGame());
            saveTopCount(topCount);
        }
    } else {
        if (!getCurrentGame().nick || getCurrentGame().nick === "Anónimo" || getCurrentGame().nick === "") showModal();
        await waitForModalClose();
        topCount = new Top("count", [getCurrentGame()]);
        saveTopCount(topCount);
    }
    document.getElementById("guessButton").disabled = true;
    loadTops();
}

function waitForModalClose() {
    return new Promise(resolve => {
        const intervalId = setInterval(() => {
            const modal = document.getElementById("modal");
            if (modal.style.display !== "flex") {
                clearInterval(intervalId);
                resolve();
            }
        }, 1000);
    });
}

//función para mostrar modal para ingresar nombre:
function showModal(){
    const modal = document.getElementById("modal");
    modal.style.display = "flex";
}

export function saveNick(){
    const nick = document.getElementById("nick").value;
    const currentGame = getCurrentGame();
    currentGame.nick = nick;
    saveCurrentGame(currentGame);
    const modal = document.getElementById("modal");
    modal.style.display = "none";
}

export function cancelModal(){
    const cancelButton = document.getElementById("closeModal");
    const currentGame = getCurrentGame();
    currentGame.nick = "Anónimo";
    saveCurrentGame(currentGame);
    const modal = document.getElementById("modal");
    modal.style.display = "none";
}


//función para botón "Adivinar":
export function guessNumber(){
    const number = Number(document.getElementById("guess").value);
    const currentGame = getCurrentGame();
    currentGame.guess(number);
    saveCurrentGame(currentGame);
    const guessHistoryList = document.getElementById("guessHistory");
    const newGuess = document.createElement("li");
    newGuess.innerText = `Intento ${currentGame.count}: ${number}.`;
    guessHistoryList.appendChild(newGuess);
    const spanLastResult = document.getElementById("lastResult");
    currentGame.isGuessed ? spanLastResult.innerText = "¡Ganaste!" : spanLastResult.innerText = greaterOrLowerMsg(number, currentGame);
    if (currentGame.isGuessed) onWin();
    lesserAndHigherThan(number, currentGame.number);
    const liAttempts = document.getElementById("statAttempts");
    liAttempts.innerText = `Intentos: ${currentGame.count}`;
    const liTime = document.getElementById("statTime");
    liTime.innerText = `Tiempo: ${(Date.now() - currentGame.startTime) / 1000}`;
}

//función comenzar juego:
export function startGame(){
    const currentGame = new Game();
    saveCurrentGame(currentGame);
    const sectionStartGame = document.getElementById("startGame");
    sectionStartGame.style.display = "none";
    const sectionGuessNumber = document.getElementById("guessNumber");
    sectionGuessNumber.style.display = "flex";
    const sectionHistory = document.getElementById("guessResult");
    sectionHistory.style.display = "flex";
}
