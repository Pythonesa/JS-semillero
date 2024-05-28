import Power from './Power.mjs';
import Player from './Player.mjs';

//Poderes:
const extraStrength = new Power('Extra fuerza', 'Aumenta la fuerza', 'strength', 10);
const extraAgility = new Power('Extra agilidad', 'Aumenta la agilidad', 'agility', 10);
const extraIntelligence = new Power('Extra inteligencia', 'Aumenta la inteligencia', 'intelligence', 10);
const extraVitality = new Power('Extra vitalidad', 'Aumenta la vitalidad', 'hp', 10);

//Jugadores:
const player1 = new Player({
    nick: 'Pepe',
    hp: 100,
    strength: 10,
    agility: 5,
    intelligence: 0,
    powers: [extraStrength, extraAgility]
});
const player2 = new Player({
    nick: 'Juan',
    hp: 100,
    strength: 0,
    agility: 5,
    intelligence: 10,
    powers: [extraIntelligence]
});

player1.addPower(extraVitality);
player1.removePower(extraAgility);

console.log(player1);
console.log(player2);