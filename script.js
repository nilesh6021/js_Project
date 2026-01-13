console.log("Hello, World!");
//learning java script bacic fundamentals
//1.Data Types
console.log("Data Types:");
let age =31; //number this is integer 
let price =99.99; //number this is float

let name ="nilesh"; //this is string 
let result = true;  //boolean
let isLoggedIn = false; //boolean

let address=null; //null it represents absence of value
let phoneNumber; //undefined it means variable is declared but not assigned any value

console.log(typeof age); //number
console.log(typeof price); //number
console.log(typeof name); //string
console.log(typeof result); //boolean
console.log(typeof isLoggedIn); //boolean
console.log(typeof address); //object
console.log(typeof phoneNumber);//undefined

//2.variables
//varaiable declaration using var,let,const
//varable declaration in JS refers to the process of creating a named storage location in memory to hold data values.
//variable can be declared using var,let,const keywords
//variable can be used within function,loop,conditional statement and global scope;
console.log("Variables:");
//var
var city ="kolhapur"; //declering variable with fucntion scope or global scope
var village; //declering variable without assigning value
village="peth"; //assigning value to variable
village="peth city"; //updating value of variable
//var variable can be redeclared and updated within the same scope
var city ="pune"; //redeclaring variable
//and also var variable is function scoped
//console.log(city); //this will print pune


//let
let county="INDIA";//declering variable with block scope that can be reassigned and updated
county="USA"; //updating value of variable
//let state; //this is valid
let state="Maharashtra"; //this is valid
//state="Gujarat"; //this is also valid
//in let variable can be declared without initializing but cannot be redeclared in the same scope
//let county="CANADA"; //this will throw error
//and also let variable is block scoped

//const
const pi =3.14; //declering constant variable that CANNOT be reassigned or updated
//in const variable must be initialized at the time of declaration
//pi=3.14159; //this will throw error
//const radius; //this will throw error
//const radius=5; //this is valid
//const is block scoped and cannot be redeclared in the same scope


//3.Operators
//operators are special symbols that perform operations on operands (values and variables) to produce a result like arithmetic operations,comparisons,logical operations etc.(mathematical operations)
console.log("Operators:");
//arithmetic operators
const a=10;
const b=5;
console.log("Addition:",a+b); //15
console.log("Subtraction:",a-b); //5
console.log("Multiplication:",a*b); //50
console.log("Division:",a/b); //2
console.log("Modulus:",a%b); //0
console.log("Exponentiation:",a**b); //100000

//comparison operators
console.log("Equal to:",a==b); //false
console.log("Not equal to:",a!=b); //true
console.log("Greater than:",a>b); //true
console.log("Less than:",a<b); //false
console.log("Greater than or equal to:",a>=b); //true
console.log("Less than or equal to:",a<=b); //false

//logical operators
const isAdult = true;
const hasID = false;
console.log("Logical AND:",isAdult && hasID); //false
console.log("Logical OR:",isAdult || hasID); //true
console.log("Logical NOT:",!isAdult); //false   
//these are basic fundamentals of javascript
//more to come in next lessons

//end of script.js
//This is a simple JavaScript program that demonstrates basic fundamentals such as data types, variables, and operators.
//It includes examples and explanations for each concept to help beginners understand the basics of JavaScript programming.//Feel free to modify and expand upon this code as you continue learning JavaScript!


//play around with the code and experiment with different data types, variable declarations, and operators to deepen your understanding of JavaScript fundamentals.

//play with java script code
// JavaScript Playground - Edit me!
