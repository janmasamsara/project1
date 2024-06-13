let fname=document.getElementById('contact-name');
let lname=document.getElementById('contact-lname');
let phone=document.getElementById('contact-phone');
let email=document.getElementById('contact-email');
let password=document.getElementById('contact-password');
let cpassword=document.getElementById('contact-cpassword');



let fnameerror=document.getElementById('fname-error');
let lnameerror=document.getElementById('lname-error');
let phoneerror=document.getElementById('phone-error');
let emailerror=document.getElementById('email-error');
let passworderror=document.getElementById('pwd-error');
let cpassworderror=document.getElementById('cpwd-error');


document.getElementById('myform').addEventListener('submit',handlesubmit)

function handlesubmit(event)
{
    event.preventDefault();
//firstname
    if(fname.value === " ")
    {
        fnameerror.innerHTML="field should not be empty"
        
    }
    else if(fname.value.length<3){
        fnameerror.innerHTML="Please provide more than 3 characters"
        
    }
    else{
    fnameerror.innerHTML='<i class="fa fa-check" aria-hidden="true"></i>'
    }

//lastname

if(lname.value === " ")
    {
        lnameerror.innerHTML="field should not be empty"
    
    }
    else if(lname.value.length<4){
        lnameerror.innerHTML="Please provide more than 3 characters"
    
    }
    else
    {
        lnameerror.innerHTML='<i class="fa fa-check" aria-hidden="true"></i>'
    }
//phone
if(phone.value=== " "){
    phoneerror.innerHTML="field should not be empty"
}
else if(phone.value<10){
    phoneerror.innerHTML="please provide valid number"
}
else{
    phoneerror.innerHTML='<i class="fa fa-check" aria-hidden="true"></i>'
}

//email
if(email.value ===" "){
    emailerror.innerHTML="field should not be empty"
    
} 

else if(!email.value.toString().includes('@')){
    emailerror.innerHTML="please provide valid email"
}
else{
    emailerror.innerHTML='<i class="fa fa-check" aria-hidden="true"></i>'
}

//password
if(password.value === " "){
    passworderror.innerHTML="field should not be empty"
}
else if(password.value.length<7){
    passworderror.innerHTML="password should contain more than 7"
}
else{
    passworderror.innerHTML='<i class="fa fa-check" aria-hidden="true"></i>'
}

//confirmpassword
if(cpassword.value === " "){
    cpassworderror.innerHTML="field should not be empty"
}
else if(password.value.length<7){
    cpassworderror.innerHTML="password should contain more than 7"
}
else if(!password.value === cpassword.value){
    cpassworderror.innerHTML="password does not match"
}
else{
    cpassworderror.innerHTML='<i class="fa fa-check" aria-hidden="true"></i>'
}
function validateForm() {
    alert("registered")
}

}



















