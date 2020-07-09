// import quizzes,{edu} from "./edu_modules/edu.js"

export let link = document.createElement("div")
let backButton = document.createElement("button")
backButton.className = "link-home"
backButton.innerHTML = "Back"
backButton.addEventListener("click",()=>{
    link.remove()
})

export default () => {
    
    link.className = "link"
    link.setAttribute("id","link")
    
    
    link.append(backButton)
    root.append(link)
    // quizzes()
}
