var css = document.querySelector("h3");
var color1 = document.querySelector("#color1");
var color2 = document.querySelector("#color2");

var body = document.getElementById("gradient");

function changeGradient()
{
    body.style.background = "linear-gradient(to right," + color1.value+","+ color2.value+ ")";

} 

// color1.addEventListener("input", changeGradient);


// color2.addEventListener("input", changeGradient);

function isUserValid(bool)
{
    return bool;
}

var answer = isUserValid(true) ? "You can enter" : "You cant enter."