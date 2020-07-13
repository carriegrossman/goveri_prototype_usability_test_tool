import action from "./action.js"

export let actionStream = document.createElement("div")
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
backButton.addEventListener("click",() => {
    actionStream.remove()
    loadActionList()
})

export default () => {
    
    actionStream.className = "link"
    actionStream.setAttribute("id","actionStream")
    // link.setAttribute("target","_self")

    h3.innerText = "Action Stream™!"

    for(let i = 0;i<5;i++){
        let actionStreamItemDiv = document.createElement("div")
        actionStreamItemDiv.className = "action-stream-item-div"
        actionStreamItemDiv.setAttribute("id", i)
        
        innerDiv.append(actionStreamItemDiv)

        let actionStreamImg = document.createElement("div")
        actionStreamImg.className = "linkImgDiv"
        
        if(actionStreamItemDiv.id == 0){
            actionStreamImg.innerText = "Your post"
        }
        //ICONS
        let iconDiv = document.createElement("div")
        iconDiv.className = "stream-item-icons-div"
        let likeIcon = document.createElement("img")
        likeIcon.setAttribute("src","modules/img/like.png")
        likeIcon.className = "stream-icon"

        let commentIcon = document.createElement("img")
        commentIcon.setAttribute("src","modules/img/comment2.png")
        commentIcon.className = "stream-icon"
        commentIcon.setAttribute("id","comment-icon")
        
        iconDiv.append(likeIcon,commentIcon)

        actionStreamItemDiv.append(actionStreamImg,iconDiv)
    }

    actionStream.append(innerBackground,backButton)
    root.append(actionStream)
    // loadActionList()
    // quizzes()
}