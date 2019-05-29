const h1 = document.querySelector("h1");
const highlight = document.querySelector("#highlight");
const para2 = document.getElementById("para2");
const para3 = document.getElementById("para3");
const para4 = document.getElementById("para4");
const para5 = document.getElementById("para5");
const techImg = document.getElementsByTagName("img")[0];
const archImg = document.getElementsByTagName("img")[1];
const googleLink = document.getElementById("googleLink");
const googleLogo = document.getElementById("googleLogo");
const links = document.getElementsByTagName("a");
const h2 = document.querySelector("h2");
const ul = document.querySelector("ul");
const li = document.querySelectorAll("li");
const colorBtn = document.querySelector("#colorBtn");
const body = document.querySelector("body");


h1.style.color      = "blue";
h1.style.border     = "10px solid red";
h1.style.fontsize   = "70px";
h1.style.background = "yellow";
h1.style.margintop  = "200px";

//separation of concerns by keeping style elements within CSS
highlight.classList.toggle("changedStyle");

para2.innerText="the .textContent method <strong>only creates text-content</strong>";
para3.innerHTML="the .innerHTML method <strong>creates HTML content too </strong>.";

para4.innerText="Changed "+ techImg.getAttribute("alt") + " to random image";
para5.innerText="Changed "+ archImg.getAttribute("alt") + " image to nature image";

//change Attributes
techImg.setAttribute("src", "https://placeimg.com/640/480/any");
archImg.setAttribute("src", "https://placeimg.com/640/480/nature");

googleLink.setAttribute("href", "https://www.bing.com");

googleLogo.setAttribute("src", "https://placekitten.com/500/500");
googleLogo.setAttribute("width", "500");
googleLogo.setAttribute("height", "500");

//add class
googleLogo.classList = "m-5";

//Change every link to duckduckgo.com
for (let i=0; i<links.length; i++){
    console.log(links[i].setAttribute("href", "https://duckduckgo.com"));
}

h2.addEventListener("mousedown", function(){
    h2.textContent = "YOU CLICKED ME!!!";
});
h2.addEventListener("mouseup", function(){
    h2.textContent = "CLICK ME!!!";
});

for (i=0; i<li.length; i++){
    li[i].addEventListener("click", function(){
        this.style.color="purple";
    });
}

colorBtn.addEventListener("click", function (){
    body.classList.toggle("purpleBg");
});