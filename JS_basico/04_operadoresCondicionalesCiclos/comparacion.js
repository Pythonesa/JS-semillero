//OPERADORES DE COMPARACIÓN

console.log(2 == 2); //true
console.log(2 == "2"); //true

console.log(2 === 2); //true
console.log(2 === "2"); //false

console.log(2 != 2); //false
console.log(2 != "2"); //false

console.log(2 !== 2); //false
console.log(2 !== "2"); //true

console.log(2 > 2); //false
console.log(2 > 1); //true

console.log(2 < 2); //false
console.log(2 < 3); //true

console.log(2 >= 2); //true
console.log(2 >= 1); //true

console.log(2 <= 2); //true
console.log(2 <= 3); //true

console.log("2" > 1); //true
console.log("2" < 3); //true
console.log("2" > "1"); //true
console.log("2" < "3"); //true
console.log("2" < 1); //false

// Recordar que === y !== son comparaciones estrictas y nos evitan las conversiones implícitas