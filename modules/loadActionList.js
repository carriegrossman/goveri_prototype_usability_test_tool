import {dropdown1,dropdown2} from "./survey.js"
import actionListItems,{actionListItemsArray} from "./actionListItemsArray.js"
import iconLinks, {iaDiv,iDiv} from "./icons.js"
import addPoints,{hardPoints} from "./points.js"
import link from "./link.js"
import edu from "./edu_modules/edu_main.js"

export let actionListItem1 = ""
export let actionListItem2 = ""
export let actionListItem3 = ""

export let actionListIcon1 = ""
export let actionListIcon2 = ""
export let actionListIcon3 = ""

export let actionListUrl1 = ""
export let actionListUrl2 = ""
export let actionListUrl3 = ""

export let actionPointsValue1
export let actionPointsValue2
export let actionPointsValue3

export let blmCounter = 0
export let envCounter = 0
export let electionCounter = 0

export let hyperlink = ""

export let addToElectionCounter = () => {
    electionCounter++
}

export let addToBlmCounter = () => {
    blmCounter++
}

export let addToEnvCounter = () => {
    envCounter++
}

export let keepElectionCounterSame = () => {
    electionCounter--
}

export let keepBlmCounterSame = () => {
    blmCounter--
}

export let keepEnvCounterSame = () => {
    envCounter--
}

