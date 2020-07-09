// import {positionButtons,infoAndQuizContainer,overviewHeader} from "./edu_funcs.js"
// import {positions} from "./edu_data.js"


// export default () => {
//     // forEach loop through the list adding eventlisteners to each
//     positionButtons.forEach(button => {
//         button.addEventListener('click',showInfo)
//         button.node = showInfo
//     })

//     let position = event.target.id
//     console.log(position)

//     for(let i=0;i<positions.length;i++){
//         if(position==positions[i].name){
//             let id = positions[i].id
//             overviewHeader.innerHTML = positions[i].title
//             console.log(positions)
//             overview.setAttribute("class", "overview")
//             overview.innerHTML = positions[i].description
            
//             counter = 0

//             infoAndQuizContainer.append(overviewHeader, overview, nextButton)
//             eduDiv.append(infoAndQuizContainer)

//             j = id  
//         }
//     }
    
// }