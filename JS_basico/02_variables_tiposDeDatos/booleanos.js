const isActive = true;
const hasError = false;

//conversiones implícitas:
const resultado = 5 > 3;
console.log(resultado);

const name = "Juan";
console.log(!!name);

//conversiones explícitas:
const valor = 0;
const valorBooleano = Boolean(valor); //solamente 0 es false, todos los otros números incluidos los negativos son true
console.log(valor, valorBooleano);