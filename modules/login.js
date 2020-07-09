export let signUpButton = document.createElement("button")
export let loginButton = document.createElement("button")


signUpButton.setAttribute("class", "signUpButton")
// loginButton.setAttribute("class", "button")

let login = () => {

    let root = document.getElementById("root")
    loginButton.innerText = "Log In"
    signUpButton.innerText = "Sign Up"

    // root.append(loginButton,signUpButton) replace with below after login page is created and complete
    root.append(signUpButton)
}

export default login