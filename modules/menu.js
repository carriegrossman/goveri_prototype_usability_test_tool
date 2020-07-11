

export default () => {
    let rDiv = document.getElementById("root");
    let nDiv = document.createElement("div");
    nDiv.setAttribute("id","sidebar");
    rDiv.appendChild(nDiv);
    //
    let ncDiv = document.createElement("div");
    ncDiv.className = "toggle-btn";
    ncDiv.setAttribute("onclick","show()")
    nDiv.appendChild(ncDiv);
    //
    let navSpan = document.createElement("div")
    navSpan.className = "btn-group"
    ncDiv.appendChild(navSpan);
    let nSpan1 = document.createElement("span");
    navSpan.appendChild(nSpan1);
    let nSpan2 = document.createElement("span");
    navSpan.appendChild(nSpan2);
    let nSpan3 = document.createElement("span");
    navSpan.appendChild(nSpan3);
    //
    let nUlist = document.createElement("ul");
    nDiv.appendChild(nUlist);
    //
    let nList1 = document.createElement("li");
    nList1.setAttribute("id","support-bar")
    nList1.className = "list-btn"
    // nList1.setAttribute("onclick","showitems()")
    nList1.innerText = "Support";
    nUlist.appendChild(nList1);
    let nList2 = document.createElement("li");
    nList2.innerText = "Raffle";
    nUlist.appendChild(nList2);
    let nList3 = document.createElement("li");
    nList3.innerText = "Contact";
    nUlist.appendChild(nList3);
    //
    //
    let nListList = document.createElement("li");
    nListList.className = "list-link"
    nList1.appendChild(nListList);
    //
    let nListItem1 = document.createElement("li")
    nListItem1.className = "venmo-item"
    nListItem1.setAttribute("onclick",'window.open("https://venmo.com/blmroc")');
    nListItem1.innerText = "Venmo"
    nListList.appendChild(nListItem1);
    let nListItem2 = document.createElement("li")
    nListItem1.className = "cash-item"
    nListItem2.setAttribute("onclick",'window.open("https://cash.app/")')
    nListItem2.innerText = "Cash-App"
    nListList.appendChild(nListItem2);
    //
    function show() {
        nDiv.classList.toggle("active");
        // ncDiv.addEventListener("click", hidebutton());
    };
    function hidebutton() {
        navSpan.classList.toggle("hidebtn")
    };
    // function navBackButton() {
    // }
    // function showitems() {
        
    // }
}