// rock, paper, scissor and computer/player score variables:
let rock = "rock";
let paper = "paper";
let scissor = "scissor";
let computerScore = 0;
let humanScore = 0;
let maxRounds = 5;
let currentRound = 1;

// variable for storing the human's choice
let humanChoice = "";

// variables for checking if a button is clicked or not:
let rockBtnWasClicked = false;
let paperBtnWasClicked = false;
let scissorBtnWasClicked = false;

// buttons
const rockBtn = document.querySelector(".rock-btn");
const paperBtn = document.querySelector(".paper-btn");
const scissorBtn = document.querySelector(".scissor-btn");

// Creating DOM Elements
const displayGameInfoDiv = document.querySelector(".displayGameInfo");
const roundInfo = document.createElement("p");
const computerChoice = document.createElement("p");
const playerChoice = document.createElement("p");
const roundWinner = document.createElement("p");
const showGameOver = document.createElement("p");


function buttons() {
    rockBtn.addEventListener("click", () => {
        if (currentRound > maxRounds) {
            showGameOverScreen();
        } else {
            console.log("this is round: " + currentRound);
            roundInfo.textContent = "This is round: " + currentRound;
            displayGameInfoDiv.append(roundInfo);
            humanChoice = rock;
            rockBtnWasClicked = true;
            paperBtnWasClicked = false;
            scissorBtnWasClicked = false;
            // playGame(rounds);
            playRound(getComputerChoice(), getHumanChoice());
            currentRound += 1;
        }


    });

    paperBtn.addEventListener("click", () => {
        if (currentRound > maxRounds) {
            showGameOverScreen();
        } else {
            console.log("this is round: " + currentRound);
            roundInfo.textContent = "This is round: " + currentRound;
            displayGameInfoDiv.append(roundInfo);
            humanChoice = paper;
            paperBtnWasClicked = true;
            rockBtnWasClicked = false;
            scissorBtnWasClicked = false;
            // playGame(rounds);
            playRound(getComputerChoice(), getHumanChoice());
            currentRound += 1;
        }


    });

    scissorBtn.addEventListener("click", () => {
        if (currentRound > maxRounds) {
            showGameOverScreen();
        } else {
            console.log("this is round: " + currentRound);
            roundInfo.textContent = "This is round: " + currentRound;
            displayGameInfoDiv.append(roundInfo);
            humanChoice = scissor;
            scissorBtnWasClicked = true;
            rockBtnWasClicked = false;
            paperBtnWasClicked = false;
            // playGame(rounds);
            playRound(getComputerChoice(), getHumanChoice());
            currentRound += 1;
        }


    });
}

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3) + 1; //get computer's random choice by making it pick a random number between 1 and 3    

    if (choice === 1) {
        console.log("Computer Chose: " + rock);
        computerChoice.textContent = "Computer Chose: " + rock;
        displayGameInfoDiv.append(computerChoice);
        return rock;
    } else if (choice === 2) {
        console.log("Computer Chose: " + paper);
        computerChoice.textContent = "Computer Chose: " + paper;
        displayGameInfoDiv.append(computerChoice);
        return paper;
    } else {
        console.log("Computer Chose: " + scissor);
        computerChoice.textContent = "Computer Chose: " + scissor;
        displayGameInfoDiv.append(computerChoice);
        return scissor;
    }
}

function getHumanChoice() {

    if (rockBtnWasClicked) {
        console.log("You chose: rock!");
        playerChoice.textContent = "You Chose: " + rock;
        displayGameInfoDiv.append(playerChoice);
        return humanChoice;
    } else if (paperBtnWasClicked) {
        console.log("You chose: paper!");
        playerChoice.textContent = "You Chose: " + paper;
        displayGameInfoDiv.append(playerChoice);
        return humanChoice;
    } else if (scissorBtnWasClicked) {
        console.log("You chose: scissor!");
        playerChoice.textContent = "You Chose: " + scissor;
        displayGameInfoDiv.append(playerChoice);
        return humanChoice
    } else {
        console.log("something has gone wrong in getHumanChoice() function")
    }
}

