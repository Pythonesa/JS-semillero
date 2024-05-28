//Las clases en JS son una mentira... son una sintaxis más amigables para trabajar con prototipos

class Player {
    constructor(name, hp, attack, defense, points = 0, powers = []) {
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
}

//También podemos agregar métodos a las clases con prototype porque también son prototipos
Player.prototype.removePower = function (power) {
    const index = this.powers.indexOf(power);
    if (index !== -1) {
        this.powers.splice(index, 1);
    }
}

player1 = new Player('Pepe', 100, 10, 5);
player1.addPower('fuerza');
player1.addPower('agilidad');
console.table(player1);
player1.removePower('fuerza');
console.table(player1);