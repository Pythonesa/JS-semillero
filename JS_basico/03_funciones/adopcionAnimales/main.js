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