//null
const nulo = null;
console.log(nulo, typeof nulo);

//undefined
const indefinido = undefined;
let noDefinido;
console.log(indefinido, typeof indefinido);
console.log(noDefinido, typeof noDefinido);

//symbol
//nos sirven para escribir valores que son únicos y no queremos que cambien
const uniqueId = Symbol("id único")
const otroId = Symbol("id único")
console.log(uniqueId, typeof uniqueId);
console.log(uniqueId === otroId);

let user = {};
user[uniqueId] = "1234";
console.log(user);