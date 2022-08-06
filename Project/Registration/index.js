function validate() {
    let firstNameInput = document.getElementById('first-name').value
    let lastNameInput = document.getElementById('last-name').value
    let EmailInput = document.getElementById('Email').value
    let cityInput = document.getElementById('city').value
    let StateInput = document.getElementById('State').value
    let zipInput = document.getElementById('zip').value
    let tnCInput = document.getElementById('tnC').checked

    if(firstNameInput) {
        document.getElementById('first-name-vaild').style.display = 'block'
        document.getElementById('first-name-invaild').style.display = 'none'
    }
    else {
        document.getElementById('first-name-invaild').style.display = 'block'
        document.getElementById('first-name-vaild').style.display = 'none'
    }
    if(lastNameInput) {
        document.getElementById('last-name-vaild').style.display = 'block'
        document.getElementById('last-name-invaild').style.display = 'none'
    }
    else {
        document.getElementById('last-name-invaild').style.display = 'block'
        document.getElementById('last-name-vaild').style.display = 'none'
    }

    /*
    Conditions for Email
    1)Wheter Exist--Done
    2) @
    3) .
    4)After last dot(.),there should be atleast 2 char
    5) First char cann't be @ */
    if(EmailInput && EmailInput.includes('@') && EmailInput.includes('.') && EmailInput.lastIndexOf('.') <= EmailInput.length - 3 && EmailInput.indexOf('@')!==0) {
        document.getElementById('Email-vaild').style.display = 'block'
        document.getElementById('Email-invaild').style.display = 'none'
    }
    else {
        document.getElementById('Email-invaild').style.display = 'block'
        document.getElementById('Email-vaild').style.display = 'none'
    }
    if(cityInput) {
        document.getElementById('city-vaild').style.display = 'block'
        document.getElementById('city-invaild').style.display = 'none'
    }
    else {
        document.getElementById('city-invaild').style.display = 'block'
        document.getElementById('city-vaild').style.display = 'none'
    }
    if(zipInput) {
        document.getElementById('zip-vaild').style.display = 'block'
        document.getElementById('zip-invaild').style.display = 'none'
    }
    else {
        document.getElementById('zip-invaild').style.display = 'block'
        document.getElementById('zip-vaild').style.display = 'none'
    }
console.log(firstNameInput, lastNameInput, EmailInput, cityInput, StateInput, zipInput, tnCInput);
}