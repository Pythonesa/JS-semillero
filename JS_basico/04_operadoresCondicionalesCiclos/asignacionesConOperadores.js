let saludar = true;
const hola = saludar && 150 && "Hola"; //toma el ultimo valor

console.log(hola);

saludar = false;
const hola2 = saludar && 150 && "Hola";

console.log(hola2);

const hola3 = saludar || "Hola!";

console.log(hola3);

saludar = true;
const hola4 = saludar || "Hola!";

console.log(hola4);

const hola5 = false || undefined || null || "Hola de nuevo!" || 150; //toma el primer valor que no sea falso, indefinido o nulo

console.log(hola5);