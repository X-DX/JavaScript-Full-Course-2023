// object in JS = its is an data structure
// 1. create object
let car = {
    colour: "black",
    model: "2022",
    company: "Honda"
}
console.log(car);

// 2. Accessing the JS onject properties
// case 1
console.log(car["model"]); // here we can change the value 
// case 2
console.log(car.colour); // here search the same string 

// 3. Modify the object
car.colour = "RED"
console.log(car.colour);

// 4. Delete Properties of Object
let obj = {
    prop1: "value1",
    prop2: "value2"
}
console.log(obj);
delete obj.prop1; // always return true
console.log(obj);

// 5. Function Vs Method
// function eg. ( sample function )
let ageCalculate = function (birthyear) {
    let age = 2023 - birthyear;
    console.log(`Current Age is= ${age}`);
}
ageCalculate(1996);

// Method => function declear inside object. It is nothing but object property(key) holding function as value
let person = {
    agecal: function (birthyear) {
        let age = 2023 - birthyear;
        return age;
    }
}
console.log(`Current Age is = ${person.agecal(2000)}`);

// 6. this keyword
// - In Each Method we have an access of Special Keywod called "this"
// - "this" keyword represent the object. "calling" the method in which "this" is present

let person2 = {
    firstName: "Harry",
    lastName: "Brook",
    city: "Itanagar",
    birthyear: 1996,
    education: "software Engineer",
    getSummary: function () {
        return `${this.firstName} ${this.lastName} lives in ${this.city} ${this.birthyear} ${this.education}`
    }
}
console.log(person2.getSummary());

// 7. forEach method of array
// - Its another type of loop which we used to traverse over the array
let dishes = ["Biryani", "Channy", "karahai", "paratha"];
dishes.forEach(function (element) { // also called functional programing
    console.log(element);
})

// 8. Objects inside 
let blockList = [
    {
        userName: "john",
        reason: "Abusive Content"
    },
    {
        userName: "paul",
        reason: "copyright"
    }
];
console.log(blockList);

for (let i = 0; i < blockList.length; i++) {
    console.log(`user ${blockList[i].userName} is block for ${blockList[i].reason}`);
}

// 9. Math Object built in object in javascript
let number = 7.6;
console.log(Math.round(number)); // round to nearest integer
console.log(Math.floor(number)); // round to down
console.log(Math.ceil(number));  // round to up
console.log(Math.trunc(number)); // remove the decimal part
let random = Math.random();
console.log(Math.round(random * 100)); // 1-100

// 10. call and apply method
// - we can manually set the value of "this" keyword using "call and apply"
let mainPlan = {
    airline: "Fly India",
    iatacode: "FI",
    booking: [],
    book: function (flightNum, name) {
        console.log(`${name} Booked Flight on ${this.airline} with flight Number ${this.iatacode} ${flightNum}`);
        this.booking.push({ flightName: `${this.airline}`, name: name })
    }
}
mainPlan.book(553, "Arup");
console.log(mainPlan);

// 11. bind method  {help in React}

function greet() {
    console.log(`Welcome ${this.firstName} ${this.lastName} on coder dost`);
}

let user = {
    firstName: "John",
    lastName: "Paul"
}

let greets = greet.bind(user);
greets();

// 12. Object/array how reference are possed to variable
let arr = [1, 2, 3, 4, 5];
let getRef = arr;
// getRef[6] = 7; // add in both array
// getRef.shift(); // remove 1st element
console.log("Orriginal Array", arr);
console.log("Get Ref Array", getRef); // its print same original Array
console.log("*************");
// pass by value
let getValue = [...arr];
getValue[5] = 8;
getValue.shift();
console.log("Orriginal Array", arr);
console.log("Get Ref Array", getValue);

// 13. for-in loop (each iteration return a "key" of object)
let car2 = {
    model: 2022,
    color: "black",
    company: "Toyota"
}
console.log(car2);
console.log("********");
let x = "";
for (let key in car2) {
    x = x + car2[key]
}
console.log(x);