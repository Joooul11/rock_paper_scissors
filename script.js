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



let humanScore = 0;
let computerScore = 0;


function playRound(humanChoice,computerChoice) {
 let winner = "";
 if (humanChoice == "rock" && computerChoice == "paper" ){
    humanScore -=1;
    computerScore +=1;
    return console.log("PC Wins");
 }
 else if (humanChoice == "rock" && computerChoice != "rock"){
    
 }
 else if  (humanChoice == "rock" && computerChoice != "scissors" ){
    humanScore +=1;
    computerScore-=1;
    return console.log("Human Wins");
 }



 else if (humanChoice == "paper" && computerChoice == "rock" ){
    humanScore+=1;
    computerScore-=1;
    return console.log("Human Wins");
 }
 else if (humanChoice == "paper" && computerChoice == "paper" ){

 }
 else if (humanChoice == "paper" && computerChoice == "scissors"){
    humanScore-=1;
    computerScore+=1;
    return console.log("PC Wins");

 }


else if (humanChoice == "scissors" && computerChoice == "rock" ){
    computerScore+=1;
    humanScore-=1;
    return console.log("PC Wins");

}

else if (humanChoice == "scissors" && computerChoice == "paper" ){
    computerScore-=1;
    humanScore+=1;
    return console.log("Human Wins");
}
else if (humanChoice == "scissors" && computerChoice == "scissors" ){

}


}



const humanSelection = getHumanChoice().toLowerCase();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
