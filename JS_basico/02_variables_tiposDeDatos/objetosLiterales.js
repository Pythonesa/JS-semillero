//llamado diccionario en otros lenguajes (como python)

const persona = {
    nombre: "Pepe",
    edad: 30,
    mascota: {
        nombre: "Firulais",
        edad: 3
    },
    trabajos: ["Carpintero", "Cocinero", "Cajero"]
};

console.log('Nombre: ', persona.nombre);
console.log('Edad: ', persona['edad']);
console.table(persona);

console.log('Cantidad de trabajos: ', persona.trabajos.length);

const p = 'mascota';
console.log('Mascota: ', persona[p]);

delete persona.edad;
console.table(persona);

const entries = Object.entries(persona);
console.table(entries);

persona.casado = true;
console.table(persona);

Object.freeze(persona); //congela el objeto no los sub objetos
persona.hobbies = ['Jugar', 'Dormir'];
persona.casado = false;
console.table(persona);

const properties = Object.getOwnPropertyNames(persona);
console.table(properties);

const values = Object.values(persona);
console.table(values);