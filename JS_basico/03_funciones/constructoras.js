const cohete = {
    nombre: "Falcon 9",
    mensajeDespegue: function mensajeDespegue() {
        console.log("¡Despegue!");
    }
};

const cohete2 = {
    nombre: "X-15",
    mensajeDespegue: function mensajeDespegue() {
        console.log("¡Despegue!");
    }
};

/*Duplicar código hace que:
    - mantenerlo sea difícil
    - aumente la complejidad
    - aumente la posibilidad de errores
    - se dificulte encontrar los errores
    - se vuelva cada vez más difícil de escalar
    - consume cada vez más tiempo y recursos
    - violemos el principio de diseño DRY: Don't Repeat Yourself.
*/

//https://blog.ahierro.es/principios-kiss-dry-y-yagni/

//FUNCIONES CONSTRUCTORAS:
//por convención su nombre comienza con mayúscula
// lo correcto sería declararla en una clase con la palabra reservada "constructor" pero eso lo vamos a ver cuando veamos programación orientada a objetos (POO)
function Videojuego(titulo, genero, precio){
    this.titulo = titulo;
    this.genero = genero;
    this.precio = precio;
    this.mostrarInfo = function(){
        console.log(`El videojuego ${this.titulo} es de genero ${this.genero} y tiene un precio de ${this.precio}`);
    }
}

const fifa20 = new Videojuego("Fifa 20", "Deportes", 100);
const fear = new Videojuego("F.E.A.R. 3", "Acción", 80);
const doomEternal = new Videojuego("Doom Eternal", "Acción", 100);
const sims4 = new Videojuego("Sims 4", "Simulación", 60);
const needForSpeed = new Videojuego("Need For Speed Most Wanted", "Carreras", 70);

fifa20.mostrarInfo();
fear.mostrarInfo();
doomEternal.mostrarInfo();
sims4.mostrarInfo();
needForSpeed.mostrarInfo();
