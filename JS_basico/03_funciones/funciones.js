function suma (num1, num2) {
    return num1 + num2;
}

console.log(suma(5, 10));

const resta = (num1, num2) => num1 - num2;

console.log(resta(5, 10));

const multiplicar = (num1, num2) => {
    return num1 * num2;
}

console.log(multiplicar(5, 10));

console.log(typeof suma, typeof resta, typeof multiplicar);

//callback: función como argumento
function imprimirOperacion(operacion, num1, num2) {
    console.log(operacion(num1, num2));
}

imprimirOperacion(suma, 5, 2);
imprimirOperacion(resta, 25, 15);
imprimirOperacion(multiplicar, 3, 2);

//retornar funciones:
function devolverOperacion(operacion) {
    return operacion;
}
const resultado = devolverOperacion(suma);
console.log(typeof resultado);
console.log(resultado(5, 10));

//propiedades y métodos:
function saludar() {
    console.log("Hola");
}
const persona = {
    nombre: "Pepe",
};
saludar.call(persona); //el contexto de ejecución de la función es el objeto persona

//anidar funciones:
function lindaSuma(num1, num2) {
    console.log(`Sumando ${num1} y ${num2}`);
    function sumaInterna(){
        console.log(num1 + num2);
    };
    sumaInterna();
};

lindaSuma(5, 10);

//métodos -> funciones dentro de objetos
const kaly = {
    nombre: "Kaly",
    tipo: "Perro",
    edad: 3,
    ladrar: function () {
        console.log("Guau! Guau!");
    },
};
kaly.ladrar();