// Importing the prompt package
const prompt = require('prompt');

// Setting up prompt
prompt.start();

// Asking user to choose ROCK, PAPER, or SCISSORS
prompt.get(['userSelection'], function (err, result) {
    if (err) { return onErr(err); }
    
    // Storing user's choice
    const userSelection = result.userSelection.toUpperCase();
    
    // Generating computer's selection randomly
    const computerSelection = Math.random();
    let computerChoice;
    if (computerSelection < 0.34) {
        computerChoice = "ROCK";
    } else if (computerSelection <= 0.67) {
        computerChoice = "PAPER";
    } else {
        computerChoice = "SCISSORS";
    }

    // Displaying user's and computer's selections
    console.log("User selected: " + userSelection);
    console.log("Computer selected: " + computerChoice);

    // Determining the outcome
    let outcome;
    if (userSelection === computerChoice) {
        outcome = "It's a tie";
    } else if (
        (userSelection === "ROCK" && computerChoice === "SCISSORS") ||
        (userSelection === "PAPER" && computerChoice === "ROCK") ||
        (userSelection === "SCISSORS" && computerChoice === "PAPER")
    ) {
        outcome = "User Wins";
    } else {
        outcome = "Computer Wins";
    }

    // Displaying the outcome
    console.log(outcome);
});

// Function to handle errors
function onErr(err) {
    console.log(err);
    return 1;
}