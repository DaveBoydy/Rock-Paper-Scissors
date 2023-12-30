const MIN = 1;
const MAX = 3;
const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";

let playerScore = 0;
let computerScore = 0;
let playerChoice;
let computerChoice;

function getComputerChoice() {

    let hand = Math.floor(Math.random() * (MAX - MIN + 1)) + MIN;

    switch (hand) {
        case 1:
            return ROCK;
        case 2:
            return PAPER;
        case 3:
            return SCISSORS;
    }

}

function playRound(playerSelection, computerSelection) {

    playerSelection = playerSelection.toLowerCase();

    if (!(playerSelection === ROCK || playerSelection === PAPER || playerSelection === SCISSORS)) {

        logError();
        return;
    }

    if (playerSelection == ROCK && computerSelection == ROCK) {

        logResult("It's a tie, try again");
        replayRound();
        return;
    }
    if (playerSelection == PAPER && computerSelection == PAPER) {

        logResult("It's a tie, try again");
        replayRound();
        return;
    }
    if (playerSelection == SCISSORS && computerSelection == SCISSORS) {

        logResult("It's a tie, try again");
        replayRound();
        return;
    }

    if (playerSelection == ROCK && computerSelection == PAPER) {

        computerScore += 1;
        return logResult("You Lose! Paper beats Rock");
    }
    if (playerSelection == PAPER && computerSelection == SCISSORS) {

        computerScore += 1;
        return logResult("You Lose! Scissors beats Paper");
    }
    if (playerSelection == SCISSORS && computerSelection == ROCK) {

        computerScore += 1;
        return logResult("You Lose! Rock beats Scissors");
    }

    if (playerSelection == ROCK && computerSelection == SCISSORS) {

        playerScore += 1;
        return logResult("You Win! Rock beats Scissors");
    }
    if (playerSelection == PAPER && computerSelection == ROCK) {

        playerScore += 1;
        return logResult("You Win! Paper beats Rock");
    }
    if (playerSelection == SCISSORS && computerSelection == PAPER) {

        playerScore += 1;
        return logResult("You Win! Scissors beats Paper");
    }
}

function logResult(result) {

    console.log(result);
}

function logError() {

    console.log("Please enter Rock, Paper or Scissors and try again");
    replayRound();
}

function replayRound() {

    computerChoice = getComputerChoice();
    playerChoice = prompt("Rock, Paper or Scissors?", "Rock");

    playRound(playerChoice, computerChoice);
}

function game() {

    for (let i = 0; i < 5; i++) {

        computerChoice = getComputerChoice();
        playerChoice = prompt("Rock, Paper or Scissors?", "Rock");
        playRound(playerChoice, computerChoice);

        console.log("Player Score: " + playerScore);
        console.log("Computer Score: " + computerScore);
    }

    if (playerScore > computerScore) {

        console.log("You won! congratulations you beat the computer.")
    } else {
        console.log("you lost! the computer beat you.")
    }

}

game();
