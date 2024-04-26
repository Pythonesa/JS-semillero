//expresiones -> expressions
//fragmentos de código que producen un valor

"Hola" //produce "Hola"
5 - 2 //produce 3
4 //produce 4

2 * (3 + 4) //produce 14 y son 5 expresiones en total:
//1 -> 2 * (3 + 4)
//2 -> 2
//3 -> (3 + 4)
//4 -> 3
//5 -> 4

//declaraciones o sentencias -> statements
//fragmentos de código que producen una instrucción

const nombre = "Pepe"; //declara una variable nombre con el valor "Pepe" <- instrucción, le dice a JS que cree una variable con ese valor
//si bien "Pepe" es una expresión, las sentencias muchas veces van acompañadas de expresiones (cada vez que una instrucción necesita un valor)

function suma () {} //declara una función sin parámetros, es una instrucción sin expresión
let algo //declara una variable sin valor, es una instrucción sin expresión

//expresión de función: 
const funcion = function () {
    //código que produce algo
}
