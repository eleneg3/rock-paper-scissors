function getComputerChoice() {
    let number = Math.random();
    if (number < 0.33) {
        return "rock"
    } else if (number < 0.66) {
        return "paper"
    } else {
        return "scissors"
    }
}

function getHumanChoice() {
    let answer = prompt("choose your option");
    if (answer === "rock" || answer === "paper" || answer === "scissors") {
        return answer;
    } else {
        return prompt("please select either rock, paper or scissors")
    }
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    // if (humanChoice !== "rock" || humanChoice !== "paper" || humanChoice !== "scissors"){
    //     return prompt("please select either rock, paper or scissors");
    // } else 
    if (humanChoice === "rock" && computerChoice === "paper") {
        computerScore++
        return console.log("You lose this round! paper beats rock")
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        computerScore++
        return console.log("You lose this round! scissors beats paper")
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        computerScore++
        return console.log("You lose this round! rock beats scissors")
    } else {
        humanScore++
        return console.log("Congratulations! you win this round")
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