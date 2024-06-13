function errorRequiredParam(reqParam) {
    throw new Error(`El parámetro ${reqParam} es obligatorio`);
}

function createUser ({name = errorRequiredParam("name"), email = errorRequiredParam("email"), age, socialMedia={}}) {
    return {
        name,
        age,
        email,
        socialMedia
    }
}

const miguel = createUser({
    name: "Miguel", 
    age: 25, 
    email: "L0f6p@example.com", 
    socialMedia: {
        facebook: "miguel", 
        instagram: "L0f6p"
    }
});

const kaly = createUser({
    name: "Kaly",
    age: 3, 
    email: "kaly@bestdog.com",
})

console.table({miguel, kaly})

/* const pepe = createUser({ //El parámetro email es obligatorio
    name: "Pepe",
    age: 30
}); */