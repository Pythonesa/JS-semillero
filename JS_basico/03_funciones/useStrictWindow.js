function personajeFavorito() {
    console.log(`Yo soy ${this.nombre} y mi personaje favorito es ${this.personaje}`);
}

/* const miFicha = {
    nombre: "Mar",
    personaje: "Iron Man"
} */

console.log(this); //al correrlo en el navegador this es un objeto Window

//Podemos añadir o modificar las propiedades de ese objeto Window:
this.nombre = "Mar";
this.personaje = "Iron Man";

console.log(this);

personajeFavorito(); //ahora si utiliza las propiedades que añadimos a Window y muestra el mensaje que queríamos.

//use strict
//si no queremos poder manipular las propiedades del objeto Window añadimos al principio 'use strict' para activar el modo estricto.
//ahora obtenemos el error Uncaught TypeError: this is undefined al ejecutar lo anterior.

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode

//es un poco molesto, pero asegura al ser estricto que cumplamos con buenas prácticas (como no asignar variables no declaradas) 
//y evita cosas peores como que podamos eliminar la propiedad prototype de un objeto.

//cosas para las que nos es útil window:
// Mostrar una alerta al usuario
window.alert("¡Hola, mundo!");
//también, como window es un objeto global, podemos acceder a sus propiedades sin tener que nombrarlo:
alert("Otro saludito!")

//sin embargo al leer el código es mucho más sencillo entender que nos referimos a la ventana si lo usamos
//entonces, utilizarlo o no va a ser correcto según su propio sentido común al escribirlo.

// Imprimir el tamaño de la ventana del navegador
console.log("Ancho de la ventana: " + window.innerWidth);
console.log("Altura de la ventana: " + window.innerHeight);

// Redirigir al usuario a otra página web
location.href = "https://www.google.com";
