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
            actionListItem2 = "Take action by selecting a cause you care about in the menu at the top"
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
            actionListItem3 = "Take action by selecting a cause you care about in the menu at the top"
        }
    
    //Creating the action list divs
    let ulDiv = document.createElement("div");
    ulDiv.setAttribute("id","ulist");
    ulDiv.setAttribute("data-intro","This is the Action List. Your top 3 topics."); // ---- INTRO STEP 4
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
        icon.className = "cause-icon"
        let item = document.createElement("button")
        item.className = "action-button"
        item.innerText = actionListItemsHolder[i]
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
            if(liId == 2 && actionListIcon3 == "modules/img/secondicon.png"){
                hyperlink = actions.blm[blmCounter].url
                blmCounter++
            }
            if(liId == 2 && actionListIcon3 == "modules/img/tree_icon.png"){
                hyperlink = actions.environment[envCounter].url
                envCounter++
            }
            if(liId == 0){
                link()
                edu()
            }
            if(liId > 0){
                link()
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

    
    
    
    // let counter = 0
    
    
    
        

    // let whichClicked = event.target.id
    // if(whichClicked==0 || whichClicked == null){
    //     addToElectionCounter()
    // }
    
    // console.log(`Which clicked is: ${whichClicked}`)
    // if(whichClicked==1){
    //     addToBlmCounter()
    // }
    // if(whichClicked==2){
    //     addToEnvCounter()
    // }
    // counter++
    // console.log(counter)
    // if(counter>0){
    //     addToBlmCounter()
    // }
    // if(counter>4){
    //     addToEnvCounter()
    // }
    let idx = 0
        
        
    
    // root.appendChild(iaDiv)
    idx++
    
    console.log(idx)
        console.log(`blmCounter : ${blmCounter},envCounter : ${envCounter},electionCounter : ${electionCounter},`)
}

export default loadActionList