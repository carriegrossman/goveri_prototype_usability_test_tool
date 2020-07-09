import edu_funcs,{goveriPointsDisplay} from "./edu_funcs.js"
import {positions} from "./edu_data.js"
// import edu_evtListener from "./edu_evtListener.js"

export let eduDiv = document.createElement("div")
let backButton = document.createElement("button")

export let innerBackground = document.createElement("div")
innerBackground.setAttribute("id","inner-background")

let eduHeaderDiv = document.createElement("div")
eduHeaderDiv.setAttribute("id","header")

let eduHeader = document.createElement("h2")
eduHeader.innerText = "Goveri Edu"
innerBackground.append(goveriPointsDisplay)

eduHeaderDiv.append(eduHeader)

// let ceoDiv = document.createElement("div")
// ceoDiv.setAttribute("id","ceoContainer")
// ceoDiv.className = "position"

// let ceoButton = document.createElement("button")
// ceoButton.setAttribute("id","ceo")
// ceoButton.className = "positionButton"
// ceoButton.innerText = "County Chief Executive Officer"

// ceoDiv.append(ceoButton)

// let sheriffDiv = document.createElement("div")
// sheriffDiv.setAttribute("id","sheriffContainer")
// sheriffDiv.className = "position"

// let sheriffButton = document.createElement("button")
// sheriffButton.setAttribute("id","sheriff")
// sheriffButton.className = "positionButton"
// sheriffButton.innerText = "Sheriff"

// sheriffDiv.append(sheriffButton)

// let boeDiv = document.createElement("div")
// boeDiv.setAttribute("id","boeContainer")
// boeDiv.className = "position"

// let boeButton = document.createElement("button")
// boeButton.setAttribute("id","boe")
// boeButton.className = "positionButton"
// boeButton.innerText = "Board of Education"

// boeDiv.append(boeButton)

let positionsContainer = document.getElementById("positionButtonsContainer")
//then append this to the innerbackground

export let infoDiv = document.getElementById("info")

innerBackground.append(eduHeaderDiv,positionsContainer,infoDiv)
eduDiv.append(innerBackground)

export default () => {
    
    eduDiv.className = "link"
    
    edu_funcs()
    

    backButton.innerText = "Back"
    backButton.addEventListener("click",() => {
        eduDiv.remove()
    })
    eduDiv.append(backButton)
    root.append(eduDiv)
}