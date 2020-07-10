import loadActionList, {actionListItem1, actionListItem2, actionListItem3, actionListIcon1, actionListIcon2, actionListIcon3, actionPointsValue1, actionPointsValue2, actionPointsValue3, addToElectionCounter, addToBlmCounter, addToEnvCounter} from "./loadActionList.js"
import link from "./link.js";
import addPoints,{hardPoints} from "./points.js"
import {blmCounter,envCounter,electionCounter,keepBlmCounterSame,keepEnvCounterSame} from "./loadActionList.js"
import {iaDiv} from "./icons.js"
import {actionListItemsArray} from "./actionListItemsArray.js";
import runAction from "./runAction.js";

    // Unordered List
    let rDiv = document.getElementById("root")
    let hTwo = document.createElement("h2");

export default () => {
    hTwo.setAttribute("class","action-header");
    hTwo.textContent = "Action List";
    rDiv.appendChild(hTwo);
    //
    let ulDiv = document.createElement("div");
    ulDiv.setAttribute("id","ulist");
    ulDiv.setAttribute("data-intro","This is the Action List. Your top 3 topics."); // ---- INTRO STEP 4
    ulDiv.setAttribute("data-step","4");
    let uList = document.createElement("ul");
    uList.setAttribute("id","action-list")
    uList.className = "action-list";
    rDiv.appendChild(ulDiv);
    ulDiv.appendChild(uList);
    // let counter = 0

    let actions = actionListItemsArray()

    let whichClicked = event.target.id
    if(whichClicked==0 || whichClicked == null){
        addToElectionCounter()
    }
    
    console.log(`Which clicked is: ${whichClicked}`)
    if(whichClicked==1){
        addToBlmCounter()
    }
    if(whichClicked==2){
        addToEnvCounter()
    }
    // counter++
    // console.log(counter)
    // if(counter>0){
    //     addToBlmCounter()
    // }
    // if(counter>4){
    //     addToEnvCounter()
    // }
    let idx = 0
    
    //
    // List
    
    let actionIcons = [actionListIcon1,actionListIcon2,actionListIcon3]
    let actionPoints = [actionPointsValue1,actionPointsValue2,actionPointsValue3]
    // let actionUrl = [actionListUrl2,actionListUrl3]
    let listArray = [actionListItem1,actionListItem2,actionListItem3]
    //next make one for the URLs of each
    listArray.forEach(example => {
        let liDiv = document.createElement("div");
        let icon = document.createElement("img")
        
        icon.setAttribute("src",actionIcons[idx])
        let item = document.createElement("button");
        item.textContent = example;
        item.setAttribute("id",idx)
        let counter = 0
        item.addEventListener('click',() => {
            
            //open link.js module (which has a "back" button that closes the link.js module and adds to the points)
            console.log(`COUNTER IS: ${counter}`)
            idx = event.target.id
            console.log(`INDEX IS: ${idx}`)
        
            link()
            ulDiv.remove()
            iaDiv.remove()
            
            counter++
            //the below conditional makes sure the election counter goes up
            // if(idx == 0){
            //     addToElectionCounter()
            // }
            // // the below conditional makes sure if the second item is clicked
            // // and the second item is BLM, keep the environment counter same
            // if(idx == 1 && actionListIcon2 == "modules/img/secondicon.png"){
            //     addToBlmCounter()
            // }
            // // the below conditional makes sure if the second item is clicked
            // // and the second item is ENV, keep the environment counter same
            // if(idx == 1 && actionListIcon2 == "modules/img/tree_icon.png"){
            //     addToEnvCounter()
            // }
            // // the below conditional makes sure if the third item is clicked
            // // and the third item is BLM, keep the environment counter same
            // if(idx == 2 && actionListIcon3 == "modules/img/secondicon.png"){
            //     addToBlmCounter()
            // }
            // // the below conditional makes sure if the third item is clicked
            // // and the third item is ENV, keep the environment counter same
            // if(idx == 2 && actionListIcon3 == "modules/img/tree_icon.png"){
            //     addToEnvCounter()
            // }
            addPoints(actionPoints[idx])
            //first, would be to open the link in a new tab
            //container that would open the url in the link div\
            //use the item's url in actionListItemsArray.js as what displays in link.js
        })
        
        let points = document.createElement("p")
        points.innerText = `+ ${actionPoints[idx]}`
        liDiv.setAttribute("id","listed-action");
        liDiv.className = "listed-action";
        liDiv.append(icon,item,points)
        uList.appendChild(liDiv);
        rDiv.appendChild(iaDiv)
        idx++
    });
    loadActionList()
    console.log(idx)
};

export const actionLink = () => {
    console.log("done")
};