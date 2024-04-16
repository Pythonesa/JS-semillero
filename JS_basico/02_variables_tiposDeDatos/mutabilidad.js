//INMUTABLES:
let numero = 10;
function sumar (num) {
    return num + 5;
}
console.log(sumar(numero)); //numero se pasa por valor
console.log(numero); //numero sigue valiendo 10

//MUTABLES:
let persona = {
    nombre: "Carlos",
    edad: 23
};
const cumplirAnios = (persona) => { 
    persona.edad = persona.edad + 1;
    return persona.edad; //sino devolvemos nada la ejecución de la función devuelve undefined
};
console.log(cumplirAnios(persona)); //persona se pasa por referencia
console.log(persona); //la edad de la persona cambió

let comida = ["🍕", "🍔", "🍟"];
let copiaDeComida = comida //comida se pasa por referencia y ahora tanto comida como copiaDeComida apuntan al mismo lugar de memoria
copiaDeComida.push("🌭");
console.log(comida);
console.log(copiaDeComida);

//spread operator:
let comida2 = ["🍕", "🍔", "🍟"];
let copiaDeComida2 = [...comida2]; //el contenido de comida2 se pasa por valor y copiaDeComida2 apunta a un nuevo lugar de memoria
copiaDeComida2.push("🌭");
console.log(comida2);
console.log(copiaDeComida2);


console.log(cumplirAnios({ ...persona }));
console.log(persona);

//clonar objetos:
console.log(cumplirAnios(structuredClone(persona)));
console.log(persona);