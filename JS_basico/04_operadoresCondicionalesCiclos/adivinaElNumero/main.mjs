import { Game } from "./js/Game.js";
import { addStartButtonEL, addGuessButtonEL, addModalSaveButtonEL, addModalCancelButtonEL } from "./js/eventListeners.js";
import { getTopCount, getTopTime } from "./js/localStorage.js";



export function loadTops() {
    const topCount = getTopCount();
    const topTime = getTopTime();
    if (topTime) {
        const topThreeListTime = document.getElementById("topThreeListTime");
        topThreeListTime.innerHTML = "";
        topTime.games.forEach(game => {
            const li = document.createElement("li");
            li.innerHTML = `${game.nick}: ${game.time}s`;
            topThreeListTime.appendChild(li);
        });
    }
    if (topCount) {
        const topThreeListAttempts = document.getElementById("topThreeListAttempts");
        topThreeListAttempts.innerHTML = "";
        topCount.games.forEach(game => {
            const li = document.createElement("li");
            li.innerHTML = `${game.nick}: ${game.count} intentos`;
            topThreeListAttempts.appendChild(li);
        });
    }
}

//EventListeners:
document.addEventListener("DOMContentLoaded", () => {
    addStartButtonEL();
    addGuessButtonEL();
    addModalSaveButtonEL();
    addModalCancelButtonEL();
})

loadTops();
