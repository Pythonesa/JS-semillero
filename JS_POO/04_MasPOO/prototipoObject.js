const person = {
    name: 'Pepe',
    age: 19,
    gender: 'male',
    powers: ['fuerza'],
    addPower(power) {
        this.powers.push(power);
    },
    removePower(power) {
        const index = this.powers.indexOf(power);
        if (index > -1) {
            this.powers.splice(index, 1);
        }
    }
}

console.table(Object.entries(person));
console.table(Object.keys(person));
console.table(Object.getOwnPropertyNames(person));

console.table(Object.getOwnPropertyDescriptors(person));

Object.defineProperty(person, 'job', {
    value: 'programmer',
    writable: false, //en false, no se puede modificar el valor
    enumerable: true, //en false, no se lista con Object.keys()
    configurable: true //en false, no se puede eliminar
});

console.table(Object.getOwnPropertyDescriptor(person, 'job'));

console.table(person);

person.job = 'coder';

console.table(person);

//Object.seal() -> todas las propiedades pasan a tener configurable = false
//Object.freeze() -> todas las propiedades pasan a tener configurable = false y writable = false