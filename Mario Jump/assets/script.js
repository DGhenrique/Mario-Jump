const mario = document.querySelector(".mario");
const pipe = document.querySelector(".pipe");
const scoreElement = document.getElementById("score");

let score = 0;

const jump = () => {
    mario.classList.add("jump");

    setTimeout(() => {
        mario.classList.remove("jump");

        score += 1;
        scoreElement.textContent = score;
    }, 500);
}

const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace("px", "");

    console.log(marioPosition);

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
        pipe.style.animation = "none";
        mario.style.animation = "none";
        mario.style.left = `${pipePosition}px`;
        mario.src = "./images/game-over.png";
        console.log("Path to image:", mario.src);
        mario.style.width = "75px";
        mario.style.marginLeft = "50px";

        clearInterval(loop);
    }

}, 10);

document.addEventListener("keydown", jump);
