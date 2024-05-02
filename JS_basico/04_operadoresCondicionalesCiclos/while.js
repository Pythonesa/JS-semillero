//lo usamos cuando no sabemos cuantas veces debemos iterar

let i = 0;

while (i < 5) {
    console.log(i);
    i++; //si no incrementamos i sería un bucle infinito
}

//con do-while nos aseguramos de que aunque la condición no se cumpla el código se ejecute una vez

let j = 0;

do {
    console.log(j);
    j++;
} while (j > 5) //la condición nunca se cumple, pero el código se ejecuta una vez antes de revisarla