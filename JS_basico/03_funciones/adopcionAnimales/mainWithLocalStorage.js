let animals = [];

//función constructora, para el botón Adoptado:
function Animal(name, age, sex, species, isAdopted) {
    this.name = name;
    this.age = age;
    this.sex = sex;
    this.species = species;
    this.isAdopted = isAdopted;
    this.adopt = function() {
        if (this.isAdopted === "false") {
            this.isAdopted = "true";
            saveAnimalsToLS();
            renderAnimalList();
        } else {
            alert("El animal ya fue adoptado!");
        };
    };
};

//función para el botón "Agregar Animal":
function newAnimal(event) {
    event.preventDefault();//para que no recargue la página

    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const sex = document.getElementById("sex").value;
    const species = document.getElementById("species").value;
    const isAdopted = document.getElementById("isAdopted").value;

    const newAnimal = new Animal(name, age, sex, species, isAdopted);
    animals.push(newAnimal);
    saveAnimalsToLS();

    renderAnimalList();

    clearFormNewAnimal();
    document.getElementById("btnNewAnimal").blur(); //quita el focus del botón (por el estilo)
};

//función para renderizar la lista:
function renderAnimalList() {
    const animalsList = document.getElementById("animals");
    animalsList.innerHTML = "";

    animals.forEach((animal) => {
        const item = document.createElement("div");
        item.innerHTML = `
            <p><strong>${animal.name}</strong> de ${animal.age} años es de la especie ${animal.species}, es ${animal.sex} y ${animal.isAdopted === "true" ? "tiene un hogar" : "no tiene un hogar"}.</p>
        `;

        if (animal.isAdopted === "false") {
            const adoptButton = document.createElement("button");
            adoptButton.innerText = "Adoptado!";
            adoptButton.onclick = () => animal.adopt();
            item.appendChild(adoptButton);
        }

        animalsList.appendChild(item);
    });
};

//función que limpia los campos para utilizar luego de añadir un nuevo animal:
function clearFormNewAnimal() {
    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("species").value = "";
}

//Funciones para LocalStorage!

//guardar lista en LocalStorage:
function saveAnimalsToLS() {
    localStorage.setItem("animals", JSON.stringify(animals));
}

// Cargar lista desde el LocalStorage y recrear los objetos Animal (sino, no tendrán el método adopt):
function loadAnimalsFromLS() {
    const storedAnimals = localStorage.getItem("animals");
    if (storedAnimals) {
        const parsedAnimals = JSON.parse(storedAnimals);
        // Recrear los objetos Animal con sus métodos:
        animals = parsedAnimals.map(animalData => {
            let animal = new Animal(animalData.name, animalData.age, animalData.sex, animalData.species, animalData.isAdopted);
            return animal;
        });
        renderAnimalList();
    }
}

//llamamos a la función de carga para que cargue la lista al cargar la página luego de que el DOM haya cargado:
document.addEventListener("DOMContentLoaded", function() {
    loadAnimalsFromLS();
});