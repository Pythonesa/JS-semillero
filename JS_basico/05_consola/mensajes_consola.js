console.log('Mensaje normal');
console.warn('Mensaje de alerta');
console.error('Mensaje de error');

// Para imprimir valores es útil usar llaves para evitar tener que poner el nombre de la variable:
const firstName = 'Pepe';
console.log({firstName});

// Poniendo estilo al mensaje de consola:
console.log('%cHola', 'color: red; font-size: 16px;');
console.log('%cHola', 'color: green; text-decoration: underline; ');
console.log('%cHola', 'color: cyan; font-style: italic;');
console.log('%cHola', 'color: purple; font-weight: bold; font-size: 24px;');

// Si necesitamos imprimir muchas variables o un objeto podemos imprimir una tabla:
const age = 30;
const address = 'Calle Falsa 123';
const phoneNumber = 123456789;

console.table({firstName, age, address, phoneNumber});

const pet = {
    name: 'Kaly',
    age: 2,
    hobby: 'ladrar',
    favoriteColor: 'pink'
};

console.table(pet);
console.log(`%c${pet.name} tiene ${pet.age} años y le encanta ${pet.hobby}.`, 
    `color: ${pet.favoriteColor}; font-weight: bold; font-size: 16px;`);
