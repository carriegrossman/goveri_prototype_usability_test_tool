import zipcode from "./zipcode.js"
import avatarHtml,{receive} from "./avatar.js"
import action,{actionLink} from "./action.js"
import loadActionList from "./loadActionList.js"

import iconLinks from "./icons.js"
import actionListItems,{actionListItemsArray} from "./actionListItemsArray.js";
// import actionList from "./action.js"

function home(){
    // receive()
    avatarHtml()
    // actionListItems()
    // actionListItemsArray()
    action()
    loadActionList()
    iconLinks()
    introJs().start();
};
// actionList()


// Menu Slider = Nav
// HTML for Avatar
// Name
// Points
// Action List
// Hyperlink: Icons


export default home