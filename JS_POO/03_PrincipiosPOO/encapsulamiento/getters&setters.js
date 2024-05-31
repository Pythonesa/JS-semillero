class Pet{
    #name;
    #age;

    constructor(name, age) {
        this.#name = name;
        this.age = age;
    }

    get name() {
        return this.#name;
    }

    set name(name) {
        this.#name = name;
        console.log(`El nombre de la mascota ha sido cambiado a ${this.#name}.`);
    }

    get age() {
        return this.#age;
    }

    set age(age) {
        if(age < 0) {
            console.error("No se puede asignar una edad negativa.");
        } else {
            this.#age = age;
        }
    }
}

const kaly = new Pet("Cali", 3);
kaly.name = "Kaly";
kaly.age = -1;
console.log(kaly.age);