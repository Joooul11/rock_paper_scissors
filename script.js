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




function getHumanChoice(){
    let choice = prompt("Choice among:rock,paper or scissors").toLowerCase();
    
    if (choice == "rock"){
        return "rock";
    }
    else if ( choice == "paper"){
        return 'paper';
    }
    else if (choice == 'scissors'){
        return 'scissors'
    }
    else {
        return "Enter appropriate value"
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
    for (let i = 0; i < 5; i++) {
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        let result = playRound(humanSelection, computerSelection);
        if (result === 1) {
            humanScore++;
        } else if (result === -1) {
            computerScore++;
        }
        console.log(`Round ${i + 1}: Human chose ${humanSelection}, Computer chose ${computerSelection}`);
        console.log(`Current Score -> Human: ${humanScore}, Computer: ${computerScore}`);
    }

    if (humanScore > computerScore) {
        return "Human Wins";
    } else if (humanScore == computerScore) {
        return "Draw";
    } else {
        return "Computer Wins";
    }
}

console.log(playGame());

