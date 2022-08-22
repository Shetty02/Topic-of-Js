const encryptData = {
    'A': 'N', 'B': 'O', 'C': 'P', 'D': 'Q',
    'E': 'R', 'F': 'S', 'G': 'T', 'H': 'U',
    'I': 'V', 'J': 'W', 'K': 'X', 'L': 'Y',
    'M': 'Z', 'N': 'A', 'O': 'B', 'P': 'C',
    'Q': 'D', 'R': 'E', 'S': 'F', 'T': 'G',
    'U': 'H', 'V': 'I', 'W': 'J', 'X': 'K',
    'Y': 'L', 'Z': 'M',
    'a': 'n', 'b': 'o', 'c': 'p', 'd': 'q',
    'e': 'r', 'f': 's', 'g': 't', 'h': 'u',
    'i': 'v', 'j': 'w', 'k': 'x', 'l': 'y',
    'm': 'z', 'n': 'a', 'o': 'b', 'p': 'c',
    'q': 'd', 'r': 'e', 's': 'f', 't': 'g',
    'u': 'h', 'v': 'i', 'w': 'j', 'x': 'k',
    'y': 'l', 'z': 'm',
    '0': '5', '1': '6', '2': '7', '3': '8',
    '4': '9', '5': '0', '6': '1', '7': '2',
    '8': '3', '9': '4',
    '!': '#', '$': '%', '&': '+', '-': '@',
    '_': '~', '#': '!', '%': '$', '+': '&',
    '@': '-', '~': '_'
}


const DB_USERS = [] //Database array

let encryption = (inputString) =>{
let encryptedPassword = "";
for(char of inputString){
    encryptedPassword = encryptedPassword + encryptData[char]
}
return encryptedPassword
}
let keys = Object.keys(encryptData)
let values = Object.values(encryptData);

let decrypt = (password) =>{
let actualPasword =""
for(char of password){
    let charIndex = values.findIndex(value => value === char)
    actualPasword = actualPasword + keys[charIndex]
}
return actualPasword
}

