// Intro to JavaScript


// alert("Hello World");

// console.log("Hello I am Ariyan");
// console.log("Hey i am console");
// console.log("Code is running");
// console.log("Code is also running");
// console.log("Code is again running");


// console.log("Variable");


// var a=5;
// var b=10.5;
// var c="harry";
// console.log(a, b, c);
// console.log(typeof a, typeof b, typeof c);

// we should use let instead of var

// let a=5;
// let b=10.5;
// let c="harry";
// console.log(a, b, c);
// console.log(typeof a, typeof b, typeof c);

// {
//     let a=40;
//     console.log(a);
// }

// let a1=40;
// a1=a1+1;
// console.log(a1);

// const PI=3.14;
// console.log(PI);//you cannnot change the value if it is initialized with const

// let a=10;
// let b=10.40;
// let c="Ariyan";
// let d=true;
// let e=null;
// let f=undefined;

// console.log(a ,b ,c ,d ,e ,f);
// console.log(typeof a ,typeof b ,typeof c ,typeof d ,typeof e ,typeof f);

// let o={
//     name: "Ariyan",
//     age: 21,
//     isStudent: true,
//     cgpa: 3.01
// };

// console.log(o);
// console.log(typeof o);

// o.salary=100000;
// console.log(o);


// Expressions & Conditionals

// Comment
// single line Comment
// console.log("Hello World");

// multi line Comment
/*
console.log("Hello World");
console.log("Hello World");
console.log("Hello World");
*/

// operators

// Arithmetic operator

// let a=10;
// let b=2;

// console.log("a + b =", a + b);
// console.log("a - b =", a - b);
// console.log("a * b =", a * b);
// console.log("a / b =", a / b);
// console.log("a % b =", a % b);
// console.log("a ** b =", a ** b);

// a++
// console.log("a =", a);
// a--
// console.log("a =", a);

// Assingment operator

// let a=10;
// console.log(a);
// a+=2;
// console.log(a);
// a-=2;
// console.log(a);
// a*=2;
// console.log(a);
// a/=2;
// console.log(a);
// a%=2;
// console.log(a);
// a**=2;
// console.log(a);

// Comparison operator == != >= <= > < === !== 

// let a=10;
// let b=20;
// console.log("a == b =", a == b);
// console.log("a != b =", a != b);
// console.log("a >= b =", a >= b);
// console.log("a <= b =", a <= b);
// console.log("a > b =", a > b);
// console.log("a < b =", a < b);
// console.log("a === b =", a === b);
// console.log("a !== b =", a !== b);
// console.log("a === 10 =", a === 10);
// console.log("a !== 10 =", a !== 10);

// Logical Operator

// let a=10;
// let b=2;

// console.log("a && b =", a && b);
// console.log("a || b =", a || b);
// console.log("!a" ,!a);
// console.log("!b" ,!b);

// if else

// let age=45;

// if(age>18){
//     console.log("You can vote and you can drive");
// }
// else{
//     console.log("You can't vote and you can't drive");
// }

// if else ladder

// let age=56;
// if(age>=18){
//     console.log("You can vote");
// }

// else if(age==0){
//     console.log("You are a baby");
// }

// else if(age==12){
//     console.log("You are a kid");
// }

// else{
//     console.log("You can't vote");
// }

// ternary operator
// let a=3;
// (a%2==0)?console.log("Even number"):console.log("Odd number");


// loops

// for loop / while loop / do while loop / for in loop  / for of loop

// for(let i=0;i<=5;i++){
//     console.log("Hello World")
// }

// print 1 to 100

// for(let i=1;i<=100;i++){
//     console.log(i);
// }

// print 1 to 100 only even Number

// for(let i=1;i<=100;i++){
//     if(i%2==0){
//         console.log(i);
//     }
// }

// for loop example
// for(let a=0;a<=10;a++){
//     console.log(a);
// }

// while loop example
// let a=0;
// while(a<=10){
//     console.log(a);
//     a++;
// }

// do while loop example
// let a=0;
// do{
//     console.log(a);
//     a++;
// }while(a<=10);

// for of example string and array

// arr=[1,2,3,4,5,6,7,8,9,10];
// for (const element of arr) {
//     console.log(element);
// }

// str="Ariyan"
// for (const element of str) {
//     console.log(element);
// }

// for in example  Object

// o={
//     Name:"Ariyan",
//     Age: 21,
//     Cgpa: 3.01 
// }

// for (const key in o) {
//     console.log(key , o[key]);
// }


// function

// function greeting(){
//     console.log("Hello World");
// }

// greeting();

// function myFunction(name) {
//     console.log("Hey " + name + " you are nice");
//     console.log("Hey " + name + " you are good");
//     console.log("Hey " + name + " your t shirt is good");
//     console.log("Hey " + name + " your course is good");    
// }
// function sum(a,b){
//     return a+b;
// }

// console.log(sum(5,7));

// function threenumsum(a,b,c){
//     return a+b+c;
// }
// console.log(threenumsum(5,7,9));

// arrow function

// const sum1=(a,b)=>{
//     return a+b;
// }
// console.log(sum1(5,7))