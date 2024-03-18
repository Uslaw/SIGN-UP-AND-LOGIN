const fname = document .getElementById ('fname')
const lname = document .getElementById('lname')
const password = document .getElementById('password')
const Comfirm_password =document .getElementById('Cormfirm_password')
const mobile = document .getElementById('mobile')
const form  = document .getElementById('Form')
const errorElement = document .getElementById('form')

function checkpassword() {
    let password = document.getElementById(password).value;
let Comfirm_password = document.getElementById('Comfirm_password').value;
    console.log(password, Comfirm_password)
}

// document.querySelector('.button').onclick=function(){
//     var password= document.querySelector('.Password').value;
//     Comfirm_password = document.querySelector('.Comfirm_password').value;
//     elseif (password != Comfirm_password)
//     messages.push('Passwords do not match')
// }

//    form.addEventListener ('Submit',(e) => {
//     let messages = []   
//     if ( National_ID.value === '' || National_ID.value== null || National_ID.value=='<8'|| National_ID.value=='8>'
//      )
//     // {messages.push('Name is required')}
//     if (messages.length >0) 
//     {e.preventDefault(errorElement.innerText = messages.join (','))}
       
//    }) 

//    form.addEventListener ('Submit',(e) => {
//     let messages = []   
//     if ( Mobile_number.value === '' || Mobile_number.value== null || Mobile_number.value=='<10'|| National_ID.value=='10>'
//      )
//     // {messages.push('Name is required')}
//     if (messages.length >0) 
//     {e.preventDefault(errorElement.innerText = messages.join (','))}
       
//    }) 