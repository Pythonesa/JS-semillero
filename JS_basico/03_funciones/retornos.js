function createPerson(name, age) {
    return {
        name, //al ser el mismo nombre, podemos no escribir name: name
        age
    };
}

const person = createPerson("John", 30);
console.table(person);

//con una función flecha es más lindo:
const createPet = (name, age) => ({ name, age });
const pet = createPet("Kaly", 2);
console.table(pet);

//ésto no se puede hacer con las funciones de flecha (las funciones de flecha no crean arguments):
function printArguments() {
    console.table(arguments);
}

printArguments("Pepe", 23, true);

//para hacer lo mismo con una función de flecha debemos usar el operador rest(...):
//después del parámetro rest no se puede pasar ningún otro argumento
//si pasamos otro argumento antes del rest no va a estar incluido en los args
const printArguments2 = (...args) => console.table(args);
printArguments2("Luis", 57, false);

const printArguments3 = (nombre, ...args) => console.table({ nombre, args });
printArguments3("Pedro", 31, true);

const returnArgs = (...args) => args;
arguments = returnArgs("Kaly", 2, true);
console.table(arguments);
console.log(`Nombre: ${arguments[0]}, Edad: ${arguments[1]}, Ladra: ${arguments[2]}`);

const [firstName, lastName, nickname] = returnArgs("Tony", "Stark", "Ironman");
console.table({ firstName, lastName, nickname });

const person2 = createPerson("Mary", 25);
const { name: personName, age: personAge } = person2;
console.table({ personName, personAge });
