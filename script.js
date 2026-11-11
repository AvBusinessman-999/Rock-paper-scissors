let humanScore = 0;
let computerScore = 0;

// Grab DOM elements
const resultsDiv = document.querySelector("#results");
const scoreDiv = document.querySelector("#score");
const buttons = document.querySelectorAll("#buttons button");

function getComputerChoice() {
    const randomValue = Math.random();
    if (randomValue < 0.34) return "rock";
    if (randomValue < 0.67) return "paper";
    return "scissors";
}

function playRound(humanChoice) {
    // Stop playing if someone already won the 5-point match
    if (humanScore === 5 || computerScore === 5) return;

    const computerChoice = getComputerChoice();

    if (humanChoice === computerChoice) {
        resultsDiv.textContent = `🤝 Tie! Both chose ${humanChoice}.`;
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        resultsDiv.textContent = `🎉 You win this round! ${humanChoice} beats ${computerChoice}.`;
    } else {
        computerScore++;
        resultsDiv.textContent = `💻 Computer wins this round! ${computerChoice} beats ${humanChoice}.`;
    }

    // Update live scoreboard on the webpage
    scoreDiv.textContent = `You: ${humanScore} | Computer: ${computerScore}`;

    // Check for overall 5-point match winner
    if (humanScore === 5) {
        resultsDiv.textContent = "🏆 CHAMPION! You reached 5 points and defeated the machine!";
        resultsDiv.style.color = "green";
        resultsDiv.style.fontWeight = "bold";
    } else if (computerScore === 5) {
        resultsDiv.textContent = "💀 GAME OVER! The computer reached 5 points first.";
        resultsDiv.style.color = "red";
        resultsDiv.style.fontWeight = "bold";
    }
}

// Attach click event listeners to all three buttons
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        playRound(button.id); // Passes 'rock', 'paper', or 'scissors'
    });
});
