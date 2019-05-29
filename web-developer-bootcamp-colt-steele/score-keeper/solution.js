const p1Btn = document.querySelector("#p1");
const p2Btn = document.querySelector("#p2");
const resetBtn = document.querySelector("#resetBtn");

let p1Display = document.querySelector("#p1Display");
let p2Display = document.querySelector("#p2Display");
let winningScoreDisplay = document.querySelector("p span");
let numInput = document.querySelector("input");
let p1Score = 0;
let p2Score = 0;
let gameOver = false;
let winningScore = 5;

function reset(){
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = 0;
    p2Display.textContent = 0;
    p1Display.classList.remove("winner");
    p2Display.classList.remove("winner");
    gameOver = false;
}

p1Btn.addEventListener("click", function () {
    if (!gameOver) {
        p1Score++;
        if (p1Score === winningScore) {
            p1Display.classList.add("winner");
            gameOver = true;
        }
        p1Display.textContent = p1Score;
    }
});

p2Btn.addEventListener("click", function () {
    if (!gameOver) {
        p2Score++;
        if (p2Score === winningScore) {
            p2Display.classList.add("winner");
            gameOver = true;
        }
        p2Display.textContent = p2Score;
    }
});

resetBtn.addEventListener("click", function () {
    reset();
});

numInput.addEventListener("change", function(){
    winningScoreDisplay.textContent = this.value;
    winningScore = Number(this.value);
    reset();
});