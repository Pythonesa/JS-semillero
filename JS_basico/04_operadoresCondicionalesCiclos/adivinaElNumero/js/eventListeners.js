import { startGame, guessNumber, saveNick, cancelModal } from "./buttonHandlers.js";

export function addStartButtonEL() {
    const startButton = document.getElementById("startButton");
    startButton.addEventListener("click", function() {
        startGame();
    });
}

export function addGuessButtonEL() {
    const guessButton = document.getElementById("guessButton");
    guessButton.addEventListener("click", function() {
        guessNumber();
    });
}

export function addModalSaveButtonEL() {
    const modalSaveButton = document.getElementById("saveNick");
    modalSaveButton.addEventListener("click", function() {
        saveNick();
    });
}

export function addModalCancelButtonEL() {
    const modalCancelButton = document.getElementById("closeModal");
    modalCancelButton.addEventListener("click", function() {
        cancelModal();
    });
}