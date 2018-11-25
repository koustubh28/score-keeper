var score1 = 0;
var score2 = 0;
var player1 = document.getElementById("player-1");
var player2 = document.getElementById("player-2");
var resetButton = document.getElementById("reset-button");
var inputNumber = document.getElementById("input-number");
var scoreLimit = document.querySelector("#score-limit");
var span1 = document.getElementById("pl-1");
var span2 = document.getElementById("pl-2");
var gameOver = false;
var winningScore = 5;

// PLAYER 1
player1.addEventListener("click", function() {
    if (!gameOver) {
        score1++;
        if (score1 === winningScore) {
            span1.classList.add('winner');
            gameOver = true;
        }
        span1.textContent = score1;
    }
});


// PLAYER 2
player2.addEventListener("click", function() {
    if (!gameOver) {
        score2++ ;
        if (score2 === winningScore) {
            span2.classList.add('winner');
            gameOver = true;
        }
        span2.textContent = score2;
    }
});


// RESET BUTTON FUNCTIONALITY
resetButton.addEventListener("click", function() {
    reset();
});


//RESET FUNCTION
function reset() {
    score1 = 0;
    score2 = 0;
    span1.textContent = 0;
    span2.textContent = 0;
    span1.classList.remove("winner");
    span2.classList.remove("winner");
    gameOver = false;    
}

//INPUT NUMBER EVENT
inputNumber.addEventListener("change", function() {
    scoreLimit.textContent = this.value;
    winningScore = Number(this.value);
    reset();
});