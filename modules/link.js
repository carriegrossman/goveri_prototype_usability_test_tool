// import quizzes,{edu} from "./edu_modules/edu.js"
import openurl from "./openurl.js"
import home from "./home.js"
import action from "./action.js"
import loadActionList from "./loadActionList.js"


export let link = document.createElement("div")
let backButton = document.createElement("button")
backButton.className = "link-home"
backButton.innerHTML = "Back"
backButton.addEventListener("click",() => {
    link.remove()
    loadActionList()
})

export let innerBackground = document.createElement("div")
innerBackground.setAttribute("id","inner-background")

let linkPosition = document.getElementById("for-links")
innerBackground.append(linkPosition)

link.append(innerBackground)

export default () => {
    
    link.className = "link"
    link.setAttribute("id","link")
    // link.setAttribute("target","_self")
    
    openurl()
    

    link.append(backButton)
    root.append(link)
    // loadActionList()
    // quizzes()
}
