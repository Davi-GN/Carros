const body = document.querySelector("body");
const indicator = document.getElementById("result");
const whiteDot = document.getElementById("branco");
const whiteCar = document.getElementById("white");
const redDot = document.getElementById("vermelho");
const redCar = document.getElementById("red");

const buttons = document.querySelectorAll(".btn");
const reset = document.getElementById("resetar");
const accelerate = document.getElementById("acelerar");
const slow = document.getElementById("desacelerar");

const displayButtons = () => {
    buttons.forEach( button => {
        button.style.display = "inline";
    });
};

whiteDot.addEventListener("click", whiteClick = () => {
    indicator.innerHTML = "Carro Branco";
    body.style.backgroundColor = "white";
    body.style.color = "black";
    displayButtons();
});
whiteCar.addEventListener("click", whiteClick)

redDot.addEventListener("click", redClick = () => {
    indicator.innerHTML = "Carro Vermelho";
    body.style.backgroundColor = "red";
    body.style.color = "white";
    displayButtons();
});
redCar.addEventListener("click", redClick);

reset.addEventListener("click", () => location.reload());