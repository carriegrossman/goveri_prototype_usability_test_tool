import edu_funcs,{goveriPointsDisplay, goveriPoints} from "./edu_funcs.js"
import {positions} from "./edu_data.js"
import { hardPoints } from "../points.js"

export let eduDiv = document.createElement("div")

export let innerBackground = document.createElement("div")
innerBackground.setAttribute("id","inner-background")

let eduHeaderDiv = document.createElement("div")
eduHeaderDiv.setAttribute("id","header")

let eduHeader = document.createElement("h3")
eduHeader.innerText = "Goveri Edu"
eduHeader.className = "action-stream-header"
innerBackground.append(goveriPointsDisplay)

eduHeaderDiv.append(eduHeader)

let positionsContainer = document.getElementById("positionButtonsContainer")

export let infoDiv = document.getElementById("info")

innerBackground.append(eduHeaderDiv,positionsContainer,infoDiv)
eduDiv.append(innerBackground)
let backButton = document.createElement("button")
backButton.setAttribute("id","backButton")
edu_funcs()

export default () => {
    eduDiv.className = "link"
    eduDiv.append(backButton)
    backButton.innerText = "Back"

    backButton.addEventListener("click",() => {
        eduDiv.remove()
    })
    
    root.append(eduDiv)
}