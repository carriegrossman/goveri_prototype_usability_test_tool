import {dropdown1,dropdown2} from "./survey.js"
import actionListItems,{actionListItemsArray} from "./actionListItemsArray.js"
import {whichClicked} from "./action.js"

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
        
        console.log(`blmCounter : ${blmCounter},envCounter : ${envCounter},electionCounter : ${electionCounter},`)
}

export default loadActionList