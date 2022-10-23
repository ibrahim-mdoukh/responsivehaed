var myAside = document.querySelector("aside");
var myFull = document.querySelector(".full");
var myOpen = document.getElementById("open");
var myClose = document.getElementById("close");

myOpen.addEventListener("click" , openaside);
myClose.addEventListener("click" , closeaside);
myFull.addEventListener("click" , closeaside);
function openaside(){
    myAside.style.left = "0";
    myFull.style.display = "block";
}
function closeaside(){
    myAside.style.left ="-310px";
    myFull.style.display = "none";
}
let navLinks = document.querySelector(".links");
let htmlcssArrow = document.querySelector(".a1");
htmlcssArrow.onclick = function () {
    navLinks.classList.toggle("show1");
}
let moreArrow = document.querySelector(".a2");
moreArrow.onclick = function () {
    navLinks.classList.toggle("show2");
}

let header = document.querySelector("header");
let searchBox = document.querySelector(".search-box .bi-search");

searchBox.addEventListener("click", () => {
    header.classList.toggle("showInput");
    if (header.classList.contains("showInput")) {
        searchBox.classList.replace("bi-search", "bi-x");
    } else {
        searchBox.classList.replace("bi-x", "bi-search");
    }
});