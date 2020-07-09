import {firstName, lastName} from "./signupform.js"
import hardPoints from "./points.js"
import zip from "./zipcode.js"

let city
let state

let avatarHtml = () => {
    // <div> "root"
    let rDiv = document.getElementById("root");
    //
    // Menu bar
    let nDiv = document.createElement("nav");
    nDiv.setAttribute("id","menu");
    nDiv.className = "menu";
    rDiv.appendChild(nDiv);
    //
    let anDiv = document.createElement("a");
    anDiv.className = "menu-icon"
    anDiv.setAttribute("href","#");
    // anDiv.setAttribute("target","_blank")
    anDiv.innerHTML = "☰"
    // anDiv.setAttribute("data-intro","Menu bar. Work in progress."); // ---- INTRO STEP 8
    // anDiv.setAttribute("data-step","8");
    nDiv.appendChild(anDiv);
    // <div> "main"
    let mDiv = document.createElement("div");
    mDiv.setAttribute("id","main");
    mDiv.className = "main";
    mDiv.setAttribute("data-intro","Hello! Welcome to the home page."); // ---- INTRO STEP 1
    mDiv.setAttribute("data-step","1");
    rDiv.appendChild(mDiv);
    //
    var ahDiv = document.createElement("div"); // -- <div>
    ahDiv.className = "ava-group"; // -class/CSS
    ahDiv.setAttribute("data-intro","You can change your avatar by clicking on this icon"); // ---- INTRO STEP 2
    ahDiv.setAttribute("data-step","2");
    mDiv.appendChild(ahDiv); // <div>"main" -> <div>"ava-group"
    //
    var ahsDiv = document.createElement("div"); // -- <div>for styling
    ahsDiv.className = "avag-style"; // -class/CSS
    ahDiv.appendChild(ahsDiv); // <div>"ava-group" -> <div>"avag-style"
    //
    var ahLab = document.createElement("label"); // -- <label>
    ahLab.setAttribute("id","ava-html");
    ahLab.className = "ava-label"; // -class/CSS
    ahLab.setAttribute("for","avatar");
    ahDiv.appendChild(ahLab); // <div>"ava-group" -> <label>"ava-html"
    //
    var ahImg = document.createElement("img"); // -- <img>
    ahImg.setAttribute("draggable","false");
    ahImg.setAttribute("id","img-upload");
    ahImg.className = "ava-img"; // -class/CSS
    ahImg.setAttribute("src","modules/img/default_ava.png");
    ahLab.appendChild(ahImg);
    //
    var ahbDiv = document.createElement("div"); // -- <div>
    ahbDiv.className = "col-md-6"; // bootstrap
    ahDiv.appendChild(ahbDiv); // <div>"ava-group" -> <div>bootstrap
    //
    var ahInput = document.createElement("input"); // -- <input>
    ahInput.setAttribute("id","avatar");
    ahInput.setAttribute("name","avatar");
    ahInput.setAttribute("type","file");
    ahInput.className = "ava-control"; // -class/CSS
    ahbDiv.appendChild(ahInput); // - <div>bootstrap -> <input>"avatar"
    //
    // Avatar 
    function avatarFile(){
        if (this.files && this.files[0]){
            let readFile = new FileReader();
            readFile.onload = function (e){
                document.getElementById("img-upload").src = e.target.result;
                document.getElementById("img-upload").style.width = "80px";
            };
            readFile.readAsDataURL(this.files[0]);
        };
    };
    document.getElementById("avatar").addEventListener("change",avatarFile,false);
    //
    // Points & Name
    let avaPn = document.createElement("div");
    avaPn.className = "ava-group";
    avaPn.setAttribute("data-intro","Right here you have your points collected from the surveys and your name.") // ---- INTRO STEP 3
    avaPn.setAttribute("data-step","3")
    mDiv.appendChild(avaPn);
    //
    let pointAndName = document.createElement("div");
    pointAndName.className = "point-name"
    avaPn.appendChild(pointAndName);
    //
    let pointTally =  document.createElement("div");
    pointTally.setAttribute("id","points");
    pointTally.className = "points"
    pointTally.textContent = `${hardPoints} points`
    pointAndName.appendChild(pointTally);
    //
    let usersName =  document.createElement("div");
    usersName.setAttribute("id","users-name");
    usersName.className = "users-name"
    usersName.innerHTML = `${firstName.value} ${lastName.value}`
    pointAndName.appendChild(usersName);

    let usersLocation = document.createElement("div");
    usersLocation.setAttribute("id","location");
    usersLocation.className = "location";
    usersLocation.innerHTML = `${city}, ${state}`
    pointAndName.appendChild(usersLocation)
};

export default avatarHtml

export const addState = (city,state) => {
    document.getElementById("location").innerHTML = `${city},${state}`
}
export const receive = (city_,state_) =>{
    city = city_
    state = state_
}

export let sendCityState = () => {
    return [city,state]
}