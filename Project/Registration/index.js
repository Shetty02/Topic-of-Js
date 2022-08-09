function validate() {
    let firstNameInput = document.getElementById('first-name').value
    let lastNameInput = document.getElementById('last-name').value
    let EmailInput = document.getElementById('Email').value
    let cityInput = document.getElementById('city').value
    let StateInput = document.getElementById('State').value
    let zipInput = document.getElementById('zip').value
    let tnCInput = document.getElementById('tnC').checked

    let error = false;
    
    if(firstNameInput && !parseInt(firstNameInput)) {
        document.getElementById('first-name-vaild').style.display = 'block'
        document.getElementById('first-name-invaild').style.display = 'none'
    }
    else {
        document.getElementById('first-name-invaild').style.display = 'block'
        document.getElementById('first-name-vaild').style.display = 'none'
        error = true;
    }
    
    if(lastNameInput && !parseInt(lastNameInput)) {
        document.getElementById('last-name-vaild').style.display = 'block'
        document.getElementById('last-name-invaild').style.display = 'none'
    }
    else {
        document.getElementById('last-name-invaild').style.display = 'block'
        document.getElementById('last-name-vaild').style.display = 'none'
        error = true;
    }

    /*
    Conditions for Email
    1)Wheter Exist--Done
    2) @
    3) .
    4)After last dot(.),there should be atleast 2 char
    5) First char cann't be @ */
    if (EmailInput && EmailInput.includes('@') && EmailInput.includes('.') && EmailInput.lastIndexOf('.') <= EmailInput.length - 3 && EmailInput.indexOf('@') !== 0) {
        document.getElementById('Email-vaild').style.display = 'block'
        document.getElementById('Email-invaild').style.display = 'none'
    }
    else {
        document.getElementById('Email-invaild').style.display = 'block'
        document.getElementById('Email-vaild').style.display = 'none'
        error = true;
    }
    if(cityInput && cityInput.length >= 3) {
        document.getElementById('city-vaild').style.display = 'block'
        document.getElementById('city-invaild').style.display = 'none'
    }
    else {
        document.getElementById('city-invaild').style.display = 'block'
        document.getElementById('city-vaild').style.display = 'none'
        error = true;
    }

    // console.log(parseInt(zipInput));
    // console.log(!isNaN(parseInt(zipInput)));
    if(zipInput && parseInt(zipInput) && zipInput.length === 6 ) {
        document.getElementById('zip-vaild').style.display = 'block'
        document.getElementById('zip-invaild').style.display = 'none'
    }
    else {
        document.getElementById('zip-invaild').style.display = 'block'
        document.getElementById('zip-vaild').style.display = 'none'
        error = true;
    }
    if(StateInput != 'None'){
        document.getElementById('state-valid').style.display='block';
        document.getElementById('state-invalid').style.display='none';
    }
    else{
        document.getElementById('state-invalid').style.display='block';
        document.getElementById('state-valid').style.display='none';
        error = true;
    }

    if(tnCInput) {
        document.getElementById("tnC-invalid").style.display='none';
    }
    else {
        document.getElementById("tnC-invalid").style.display='block';
        error = true;
    }
    if(!error) {
        alert('Your details have been saved successfully');
        document.getElementById('first-name').value = '';
        document.getElementById('last-name').value ='';
        document.getElementById('Email').value= '';
        document.getElementById('city').value ='';
        document.getElementById('State').value = 'None';
        document.getElementById('zip').value ='';
        document.getElementById('tnC').checked = false;
        document.getElementById('first-name-vaild').style.display = 'none'
        document.getElementById('last-name-vaild').style.display = 'none'
        document.getElementById('Email-vaild').style.display = 'none'
        document.getElementById('city-vaild').style.display = 'none'
        document.getElementById('zip-vaild').style.display = 'none'
        document.getElementById('state-valid').style.display='none';
        document.getElementById("tnC-invalid").style.display='none';


         
    }
// console.log(firstNameInput, lastNameInput, EmailInput, cityInput, StateInput, zipInput, tnCInput);
}