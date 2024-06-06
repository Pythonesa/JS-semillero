class Duck {
    static sound = 'quack';

    constructor(name) {
        this.name = name;
        this.sound = Duck.sound; //sin esto una instancia de pato al llamar a sound devolverá undefined

        Pond.addDuck();
    }
}

class Pond {
    static ducks = 0;

    static addDuck() {
        this.ducks++;
    }
}

patitoFeo = new Duck('Patito feo');
donald = new Duck('Donald');
lucas = new Duck('Lucas');

console.log(Pond.ducks);
console.log(Duck.sound);
console.log(donald.sound);
