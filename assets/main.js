const form = document.querySelector('#form');
const username = document.querySelector('#username');
const address = document.querySelector('#address');
const pNumber = document.querySelector('#pNumber');
const email = document.querySelector('#email');
const message = document.querySelector('#message');
const ContactUs = document.querySelector('#contactBtn');
const modal = document.querySelector('#modal');

ContactUs.addEventListener('click', () => {
    modal.style.display = 'block';
    ContactUs.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
        ContactUs.style.display = 'block';
    }
});

form.addEventListener('submit', (e) => {
    e.preventDefault();
    validateInputs();
});

function validateInputs() {
    const usernameVal = username.value.trim();
    const addressVal = address.value.trim();
    const pNumberVal = pNumber.value.trim();
    const emailVal = email.value.trim();
    const msgVal = message.value.trim();

    let isValid = true;

    if (usernameVal === '') {
        setError(username, 'User name is required');
        isValid = false;
    } else {
        setSuccess(username);
    }

    if (emailVal === '') {
        setError(email, 'Email is required');
        isValid = false;
    } else if (!validateEmail(emailVal)) {
        setError(email, 'Please enter a valid email');
        isValid = false;
    } else {
        setSuccess(email);
    }

    if (addressVal === '') {
        setError(address, 'Address is required');
        isValid = false;
    } else if (addressVal.length < 5) {
        setError(address, 'Please provide a more detailed address.');
        isValid = false;
    } else {
        setSuccess(address);
    }

    const phoneRegex = /^\+94\d{9}$/;
    if (pNumberVal === '') {
        setError(pNumber, 'Phone number is required');
        isValid = false;
    }
    else if(isNaN(pNumberVal)){
        setError(pNumber, 'Enter a valid phone number');
        isValid = false;
    } 
    else if(!phoneRegex.test(pNumberVal)){
        setError(pNumber, 'Please enter a valid phone number starting with +94 and followed by 9 digits');
        isValid = false;
    }
    else {
        setSuccess(pNumber);
    }


    if (msgVal === '') {
        setError(message, 'Message is required');
        isValid = false;
    }
    else {
        setSuccess(message);
    }



    if (isValid) {
        saveFormData(usernameVal, addressVal, pNumberVal, emailVal, msgVal);
        alert('Contact information submitted successfully!');
        form.reset();
        modal.style.display = 'none';
        ContactUs.style.display = 'block';
    }
}

function setError(element, message) {
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error');

    errorElement.innerText = message;
    inputGroup.classList.add('error');
    inputGroup.classList.remove('success');
}

function setSuccess(element) {
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error');

    errorElement.innerText = '';
    inputGroup.classList.add('success');
    inputGroup.classList.remove('error');
}

const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};


const validateNumber =



function saveFormData(username, address, phone, email, message) {
    const formData = {
        username,
        address,
        phone,
        email,
        message
    };
    localStorage.setItem('contactFormData', JSON.stringify(formData));
}
