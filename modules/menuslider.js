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
    ncDiv.setAttribute("data-intro","Here in this menu-slider, you can click on the icons to support through Venmo, Contact, and participate in the next raffle by using your points!"); // ---- INTRO STEP 11
    ncDiv.setAttribute("data-step","11");
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
    nList2.setAttribute("id","contact-bar")
    nList2.innerHTML = "<a href='#googleForm'>Contact</a>";
    nUlist.appendChild(nList2);
    let nList3 = document.createElement("li");
    nList3.setAttribute("id","raffle-bar")
    nList3.innerText = "Raffle";
    nUlist.appendChild(nList3);
    //
    let nListRaffle3 = document.createElement("p");
    nListRaffle3.setAttribute("id","raffle-nc");
    nListRaffle3.className = "raffle-nc";
    nUlist.appendChild(nListRaffle3);
    //
    let raffleName = document.createElement("p");
    raffleName.setAttribute("id","raffle-name");
    // raffleName.innerText = "Next raffle: "
    nListRaffle3.appendChild(raffleName);
    //
    let timeRaffle = document.createElement("p");
    timeRaffle.setAttribute("id","demo");
    nListRaffle3.appendChild(timeRaffle);
    //
    let countDownDate = new Date("July 13, 2020 16:00:00").getTime();
    let x = setInterval(function() {
    let now = new Date().getTime();
    //
    let distance = countDownDate - now;
    //
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    //
    document.getElementById("demo").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";
    //
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "Raffle ended!";
        }
    }, 1000);
    //
    document.getElementById("toggle-btn").addEventListener("click", function(){
        document.getElementById("sidebar").classList.toggle("active");
    })

    ncDiv.addEventListener("click", function(){
        nUlist.classList.toggle("visible");
    })
    nList3.addEventListener("click", function(){
        nListRaffle3.classList.toggle("time-visble");
    })
    
}