function getComputerChoice() {
    let number = Math.random() * 10;
    if (number < 3) {
        return "rock"
    } else if (3 < number < 6) {
        return "paper"
    } else {
        return "scissors"
    }
}

function getHumanChoice() {
    let answer = prompt("choose your option");
    return answer;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    // getComputerChoice();
    // getHumanChoice();
    if (humanChoice === "rock" && computerChoice === "paper") {
        computerScore++
        return "You lose! paper beats rock"
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        computerScore++
        return "You lose! scissors beats paper"
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        computerScore++
        return "You lose! rock beats scissors"
    } else {
        humanScore++
        return "Congratulations! you win"
    }
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        playRound(getHumanChoice(), getComputerChoice());
    }
    if (humanScore > computerScore) {
        return `Congratulations, you win! your score is ${humanScore} and computers score is ${computerScore}` 
    } else {
        return `Sorry, you lose! your score is ${humanScore} and computers score is ${computerScore}`
    }
}
