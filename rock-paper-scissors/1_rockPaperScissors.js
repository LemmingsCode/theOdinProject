var computerChoice = 0;

function computerPlay() {
    let computerCase = Math.floor(Math.random() * 3) ;
    if (computerCase === 0){
        computerChoice = "ROCK";
    } else if (computerCase == 1) {
        computerChoice = "PAPER";
    } else {
        computerChoice = "SCISSORS";
    }
    console.log(computerChoice);
    // return computerChoice;
}

function playRound(playerSelection, computerSelection) {
    var playerScore = 0;
    var computerScore = 0;
    var upperPlayerSelection = playerSelection.toUpperCase();
    if (upperPlayerSelection === computerChoice) {
        console.log("draw");
    } else if (upperPlayerSelection === "ROCK" && computerChoice === "PAPER") {
        computerScore++;
        console.log("lose");
    } else if (upperPlayerSelection === "ROCK" && computerChoice === "SCISSORS") {
        playerScore++;
        console.log("win");
    } else if (upperPlayerSelection === "PAPER" && computerChoice === "SCISSORS") {
        computerScore++;
        console.log("lose");
    } else if (upperPlayerSelection === "PAPER" && computerChoice === "ROCK") {
        playerScore++;
        console.log("win");
    } else if (upperPlayerSelection === "SCISSORS" && computerChoice === "ROCK") {
        computerScore++;
        console.log("lose");
    } else if (upperPlayerSelection === "SCISSORS" && computerChoice === "PAPER") {
        playerScore++;
        console.log("win");
    }
}
    
const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));