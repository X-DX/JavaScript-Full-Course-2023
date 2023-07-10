// 1. Form Events (submit Form)
let form = document.querySelector('.sign-up-Form');

//using Class
// let email = document.querySelector('#email');
// let password = document.querySelector('#password');


form.addEventListener('submit', e => {
    e.preventDefault(); // help to stop auto reload form 
    // console.log("Submit the Form Successfully");
    // console.log(`Email is ${email.value} and Password is ${password.value}`);

    // using Name 
    console.log(form.userEmail.value, form.userPassword.value);
});

// 2. Regular Expression (Regex)

// its is a pattern of Characters used to do pattern matching
// or we can say for "Data Validation"

// implementation of password Validation

//validation Password
let email = document.querySelector('#email');
let password = document.querySelector('#password');
// let passwordPattern = "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{ 8, }$";
let passwordPattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/; //regular expression
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let passwordValue = password.value;
    console.log(passwordValue);
    let result = passwordValue.match(passwordPattern);
    if (result) {
        console.log("Your Password is Strong");
    }
    else {
        console.log("Try Again");
    }
});

//validation Username
let user = document.querySelector('#name');
let userNamePattern = /^[a-zA-Z\s'-]{1,10}$/;
form.addEventListener('submit', e => {
    e.preventDefault();
    let username = user.value;
    console.log(username);
    // test method return boolen value
    let result2 = userNamePattern.test(username);
    if (result2 == true) {
        console.log("Your User Name is Valid 🐱‍🏍");
    }
    else {
        console.log("Your User Name is Not Valid 😥");
    }
});


// 3. Keyword Evnet
user.addEventListener('keyup', e => {
    if (userNamePattern.test(e.target.value)) {
        console.log("Passed");
    }
    else {
        console.log("Failed");
    }
});

