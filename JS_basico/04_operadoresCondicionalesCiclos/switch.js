const estado = {
    1: "Activo",
    2: "Inactivo",
    3: "Suspendido",
    4: "Suspendido por tiempo",
}

const estadoDeUsuario = estado[3];

switch (estadoDeUsuario) {
    case "Activo":
        console.log("Tu usuario se encuentra activo");
        break;
    case "Inactivo":
        console.log("Tu usuario se encuentra inactivo");
        break;
    case "Suspendido":
        console.log("Tu usuario se encuentra suspendido");
        break;
    case "Suspendido por tiempo":
        console.log("Tu usuario se encuentra suspendido por tiempo");
        break;
    default:
        console.log("El estado de tu usuario es desconocido");
}