function calcularDescuento(precio, descuento){
    return precio * descuento / 100;
}

function precioFinal(precio, descuento){
    const precioDescuento = calcularDescuento(precio, descuento);
    return `El descuento es de ${precioDescuento} y el precio final es ${precio - precioDescuento}.`
}

function onClickButtonPriceDiscount(){
    const inputPrice = document.getElementById("inputPrice");
    const priceValue = inputPrice.value;
    const inputDiscount = document.getElementById("inputDiscount");
    const discountValue = inputDiscount.value;
    
    const result = document.getElementById("result");
    result.innerText = precioFinal(priceValue, discountValue);
}