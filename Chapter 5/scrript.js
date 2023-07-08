// DOM (Document Object Model)
// - Created by browser as the html load into the browser.
// - Browser create object of html called "document object"
// - In Document Object there is model of complete html in tree like structure

// 1. Getting html elements using querySelector/All

// querySelector returns "first element" that match CSS selector

// To get all matched elements we use querySelectorAll

let resultedElement = document.querySelectorAll('p');
console.log(resultedElement);

// 2. Access element with class
let resultedElement2 = document.querySelector('.coderdost');
console.log(resultedElement2);

// 3. Access element with ID
let resultedElement3 = document.querySelector('#coders');
console.log(resultedElement3);

// 4. Update and Change Content
// inner text (its ignore space)
// Retrieve and set content in plain text
let heading = document.querySelector('h1');
heading.innerText = "Welcome Arup";

// inner HTML (its dost not ignore space)
// Retrieve and set content in html formate
let content = document.querySelector('.content');
content.innerHTML += "<h3>Great Coder</h3>";

// 5. Getting and Setting attribute of Element
let coderDostLink = document.querySelector('a');
// console.log(coderDostLink.getAttribute('href'));

// set the attribute
coderDostLink.setAttribute('href', "https://www.youtube.com");
console.log(coderDostLink.getAttribute('href'));
coderDostLink.innerText = "Youtube Channel";

// 6. Adding Style
let heading2 = document.querySelector('h1');
heading2.style.color = "Red";
heading2.style.background = "Grey"

// 7. Add,Remove and Replace Class of Element 
let heading3 = document.querySelector('h1');
heading3.classList.add('newClass');  //add

heading3.classList.remove('main'); //remove
heading3.classList.replace('main', 'newClass'); // replace

// 8. Parent, Children and Sibling Elements
let parentElement = document.querySelector('.content');
// access all children of parent
console.log(parentElement.children);

// we can not run forEach method on HTMLCollection so first convert it into array
console.log(Array.from(parentElement.children));

Array.from(parentElement.children).forEach(function (element) {
    element.classList.add("coder");
})

// access parent from child element
let childElement = document.querySelector('h4');
console.log(childElement.parentElement);

// Find next sibling of child
console.log(childElement.nextElementSibling);
console.log(childElement.previousElementSibling);

// 9. Events Basics (Click Events)
// let eventElement = document.querySelector('.clickme');  // test fot button
// eventElement.addEventListener('click', function () {
//     console.log("Clicked Me");
// });

let elements = document.querySelectorAll('li');
elements.forEach(function (element) {
    element.addEventListener('click', e => {
        // console.log("Item Clicked");
        console.log(e.target);
        e.target.style.textDecoration = "line-through";
    });
});

// 10. Create and Remove the Elements

// creating or add
const ul = document.querySelector('ul');
let button = document.querySelector('.clickme');
button.addEventListener('click', function () {
    let li = document.createElement('li');
    li.textContent = "NewContent Add";
    ul.append(li); // last 
    //ul.prepend(li); // first

})

// remove
let elements2 = document.querySelectorAll('li');
elements2.forEach(function (element) {
    element.addEventListener('click', e => {
        e.target.remove();
    });
});

// 11. Bubbling and Delegation
// it means if any events occurs its also effect on parent also.

// create
const ul2 = document.querySelector('ul');
ul2.addEventListener("click", e => {
    console.log("Inside UL2");
    console.log(e.target);
})