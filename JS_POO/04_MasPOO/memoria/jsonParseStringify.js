const helado1 = {
    name: 'Chocolate',
    price: 10,
    topping: {
        name: 'Ralladura de limón',
        price: 2
    }
};

const helado2 = JSON.parse(JSON.stringify(helado1));
console.table([helado1, helado2]);

helado2.name = 'Frutilla';
helado2.topping.name = 'Chips de chocolate';

console.table([helado1, helado2]);

//solucionamos el problema de la copia de objetos anidados!
//pero no nos copia los métodos del objeto...

const kaly = {
    name: 'Kaly',
    age: 3,
    bark() {
        console.log(`${this.name} esta ladrando.`);
    }
};

const pia = JSON.parse(JSON.stringify(kaly));
pia.name = 'Pia';

console.table([kaly, pia]);

kaly.bark();
//pia.bark();