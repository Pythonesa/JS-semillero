const highestNumber = (num1, num2) => (num1 > num2) ? num1 : num2;

console.log(highestNumber(5, 2));
console.log(highestNumber(7, 15));

const ticketPrice = (membership) => membership ? 8 : 12;
console.log(ticketPrice(true));
console.log(ticketPrice(false));

let dog = true;
let animals = [
    'tigre',
    'gato',
    'caballo',
    'conejo',
    dog ? 'perro' : 'pantera'
]
console.table(animals);

dog = false;
animals = [
    'tigre',
    'gato',
    'caballo',
    'conejo',
    dog ? 'perro' : 'pantera',
    (() => 'oso')()
]
console.table(animals);

const age = 2;
// con los ternarios podemos utilizar más de una comparación:
const message = age >= 18 ? 'Eres mayor de edad' :
                age >= 3  ? 'Eres menor de edad' :
                'Eres un bebé';
console.log(message);