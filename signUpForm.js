const passwordInput  = document.getElementById("password")
const confPassInput = document.getElementById("confPassword")
let password = "";
let confPass = "";

const span = document.createElement("span")
const passPopUp = document.getElementById("passPopUp")
span.style.cssText = "color: red; font-size: 6px;"
span.textContent = "*Passwords do not match"
passPopUp.appendChild(span)

passwordInput.addEventListener("input", (e)=>{
    password = (passwordInput.value)
})

confPassInput.addEventListener("input", (e)=>{
    confPass = (confPassInput.value)
})


document.querySelectorAll("input[type='password']").forEach(input=>{
    passwordInput.style.cssText = "border:1px solid red";
    confPassInput.style.cssText = "border:1px solid red";
    input.addEventListener("input", (e)=>{
    if (password == "" || password !== confPass ) {
            e.preventDefault();
            passwordInput.style.cssText = "border:1px solid red";
            confPassInput.style.cssText = "border:1px solid red";
            passPopUp.appendChild(span)
       } else {
            passwordInput.style.border = "1px solid green";
            passwordInput.style.boxShadow = "1px 1px 4px green"; 
            confPassInput.style.border = "1px solid green";
            confPassInput.style.boxShadow = "1px 1px 4px green";
            passPopUp.removeChild(span)
       }  
    })
})