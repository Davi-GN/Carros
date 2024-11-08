const body = document.querySelector("body");
const indicator = document.getElementById("result");
const whiteDot = document.getElementById("branco");
const whiteCar = document.getElementById("white");
const redDot = document.getElementById("vermelho");

whiteDot.addEventListener("click", () => {
    indicator.innerHTML = "Carro Branco";
    body.style.backgroundColor = "white";
    body.style.color = "black";
});

redDot.addEventListener("click", redClick = () => {
    indicator.innerHTML = "Carro Vermelho";
    body.style.backgroundColor = "red";
    body.style.color = "white";
});