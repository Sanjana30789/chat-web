console.log("Hello world!!");
    // alert("Welcome to the E-cell!!");
    // console.error("This is the error ");
    // console.warn("This is warning");
    
    
// javaScript Variables == Dynamic in nature 
// Javascript is case sensitive 
// Numbers 
// var number1 = 20;
// var number2 = 30;
// console.log(number1 + number2);

// Strings 
// var string1  = "This is Sanjana";
// var string2 = 'This is me !!';

// // Objects 
// var Marks = {
//     name : 'Sanjana' ,
//     age : 20 ,
//     marks : 92.00
// }
// console.log(Marks);
// Difference between let,var and const 
//  let is used in blocks and whereas var can be globally accessed
// var can be updated and redeclare but let cannot be redeclared
// const can never be updated or redeclared
// let a = "Sanjana";
// a = "Aayansh"; // Updated the a variable using let 
// {
//     let a = 10 ;
//     console.log(a);
// }
// console.log(a);
// DataTypes in Javascript 
// Primitive DataTypes : 
// nn bb ss u 
let one = null;
let b = 345;
let c = true;
let d = BigInt("567");
let e = "Sanjana";
let f = Symbol("This is a Javascipt Turorial");
let g = undefined;
console.log(one,b,c,d,e,f,g);
console.log(typeof f);

// Non-Primitive Datatypes = Objects 
const item = {
    "Sanjana" : true,
    "Aayansh": 92,
}
console.log(item["Aayansh"]);

// Operators and Expressions
// Comparison Operators 
// let comp1 = 6;
// let comp2 = "6";
// console.log(comp1 == comp2);
// console.log(comp1 === comp2);

// Conditional Expressions 
// let a = prompt("Hey!! Whats ur age?")
// a = Number.parseInt(a);// convert string into number
// if(a > 0){
//     alert("This is a valid age");
// }
// else{
//     alert("Not Valid");
// }

// Switch Statements
// const x = "Mango";
// switch(x){
//     case "Papaya" :
//         console.log("This is Papaya");
//         break ;
//     case "Apple":
//         console.log("This is Apple");
//         break;
//     case "Mango" :
//         console.log("This is Mango");
//         break;
//     default :
//     console.log("This is invalid input");
// }

// Loops in Javascript 
// Program to add n natural numbers 
// let sum = 0;
// let n = prompt("Enter the value of n");
// n = Number.parseInt(n);
// for(let i =0 ;i<n;i++){
//     sum += i
// }
// alert("The sum is " + sum);

// For in loop for objects 
// let obj ={
//     sanjana : 92,
//     sanika : 97,
//     Mayank : 95,
//     shiv : 23
// }
// for(let i in obj){
//    console.log("Marks of "+ i + " are " + obj[i]);
// }

// // For of loop 
// for(let i of "Sanju"){
//     console.log(i)
// }

// // while loop 
// let i = 0 ;
// while(i<4){
//     console.log(i);
//     i++;
// }

// Functions in javascript 
function onePlusaverage(a,b){
    console.log("Done");
    return Math.round(1 + ((a+b)/2))
}

console.log(onePlusaverage(10,55));

// Arrow Function
const sum = (p,q) => {
   return p + q ;
};
console.log(sum(10,20))

// Strings in Javascript 
// Index starts from 0
// Strings are immutable == not change
let name = "Sanjana";
console.log(name.length);
for (let i =0;i<name.length;i++){
    console.log(name[i])
}
// Template literals 
let boy1 = "Promod";
let boy2 = "Nikhil";
let sentence = `${boy2} is a friend of ${boy1}`;
console.log(sentence);

// Escape Sequence Characters 
let fruit = 'Bana\tna'
console.log(fruit);

// Strings Methods 
console.log(name.toUpperCase());
console.log(name.toLowerCase());
console.log(name.slice(2,5));
console.log(name.replace("ja","ma"));
let name2 = "Choubey"
console.log(name.concat(name2));
let name3 = "   Aayansh   ";
console.log(name3);
console.log(name3.trim());


// Arrays in Javascript
// Arrays are mutable 
let fruits = ['Mango','Apple','Peru'];
console.log(fruits.length);
console.log(fruits[1]);
fruits[0]= 'Pomegranate';
console.log(fruits);
console.log(typeof fruits);

// Array Methods 
console.log(fruits.pop());
fruits.push("Cherry");
console.log(fruits);
fruits.shift()
console.log(fruits);

// Dates in Javascript 
let myDate = new Date();
console.log(myDate.getTime());
console.log(myDate.getFullYear());
console.log(myDate.getDay());
console.log(myDate.getHours());

// DOM (Document Object Model)
let elem = document.getElementById('first');
console.log(elem);
let elemclass = document.getElementsByClassName("container");
console.log(elemclass);
// elemclass[0].style.background = "Yellow";
elemclass[0].classList.add("primary");