let css = document.querySelector("h3");
let head = document.getElementById("head");
let body = document.getElementById("body");
let bodyBackground = document.getElementById("bodyBackground");


function setGradient() {
    bodyBackground.style.background = "linear-gradient(to right, " 
    + head.value + "," + body.value + ")";

    css.textContent = bodyBackground.style.background + ";";
    
}

head.addEventListener("input", setGradient);

body.addEventListener("input", setGradient);

