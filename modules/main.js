import login, {signUpButton, loginButton} from "./login.js"
import signUpForm from "./signupform.js"
import geocode from "./geolocation.js"
import survey from "./survey.js"
// import actionListItemsArray from "./actionListItemsArray.js"
//import signup form here
geocode()

let logo = document.createElement("img");
logo.src = "./modules/img/goveri_logo.png";
logo.setAttribute("class", "logo")
root.append(logo);

login()

loginButton.addEventListener("click",()=>{
   login()
    signUpButton.remove()
    loginButton.remove()
    logo.remove()
})

signUpButton.addEventListener("click",()=>{
    signUpForm()
    signUpButton.remove()
    loginButton.remove()
    logo.remove()
})

//signupform onsubmit: 
// survey()