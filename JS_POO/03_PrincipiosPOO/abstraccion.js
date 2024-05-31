class developer {
    constructor(name, age, favoriteLanguage) {
        this.name = name;
        this.age = age;
        this.favoriteLanguage = favoriteLanguage;
    }
    eat() {
        console.log('I am eating');
    }
    sleep() {
        console.log('I am sleeping');
    }
    code() {
        console.log(`I'm coding in ${this.favoriteLanguage}`);
    }
    presentation() {
        console.log(`My name is ${this.name}, I am ${this.age} years old and I love ${this.favoriteLanguage}`);
    }
}

const francisco = new developer('Francisco', 25, 'JavaScript');
const maria = new developer('Maria', 36, 'Python');

francisco.presentation();
maria.presentation();

maria.code();
maria.eat();
maria.sleep();
