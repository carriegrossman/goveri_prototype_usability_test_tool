export let signUpButton = document.createElement("button")

signUpButton.className = ("signUpButton")

let login = () => {

    let root = document.getElementById("root")
    signUpButton.innerText = "Sign Up"

    // root.append(loginButton,signUpButton) replace with below after login page is created and complete
    root.append(signUpButton)
}

export default login