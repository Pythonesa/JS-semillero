class Pet{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    eat(){
        console.log(`${this.name} está comiendo.`);
    }
    presentation(){
        console.log(`${this.name} es una mascota que tiene ${this.age} años.`);
    }
}

class Dog extends Pet{
    constructor(name, age, breed){
        super(name, age); //super llama al constructor de la clase padre
        this.size = breed;
    }

    bark(){
        console.log(`${this.name} esta ladrando.`);
    }

    presentation(){
        console.log(`${this.name} es un perro de tamaño ${this.size} que tiene ${this.age} años.`);
    }
}

class Cat extends Pet{
    constructor(name, age, color){
        super(name, age);
    }

    meow(){
        console.log(`${this.name} esta maullando.`);
    }

    presentation(){
        console.log(`${this.name} es un gato que tiene ${this.age} años.`);
    }
}

const pet = new Pet("Nemo", 2);

const dog = new Dog("Kaly", 3, "grande");

const cat = new Cat("Marte", 0);

pet.presentation();
pet.eat();

dog.presentation();
dog.eat();
dog.bark();

cat.presentation();
cat.eat();
cat.meow();
