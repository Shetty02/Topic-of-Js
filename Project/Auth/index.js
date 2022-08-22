// 
let encryptionRule = {
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
    '': '~', '#': '!', '%': '$', '+': '&',
    '@': '-', '~': ''
}

  
// Testing Encryption  : It is correct 
const encrypt = (inputString) => {
    let encrytedString = ''
    for(char of inputString) {
        encrytedString = encrytedString + encryptionRule[char]
    }
    return encrytedString
}

let keys = Object.keys(encryptionRule);
let values = Object.values(encryptionRule)
const decrypt = (encrytedString) => {
	let ActualPassword = ''
	for(char of encrytedString) {
        let requiredIndex = values.findIndex(value => value === char)
		ActualPassword = ActualPassword + keys[requiredIndex];
	}
	return ActualPassword
}
// console.log(encrypt('Shetty'))
// console.log(decrypt(encrypt('Shetty')))

const DB_USERS = []

// We are Creating a ResetFunction for resting the details empty are clicking on submit Button.
// both login and signup resetfields are correct
const resetSignFields = () => {
    // alert('Your details have been saved successfully');
    document.getElementById('signup-first-name').value = ''
    document.getElementById('signup-last-name').value  = ''
    document.getElementById('signup-phone').value = ''
    document.getElementById('signup-email').value = '' 
    document.getElementById('signup-password').value = ''
    document.getElementById('signup-confirm-password').value=''
    document.getElementById('invalidCheck').checked =false 


    // If vaild or invaild the message should be remove so here we use setTimeout() so that the msg will remove after some time
    setTimeout(() =>{
        document.getElementById('first-name-vaild').style.display = 'none'
        document.getElementById('first-name-invaild').style.display = 'none'
        document.getElementById('last-name-vaild').style.display = 'none'
        document.getElementById('last-name-invaild').style.display = 'none'
        document.getElementById('signup-phone-valid').style.display='none'
        document.getElementById('signup-phone-invalid').style.display='none'
        document.getElementById('signup-email-valid').style.display='none'
        document.getElementById('signup-email-invalid').style.display='none'
        document.getElementById('signup-password-valid').style.display = 'none';
        document.getElementById('signup-password-invalid').style.display = 'none';
        document.getElementById('signup-confirm-password-valid').style.display = 'none';
        document.getElementById('signup-confirm-password-invalid').style.display = 'none';
        document.getElementById('check-box-invalid').style.display = 'none'
    },2000)
    setTimeout(()=>{
        document.getElementById('signup-alert-success').style.display = 'none'
        document.getElementById('signup-alert-failure').style.display = 'none'
    },5000)
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
    let confirmpassword = document.getElementById('signup-confirm-password').value 
    let checkbox = document.getElementById('invalidCheck').checked
    let signupSuccessAlert = document.getElementById('signup-alert-success')
    let signupFailureAlert = document.getElementById('signup-alert-failure')
    let error = false
    // Note : We are not doing this for Confirm-password because we are not storing the value thus. we are just checking password is same or not.
    
    
    // firstName Validation
    if(firstName && !parseInt(firstName)){
        console.log('firstName')
        document.getElementById('first-name-vaild').style.display = 'block'
        document.getElementById('first-name-invaild').style.display = 'none'
    }
    else {
        document.getElementById('first-name-vaild').style.display = 'none'
        document.getElementById('first-name-invaild').style.display = 'block'
        error=true
    }

    // Last Name Validation
    if(lastName && !parseInt(lastName)){
        console.log('lastName')
        document.getElementById('last-name-vaild').style.display = 'block'
        document.getElementById('last-name-invaild').style.display = 'none'
    }
    else {
        document.getElementById('last-name-vaild').style.display = 'none'
        document.getElementById('last-name-invaild').style.display = 'block'
        error=true
    }
    
    //Phone number Validation
    if(phone.length ==10 && !isNaN(parseInt(phone))){
        console.log(phone)
        document.getElementById('signup-phone-valid').style.display='block'
        document.getElementById('signup-phone-invalid').style.display='none'
    }
    else {        
        document.getElementById('signup-phone-valid').style.display='none'
        document.getElementById('signup-phone-invalid').style.display='block'
        error = true
    }
    
    // emailId validation
    if(email && email.includes('@') && 
    email.includes('.') && 
        email.lastIndexOf('.') <= email.length - 3 && 
        email.indexOf('@') !== 0) {
            console.log(email);
            document.getElementById('signup-email-valid').style.display='block'
            document.getElementById('signup-email-invalid').style.display='none'
    }
    else{
        document.getElementById('signup-email-valid').style.display='none'
        document.getElementById('signup-email-invalid').style.display='block'
        error=true
    }
    
    // Passwor validation
    if(password.length>=8){
        console.log("paswd")
        document.getElementById('signup-password-valid').style.display = 'block';
        document.getElementById('signup-password-invalid').style.display = 'none';
    }else{
        document.getElementById('signup-password-invalid').style.display = 'block';
        document.getElementById('signup-password-valid').style.display = 'none';
        error = true;
    }
    
    //confirm-password Validation
    if(confirmpassword.length>=8 && password === confirmpassword){
        console.log("Cpaswd")
        document.getElementById('signup-confirm-password-valid').style.display = 'block';
        document.getElementById('signup-confirm-password-invalid').style.display = 'none';
    }else{
        document.getElementById('signup-confirm-password-invalid').style.display = 'block';
        document.getElementById('signup-confirm-password-valid').style.display = 'none';
        error = true;
    }
    
    //check box Validation
    if(!checkbox){
        document.getElementById('check-box-invalid').style.display = 'block'
    }
    else {
        document.getElementById('check-box-invalid').style.display = 'none'

    }
    // Here we are creating a userDetalis Object by using a Object Property Assignment (OPA)
    let userDetails = {
        firstName,
        lastName,
        phone,
        email,
        password : encrypt(password),
        // confirmpassword : decrypt(),
        checkbox
    }
    // DB_user  is Storing the Database inside the Array, whenever the user is login.
    if(error) {
        signupSuccessAlert.style.display ='none'
        signupFailureAlert.style.display ='block'
    }
    else {
        signupFailureAlert.style.display ='none'
        signupSuccessAlert.style.display ='block'
    }
    // console.log(DB_USERS)
    DB_USERS.push(userDetails)
    resetSignFields(); // we call restfields after clicking on Submit Button
}

