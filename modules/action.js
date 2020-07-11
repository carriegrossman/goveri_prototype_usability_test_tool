import loadActionList, {actionListItem1, actionListItem2, actionListItem3, actionListIcon1, actionListIcon2, actionListIcon3, actionPointsValue1, actionPointsValue2, actionPointsValue3, addToElectionCounter, addToBlmCounter, addToEnvCounter} from "./loadActionList.js"
import link from "./link.js";
import addPoints,{hardPoints} from "./points.js"
import {blmCounter,envCounter,electionCounter,keepBlmCounterSame,keepEnvCounterSame} from "./loadActionList.js"
import {iaDiv} from "./icons.js"
import {actionListItemsArray} from "./actionListItemsArray.js";
import runAction from "./runAction.js";

    // Unordered List
    

export default () => {
    let rDiv = document.getElementById("root")
    let hTwo = document.createElement("h2");
    hTwo.setAttribute("class","action-header");
    hTwo.textContent = "Action List";
    rDiv.appendChild(hTwo);
};

export const actionLink = () => {
    console.log("done")
};