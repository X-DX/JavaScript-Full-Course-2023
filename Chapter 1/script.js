// Variable, Constants
var score = 34; // we can re declear
console.log(score);

let points = 15; // we cant re declear , but we can chnage the value.
points = 20;
console.log(points);

const num = 10; // no change anything
console.log(num);


// Data Types of Value
// 7 Data Type
// 1. Number: 1,2,22,888,3.4
// 2. String: "Hello", "34", 'Also String'
// 3. Boolean: true/false
// 4. Null: Intentionally absence of value
// 5. Undefined value: auto declear when you cretae value.
// 6. Object: Complex data structure
// 7. Symbol: Looks like object


// ****************  1. String **************
const firstName = "Arup";
const lastName = "Roy";
console.log(firstName, lastName); // auto space in output

// String Concatination
// Method 1 using + operator
const fullName1 = firstName + " " + lastName;
console.log(fullName1); // no space in output

// Method 2  using template literals
const fullName2 = `${firstName} ${lastName}`;
console.log(fullName2);

// Getting String Charecter
console.log(firstName[0]);

// Method in String
const place = "itanagar";
console.log(place.toUpperCase()); // UPERCASE
console.log(place.indexOf("t")); // know the place of that charecter

// common String Method / divied the string // trim
const programming = "Hello we Programmer";
const result = programming.trim();
console.log(result);

// indexof
console.log(result.lastIndexOf("we")); // case Sensitive
// include
console.log(result.includes("Hello")); // case Sensitive
// slice method
let fullName3 = "javascriptiswow";
console.log(fullName3);
console.log(fullName3.slice(0, 5));
// split
const colour = "Brown Blue Black Green";
const arrColour = colour.split(' ');
console.log(arrColour);

//JS string are immutable
let str = "Hello";
str[0] = "P"; // not able to change
console.log(str[0]); // no change
console.log(str);

// ******************* 2. Numbers ****************
let num1 = 30;
console.log(typeof num1);
// Math Operators *,/,%,**,+,-
console.log(50 / 2);
console.log(60 % 2); // give reminder
console.log(50 * 2 + (4 + 3) - 8 / 2 % 4); // BODMAS

// Concatination of Number
const num2 = 25 + 5;
console.log(`hellow is new number: ${num2}`); // so here when we concatination the num its auto convert to string

// *************** 3. Loose Equality(==) Vs Strict Equality Operator (===) *********
// ==
let age = 22;
console.log(age == 22); // show true , string == number (only check the value, not the type) , thats why it is loose equality
// ===
console.log(age === 30); // focus on both vaule and type

// **************** 4. Type Conversion **************************
const stringType = "54";
console.log(typeof stringType, stringType);
// number method (change in number)
const numberType = Number(stringType); // In Number method passing String Must be of number value
console.log(typeof numberType, numberType);

const numType = 100;
console.log(typeof numType, numType);
// string method (change in string)
const strType = String(numType);
console.log(typeof strType, strType);

// Boolean Method true/flase
let age2 = 34;
let booleanVlaueAge = Boolean(age2);
console.log(typeof booleanVlaueAge, booleanVlaueAge); // output : true (because in number 0=flase and others are ture, and in string "" =false(blank string) and rest true)

// ***************** 5. Array ****************
// if u want to make collection of data 
let dishes = [
    "Biryani",
    "Chat",
    "Chiken Roll"
];
console.log(dishes);
console.log(dishes[0]);

// if u want to modify the Array
dishes[0] = "Allu paratha";
console.log(dishes);

// Array Method
// -Joint Methods
console.log(dishes.join(','));

// -indexof
console.log(dishes.indexOf("Chat")); // case sensitive

// -concat method
let newDishes = ["Sweet-dish", "Pani-Puri"];
console.log(dishes.concat(newDishes));

// lenght method
console.log(newDishes.length);

// push method ( It will change the original Array )
console.log(newDishes.push("Mojito")); // return of push is gives the length of a array
console.log(newDishes);

// pop method (from last)
console.log(newDishes.pop()); // return the last index deleted value
console.log(newDishes);

// ********************** 6. Boolean Value and Comparison Operators ******************
let booleanType = true;
let stringType1 = "true";

console.log(typeof booleanType, typeof stringType1);

// Methods Return Boolean Values
let email = "test@gmail.com";
let booleanCheck = email.includes("@");
console.log(booleanCheck);

// Comparison Operator Always Return Boolean Value
// == , === , !== , !=
// > , >= , < , <=
// this above ops always return true/false