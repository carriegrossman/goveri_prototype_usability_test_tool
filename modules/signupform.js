import survey from "./survey.js"
import zipcode from "./zipcode.js"
import {receive} from "./avatar.js"

export let firstName = document.createElement("input");
export let lastName = document.createElement("input");
export let zip = document.createElement("input");


const signUpForm = () => {
    let x = document.getElementById("root");
    let form = document.createElement("form");
    form.setAttribute("action", "");
    form.setAttribute("method", "post");
    form.id = "form"

    x.append(form);

    let heading = document.createElement('h2');
    heading.innerHTML = "Sign-Up Form";
    form.append(heading);
    
    let fill = document.createElement("p")
    fill.innerText = "Please fill in this form."
    form.append(fill);


    let line = document.createElement('hr');
    form.append(line);

    let linebreak = document.createElement('br');
    form.append(linebreak);

    let nameLabel1 = document.createElement('label');
    nameLabel1.innerHTML = "First Name : ";
    form.append(nameLabel1);

    // let firstName = document.createElement("input");
    firstName.setAttribute("type", "text");
    firstName.setAttribute("id", "firstName");
    firstName.classList.add("signupInput");
    firstName.setAttribute("placeholder", "Enter First Name");
    form.append(firstName);
    

    let nameLabel2 = document.createElement('label');
    nameLabel2.innerHTML = "Last Name : ";
    form.append(nameLabel2);

    // let lastName = document.createElement("input");
    lastName.setAttribute("type", "text");
    lastName.setAttribute("id", "lastName");
    lastName.classList.add("signupInput");
    lastName.setAttribute("placeholder", "Enter Last Name");
    form.append(lastName);

    form.append(linebreak);

    let emailLabel = document.createElement("label");
    emailLabel.innerHTML = "Email Address : ";
    form.append(emailLabel);

    let email = document.createElement("input");
    email.setAttribute("type", "email");
    email.setAttribute("id", "email");
    email.classList.add("signupInput");
    email.setAttribute("placeholder", "Enter Email");
    form.append(email)

    let zipLabel = document.createElement("label");
    zipLabel.innerHTML = "Zip Code : ";
    form.append(zipLabel);

    // let zip = document.createElement("input");
    zip.setAttribute("type", "zip");
    zip.id=zip;
    zip.classList.add("signupInput");
    zip.setAttribute("placeholder", "Enter Zip Code");
    form.append(zip)

    // let passwordLabel = document.createElement('label');
    // passwordLabel.innerHTML = "Password : ";
    // form.append(passwordLabel);

    // let password = document.createElement('input');
    // password.setAttribute("type", "password");
    // password.setAttribute("id", "password");
    // password.setAttribute("class", "password");
    // password.setAttribute("placeholder", "Enter Password");
    // form.append(password);

    // let repasswordLabel = document.createElement('label');
    // repasswordLabel.innerHTML = "Repeat Password : ";
    // form.append(repasswordLabel);

    // let repassword = document.createElement('input');
    // repassword.setAttribute("type", "repassword");
    // repassword.setAttribute("id", "repassword");
    // repassword.setAttribute("class", "repassword");
    // repassword.setAttribute("placeholder", "Repeat Password");
    // form.append(repassword);


    let submitButton = document.createElement("button")
    submitButton.innerText = "Submit"
    submitButton.type= "submit";
    submitButton.classList.add("signupSubmit");
    form.append(submitButton)


    submitButton.addEventListener("click", event => {
        event.preventDefault()
        zipcode(zip,(city,state)=>{
            receive(city,state)
        })
        form.remove()
        survey()
    })

    
    // console.log('this function should load the signup form')
}




export default signUpForm