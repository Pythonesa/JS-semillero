function greeting(hobby, country) {
    console.log(`Hola, soy ${this.name}, tengo ${this.age} años, mi hobby es ${hobby} y soy de ${country}.`);
};

const mar = {
    name: "María",
    age: 36
};

const marHobby = "aprender JS";
const marCountry = "Uruguay";

greeting.call(mar, marHobby, marCountry); //con call pasamos el objeto como contexto a la función, pero la función no está vinculada a este objeto

const greetingValues = [marHobby, marCountry];

greeting.apply(mar, greetingValues); //con apply pasamos un arreglo con los parámetros que necesita la función en lugar de pasarlos por separado

const greetingFunction = greeting.bind(mar, marHobby, marCountry); //con bind pasamos el contexto pero en lugar de ejecutar la función nos la devuelve vinculada al contexto y a los parámetros

console.log(greetingFunction);

greetingFunction();