function playRound(computerChoice, humanChoice) {
    if (computerChoice === humanChoice) {
        console.log("It's a tie!");
        console.log("Computer Score: " + computerScore);
        console.log("Your Score: " + humanScore);
        roundWinner.textContent = "It's a tie! | Computer Score: " + computerScore + " | Your Score: " + humanScore;
        displayGameInfoDiv.append(roundWinner);
    } else if (computerChoice === rock && humanChoice === scissor) {
        console.log("You lose!");
        computerScore += 1;
        console.log("Computer Score: " + computerScore);
        console.log("Your Score: " + humanScore);
        roundWinner.textContent = "You lose! | Computer Score: " + computerScore + " | Your Score: " + humanScore;
        displayGameInfoDiv.append(roundWinner);
    } else if (computerChoice === rock && humanChoice === paper) {
        console.log("YOU WIN!");
        humanScore += 1;
        console.log("Computer Score: " + computerScore);
        console.log("Your Score: " + humanScore);
        roundWinner.textContent = "YOU WIN! | Computer Score: " + computerScore + " | Your Score: " + humanScore;
        displayGameInfoDiv.append(roundWinner);
    } else if (computerChoice === scissor && humanChoice === paper) {
        console.log("You lose!");
        computerScore += 1;
        console.log("Computer Score: " + computerScore);
        console.log("Your Score: " + humanScore);
        roundWinner.textContent = "You lose! | Computer Score: " + computerScore + " | Your Score: " + humanScore;
        displayGameInfoDiv.append(roundWinner);
    } else if (computerChoice === scissor && humanChoice === rock) {
        console.log("YOU WIN!");
        humanScore += 1;
        console.log("Computer Score: " + computerScore);
        console.log("Your Score: " + humanScore);
        roundWinner.textContent = "YOU WIN! | Computer Score: " + computerScore + " | Your Score: " + humanScore;
        displayGameInfoDiv.append(roundWinner);
    } else if (computerChoice === paper && humanChoice === rock) {
        console.log("You lose!");
        computerScore += 1;
        console.log("Computer Score: " + computerScore);
        console.log("Your Score: " + humanScore);
        roundWinner.textContent = "You lose! | Computer Score: " + computerScore + " | Your Score: " + humanScore;
        displayGameInfoDiv.append(roundWinner);
    } else if (computerChoice === paper && humanChoice === scissor) {
        console.log("YOU WIN!");
        humanScore += 1;
        console.log("Computer Score: " + computerScore);
        console.log("Your Score: " + humanScore);
        roundWinner.textContent = "YOU WIN! | Computer Score: " + computerScore + " | Your Score: " + humanScore;
        displayGameInfoDiv.append(roundWinner);
    } else {
        console.log("Something went wrong in the choice comparison logic inside playRound() function");
    }
}

function showGameOverScreen() {
    console.log("Game Over! Thanks For Playing!")
    showGameOver.textContent = "Game Over! Thanks For Playing!";
    displayGameInfoDiv.append(showGameOver);

}


buttons();

// function playGame(gameRounds) {

//     function playRound(computerChoice, humanChoice) {
//         if (computerChoice === humanChoice) {
//             console.log("It's a tie!");
//             console.log("Computer Score: " + computerScore);
//             console.log("Your Score: " + humanScore);
//         } else if (computerChoice === rock && humanChoice === scissor) {
//             console.log("You lose!");
//             computerScore += 1;
//             console.log("Computer Score: " + computerScore);
//             console.log("Your Score: " + humanScore);
//         } else if (computerChoice === rock && humanChoice === paper) {
//             console.log("YOU WIN!");
//             humanScore += 1;
//             console.log("Computer Score: " + computerScore);
//             console.log("Your Score: " + humanScore);
//         } else if (computerChoice === scissor && humanChoice === paper) {
//             console.log("You lose!");
//             computerScore += 1;
//             console.log("Computer Score: " + computerScore);
//             console.log("Your Score: " + humanScore);
//         } else if (computerChoice === scissor && humanChoice === rock) {
//             console.log("YOU WIN!");
//             humanScore += 1;
//             console.log("Computer Score: " + computerScore);
//             console.log("Your Score: " + humanScore);
//         } else if (computerChoice === paper && humanChoice === rock) {
//             console.log("You lose!");
//             computerScore += 1;
//             console.log("Computer Score: " + computerScore);
//             console.log("Your Score: " + humanScore);
//         } else if (computerChoice === paper && humanChoice === scissor) {
//             console.log("YOU WIN!");
//             humanScore += 1;
//             console.log("Computer Score: " + computerScore);
//             console.log("Your Score: " + humanScore);
//         } else {
//             console.log("Something went wrong in the choice comparison logic inside playRound() function");
//         }
//     }

//     // Logic for playing 5 rounds
//     for (i = 1; i < gameRounds; i++) {
//         console.log("This is round: " + i);
//         playRound(getComputerChoice(), getHumanChoice());
//     }

// }


// playGame(rounds)
// console.log(playGame(rounds));

// getHumanChoice();





