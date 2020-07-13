import menuslider from "./menuslider.js"
import zipcode from "./zipcode.js"
import avatarHtml,{receive} from "./avatar.js"
import action,{actionLink} from "./action.js"
import loadActionList from "./loadActionList.js"
import iconLinks from "./icons.js"

function home(){
    alert("Please click 'Next' through all of the instructions so you know exactly what to do!")
    // receive()
    menuslider()
    avatarHtml()
    action()
    loadActionList()
    iconLinks()
    introJs().start();
};

export default home