// Date and Time
// Date object always carry both "date" and "time"
// using date method
let currentDate = new Date(2023, 06, 20); // constructor 
// 0 - 11 (month)
console.log(currentDate);

// using timeStamp(integer number represent in "ms" from 1-1-1970)
let currentDate2 = new Date(0); // 0 menas start from 1-1-1970 mili-second
// 1 day = 24 * 60 * 60 = 8640000 ms
console.log(currentDate2);

// To get time in ms
let currentDate3 = new Date().getTime();
console.log(currentDate3);

// advanced method
let completeDateAndTime = new Date();
console.log("Today date:", completeDateAndTime);

// find year
console.log(completeDateAndTime.getFullYear());
// find month
console.log(completeDateAndTime.getMonth()); // its work like array 0-11 jan-dec
// find day
console.log(completeDateAndTime.getDay());
// find date
console.log(completeDateAndTime.getDate());

// Digital clock
let hourHand = document.querySelector('.hour');
let minHand = document.querySelector('.minute');
let secHand = document.querySelector('.second');

let ticking = function () {
    let currentDate4 = new Date();
    let getHour = currentDate4.getHours();
    let getMin = currentDate4.getMinutes();
    let getSec = currentDate4.getSeconds();

    hourHand.textContent = getHour;
    minHand.textContent = getMin;
    secHand.textContent = getSec;
}

setInterval(ticking, 1000);

