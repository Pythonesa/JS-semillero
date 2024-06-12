const kaly = {
    name: 'Kaly',
    age: 3,
    walk: {
        place: 'parque',
        time: 'de tarde',
        walking() {
            console.log(`${this.place} ${this.time}`);
        }
    },
    bark() {
        console.log(`${this.name} esta ladrando.`);
    }
};

console.log(kaly);

function deepCopy(obj) {
    const copy = {};
    for(const prop in obj) {
        if(typeof obj[prop] === 'object') {
            copy[prop] = deepCopy(obj[prop]);
        } else {
            copy[prop] = obj[prop];
        }
    }
    return copy;
}

const pia = deepCopy(kaly);
pia.name = 'Pia';
pia.walk.time = 'de mañana';

console.log(pia);

kaly.bark();
pia.bark();

kaly.walk.walking();
pia.walk.walking();


//const pepe = structuredClone(kaly);
//structuredClone no puede copiar métodos de objetos:
/* DOMException [DataCloneError]: walking() {
    console.log(`${this.place} ${this.time}`);
} could not be cloned. */