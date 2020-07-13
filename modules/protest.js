import loadActionList from "./loadActionList.js"

export let protestStream = document.createElement("div")
let h3 = document.createElement("h3")
h3.className = "action-stream-header"

let innerBackground = document.createElement("div")
innerBackground.setAttribute("id","inner-background")

let innerDiv = document.createElement("div")
innerDiv.className = "action-stream-container"

innerBackground.append(h3,innerDiv)

let backButton = document.createElement("button")
backButton.className = "link-home"
backButton.innerHTML = "Back"
backButton.setAttribute("id","backButton")
backButton.addEventListener("click",() => {
    protestStream.remove()
    // loadActionList()
})

export default () => {
    
    protestStream.className = "link"
    protestStream.setAttribute("id","protestStream")
    // link.setAttribute("target","_self")

    h3.innerText = "Protests Near You"

    for(let i = 0;i<5;i++){
        let protestStreamItemDiv = document.createElement("div")
        protestStreamItemDiv.className = "action-stream-item-div"
        protestStreamItemDiv.setAttribute("id", i)
        
        innerDiv.append(protestStreamItemDiv)

        let protestStreamImg = document.createElement("div")
        protestStreamImg.className = "linkImgDiv"
        
        //ICONS
        let iconDiv = document.createElement("div")
        iconDiv.className = "stream-item-icons-div"
        let likeIcon = document.createElement("img")
        likeIcon.setAttribute("src","modules/img/star.png")
        likeIcon.className = "stream-icon"

        let commentIcon = document.createElement("img")
        commentIcon.setAttribute("src","modules/img/comment2.png")
        commentIcon.className = "stream-icon"
        commentIcon.setAttribute("id","comment-icon")
        
        iconDiv.append(likeIcon,commentIcon)

        protestStreamItemDiv.append(protestStreamImg,iconDiv)
    }

    protestStream.append(innerBackground,backButton)
    root.append(protestStream)
    // loadActionList()
    // quizzes()
}