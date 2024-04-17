const numero = 10;
const booleano = true;
const suma = numero + booleano; //conversión implícita de true a 1
console.log(suma); 
console.log(2 + false); //conversión implícita de false a 0
const stringNumero = "5"
console.log(numero + stringNumero); //105 -> conversión implícita de entero a string para concatenar


//casting de tipos - conversión explícita:
const cadena = "10";
console.log(cadena, typeof cadena);
const entero = Number(cadena)
console.log(entero, typeof entero);

const textBool = "true";
console.log(textBool, typeof textBool);
const booleano2 = Boolean(textBool);
console.log(booleano2, typeof booleano2);

const falso = false;
console.log(falso, typeof falso)
numeroFalso = Number(falso);
console.log(numeroFalso, typeof numeroFalso);
cadenaFalso = String(falso);
console.log(cadenaFalso, typeof cadenaFalso);

const cadenaDecimal = "10.5";
const numeroDecimal = Number(cadenaDecimal);
const numeroFloat = parseFloat(cadenaDecimal);
console.log(numeroDecimal, typeof numeroDecimal);
console.log(numeroFloat, typeof numeroFloat);

const floatNumber = parseFloat(entero);
console.log(`entero: ${entero}, floatNumber: ${floatNumber}`);