const resetLoginFields = () => {
    document.getElementById('login-email').value = '' 
    document.getElementById('login-password').value = ''
    setTimeout(() =>{
        document.getElementById('login-email-invalid').style.display='none'
        document.getElementById('login-password-invalid').style.display ='none'
    },3000)
    setTimeout(()=> {
        document.getElementById('login-alert-success').style.display = 'none';
        document.getElementById('login-alert-failure').style.display = 'none';
    }, 5000)
   
}


const Login = () => {
    let enteredEmail = document.getElementById('login-email').value
    let enteredPassword = document.getElementById('login-password').value 
    let emailInvalid = document.getElementById('login-email-invalid')
    let passwordInvalid = document.getElementById('login-password-invalid')

    if(enteredEmail.length < 1 ){
      emailInvalid.style.display = 'block'
    }else{
        emailInvalid.style.display = 'none'
    }
    if(enteredPassword.length < 1){
        passwordInvalid.style.display = 'block'
    }else{
        passwordInvalid.style.display = 'none'
    }

    // function of Find() method 
// Always return a condition to find the element, If value exists ,returns the value, else returns the undefined 

let currentUser = DB_USERS.find(user => user.email === enteredEmail && decrypt(user.password))    
    
    // if(enteredEmail === currentUser.email && enteredPassword === decrypt(currentUser.password) && currentUser.email.length>3)
    // if(enteredEmail === currentUser.email)
    if(currentUser){
        // console.log(enteredEmail+ " "+ enteredPassword)
        document.getElementById('login-alert-success').style.display='block'
        document.getElementById('login-alert-failure').style.display='none'
    }
    else {
        document.getElementById('login-alert-success').style.display='none'
        document.getElementById('login-alert-failure').style.display='block'
        
    }
    resetLoginFields();
    
    // console.log(currentPassword) ;
}
/*
2  Steps
1) Check Whether the email (user) exits in DB
2) Whether enterted password matches with saved password
*/
