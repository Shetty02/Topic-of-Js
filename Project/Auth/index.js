// 
const DB_USERS = []

// We are Creating a ResetFunction for resting the details empty are clicking on submit Button.
const resetSignFields = () => {
    document.getElementById('signup-first-name').value = ''
    document.getElementById('signup-last-name').value  = ''
    document.getElementById('signup-phone').value = ''
    document.getElementById('signup-email').value = '' 
    document.getElementById('signup-password').value = ''
    document.getElementById('signup-confirm-password').value=''
    document.getElementById('invalidCheck').checked =false 

}
const resetLoginFields = () => {
    document.getElementById('login-email').value = '' 
    document.getElementById('login-password').value = ''

}
const signup = () => {
    // console.log("Hi !");
    // if we just write document.getElementById('') , it only gives us the it give me that specific node of the DOM it won't  give me the value of it .
    // for accessing the value we have to use document.getElementById('').value.
    let firstName = document.getElementById('signup-first-name').value 
    let lastName = document.getElementById('signup-last-name').value 
    let phone = document.getElementById('signup-phone').value
    let email = document.getElementById('signup-email').value 
    let password = document.getElementById('signup-password').value 
    // Note : We are not doing this for Confirm-password because we are not storing the value thus. we are just checking password is same or not.


    // Here we are creating a userDetalis Object by using a Object Property Assignment (OPA)
    let userDetails = {
        firstName,
        lastName,
        email,
        password,
        phone
    }
    // DB_user  is Storing the Database inside the Array, whenever the user is login.
    DB_USERS.push(userDetails)
    // console.log(DB_USERS)
    resetSignFields(); // we call restfields after clicking on Submit Button
}



const Login = () => {
    let enteredEmail = document.getElementById('login-email').value
    let enteredPassword = document.getElementById('login-password').value 

    
    let currentUser = DB_USERS.find((element) => element.email === enteredEmail)
    let currentPassword =DB_USERS.find((element) => element.password === enteredPassword)
    console.log(currentPassword) ;
    resetLoginFields();
}

// function of Find() method 
// Always return a condition to find the element, If value exists ,returns the value, else returns the undefined 
/*
2  Steps
1) Check Whether the email (user) exits in DB
2) Whether enterted password matches with saved password
*/
