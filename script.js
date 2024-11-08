const body = document.querySelector("body");
const whiteDot = document.getElementById("branco");
const redDot = document.getElementById("vermelho");

whiteDot.addEventListener("click", () => {
    console.log("asda")
    body.style.backgroundColor = "white";
});

redDot.addEventListener("click", () => {
    console.log("asda")
    body.style.backgroundColor = "red";
});