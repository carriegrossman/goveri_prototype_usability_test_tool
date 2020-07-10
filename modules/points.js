import actionListItemsArray from "./actionListItemsArray.js"
import { pointTally, pointAndName, usersName } from "./avatar.js"

export let hardPoints = 0
export let addedPoints = document.getElementById("points")

function addPoints(points){
    hardPoints += (Number.parseInt(points))
    // pointTally.remove()
    pointAndName.insertBefore(pointTally,usersName)
    // pointTally = document.createElement("p")
    pointTally.innerText = `${hardPoints} points`
    
}






//     let thePoints = 0
//     switch(thePoints){
//         case "blm":
//             thePoints += actionListItemsArray[0].points
//             addedPoints.innerHTML = `${thePoints} points`
//             break
//         case "environment":
//             thePoints += actionListItemsArray[1].points
//             break
//         case "election":
//             thePoints += actionListItemsArray[2].points
//             break
//         default:
//             console.log("no points")
//     }
//     addedPoints.innerHTML = thePoints
        
// }
export default addPoints