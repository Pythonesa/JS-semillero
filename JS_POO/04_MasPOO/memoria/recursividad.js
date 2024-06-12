/* let num = 0;

while(num < 10){
    console.log(num);
    num++;
} */

function recursion(num){
    if (num < 10){
        console.log(num);
        return recursion(num + 1);
    } else {
        return num;
    }
}

recursion(0);