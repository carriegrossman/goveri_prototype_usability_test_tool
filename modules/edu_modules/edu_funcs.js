////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
//MAIN MENU
////////////////////////////////////////////////////////////////////////////

import {eduDiv,infoDiv} from "./edu_main.js"
import {positions} from "./edu_data.js"

let j = 0
    let counter = 0
    
    let positionButtons = document.querySelectorAll('.positionButton')
    console.log(positionButtons)
    let infoAndQuizContainer = document.getElementById("info")
    
    let overviewHeader = document.createElement('h2')
    let overview = document.createElement('p')
    
    let nextButton = document.createElement('button')
    nextButton.className = "next-button"
    nextButton.innerText = "Next" 
    
    let goveriPoints = 0
    export let goveriPointsDisplay = document.createElement('h3')
    
    goveriPointsDisplay.className = "points-display"
    
    
    let localPointsDisplay = document.createElement('p')
    localPointsDisplay.className = "local-points"
    
    let politicalPositions = document.querySelectorAll(".position")
    politicalPositions.forEach(button => button.append(localPointsDisplay))
    
    
    
////////////////////////////////////////////////////////////////////////////
// showing the info about a political position
export default () => {
    //HOW MIGHT I EXTRACT THESE FUNCTIONS FROM THIS EXPORT DEFAULT
    // SO THEY ACTUALLY RUN -> the console.log runs but nothing below
    console.log("running")
    let showInfo = () => {
        let position = event.target.id
        console.log(position)
        for(let i in positions){
            if(position==positions[i].name){
                let id = positions[i].id
                overviewHeader.innerHTML = positions[i].title
                console.log(positions)
                overview.setAttribute("class", "overview")
                overview.innerHTML = positions[i].description
                
                counter = 0
    
                infoDiv.append(overviewHeader, overview, nextButton)
                eduDiv.append(infoAndQuizContainer)
    
                j = id  
            }
        }
        
    }
    
    let addScore = () => {
        positions[j].points += 5
        goveriPoints += 5
        console.log(goveriPoints)
        let vit = document.getElementById("_vit")
        if(goveriPoints >= 150){
            vit.style.setProperty("display",'block')
        }
    }
    
    let addBadge = () => {
        let positionDiv = document.getElementById(`${positions[j].name}Container`)
        let badge = document.createElement('div')
        badge.className = "badge"
        if(positions[j].points >= 50){
            positionDiv.append(badge)
        }
    }
    
    nextButton.addEventListener("click",() => {
        checkRightAnswer()
        
        //EVENTUALLY: add a timer to keep track of how much time they spend on each bit of information, don't add to score unless they spend at least 10 seconds on each piece of info
        
        //display facts, quiz questions
        fact = positions[j].facts[counter]
        if(counter>10 && positions[j].points>=50){
            fact = `Nice work! You earned your ${positions[j].title} badge!`
        }else if (counter>10){
            fact = `Nice work so far! You need ${50 - positions[j].points} earn your ${positions[j].title} badge!`
        }
        overview.innerText = fact
        console.log(positions[j].name,positions[j].points)
    
    //POINTS (local and global)
        // this conditional makes sure the user doesn't get points for learning the same info - score only goes up when the global counter is greater than the object's counter 
        if(counter < 5 && counter >= positions[j].counter){
            addScore()
        }
        
        // this conditional makes sure the object's counter only goes up when it's supposed to
        if(counter >= positions[j].counter){
            positions[j].counter++
        }
        console.log(positions[j].counter)
        counter++
    
        goveriPointsDisplay.innerText = `+${goveriPoints}`
        // localPointsDisplay.innerText = `${positions[j].points}`
        
        if(counter==6){
            overview.innerText = `Prove your knowledge and earn your ${positions[j].title} badge!`
        }
    
        if(counter > 6) {
    ////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////
    //QUIZZES
    ////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////
    
            const loadQuizQuestionAndAnswer = (positionID) => {
                
                if(positions[j].points >= 50 && counter == 12){
                    addBadge()
                    return
                } 
                //function for displaying/taking quiz -- PROBABLY BETTER THAN HAVING THIS BE AN ARRAY, though the quiz questions can be stored in an array
                //NEXT STEPS: increment through the list of quiz questions
                let quizQ = positions[positionID].quizQ[counter-7]
                console.log(positions[positionID].quizAnswerValues[counter-7][3])
                //NEXT STEPS: display the quiz question text, the quiz question answers
                overview.innerHTML =`${quizQ}
                <br> <br>
                <form>
                    <input type="radio" name="${positions[positionID].quizAnswerValues[counter-7][0]}" value="${positions[positionID].quizAnswerValues[counter-7][0]}">${positions[positionID].quizAnswerText[counter-7][0]}</input><br>
                    <input type="radio" name="${positions[positionID].quizAnswerValues[counter-7][1]}" value="${positions[positionID].quizAnswerValues[counter-7][1]}">${positions[positionID].quizAnswerText[counter-7][1]}</input><br>
                    <input type="radio" name="${positions[positionID].quizAnswerValues[counter-7][2]}" value="${positions[positionID].quizAnswerValues[counter-7][2]}">${positions[positionID].quizAnswerText[counter-7][2]}</input><br>
                    <input type="radio" name="${positions[positionID].quizAnswerValues[counter-7][3]}" value="${positions[positionID].quizAnswerValues[counter-7][3]}">${positions[positionID].quizAnswerText[counter-7][3]}</input><br>
                </form>
                `
            //NEXT STEPS: add a class to each container to make sure the quiz gets added to the right div (not just the bottom of the root)
            }
            //run the quiz function with the argument of the id of the current position (which is stored in j)
            loadQuizQuestionAndAnswer(j)
        }
    })
    
    let checkRightAnswer = () => {
    //NEXT STEPS: if user input == correctAnswer -> addScore()
        //I changed the name and value in the object's answer arrays to "correct" as a shortcut and if the input with that value is checked then the score should go up
        let inputs = document.querySelectorAll("input")
        let value
        let checked = false
        inputs.forEach(input =>{
            console.log(`value: ${input.value}`)
            if(input.type=="radio" && input.checked == true){// NEXT STEPS: if the right one is checked, add score
                value = input.value
                checked = true
                console.log(`you selected ${value}`)
            }
        })
        if(value=="correct" && checked==true){
            addScore()
            console.log("AHA!")
        }
        console.log(positions[j].points)
    }
    // forEach loop through the list adding eventlisteners to each
    positionButtons.forEach(button => {
        button.addEventListener('click',showInfo)
        button.node = showInfo
    })
}

