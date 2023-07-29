// Local storage

// In previous todo list task when we refresh the browswer we lose our current state data
// store and retrieve data from database
// store and retrive data from local storage

// is an API provided by browser to store data inside browser
// console.log(localStorage);

// Set the item  in local storage
localStorage.setItem('passion', "programing");
localStorage.setItem('age', 24);
console.log(localStorage);

// Get item from local storage
console.log(localStorage.getItem('passion'));

// update
localStorage.setItem('age', 26); // overwrite age
console.log(localStorage);

// Remove (one by one) or use clear method
localStorage.removeItem("age");
localStorage.removeItem('passion');
console.log(localStorage);

// How to store complex data structure like array of object
// ultimately in local storage data store in string formate

let vehicles = [
    {
        company: "Honda",
        Model: "2006"
    },
    {
        company: "Toyota",
        Model: "2021"
    }
];
// console.log(typeof vehicles);
// save exctly same and retrive
let stringOfVehicles = JSON.stringify(vehicles); // convert object to string => then it will save to local storage
console.log(stringOfVehicles);

localStorage.setItem("vehicles", stringOfVehicles);
console.log(localStorage);

// Get Stored item again in Object formate
let storeData = localStorage.getItem("vehicles");
let objectFormate = JSON.parse(storeData); // convert string to Object
console.log(objectFormate);
