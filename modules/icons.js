import edu from "./edu_modules/edu_main.js"

let iconLinks = () => {
    let rDiv = document.getElementById("root")
    let iDiv = document.getElementById("icons");
    iDiv.className = "icons";
    rDiv.appendChild(iDiv);
    //
    // First Icon "Second"
    var firstIcon = document.createElement("img");
    firstIcon.setAttribute("draggable","false");
    firstIcon.className = "first-icon";
    firstIcon.setAttribute("src","modules/img/firsticon.png")
    firstIcon.setAttribute("data-intro","Second icon"); // ---- INTRO STEP 6
    firstIcon.setAttribute("data-step","6");

    firstIcon.addEventListener("click",edu);

    iDiv.appendChild(firstIcon);
    //
    // Second Icon "First"
    //
    // ---  moved to action.js  ---
    //
    // Third Icon "Third"
    var thirdIcon = document.createElement("img");
    thirdIcon.setAttribute("draggable","false");
    thirdIcon.className = "third-icon";
    thirdIcon.setAttribute("src","modules/img/thirdicon.png");
    thirdIcon.setAttribute("onclick",'window.open("https://news.google.com/topstories?hl=en-US&tab=wn&gl=US&ceid=US:en")');
    thirdIcon.setAttribute("data-intro","Third icon"); // ---- INTRO STEP 7
    thirdIcon.setAttribute("data-step","7");
    iDiv.appendChild(thirdIcon);
    //
    
};

export default iconLinks