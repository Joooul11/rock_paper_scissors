function getComputerChoice() {
    let num = Math.random();
    if (num < 0.33) {
        return "rock";
    } else if (num > 0.33 && num < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}

function playRound(humanChoice, computerChoice) {
    if ((humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")) {
        return 1;  
    } else if (humanChoice === computerChoice) {
        return 0;  
    } else {
        return -1; 
    }
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    let gameResults = document.getElementById('gameResults');
    gameResults.innerHTML = '';  

    for (let i = 0; i < 5; i++) {
        let humanSelection = prompt("Choose among: rock, paper, or scissors").toLowerCase();
        let computerSelection = getComputerChoice();
        let result = playRound(humanSelection, computerSelection);

        if (result === 1) {
            humanScore++;
            gameResults.innerHTML += `Round ${i + 1}: Human chose ${humanSelection}, Computer chose ${computerSelection}. Human wins the round.<br>`;
        } else if (result === 0) {
            gameResults.innerHTML += `Round ${i + 1}: Human chose ${humanSelection}, Computer chose ${computerSelection}. It's a tie.<br>`;
        } else {
            computerScore++;
            gameResults.innerHTML += `Round ${i + 1}: Human chose ${humanSelection}, Computer chose ${computerSelection}. Computer wins the round.<br>`;
        }
    }

    if (humanScore > computerScore) {
        gameResults.innerHTML += "<strong>Game Over: Human Wins!</strong>";
    } else if (humanScore == computerScore) {
        gameResults.innerHTML += "<strong>Game Over: It's a Draw.</strong>";
    } else {
        gameResults.innerHTML += "<strong>Game Over: Computer Wins!</strong>";
    }
}

document.getElementById('playGameButton').addEventListener('click', playGame);