let loadActionList = () => {
    console.log("**************************************************************")
    console.log(`blmCounter : ${blmCounter},envCounter : ${envCounter},electionCounter : ${electionCounter},`)
    console.log("**************************************************************")
    if(blmCounter > 3){
        keepBlmCounterSame()
    }
    if(envCounter > 3){
        keepEnvCounterSame()
    }
    if(electionCounter > 3){
        keepElectionCounterSame()
    }
    actionListItems()
    let actions = actionListItemsArray()
    //ITEM 1 IS ALWAYS THE ELECTION
    actionListItem1 = actions.election[electionCounter].item
    actionListIcon1 = actions.election[electionCounter].icon//object property in actionItemsListArray with url for the respective icon - then in action.js have an array with actionIcon1, actionIcon2, and actionIcon3, setting the src attribute of an img created in the DOM to the right actionIcon
    actionListUrl1 = null
    actionPointsValue1 = actions.election[electionCounter].points    
    let cause2 = dropdown1.value    
    switch (cause2) {
        case 'blm':
            
            actionListItem2 = actions.blm[blmCounter].item
            actionListIcon2 = actions.blm[blmCounter].icon
            actionListUrl2 = actions.blm[blmCounter].url
            actionPointsValue2 = actions.blm[blmCounter].points
            
            break;
        case 'environment':
            
            actionListItem2 = actions.environment[envCounter].item
            actionListIcon2 = actions.environment[envCounter].icon
            actionListUrl2 = actions.environment[envCounter].url
            actionPointsValue2 = actions.environment[envCounter].points
            
            break;
        default:
            actionListItem2 = actions.election[1].item
            actionListIcon2 = actions.election[1].icon//object property in actionItemsListArray with url for the respective icon - then in action.js have an array with actionIcon1, actionIcon2, and actionIcon3, setting the src attribute of an img created in the DOM to the right actionIcon
            actionListUrl2 = actions.election[1].url
            actionPointsValue2 = actions.election[1].points 
        }
    
    let cause3 = dropdown2.value
    switch (cause3) {
        case 'blm':
            
            actionListItem3 = actions.blm[blmCounter].item
            actionListIcon3 = actions.blm[blmCounter].icon
            actionListUrl3 = actions.blm[blmCounter].url
            actionPointsValue3 = actions.blm[blmCounter].points
            
            break;
        case 'environment':
            
            actionListItem3 = actions.environment[envCounter].item
            actionListIcon3 = actions.environment[envCounter].icon
            actionListUrl3 = actions.environment[envCounter].url
            actionPointsValue3 = actions.environment[envCounter].points
            
            break;
        default:
            actionListItem3 = actions.election[2].item
            actionListIcon3 = actions.election[2].icon//object property in actionItemsListArray with url for the respective icon - then in action.js have an array with actionIcon1, actionIcon2, and actionIcon3, setting the src attribute of an img created in the DOM to the right actionIcon
            actionListUrl3 = actions.election[2].url
            actionPointsValue3 = actions.election[2].points         
        }
    //Creating the action list divs
    let ulDiv = document.createElement("div");
    ulDiv.setAttribute("id","ulist");
    ulDiv.setAttribute("data-intro","This is your Action List. It's like a live to-do list to help you stay active. New items will appear after you complete each."); // ---- INTRO STEP 4
    ulDiv.setAttribute("data-step","4");
    
    let uList = document.createElement("ul");
    uList.setAttribute("id","action-list")
    uList.className = "action-list";

    let li = document.createElement("li")

    let liDiv = document.createElement("div")
    liDiv.className = "listed-action";

    
    
    let actionListItemsHolder = [actionListItem1,actionListItem2,actionListItem3]
    let actionListIcons = [actionListIcon1,actionListIcon2,actionListIcon3]
    let actionPointsValues = [actionPointsValue1,actionPointsValue2,actionPointsValue3]
    //Pulling the right info from actionListItemsArray.js
    for(let i = 0; i < 3; i++){
        
        //i keeps track of the order of the items
        let icon = document.createElement("img")
        icon.setAttribute("src", actionListIcons[i])
        icon.setAttribute("data-intro","This icon tells you which category your Action Item is in."); // ---- INTRO STEP 4
        icon.setAttribute("data-step","5");
        icon.className = "cause-icon"
        let item = document.createElement("button")
        item.className = "action-button"
        item.innerText = actionListItemsHolder[i]
        item.setAttribute("data-intro","For this prototype, some items will open links outside of this page. In the final product of Goveri, you would use the information from these external links to complete your action item. This is just the prototype, however, and the form below (~15 minutes) is why you're here, so choose how to spend your time wisely. When an external link opens, click back into this tab to continue using the prototype."); // ---- INTRO STEP 4
        item.setAttribute("data-step","6");
        console.log(actionListItemsHolder[0])
        let points = document.createElement("p")
        points.className = "points-container"
        points.innerText = `+ ${actionPointsValues[i]}`
        liDiv.append(icon,points,item)
        liDiv.setAttribute("id",i)
        let liId = liDiv.id
        console.log(liDiv.id)
        // ulDiv.append(liDiv)
        
        item.addEventListener("click", event => {
            
            console.log(liId)
            if(liId == 0){
                hyperlink = actions.election[electionCounter].url
                electionCounter++
            }
            if(liId == 1 && actionListIcon2 == "modules/img/secondicon.png"){
                hyperlink = actions.blm[blmCounter].url
                blmCounter++
            }
            if(liId == 1 && actionListIcon2 == "modules/img/tree_icon.png"){
                hyperlink = actions.environment[envCounter].url
                envCounter++
            }
            if(liId == 1 && actionListItem2 == "Learn your state's mail-in ballot process!"){
                hyperlink = actions.election[1].url
                link()
                electionCounter++
            }
            if(liId == 1 && actionListItem2 == "Learn more about local politics!"){
                hyperlink = null
                edu()
                electionCounter++
            }
            if(liId == 2 && actionListIcon3 == "modules/img/secondicon.png"){
                hyperlink = actions.blm[blmCounter].url
                blmCounter++
            }
            if(liId == 2 && actionListIcon3 == "modules/img/tree_icon.png"){
                hyperlink = actions.environment[envCounter].url
                envCounter++
            }
            if(liId == 2 && actionListItem3 == `Learn more about local politics!`){
                hyperlink = actions.election[2].url
                edu()
                electionCounter++
            }
            if(liId == 0 && hyperlink){
                link()
            }
            if(liId == 0 && !hyperlink){
                link()
                edu()
            }
            if(liId == 1){
                if(actionListIcon2 == "modules/img/thirdicon.png"){
                    link()
                    edu()
                } else {
                    link()
                }
            }
            if(liId == 2){
                if(actionListIcon3 == "modules/img/thirdicon.png"){
                    link()
                    edu()
                } else {
                    link()
                }
            }
            
            ulDiv.remove()
            addPoints(actionPointsValues[i])
            console.log("**************************************************************")
            console.log(`blmCounter : ${blmCounter},envCounter : ${envCounter},electionCounter : ${electionCounter},`)
            console.log("**************************************************************")
        })
        li.append(liDiv);
        uList.append(li)
        ulDiv.append(uList)
        root.insertBefore(ulDiv,iDiv);
        
    }
    if(hardPoints >= 500){
        alert(`You earned 500 points! You're entered into the next raffle in your area! Have you filled out the form below yet?`)
    }
}

export default loadActionList