function sum(a, b) {
    return a + b;
}

function calculate(a, b, operation){ //operation -> callback
    return operation(a, b);
}

console.log(calculate(2, 3, sum));

//setTimeout
setTimeout(() => {
    console.log('2 seconds have passed');
}, 2000);

function sayHi(name){
    console.log(`Hello ${name}`);
}

setTimeout(sayHi, 2000, 'Kaly');