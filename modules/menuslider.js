export default () => {
    let rDiv = document.getElementById("root");
    // let xDiv = document.createElement("div");
    // xDiv.className = "x-menu";
    let nDiv = document.createElement("div");
    nDiv.setAttribute("id","sidebar");
    // rDiv.appendChild(xDiv);
    rDiv.appendChild(nDiv);
    //
    let ncDiv = document.createElement("div");
    ncDiv.setAttribute("id","toggle-btn");
    ncDiv.className = "toggle-btn";
    // ncDiv.setAttribute("onclick","show()")
    ncDiv.setAttribute("type","module");
    nDiv.appendChild(ncDiv);
    //
    // 
    // let ncCloseButton = document.createElement("div")
    // ncCloseButton.className = "x-btn"
    // ncCloseButton.innerText = "X"
    //
    let navSpan = document.createElement("div")
    navSpan.className = "btn"
    ncDiv.appendChild(navSpan);
    let nSpan1 = document.createElement("span");
    nSpan1.className = "navspan1"
    navSpan.appendChild(nSpan1);
    let nSpan2 = document.createElement("span");
    nSpan2.className = "navspan2"
    navSpan.appendChild(nSpan2);
    let nSpan3 = document.createElement("span");
    nSpan3.className = "navspan3"
    navSpan.appendChild(nSpan3);
    //
    let nUlist = document.createElement("ul");
    nUlist.className = "ul-list"
    nDiv.appendChild(nUlist);
    //
    let nList1 = document.createElement("li");
    nList1.setAttribute("id","support-bar")
    nList1.className = "list-btn"
    // nList1.setAttribute("onclick","showitems()")
    nList1.innerText = "Support";
    nList1.setAttribute("onclick",'window.open("https://venmo.com/blmroc")');
    nUlist.appendChild(nList1);
    let nList2 = document.createElement("li");
    nList2.innerText = "Raffle";
    nUlist.appendChild(nList2);
    let nList3 = document.createElement("li");
    nList3.innerText = "Contact";
    nUlist.appendChild(nList3);
    //
    // function show() {
    //     nDiv.classList.toggle("active");
    // };
    document.getElementById("toggle-btn").addEventListener("click", function(){
        document.getElementById("sidebar").classList.toggle("active");
    })

    ncDiv.addEventListener("click", function(){
        nUlist.classList.toggle("visible");
    })
}