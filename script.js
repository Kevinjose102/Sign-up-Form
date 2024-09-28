const inputs = document.querySelectorAll(".input")
const error = document.querySelectorAll(".error")
const first = document.querySelector("#first-name")
const last = document.querySelector("#last-name")
const email = document.querySelector("#email")
const phone = document.querySelector("#phone")
const password = document.querySelector("#password")
const confirmPassword = document.querySelector("#confirm-password")
const submitButton = document.querySelector("#submit")

submitButton.addEventListener("click", (e) => validation(e))

let message_email;
let message_phone;
let message_confirm_password;
let message_password;
let message_first_name;
let message_last_name;

function validation(e){
    e.preventDefault()
    let i = 0
    inputs.forEach((value) => {
        if(value.value === ""){
            error[i].textContent = "*This field is Required"
        }
        else{
            message_first_name = "";
            message_last_name = "";
            if(value.id === "first-name"){
                error[i].textContent = ""
            }
            else if(value.id === "last-name"){
                error[i].textContent = ""
            }
            else if(value.id == "email"){
                error[i].textContent = message_email
            }
            else if(value.id == "password"){
                error[i].textContent = message_password
            }
            else if(value.id == "phone"){
                error[i].textContent = message_phone
            }
            else if(value.id == "confirm-password"){
                error[i].textContent = message_confirm_password
            }
        }
        i++
    })
    if(message_confirm_password === "" & message_email === "" & message_first_name === "" 
        & message_last_name === "" & message_password === "" & message_phone === ""){
            window.location.href = "thankyou.html";
        }
}

first.addEventListener('keyup', () => {
    if(first.value != ""){
        message_first_name = ""
        error[0].textContent = ""
    }
})

last.addEventListener('keyup', () => {
    if(last.value != ""){
        message_last_name = ""
        error[3].textContent = ""
    }
})


email.addEventListener('keyup', () => {
    if(email.value === ""){
        error[1].textContent = ""
        message_email =  ""
    }
    else if(email.value.includes("@") & email.value.includes(".com")){
        error[1].textContent = "";
        message_email =  ""
    }
    else{
        message_email = "*Enter a valid email"
        error[1].textContent = "*Enter a valid email"
    }
})

phone.addEventListener('keyup', () =>{
    if(!isNaN(phone.value)){
        error[4].textContent = ""
        message_phone = ""
    }
    else{
        message_phone = "*Enter a valid number"
        error[4].textContent = "*Enter a valid number"
    }
})

password.addEventListener('keyup', () => {
    if(password.value === ""){
        error[2].textContent =""
    }
    else if(password.value.length < 8){
        message_password = "*Password should be atleast 8 characters"
        error[2].textContent = "*Password should be atleast 8 characters"
    }
    else{
        message_password = ""
        error[2].textContent = ""
    }
})

confirmPassword.addEventListener('keyup', () => {
    if(confirmPassword === ""){
        error[5].textContent = ""
    }
    else if(confirmPassword.value != password.value){
        message_confirm_password = "*Password did not match"
        error[5].textContent = "*Password did not match"
    }
    else{
        message_confirm_password = ""
        error[5].textContent = ""
    }
})