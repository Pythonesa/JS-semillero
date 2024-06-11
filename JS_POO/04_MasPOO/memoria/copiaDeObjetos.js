const kaly = {
    name: 'Kaly',
    age: 3,
    color: 'black'
};

const pia = kaly;

console.table([kaly, pia]);

pia.name = 'Pia';
pia.color = 'golden';
console.table([kaly, pia]);

kaly.name = 'Kaly';
kaly.color = 'black';
console.table([kaly, pia]);

/* kaly y pia apuntan a la misma referencia en memoria
porque cuando hacemos la asignación const pia = kaly estamos copiando el valor del puntero y no el objeto al que apunta
y por eso si modificamos a una se modifica el objeto al que apuntan ambas */