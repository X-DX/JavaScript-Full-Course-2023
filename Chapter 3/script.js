//************ functions ***********
// 1. Declearation
function nameOfFunaction() {
    console.log("This is a First function code");
}
// call the function
nameOfFunaction();

// 2. Function Expression
let fun = function () // also called annoymous function
{
    console.log("This is an example of function expression");
}
// call the function
fun();

// eg: passing values (Arguments and Parameters)
let invitation = function (name) { // local varibale to this function
    console.log(`Welcome ! ${name} You are invited on our event`);
}
invitation("Arup");

// eg: passing values (Arguments and Parameters)
let invitation2 = function (name = "defaultName", time = "night") {
    console.log(`welcome ! ${name} you are invited on our event and time will be ${time}`);
}
invitation2("Ram", "Aftrenoon");
invitation2("Sam");
invitation2("", "Morning");

// Returing Value (How to return form the function)
let ageCalculation = function (birthYear, currentYear = 2023) {
    let age = currentYear - birthYear;
    return age; // after this line if any line come it will not excute.
}
console.log("Age is:", ageCalculation(1996));

// 3. Arrow Function (ES6)

// Special Form of Function Expression
// It allows us to write function more fast because
// No need to use function keyword
// No need to use paranthesis() in case of single parameter
// No need to use curely {} if single line code in function
// No need to use return statement if single line code in function
let invitation3 = name => `welcome ${name} to this event`
console.log(invitation3("Arup"));

//  4. Passing  function as an Argument (Higher order function example)
// eg: 1
let upperCase = function (str) {
    return str.toUpperCase();
}

let lowerCase = function (str) {
    return str.toLowerCase();
}
let transformer = function (str, fun) {
    return fun(str);
}
console.log(transformer("hello", upperCase)); // transformer = Higer order function

// eg: 2 function returning another function
let compliment = function (msg) {
    return function (name) {
        console.log(`${msg} ${name}`);
    }
};
console.log(compliment("You are good Coder")("Arup"));

// 5. Immediately Invoked function Expression
// Execuated Only Once

// Now this is expression
(function () {  // no need name
    console.log("This Function will never execuate Again");
})
    ()  // call function

// 6. setTimeOut and setInterval

// setTimeOut -> Run Function "once" after "interval" of time
// syntax: setTimeOut(func|code, delay, arg1, arg2,...)
function greeting(name) {
    console.log(`Welcome ${name} to our coder dost family`);
}
setTimeout(greeting, 2000, "Arup"); // 2000 = 2sec

// setInterval -> Run function repeatedy, Starting after the interval of time, then repeating..
// syntax: setInterval(func|code, delay, arg1, arg2,...)

// setInterval(greeting, 3000);

// 7. Hoisting
// varible "declaration" are "hoisted" toword top of their scope for FUNCTION DECLARATION
// In Normal function it is ok to call in upper
test();
function test() {
    console.log("Hello Programmer");
}

// In arrow Function it will show the error , so here we cant use call function before
// test1();
// let test1 = () => {
//     console.log("Hello Programmer 1");
// }
