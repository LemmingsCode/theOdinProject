var playerScore = 0;
var computerScore = 0;
var validateRock = 'ROCK';
var validatePaper = 'PAPER';
var validateScissors = 'SCISSORS';
// var inputValidation = ['PAPER', 'ROCK', 'SCISSORS'];


function computerPlay() {
    let computerCase = Math.floor(Math.random() * 3) ;
    if (computerCase === 0){
        computerRandom = "Rock";
    } else if (computerCase == 1) {
        computerRandom = "Paper";
    } else {
        computerRandom = "Scissors";
    }
    return computerRandom;
}

function playRound(playerSelection, computerRandom) {
    var upperPlayerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);

    if (upperPlayerSelection === computerRandom) {
        return "It's a draw!";
    } else if (upperPlayerSelection === "Rock" && computerRandom === "Paper") {
        computerScore++;
        return "You Lose! " + computerRandom + " beats " + upperPlayerSelection;
    } else if (upperPlayerSelection === "Rock" && computerRandom === "Scissors") {
        playerScore++;
        return "You Win! " + upperPlayerSelection + " beats " + computerRandom;
    } else if (upperPlayerSelection === "Paper" && computerRandom === "Scissors") {
        computerScore++;
        return "You Lose! " + computerRandom + " beats " + upperPlayerSelection;
    } else if (upperPlayerSelection === "Paper" && computerRandom === "Rock") {
        playerScore++;
        return "You Win! " + upperPlayerSelection + " beats " + computerRandom;
    } else if (upperPlayerSelection === "Scissors" && computerRandom === "Rock") {
        computerScore++;
        return "You Lose! " + computerRandom + " beats " + upperPlayerSelection;
    } else if (upperPlayerSelection === "Scissors" && computerRandom === "Paper") {
        playerScore++;
        return "You Win! " + upperPlayerSelection + " beats " + computerRandom;
    }
}
    
function game() {
    var totalRounds = 1;
    for (let i = 0; i < totalRounds; i++) {
        var computerSelection = computerPlay(); //initiate computer selection
        var playerSelection = prompt("Do you choose Rock, Paper, or Scissors?"); //initiate player selection
        do {
            if (
                playerSelection.toUpperCase() == validatePaper || 
                playerSelection.toUpperCase() == validateRock || 
                playerSelection.toUpperCase() == validateScissors 
                ) {
                    break;
                } else {
                    console.log("Please input Rock, Paper, or Scissors")
                    var playerSelection = prompt("Do you choose Rock, Paper, or Scissors?"); //initiate player selection
            }
        }
        while (
            playerSelection.toUpperCase() !== validatePaper || 
            playerSelection.toUpperCase() !== validateRock || 
            playerSelection.toUpperCase() !== validateScissors 
            )
        
        // console.log("Please enter a valid input");
        console.log(playRound(playerSelection, computerSelection)); 
    }

    if (computerScore > playerScore) {
        console.log("You lose, computer scored " + computerScore + " and you scored " + playerScore);
    } else if (computerScore === playerScore) {
        console.log("No winner, score was both " + computerScore);
    } else {
        console.log("You win, computer scored " + computerScore + " and you scored " + playerScore);
    }
}


const btn = document.querySelector('#btn');

function playerButtonSelection(e) {
    console.log(e.target.id);
    console.log(playRound(e.target.id, computerPlay()));
}

window.addEventListener('click', playerButtonSelection);

// const btn = document.querySelector('#btn');
// btn.addEventListener('click', function (e) {
//     // console.log(e.target);
//     e.target.style.background = 'blue';
// });

// // buttons is a node list. It looks and acts much like an array.
// const buttons = document.querySelectorAll('button');

// // we use the .forEach method to iterate through each button
// buttons.forEach((button) => {

//     // and for each one we add a 'click' listener
//     button.addEventListener('click', () => {
//         alert(button.id);
//     });
// });