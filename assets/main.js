// gettimg the values


const form = document.querySelector('#form')
const username = document.querySelector('#username');
const address = document.querySelector('#address');
const pNumber = document.querySelector('#pNumber');
const email = document.querySelector('#email');
const message=document.querySelector('#message');



// form submit event

form.addEventListener('submit', (e)=>{
                  
    e.preventDefault();
    validateInputs();



});


function validateInputs(){

//  trimming the values
// trim() - it will clear the unwanted spaces

    const usernameVal = username.value.trim()
    const addressVal = address.value.trim();
    const pNumberVal = pNumber.value.trim(); 
    const emailVal = email.value.trim();
    const msgVal = message.value.trim();
   

    if(usernameVal===''){

         setError(username,'User name is required');
    }
    else{
        setSuccess(username);
    }


    if(emailVal===''){
        setError(email,'Email is required');
    }
    else if(!validateEmail(emailVal)){
       
        setError(email,'Please enter a valid email');
    }
    else{
        setSuccess(email);
    }


    if(addressVal===''){
        setError(address,'Address is required');
    }
    else if(addressVal.length<5){
        setError(address,'Please provide a more detailed address.');
    }
    else{
        setSuccess(address);
    }


    if(pNumberVal===''){
        setError(pNumber,'Phone number is required');
    }
   
    else{
        setSuccess(pNumber);
    }


    if(msgVal===''){
        setError(message,'Message is required');
    }
    else{
        setSuccess(message);
    }
}



function setError(element,message){


const inputGroup=element.parentElement;
const errorElement = inputGroup.querySelector('.error')

errorElement.innerText = message;

inputGroup.classList.add('error');
inputGroup.classList.remove('success');


}

function setSuccess(element){


    const inputGroup=element.parentElement;
    const errorElement = inputGroup.querySelector('.error')
    
    errorElement.innerText ='';
    
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