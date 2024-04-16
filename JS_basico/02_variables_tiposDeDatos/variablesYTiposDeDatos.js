let caja = "caramelos";
console.log(caja);

const PI = 3.1416;
console.log("El valor de PI es: " + PI);


//Tipos de datos primitivos:
//Son inmutables y se pasarán por valor
const texto = "Hola"; //string
const numero = 10; //number
const verdadero = true; //boolean
const nulo = null; //null
const indefinido = undefined; //undefined
const numeroMuyGrande = 9007199254740991n; //bigint

console.log(`El tipo de la variable "texto" es: ${typeof texto} y su valor es: ${texto}`);
console.log(`El tipo de la variable "numero" es: ${typeof numero} y su valor es: ${numero}`);
console.log(`El tipo de la variable "verdadero" es: ${typeof verdadero} y su valor es: ${verdadero}`);
console.log(`El tipo de la variable "nulo" es: ${typeof nulo} y su valor es: ${nulo}`);
console.log(`El tipo de la variable "indefinido" es: ${typeof indefinido} y su valor es: ${indefinido}`);
console.log(`El tipo de la variable "numeroMuyGrande" es: ${typeof numeroMuyGrande} y su valor es: ${numeroMuyGrande}`);

const simboloUnico = Symbol("soy un simbolo unico"); //symbol
//console.log(`El tipo de la variable "simboloUnico" es: ${typeof simboloUnico} y su valor es: ${simboloUnico}`);
console.log(simboloUnico);
const otraCaja = {
    [simboloUnico]: "un dulce"
}
console.log(otraCaja);
console.log(otraCaja[simboloUnico]);

//Tipos de datos complejos:
//Son mutables y se pasan por referencia
const persona = {
    nombre: "Carlos",
    apellido: "Gutierrez",
    edad: 23
} //object
console.log(`El tipo de la variable "persona" es: ${typeof persona} y su valor es: ${persona}`);
const lista = [1, 2, 3, 4, 5]; //array
console.log(`El tipo de la variable "lista" es: ${typeof lista} y su valor es: ${lista}`);
const saludar = () => {
    console.log("Hola!");
}// function
console.log(`El tipo de la variable "saludar" es: ${typeof saludar} y su valor es: ${saludar}`);

//llamado a la función saludar:
saludar();
