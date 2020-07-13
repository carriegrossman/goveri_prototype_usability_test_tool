import home from "./home.js"
import loadActionList from "./loadActionList.js"

export let dropdown1 = document.createElement("select")
export let dropdown2 = document.createElement("select")

let survey = () => {
    alert("Complete the form to tell us what causes matter to you!")
    let cause1 = "Black Lives Matter"
    let cause2 = "The Environment"

    let br = document.createElement("br")

    let question = document.createElement("h2")
    question.innerText = "Besides the 2020 election, which causes matter the most to you?"

    // consider shifting this form to a likert scale if time permits
    // with the most important listed at the top
    // OR consider having them pick one at a time and having a list
    // accessible through the menu where they can add causes
    // which would then have the action items from that cause load
    // into the action items list
    let inputsDiv = document.createElement("div")
    
    ////////////////////////////////////////////////
    // MOST IMPORTANT CAUSE
    ////////////////////////////////////////////////
    let causeLabel1 = document.createElement("label")
    causeLabel1.setAttribute("for","dropdown1")
    causeLabel1.innerText = "Most Important Cause: "

    
    
    dropdown1.appendChild(new Option("Select one (optional)", ""));
    dropdown1.appendChild(new Option(cause1, "blm"));
    dropdown1.appendChild(new Option(cause2, "environment"));

    ////////////////////////////////////////////////
    // SECOND MOST IMPORTANT CAUSE
    ////////////////////////////////////////////////
    let causeLabel2 = document.createElement("label")
    causeLabel2.setAttribute("for","dropdown1")
    causeLabel2.innerText = "Second Most Important Cause: "

    
    
    dropdown2.appendChild(new Option("Select one (optional)", ""));
    dropdown2.appendChild(new Option(cause1, "blm"));
    dropdown2.appendChild(new Option(cause2, "environment"));

    inputsDiv.append(causeLabel1, br, dropdown1, br, causeLabel2, br, dropdown2)

    let submitButton = document.createElement("button")
    submitButton.classList.add("surveySubmit");
    submitButton.innerText = "Submit"
    
    let form = document.createElement("form")
    
    form.append(question, inputsDiv)

    root.append(form, submitButton)

    submitButton.addEventListener("click", () => {
        // event.preventDefault()
        form.remove()
        submitButton.remove()
        
        home()
    })
}

export default survey

/* 
    to make the items draggable when ranking (just not sure how):

        https://jqueryui.com/sortable/

    the logic would work with this
*/