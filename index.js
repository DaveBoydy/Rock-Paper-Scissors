const MIN = 1;
const MAX = 3;
const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";

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

let playerChoice = prompt("Rock, Paper or Scissors?", "Rock");
let computerChoice = getComputerChoice();

function playGame(playerSelection, computerSelection) {

    playerSelection = playerSelection.toLowerCase();


    if (!(playerSelection === ROCK || playerSelection === PAPER || playerSelection === SCISSORS)) {

        logError();
        return;
    }

    if (playerSelection == ROCK && computerSelection == ROCK) {

        logResult("It's a tie, try again");
        resetRound();
        return;
    }
    if (playerSelection == PAPER && computerSelection == PAPER) {

        logResult("It's a tie, try again");
        resetRound();
        return;
    }
    if (playerSelection == SCISSORS && computerSelection == SCISSORS) {

        logResult("It's a tie, try again");
        resetRound();
        return;
    }

    if (playerSelection == ROCK && computerSelection == PAPER) return logResult("You Lose! Paper beats Rock");
    if (playerSelection == PAPER && computerSelection == SCISSORS) return logResult("You Lose! Scissors beats Paper");
    if (playerSelection == SCISSORS && computerSelection == ROCK) return logResult("You Lose! Rock beats Scissors");

    if (playerSelection == ROCK && computerSelection == SCISSORS) return logResult("You Win! Rock beats Scissors");
    if (playerSelection == PAPER && computerSelection == ROCK) return logResult("You Win! Paper beats Rock");
    if (playerSelection == SCISSORS && computerSelection == PAPER) return logResult("You Win! Scissors beats Paper");
}

function logResult(result) {

    console.log(result);
}

function logError() {

    console.log("Please enter Rock, Paper or Scissors and try again");
    resetRound()
}

function resetRound() {

    computerChoice = getComputerChoice();
    playerChoice = prompt("Rock, Paper or Scissors?", "Rock");

    playGame(playerChoice, computerChoice);
}

playGame(playerChoice, computerChoice);