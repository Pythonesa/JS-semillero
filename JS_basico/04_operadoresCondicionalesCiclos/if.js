if (true) {
    console.log("always true");
}

function esMayor (edad) {
    if (edad >= 18) {
        console.log("Eres mayor de edad");
    } else if (edad < 3) {
        console.log("Eres un bebe");
    } else {
        console.log("Eres menor de edad");
    }
}

//ternario:
const imprimirEsMayor = (edad) => (edad >= 18) ? console.log("Eres mayor de edad") : console.log("Eres menor de edad")

const edad = 2;
const edad2 = 52;
esMayor(edad);
imprimirEsMayor(edad2);