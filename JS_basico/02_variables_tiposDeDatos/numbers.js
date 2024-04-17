const entero = 10; //entero
const decimal = 10.5; //decimal

console.log(typeof entero, typeof decimal);

const cientifica = 10e3; //10 elevado a la 3, notación científica

console.log(cientifica, typeof cientifica);

const infinito = Infinity; //infinito
const noNumero = NaN; //no numérico, not a number

console.log(infinito, noNumero, typeof infinito, typeof noNumero);

const enteroEnorme = 548756121875642156454216545456472103421621564212n; //bigint

console.log(enteroEnorme, typeof enteroEnorme);

//operaciones

const suma = entero + decimal;
const resta = entero - decimal;
const multiplicacion = entero * decimal;
const division = entero / decimal;
const modulo = entero % decimal;
const potencia = entero ** 2;

console.log(suma, resta, multiplicacion, division, modulo, potencia);

//problemas de precisión

const a = 0.1 + 0.2;

console.log(a, a.toFixed(1));
console.log(a === 0.3);

//math

const raiz2 = Math.sqrt(3);
const absoluto = Math.abs(-10);
const random = Math.random();

console.log(raiz2, absoluto, random);