// These are the const that are always going to stay the same
const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");

//Takes the input and changes it to lowercase
const playerChoice = document.getElementById("userInput").value.toLowerCase();

    function playGame() {
        // This will let what is put in the input box match what displays beside "Player:"
        const playerChoice = document.getElementById("userInput").value.toLowerCase();
    
        // Shows the player choice
        playerDisplay.textContent = `Player: ${playerChoice}`;
    
        // Allows computer to pick a random choice between the 3
        const computerChoice = choices[Math.floor(Math.random() * 3)];
    
        // Determines what the end result will say
        let result = "";
        if (playerChoice === computerChoice) {
            result = "IT'S A TIE!";
        } else {
            // Switch is just a way that makes if else statements look cooler 
            switch (playerChoice) {
                case "rock":
                    result = (computerChoice === "scissors") ? "AYEE YOU WIN" : " HAHA YOU LOSE";
                    break;
                case "paper":
                    result = (computerChoice === "rock") ? "AYEE YOU WIN" : "HAHA YOU LOSE";
                    break;
                case "scissors":
                    result = (computerChoice === "paper") ? "AYEE YOU WIN" : "HAHA YOU LOSE";
                    break;
                default:
                    result = "Must Choose Rock, Paper, Or Scissors!";
                    break;
            }
        }
    
        // Shows what the computer will display and shows it
        computerDisplay.textContent = `Computer: ${computerChoice}`;
        resultDisplay.textContent = result;
    }