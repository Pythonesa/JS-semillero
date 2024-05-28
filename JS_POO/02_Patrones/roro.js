//RORO -> Receive an object, return an object
//Util cuando tenemos muchos parámetros

class Player {
    constructor({ name, hp, attack, defense, points = 0, powers = [] }) {
        this.name = name;
        this.hp = hp;
        this.attack = attack;
        this.defense = defense;
        this.points = points;
        this.powers = powers;
    }

    addPower(power) {
        this.powers.push(power);
    }

    removePower(power) {
        const index = this.powers.indexOf(power);
        if (index !== -1) {
            this.powers.splice(index, 1);
        }
    }
}

const player1 = new Player({
    name: 'Pepe',
    edad: 19, //lo ignora porque no existe en el constructor
    hp: 100, 
    attack: 10, 
    defense: 5,
    //no necesitamos enviar nada en points para mandar powers
    powers: ['fuerza', 'agilidad']
});

console.table(player1);
player1.removePower('fuerza');
console.table(player1);

//Podemos enviar los parámetros en cualquier orden:
const player2 = new Player({
    powers: ['fuerza', 'agilidad'],
    defense: 5,
    hp: 100, 
    attack: 10, 
    name: 'Juan'
});
console.table(player2);