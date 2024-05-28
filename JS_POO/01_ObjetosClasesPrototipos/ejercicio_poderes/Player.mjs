export default class Player {
    constructor({nick, hp, strength, agility, intelligence, points = 0, powers = []}) {
        this.nick = nick;
        this.hp = hp;
        this.strength = strength;
        this.agility = agility;
        this.intelligence = intelligence;
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
