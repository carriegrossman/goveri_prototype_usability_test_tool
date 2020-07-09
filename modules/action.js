import {actionListItem1, actionListItem2, actionListItem3, actionListIcon1, actionListIcon2, actionListIcon3, actionPointsValue1, actionPointsValue2, actionPointsValue3} from "./loadActionList.js"
import link from "./link.js";
// import addPoints,{addedPoints} from "./points.js"

export default () => {
    // Unordered List
    let rDiv = document.getElementById("root")
    let hTwo = document.createElement("h2");
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
    //
    // List

    let actionIcons = [actionListIcon1,actionListIcon2,actionListIcon3]
    let actionPoints = [actionPointsValue1,actionPointsValue2,actionPointsValue3]
    let idx = 0
    let listArray = [actionListItem1,actionListItem2,actionListItem3]
    //next make one for the URLs of each
    listArray.forEach(example => {
        let liDiv = document.createElement("div");
        let icon = document.createElement("img")
        // need to make sure this loads other icons, too
        icon.setAttribute("src",actionIcons[idx])
        let item = document.createElement("button");
        item.textContent = example;
        item.addEventListener('click',() => {
            //open link.js module (which has a "back" button that closes the link.js module and adds to the points)
            link()
            // addPoints()
            //use the item's url in actionListItemsArray.js as what displays in link.js
        })

        let points = document.createElement("p")
        points.innerText = `+ ${actionPoints[idx]}`
        liDiv.setAttribute("id","listed-action");
        liDiv.className = "listed-action";
        
        liDiv.append(icon,item,points)
        uList.appendChild(liDiv);
        idx++
    });
    // Second Icon "First"
    let iaDiv = document.createElement("div");
    iaDiv.setAttribute("id","icons");
    iaDiv.className = "icons";
    rDiv.appendChild(iaDiv);
    //
    var secondIcon = document.createElement("img");
    secondIcon.setAttribute("draggable","false");
    secondIcon.className = "second-icon";
    secondIcon.setAttribute("src","modules/img/secondicon.png");
    secondIcon.setAttribute("data-intro","First icon"); // ---- INTRO STEP 5
    secondIcon.setAttribute("data-step","5");
    // secondIcon.setAttribute("onclick","actionLink()");
    iaDiv.appendChild(secondIcon);
    //
    

};


export const actionLink = () => {
    console.log("done")
};