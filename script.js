function computerPlay(computerChoice) {

    randomValue = Math.floor((Math.random() * 10));

    if ((randomValue >= 0) && (randomValue < 4)) {
        return computerChoice = "rock";
    } else if ((randomValue >= 4) && (randomValue < 7)) {
        return computerChoice = "paper";
    } else if (randomValue > 6) {
        return computerChoice = "scissors";
    } 
}

let playerPoints = 0;
let computerPoints = 0;

function singleRound(playerSelection, computerSelection) {
    playerSelection = prompt("What do you choose? Rock, Paper or Scissors?");
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerPlay();

    if (playerSelection === computerSelection) {
        console.log("It is a tie!");
        return computerPoints;
    } else if ((playerSelection === "rock") && (computerSelection === "paper")) {
        console.log("You chose rock and computer chose paper, so you lost!");
        return computerPoints += 1;
    } else if ((playerSelection === "rock") && (computerSelection === "scissors")) {
        console.log("Congratulations! You chose rock and computer chose scissors, so you won!");
        return playerPoints += 1;
    } else if ((playerSelection === "paper") && (computerSelection === "rock")) {
        console.log("Congratulations! You chose paper and computer chose rock, so you won!");
        return playerPoints += 1;
    } else if ((playerSelection === "paper") && (computerSelection === "scissors")) {
        console.log("You chose paper and computer chose scissors, so you lost!");
        return computerPoints += 1;
    } else if ((playerSelection === "scissors") && (computerSelection === "rock")) {
        console.log("You chose scissors and computer chose rock, so you lost!");
        return computerPoints += 1;
    } else {
        console.log("Congratulations! You chose scissors and computer chose paper, so you won!");
        return playerPoints += 1;
    }
    
}


function game(points) {
    singleRound();
    singleRound();
    singleRound();
    singleRound();
    singleRound();

    if (playerPoints === computerPoints) {
        return console.log("It is a tie! You won: " + playerPoints + ". Computer won: " + computerPoints);
    } else if (playerPoints > computerPoints) {
        return console.log("Congratulations! You won: " + playerPoints + ". Computer won: " + computerPoints);
    } else {
        return console.log("Unfortunately, you won: " + playerPoints + ". Computer won: " + computerPoints);
    }
}

