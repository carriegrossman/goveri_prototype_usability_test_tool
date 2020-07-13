import edu from "./edu_modules/edu_main.js"
import actionStream from "./actionStream.js";
import protest from "./protest.js"

export let iaDiv = document.createElement("div");
export let iDiv = document.getElementById("icons");

let iconLinks = () => {
let rDiv = document.getElementById("root")
    // Second Icon "First"
    
    iaDiv.setAttribute("id","icons");
    iaDiv.className = "icons";
    rDiv.appendChild(iaDiv);

    
    iDiv = document.getElementById("icons");
    iDiv.className = "icons";
    rDiv.appendChild(iDiv);
    //
    // First Icon "Second"
    var firstIcon = document.createElement("img");
    firstIcon.setAttribute("draggable","false");
    firstIcon.className = "first-icon";
    firstIcon.setAttribute("src","modules/img/firsticon.png")
    firstIcon.setAttribute("data-intro","This is Goveri Edu. Here you learn about local politics in bite-sized chunks, earning points for reading and completing small quizzes."); // ---- INTRO STEP 8
    firstIcon.setAttribute("data-step","7");

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
    thirdIcon.setAttribute("src","modules/img/feed.png");
    thirdIcon.addEventListener("click",actionStream);
    thirdIcon.setAttribute("data-intro","This is the Action Stream™. Here you post evidence of your social or political activism, and see posts of others' activism. In order to hold each other accountable and earn points for a specific action from the Action List, at least five people on the Goveri app need to like your post, which must show proof of your action. For example, a picture of a receipt from a black-owned business would prove you supported a black-owned business."); // ---- INTRO STEP 9
    thirdIcon.setAttribute("data-step","8");
    iDiv.appendChild(thirdIcon);
    //
    //
    var secondIcon = document.createElement("img");
    secondIcon.setAttribute("draggable","false");
    secondIcon.className = "second-icon";
    secondIcon.setAttribute("src","modules/img/secondicon.png");
    secondIcon.setAttribute("data-intro","Here you can find the protests and rallies related to the causes you care about. We hope to add features allowing protest organizers to capture key metrics and communicate data-driven policy demands directly to representatives."); // ---- INTRO STEP 10
    secondIcon.setAttribute("data-step","10");
    secondIcon.addEventListener("click",protest)
    // secondIcon.setAttribute("onclick","actionLink()");
    iaDiv.appendChild(secondIcon);
    let googleForm = document.getElementById("googleForm")
    googleForm.setAttribute("data-intro","Completing this form is how you can make an impact right now! Your answers are incredibly important to us, as they help us design the app in a way that works best for you. Please click 'Done' and begin using the app. After a few minutes, please complete this form. Thank you again for helping us build Goveri!"); // ---- INTRO STEP 11
    secondIcon.setAttribute("data-step","9");
};

export default iconLinks