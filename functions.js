'use strict'

function greet(name){
    //return "Hello, "+ name +"!";
    console.log("hello, "+name);

}

let result =greet("nilesh");
console.log(result);


let num1=5;
let num2=10;
function cala(num1,num2){
    return num1 + num2;
}
let addition =cala(num1,num2);
console.log("Addition:"+ addition);

//Function expression
const square = function(number){
    return number * number;

}
let sqr =square(8);
console.log("Square:"+sqr);


//Arrow function
//give a more concise syntax for writing function expressions
const multiply =(x,y) => {
    return x * y;
}
let mul =multiply(4,6);
console.log("Multiplication:"+mul);

//Implicit return
const divide =(x,y) => x / y;
let div =divide(20,4);
console.log("Division:"+div);

//Function with default parameters
function power(base, exponent=2){
    return base ** exponent;
}       
let pow =power(3);
console.log("Power:"+pow);
// i cant understand this code properly please explain it to me in detail
//Function with rest parameters
function sumAll(...numbers){
    return numbers.reduce((acc, curr) => acc + curr, 0);
}

let sum = sumAll(1, 2, 3, 4, 5);
console.log("Sum of all numbers:", sum);




//D:\NILESH PATIL\JS\functions.js