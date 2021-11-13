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

function singleRound(playerSelection, computerSelection) {
    playerSelection = prompt("What do you choose? Rock, Paper or Scissors?");
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerPlay();

    if (playerSelection === computerSelection) {
        return result = "It is a tie!";
    } else if ((playerSelection === "rock") && (computerSelection === "paper")) {
        return result = "You chose rock and computer chose paper, so you lost!";
    } else if ((playerSelection === "rock") && (computerSelection === "scissors")) {
        return result = "Congratulations! You chose rock and computer chose scissors, so you won!";
    } else if ((playerSelection === "paper") && (computerSelection === "rock")) {
        return result = "Congratulations! You chose paper and computer chose rock, so you won!";
    } else if ((playerSelection === "paper") && (computerSelection === "scissors")) {
        return result = "You chose paper and computer chose scissors, so you lost!";
    } else if ((playerSelection === "scissors") && (computerSelection === "rock")) {
        return result = "You chose scissors and computer chose rock, so you lost!";
    } else {
        return result = "Congratulations! You chose scissors and computer chose paper, so you won!";
    }
    
}