const signUpReset = () =>{
document.getElementById('signup-firstName').value = ""
document.getElementById('signup-lastName').value = ""
document.getElementById('signup-phoneNumber').value = ""
document.getElementById('signup-email').value = ""
document.getElementById('signup-password').value = ""
document.getElementById('signup-confirmPassword').value = ""
document.getElementById('tnC').checked = false

setTimeout(()=> {
    document.getElementById('first-name-valid').style.display = 'none';
    document.getElementById('first-name-invalid').style.display = 'none';
    document.getElementById('last-name-valid').style.display = 'none';
    document.getElementById('last-name-invalid').style.display = 'none';
    document.getElementById('email-valid').style.display = 'none';
    document.getElementById('email-invalid').style.display = 'none';
    document.getElementById('phone-number-valid').style.display = 'none';
    document.getElementById('phone-number-invalid').style.display = 'none';
    document.getElementById('password-valid').style.display = 'none';
    document.getElementById('password-invalid').style.display = 'none';
    document.getElementById('confirm-password-valid').style.display = 'none';
    document.getElementById('confirm-password-invalid').style.display = 'none';
    document.getElementById('check-box-invalid').style.display = 'none';
    document.getElementById('signup-success').style.display = 'none';
    document.getElementById('signup-fail').style.display = 'none';
}, 3000)
}
const signup = () =>{
let firstName = document.getElementById('signup-firstName').value
let lastName = document.getElementById('signup-lastName').value
let phoneNumber = document.getElementById('signup-phoneNumber').value
let email = document.getElementById('signup-email').value
let password = document.getElementById('signup-password').value
let confirmPassword = document.getElementById('signup-confirmPassword').value
let checkbox = document.getElementById('tnC').checked
let signupSuccess = document.getElementById('signup-success')
let signupFail = document.getElementById('signup-fail')
let errors = false
// Validations
// firstname validation
if(firstName.length>=1){
    console.log("pressed");
    document.getElementById('first-name-valid').style.display = 'block';
    document.getElementById('first-name-invalid').style.display = 'none';
}else{
    document.getElementById('first-name-invalid').style.display = 'block';
    document.getElementById('first-name-valid').style.display = 'none';
    errors = true;
}
// firstname validation
if(lastName.length>=1){
    document.getElementById('last-name-valid').style.display = 'block';
    document.getElementById('last-name-invalid').style.display = 'none';
}else{
    document.getElementById('last-name-invalid').style.display = 'block';
    document.getElementById('last-name-valid').style.display = 'none';
    errors = true;
}
// email address validation
if(email.includes('@') &&
    email.indexOf('@') <= email.length -2 &&
    email.indexOf('@')>1){
    document.getElementById('email-valid').style.display = 'block';
    document.getElementById('email-invalid').style.display = 'none';
}else{
    document.getElementById('email-invalid').style.display = 'block';
    document.getElementById('email-valid').style.display = 'none';
    errors = true;
}
// phone number validation
if(phoneNumber.length ==10 && !isNaN(parseInt(phoneNumber))){
    document.getElementById('phone-number-valid').style.display = 'block';
    document.getElementById('phone-number-invalid').style.display = 'none';
}else{
    document.getElementById('phone-number-invalid').style.display = 'block';
    document.getElementById('phone-number-valid').style.display = 'none';
    errors = true;
}
//password validation
if(password.length>=8){
    document.getElementById('password-valid').style.display = 'block';
    document.getElementById('password-invalid').style.display = 'none';
}else{
    document.getElementById('password-invalid').style.display = 'block';
    document.getElementById('password-valid').style.display = 'none';
    errors = true;
}
//confirm password validation
if(confirmPassword.length>=8 && password === confirmPassword){
    document.getElementById('confirm-password-valid').style.display = 'block';
    document.getElementById('confirm-password-invalid').style.display = 'none';
}else{
    document.getElementById('confirm-password-invalid').style.display = 'block';
    document.getElementById('confirm-password-valid').style.display = 'none';
    errors = true;
}
//checkbox validation
if(!checkbox){
    document.getElementById('check-box-invalid').style.display = 'block';
    // errors = true;
}else{
    document.getElementById('check-box-invalid').style.display = 'none';
}

let userDetails = {
    firstName, //object- property assignment
    lastName,
    phoneNumber,
    email,
    password : encryption(password)
    }
if(errors){
    signupFail.style.display = 'block';
    signupSuccess.style.display = 'none';
}
else{
    signupSuccess.style.display = 'block';
    signupFail.style.display = 'none';
}
console.log(userDetails)
DB_USERS.push(userDetails)
signUpReset()
}

const logInReset = () =>{
document.getElementById("login-email").value = ""
document.getElementById("login-password").value = ""
}

const login = () =>{
let logInEmail = document.getElementById("login-email").value
let logInPassword = document.getElementById("login-password").value
let emailInvalid = document.getElementById('login-email-invalid')
let passwordInvalid = document.getElementById('login-password-invalid')

if(logInEmail.length<1){
    emailInvalid.style.display = 'block'
}else{
    emailInvalid.style.display = 'none'
}
if(logInPassword.length<1){
    passwordInvalid.style.display = 'block'
}else{
    passwordInvalid.style.display = 'none'
}

logInReset();
let validUser = DB_USERS.find((element) => element.email === logInEmail)
if(logInEmail===validUser.email && logInPassword === decrypt(validUser.password) && validUser.email.length>3){
    // console.log(decrypt(validUser.password))
    document.getElementById('login-success').style.display = 'block';
    document.getElementById('login-fail').style.display = 'none';
    alert("you are authorised")
    setTimeout(()=> {
        document.getElementById('login-success').style.display = 'none';
    }, 3000)
}
else{
    document.getElementById('login-fail').style.display = 'block';
    document.getElementById('login-success').style.display = 'none';
    setTimeout(()=> {
        document.getElementById('login-fail').style.display = 'none';
        
    }, 3000)
    alert("wrong credentials are entered");
}
console.log(validUser);


}