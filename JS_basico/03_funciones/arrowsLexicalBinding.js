function saludar() {
    console.log("Hola función tradicional");
}

//Las funciones de flecha tienen una sintaxis mucho más concisa que las tradicionales y una vinculación léxica del valor de this.
const saludarFlecha = () => {
    console.log("Hola función flecha");
}

saludar();
saludarFlecha();

//Cuando tienen una sola línea se pueden omitir las llaves y el return
function suma(num1, num2) {
    return num1 + num2;
}

const sumaFlecha = (num1, num2) => num1 + num2;

console.log(suma(1, 2));
console.log(sumaFlecha(1, 2));

//Las funciones tradicionales tienen una vinculación dinámica del this
function Persona() {
    this.edad = 0;
    //lo siguiente da NaN porque el this.edad es undefined
    /* setInterval(function crecer() {
        console.log(this.edad);
        this.edad++;
        console.log(this.edad);
    }, 1000); */
    //pero si usamos una función flecha mantenemos el contexto de la función externa y por ende el this:
    const i = setInterval(() => {
        //console.log(this.edad);
        this.edad++;
        console.log(this.edad);
        if (this.edad === 5) clearInterval(i);
    }, 1000);
    
};

const persona = new Persona();