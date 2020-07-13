import login, {signUpButton} from "./login.js"
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

alert("Hello! Welcome to the Goveri Prototype Tool. Please use the app as you normally would for a few minutes, then complete the survey below. Thank you for helping us build the one-stop-shop for social and political activism!")
login()

// loginButton.addEventListener("click",()=>{
//     login()
//     signUpButton.remove()
//     loginButton.remove()
//     logo.remove()
// })

signUpButton.addEventListener("click",()=>{
    signUpForm()
    logo.remove()
    signUpButton.remove()
    logo.remove()
})

//signupform onsubmit: 
// survey()