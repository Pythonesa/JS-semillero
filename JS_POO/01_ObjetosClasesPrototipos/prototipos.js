//Prototipo Player:
function Player(name, hp, attack, defense, points = 0, powers = []) {
    this.name = name;
    this.hp = hp;
    this.attack = attack;
    this.defense = defense;
    this.points = points;
    this.powers = powers;

    this.addPower = function (power) {
        this.powers.push(power);
    }
}

const player1 = new Player('Pepe', 100, 10, 5);
console.log(player1);
console.log(typeof player1);

const player2 = new Player('Juan', 100, 10, 5, 3);
console.table(player2);

//Podemos acceder a los métodos del prototipo Object (__proto__):
console.log(player2.hasOwnProperty('points'));

player1.addPower('fuerza');
player1.addPower('agilidad');
console.table(player1);

//Otra forma de añadir métodos a los prototipos, el método queda dentro de __proto__:
Player.prototype.removePower = function (power) {
    const index = this.powers.indexOf(power);
    if (index !== -1) {
        this.powers.splice(index, 1);
    }
}

player1.removePower('agilidad');
console.table(player1);