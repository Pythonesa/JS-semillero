//crear un string - cadena literal:
const comillasSimples = 'Hola';
const comillasDobles = "Hola";

console.log(comillasSimples);
console.log(comillasDobles);

//crear un string - template literal:
const templateLiteral = `Hola`;

console.log(templateLiteral);

//concatenar strings:
const nombre = "Pepe";

const signoSuma = "Hola " + nombre + '!';
const template = `Hola ${nombre}!`;

console.log(signoSuma);
console.log(template);

comidas = ["🍕", "🌭", "🍟"];
const join = "Me gusta comer: " + comidas.join(" , ");
const concat = "Me gusta comer: " + comidas.concat(" , ");
const concat2 = "Hola, me llamo".concat(" ", nombre, " ", "y me gusta comer" ," ", comidas.join(" , "), ".");

console.log(join);
console.log(concat);
console.log(concat2);

//los strings pueden ser datos primitivos u objetos:
//los strings primitivos son inmutables
const stringPrimitivo = 'Soy primitivo!';
const otroPrimitivo = "También soy primitivo!";

const failPrimitivo = String('Oh no! soy primitivo!');

//para que sea un objeto necesitamos la palabra new (llamar al constructor):
//los Strings objetos son mutables
const stringObjeto = new String('Soy un objeto!');

console.log('Tipo de stringPrimitivo: ' + typeof stringPrimitivo);
console.log('Tipo de otroPrimitivo: ' + typeof otroPrimitivo);
console.log('Tipo de failPrimitivo: ' + typeof failPrimitivo);
console.log('Tipo de stringObjeto: ' + typeof stringObjeto);

//podemos manipularlos como si fueran arrays (porque los strings son arrays de caracteres)

//acceso a caracteres:
const saludo = "Hola, vamos a comer 🍔";
console.log(saludo[0]);//al igual que en los arrays empezamos por el índice 0.
console.log(saludo.charAt(3));
console.log(saludo.indexOf("a")); //devuelve la primer posición del caracter
console.log(saludo.indexOf("vamos"))
console.log(saludo.lastIndexOf("a"));
console.log(saludo.indexOf("x")); //devuelve -1 si no encuentra el caracter
console.log(saludo.includes("x")); //devuelve true o false si el caracter se encuentra o no
console.log(saludo.slice(6, 11)); //devuelve una parte del string
console.log(saludo.substring(6, 11)); //devuelve una parte del string
console.log(saludo.length); //devuelve la longitud del string
console.log(saludo.toLowerCase()); //devuelve el string en minúsculas
console.log(saludo.toUpperCase()); //devuelve el string en mayúsculas

//podemos dividir un string en partes por un caracter:
const saludoDividido = saludo.split(" ");
console.log(saludoDividido);

const saludoEspaciado = "              Hola soy feo!";
saludoLindo = saludoEspaciado.trim();
console.log(saludoEspaciado);
console.log(saludoLindo);

//remplazar:
const nuevaSaludo = saludo.replace("vamos", "voy");
console.log(nuevaSaludo);
