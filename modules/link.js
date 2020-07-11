// import quizzes,{edu} from "./edu_modules/edu.js"
import openurl from "./openurl.js"
import home from "./home.js"
import actionStream from "./actionstream.js"
import loadActionList,{hyperlink} from "./loadActionList.js"


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

let h3 = document.createElement("h3")
h3.className = "link-header"

let linkImg = document.createElement("div")
linkImg.className = "linkImgDiv"

let streamButton = document.createElement("button")
streamButton.innerText = "Post to Action Stream"
streamButton.className = "stream-button"
streamButton.addEventListener("click",() => {
    console.log("clicked")
    link.remove()
    actionStream()
    loadActionList()
})

link.append(innerBackground)


export default () => {
    
    link.className = "link"
    link.setAttribute("id","link")
    // link.setAttribute("target","_self")
    linkImg.innerText = "Photo you took to show you took action (e.g. receipts, voter sticker, mail-in ballot in hand, etc.)"
    h3.innerText = "Nice! Now post your proof of action in the Action Stream™!"
    innerBackground.append(h3,linkImg,streamButton)
    
    if(hyperlink){
        openurl(hyperlink)
    }

    link.append(backButton)
    root.append(link)
    // loadActionList()
    // quizzes()
}
