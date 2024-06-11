const kaly = {
    name: 'Kaly',
    age: 3
};

const pia = {};
for(const prop in kaly){
    pia[prop] = kaly[prop];
}

console.table([kaly, pia]);

pia.name = 'Pia';
console.table([kaly, pia]);

//pero no estamos haciendo una copia de los objetos que tenga dentro nuestro objeto:
const helado1 = {
    name: 'Vainilla',
    price: 20,
    topping: {
        name: 'Chocolate',
        price: 3
    }
};

const helado2 = {};
for(const prop in helado1){
    helado2[prop] = helado1[prop];
}

helado2.topping.name = 'Fresa';
console.table([helado1, helado2]);

//lo anterior es lo que hace el método assign del super prototipo Object:
const helado3 = Object.assign({}, helado1);
helado3.topping.name = 'Cereza';
console.table([helado1, helado3]);

//Object.create() -> crea un nuevo objeto a partir de un prototipo
const helado4 = Object.create(helado1);
helado4.topping.name = 'Gominolas';
console.table([helado1, helado4]);

console.table([helado1, helado4.__proto__]); //y seguimos con el mismo problema...