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
    let choice = prompt("Choice among:rock,paper or scissors");
    
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

console.log(getHumanChoice())