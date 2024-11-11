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

var Car = Number;
var carSize = 1;
var posY = 60;
var posX = 215;

const handleSize = (action) => {
    const changeSize = (target) => {
        ammount = action == "decrease" ? .1 : -.1;
        carSize += ammount;
        target.style.transform = `scale(${carSize})`;
    };

    if (Car == 0) {
        changeSize(whiteCar);
    }

    if (Car == 1) {
        changeSize(redCar);
    }
};

const handlePosition = (action) => {
    const moveY = (target) => {
        mult = action == "decrease" ? 1.2 : .8;
        posY = posY * mult;
        target.style.top = `${posY}px`;
    };

    const moveX = (target, direction) => {
        mult = action == "decrease" ? .990 : 1.01;
        if (direction == "right") {
            posX = posX * mult;
            target.style.right = `${posX}px`    
        } else {
            posX = posX * mult;
            target.style.left = `${posX}px`    
        }
    };

    if (action == "decrease") {
        if (Car == 0) {
            moveY(whiteCar);
            moveX(whiteCar, "left");
        } else {
            moveY(redCar);
            moveX(redCar, "right");
        }
    } else {
        if (Car == 0) {
            moveY(whiteCar);
            moveX(whiteCar, "left");
        } else {
            moveY(redCar);
            moveX(redCar, "right");
        }
    }
};

const displayButtons = () => {
    buttons.forEach( button => {
        button.style.display = "inline";
    });
};
const whiteClick = () => {
    indicator.innerHTML = "Carro Branco";
    body.style.backgroundColor = "white";
    body.style.color = "black";
    Car = 0;
    displayButtons();
};
const redClick = () => {
    indicator.innerHTML = "Carro Vermelho";
    body.style.backgroundColor = "red";
    body.style.color = "white";
    Car = 1;
    displayButtons();
};

whiteDot.addEventListener("click", whiteClick);
whiteCar.addEventListener("click", whiteClick);
redDot.addEventListener("click", redClick);
redCar.addEventListener("click", redClick);

reset.addEventListener("click", () => location.reload());

accelerate.addEventListener("click", Accelerate = () => {
    handleSize();
    handlePosition();
});
document.addEventListener("keydown", (e) => {
    if (e.key == "w") Accelerate();
});

slow.addEventListener("click", Slow =  () => {
    handleSize("decrease");
    handlePosition("decrease");
});
document.addEventListener("keydown", (e) => {
    if (e.key == "s") Slow();
});