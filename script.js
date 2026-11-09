// TOP Project: Rock Paper Scissors (No Loops or Arrays Edition)

function playGame() {
    // Step 4: Declare internal score trackers inside the game loop
    let humanScore = 0;
    let computerScore = 0;

    // Step 2: Computer Choice Generator
    function getComputerChoice() {
        let randomValue = Math.random();
        if (randomValue < 0.34) {
            return "rock";
        } else if (randomValue < 0.67) {
            return "paper";
        } else {
            return "scissors";
        }
    }

    // Step 3: Human Choice Grabber
    function getHumanChoice() {
        let userInput = prompt("Enter rock, paper, or scissors:");
        // Sanitize input to handle case-insensitivity
        return userInput.toLowerCase();
    }

    // Step 5: Single Round Logical Processing Engine
    function playRound(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
            console.log(`🤝 It's a tie! Both chose ${humanChoice}.`);
        } 
        // Human Winning Gates
        else if (
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper")
        ) {
            humanScore++;
            console.log(`🎉 You win this round! ${humanChoice} beats ${computerChoice}.`);
        } 
        // Computer Winning Gates
        else {
            computerScore++;
            console.log(`💻 Computer wins this round! ${computerChoice} beats ${humanChoice}.`);
        }
        
        console.log(`Current Score -> You: ${humanScore} | Computer: ${computerScore}\n-------------------`);
    }

    // Step 6: Execute 5 Distinct Rounds Sequentially
    console.log("🚀 STARTING THE GAME (5 ROUNDS) 🚀\n");

    // Round 1
    playRound(getHumanChoice(), getComputerChoice());
    // Round 2
    playRound(getHumanChoice(), getComputerChoice());
    // Round 3
    playRound(getHumanChoice(), getComputerChoice());
    // Round 4
    playRound(getHumanChoice(), getComputerChoice());
    // Round 5
    playRound(getHumanChoice(), getComputerChoice());

    // Final Outcome Declaration Evaluator
    console.log("=== FINAL TOURNAMENT RESULT ===");
    if (humanScore > computerScore) {
        console.log(`🏆 CONGRATULATIONS! You Defeated Technologia ${humanScore} to ${computerScore}!`);
    } else if (computerScore > humanScore) {
        console.log(`💀 SO BAD! Technologia defeated you ${computerScore} to ${humanScore}.`);
    } else {
        console.log(`👔 It's a tie! Final score: ${humanScore} - ${computerScore}.`);
    }
}

// Fire the application engine automatically on page load
playGame();
