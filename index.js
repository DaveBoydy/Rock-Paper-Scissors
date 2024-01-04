const MIN = 1;
const MAX = 3;
const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";

let playerScore = 0;
let computerScore = 0;
let gamesTied = 0;
let matchResult = "undecided";
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
  if (playerSelection == ROCK && computerSelection == ROCK) {
    gamesTied += 1;
    youTie();
    return;
  }
  if (playerSelection == PAPER && computerSelection == PAPER) {
    gamesTied += 1;
    youTie();
    return;
  }
  if (playerSelection == SCISSORS && computerSelection == SCISSORS) {
    gamesTied += 1;
    youTie();
    return;
  }

  if (playerSelection == ROCK && computerSelection == PAPER) {
    computerScore += 1;
    youLose();
    return;
  }
  if (playerSelection == PAPER && computerSelection == SCISSORS) {
    computerScore += 1;
    youLose();
    return;
  }
  if (playerSelection == SCISSORS && computerSelection == ROCK) {
    computerScore += 1;
    youLose();
    return;
  }

  if (playerSelection == ROCK && computerSelection == SCISSORS) {
    playerScore += 1;
    youWin();
    return;
  }
  if (playerSelection == PAPER && computerSelection == ROCK) {
    playerScore += 1;
    youWin();
    return;
  }
  if (playerSelection == SCISSORS && computerSelection == PAPER) {
    playerScore += 1;
    youWin();
    return;
  }
}

function logResult(result) {
  console.log(result);
}

function playGame(event) {
  let target = event.target;

  switch (target.id) {
    case ROCK:
      playRound(ROCK, getComputerChoice());
      break;
    case PAPER:
      playRound(PAPER, getComputerChoice());
      break;
    case SCISSORS:
      playRound(SCISSORS, getComputerChoice());
      break;
  }
  displayResults();
}

let menu = document.querySelector("#menu");
menu.addEventListener("click", playGame);

function youLose() {
  logResult("You Lose! Paper beats Rock");
}

function youWin() {
  logResult("You Win! Rock beats Scissors");
}

function youTie() {
  logResult("It's a tie, try again");
}

function resetRound() {
  playerScore = 0;
  computerScore = 0;
  gamesTied = 0;
  matchResult = "undecided";
  player.textContent = `Player score: ${playerScore}`;
  computer.textContent = `Computer score: ${computerScore}`;
  tie.textContent = `Tie(s): ${gamesTied}`;
  winner.textContent = `Winner: ${matchResult}`;
}

function displayResults() {
  let roundsPlayed = playerScore + computerScore;

  console.log(roundsPlayed);

  if (roundsPlayed == 5) {
    console.log("Game Over");
    if (playerScore > computerScore) {
      console.log("Player won best of 5!");
      matchResult = "Player wins this round!";
      winner.textContent = `Winner: ${matchResult}`;
    } else {
      console.log("compter won best of 5!");
      matchResult = "Computer wins this round!";
      winner.textContent = `Winner: ${matchResult}`;
    }

    console.log("resetting game...");
    setTimeout(resetRound, "3000");
  }
  console.log("Player Score: " + playerScore);
  console.log("Computer Score: " + computerScore);

  player.textContent = `Player score: ${playerScore}`;
  computer.textContent = `Computer score: ${computerScore}`;
  tie.textContent = `Tie: ${gamesTied}`;
}

const results = document.querySelector("#results");
results.style.border = "2px solid black";
results.style.margin = "8px 0";
results.style.padding = "8px";

const player = document.createElement("p");
player.textContent = `Player score: ${playerScore}`;
results.appendChild(player);

const computer = document.createElement("p");
computer.textContent = `Computer score: ${computerScore}`;
results.appendChild(computer);

const tie = document.createElement("p");
tie.textContent = `Tie(s): ${gamesTied}`;
results.appendChild(tie);

const winner = document.createElement("p");
winner.textContent = `Winner: ${matchResult}`;
results.appendChild(winner);
