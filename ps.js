var links=document.getElementsByClassName('links');
var lists=document.getElementsByClassName('lists');

function opentab(tabname)
{
    for(link of links){
        link.classList.remove("active-link");


    }
    for(list of lists){
        list.classList.remove("active-tab");


    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");



}
let lname=document.getElementById('contact-lname');
let phone=document.getElementById('contact-phone');
let email=document.getElementById('contact-email');

let lnameerror=document.getElementById('lname-error');
let phoneerror=document.getElementById('phone-error');
let emailerror=document.getElementById('email-error');
document.getElementById('myform').addEventListener('submit',handlesubmit)

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
