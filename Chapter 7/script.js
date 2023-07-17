// Array Methods
let letters = ["a", "b", "c", "d"];

// 1. Reverse (Mutate the original array)
let reverseResult = letters.reverse();
console.log("Original Array:", letters);
console.log("Reverse Array:", reverseResult);

// 2. concat
let num = [1, 2, 3, 4];
let concated = num.concat(letters);
console.log(concated);

// 3. join
let joined = letters.join(','); // new copy of original
console.log(joined);

// 4. Slice Method
// used to extract part the array
// Array.slice(startIndex,lastIndex(excluded))
// Return new Array of extracted elements

let num2 = [3, 5, 7, 9, 2];
let extractedArray = num2.slice(1, 4); // 1,4 means index
console.log("Original Arrray:", num2);
console.log("Extracted Array:", extractedArray);


// 5. splice Method

// used to add new elements into the array
// array.splice(index,deleteValue,valueToBeAdded)
// Return deleted item in the form of array
// it can change original array

let num3 = [3, 4, 5, 6, 7, 8]; // output change original array
let newUpdated = num3.splice(1, 1, 1);
console.log("****");
console.log("original Array:", num3);
console.log("New Updated Array:", newUpdated);

// 6. at method

let num4 = [23, 54, 77, 88, 99];
console.log(num4[0]); // it return the index and also works on -ve index
console.log(num4.at(0));

// getting last element of the array
console.log("Normal index", num4[num4.length - 1]);
console.log("Slice", num4.slice(-1)[0]);
console.log("at", num4.at(-1));

// at method also work in string
let name11 = "Arup";
console.log("String at method:", name11.at(-3));


// 7. Map Method (Higher order function)

// Create new array from original array by applying Transformation function
let salaries = [3000, 5000, 8000, 6000, 9000];
let newSalaries = salaries.map(salary => { // make copy of array. we use when we need same array lenght
    let incrementedAmount = salary / 2;
    return salary + incrementedAmount;
});
console.log("Old Salaries:", salaries);
console.log("New Salaries:", newSalaries);

// 8. filter method (used to perform Filtration an array)
let gifts = ["watch", "pen", "laptop", "Cocolates", "Phone", "Ring"];
// Now you want to filter only "watch and Ring"
let filterArray = gifts.filter(gift => {
    if (gift == "watch" || gift == "Ring") {
        return gift;
    }
});
console.log("Original Array:", gifts);
console.log("Filter Array:", filterArray);

// 9. reduce Method
// Run reducer function for each array element
// Array.reduce(function(total,currentValue),initiaValue)
// It return single value

let num5 = [1, 2, 3, 4, 5];
let sum = num5.reduce(function (total, currentValue) { // does not mutate original array
    return total + currentValue
}, 0);
console.log(sum);

// 10. find method
// its return the first element we are looking for ....
let students = [{ id: 1, name: "alex" }, { id: 2, name: "jphn" }];
let result = students.find(student => {
    return student.id === 1;
});
console.log(result);

// 11. findIndex METHOD
// Execute function for each array element 
// It return "index" of the array element who "first" pass the test "otherwise" -1

let ages = [10, 20, 23, 54, 50, 55];
let result2 = ages.findIndex(age => {
    return age > 15;
});
console.log("Index of required age:", result2);

// 12. some and every method
// some method return "true" id "any" array element pass the test
// every method return "true" if "all" element pass the test

let scores = [25, 34, 67, 65, 80, 92];
let result3 = scores.some(score => {
    return score > 50;
});
console.log("Some :", result3);

let result4 = scores.every(score => {
    return score > 10;
})
console.log("Every:", result4);


//  13. Flat method
// it creates a new array with the element of the subarray "Concatenated into it."
let arr = [1, 2, 3, [4, 5, 6]];
console.log(arr);  // no effect on original array

let result5 = arr.flat(); // bt default 1 (depth value) value
console.log("After Flat", result5);

// 14. flatMap method
// it is the combination of the map() method followed by the flat() method of depth 1
let cart = [{
    name: "Mobile",
    qty: 2,
    price: 500
},
{
    name: "tablet",
    qyt: 5,
    price: 500
}];
console.log("Cart:", cart);
let newCart = cart.flatMap(item => {
    if (item.name == "Mobile") {
        return [item, {
            name: "Screen Protector",
            qty: 1,
            Price: 0
        }]
    }
    else {
        return [item];
    }
});
console.log("New Cart:", newCart);

// 15. Sorting array using sort method
// By default sort method is used to sort string. It firstly convert everything into string and then...

let letter = ["d", "e", "f", "a"];
console.log("Sorted Array:", letter.sort()); // sorted in acsending order

let nums = [2, 8, 1, 5, 4, -1, 22, -8, 55];
console.log(nums.sort()); // by default take as string

// use this algo - if a-b < 0 => a < b =>  A,B  (Keep order same)

// if a-b > 0 => a > b => B,A (Switch the order)

nums.sort((a, b) => {
    if (a < b) {
        return -1; // any num less than 0
    }
    if (a > b) {
        return 1; // any num greater than 0
    }
})

console.log(nums);

// 16. Chain of method
let nums2 = [1, 2, 3, 4, 5, 6];
let result6 = num.slice(0, 3).splice(2, 1, 7);
console.log(result6);