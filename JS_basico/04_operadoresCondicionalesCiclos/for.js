for (let inicio = 0; inicio < 5; inicio++) {
    console.log(inicio);
}

/* for (let i = 0; i < 5; ++i) {
    console.log(i);
} */

const frutas = ["manzana", "pera", "naranja", "plátano", "uva"];

for (let i = 0; i < frutas.length; i++) { //es el único que podemos utilizar sin un iterable
    console.log(frutas[i]);
}

const verduras = ["lechuga", "pepino", "coliflor"];

verduras.forEach((verdura) => console.log(verdura));

const dulces = ["chocolate", "pistacho", "caramelo"];

for (dulce of dulces) { //of da el valor
    console.log(dulce);
}

//for in da el indice para arrays
//for in para objetos da las propiedades (keys)
//for in puede usarse para iterar sobre objetos que no son iterables sino enumerables

const traducciones = {
    "hola": "hello",
    "adios": "goodbye",
    "amigo": "friend",
    "casa": "house",
    "perro": "dog"
}

for (traduccion in traducciones) {
    console.log(traduccion + " -> " + traducciones[traduccion]);
}