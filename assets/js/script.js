const form = document.getElementById("form");
const username = document.getElementById("uname");
const password = document.getElementById("pass");
const password2 = document.getElementById("pass2");
const email = document.getElementById("mail");
form.addEventListener("submit", function(e){
    e.preventDefault();
    validateForm();
});

function validateForm(){
    const nameValue = username.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();
    const emailValue = email.value.trim();
    if(nameValue === ""){
        setErrorFor(username, "User name cannot be blank!")
    }
    else{
        setSuccessFor(username)
    }
    if(passwordValue === ""){
        setErrorFor(password, "Password cannot be blank!")
    }
    else{
        setSuccessFor(password)
    }
    if(password2Value === ""){
        setErrorFor(password2, "Password cannot be blank!")
    }
    else if(password2Value !== passwordValue){
        setErrorFor(password2, "Passwords don't match!")
    }
    else{
        setSuccessFor(password2)
    }
    if(emailValue === ""){
        setErrorFor(email, "Email cannot be blank!")
    }
    else{
        setSuccessFor(email)
    }
}
function setErrorFor(input, message){
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");
    formControl.className = "form-control error";
    small.innerText = message;
}
function setSuccessFor(input){
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}