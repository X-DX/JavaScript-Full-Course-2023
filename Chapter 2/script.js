//********************** Control flow ***************
// 1. For loop
for (let i = 1; i <= 10; i++) {
    console.log("Hello", i);
}
// use case of loop
let dishes = ["Biryani", "Chat-Masala", "Pani-Puri"];
for (let i = 0; i <= dishes.length; i++) {
    console.log(dishes[i]);
}

// 2. While Loop
let j = 1;
while (j <= 5) {
    console.log("While Loop", j);
    j++;  // without this line code will go infinite
}

// 3. Do While Loop
let ja = 1;
do {
    console.log("At Least Run Time =", ja);
    ja++
}
while (ja <= 1)

// 4. if else, else if
let budget = 4000;
if (budget >= 6000) {
    console.log("Will do dinner in Hotel");
}
else if (budget >= 5000) {
    console.log("Will do dinner in Resturent");
}
else {
    console.log("Not able to get dinner");
}

// 5. nested if
let num = 20;
if (num > 18) {
    console.log("yes");
    if (num >= 20) {
        console.log("Yes yes");
    }
}

// 6. Break and continue Statement
for (let i = 1; i <= 10; i++) {
    if (i == 2) {
        continue; // Move towards the next iteration 
    }
    console.log("Value of i=", i);
}

for (let ii = 1; ii <= 10; ii++) {
    if (ii == 5) {
        console.log("Our desired value is =", ii);
        break;
    }
}

// 7. Logical Operators
// And(&&), or (||), Not(!)

let password = "test@";
if (password.length > 5 && password.includes("@")) {
    console.log("Password is Strong");
}
else {
    console.log("Password is not strong");
}

let status = false;
if (!status) {
    console.log("Your Status is =", status);
}

// 8. Varibales and Block Scope
// Block --> Area where variable is defined or Accessible
let score = 50; // Global Scope
if (score == 50) {
    let score1 = 100; //  Block Scope 
    console.log("Score", score);
    console.log("Score", score1);
}
// console.log("Score", score1); // this make error

// 9. Ternary Operator (? :) its means if else
let age = 20;
let result = age >= 18 ? "Qualify" : "Fail";
console.log(result);

// 10. Switch Statement
let age2 = 16;
switch (age2) {
    case 15:
        console.log("case 15");
        break;
    case 16:
        console.log("case 16");
        break;
    case 17:
        console.log("case 17");
        break;
    default:
        console.log("Not Valid");
        break;
}
