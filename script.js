const rock = document.querySelector("#rock")
const paper = document.querySelector("#paper")
const scissors = document.querySelector("#scissors")
const results = document.querySelector("#results")
const computerResultP = document.querySelector("#computer")
const humanResultP = document.querySelector("#human")
const humanCount = document.querySelector("#humanCount")
const computerCount = document.querySelector("#computerCount")
const afterGameText = document.querySelector("#afterGameText")

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
    // let answer = prompt("choose your option");
    if (answer === "rock" || answer === "paper" || answer === "scissors") {
        return answer;
    } else {
        return prompt("please select either rock, paper or scissors")
    }
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock" && computerChoice === "paper") {
        computerCount.textContent = `${++computerScore}`
        humanCount.textContent = `${humanScore}`
        afterGameText.textContent = "You lose this round! paper beats rock"
        return console.log("You lose this round! paper beats rock")
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        computerCount.textContent = `${++computerScore}`
        humanCount.textContent = `${humanScore}`
        afterGameText.textContent = "You lose this round! scissors beats paper"
        return console.log("You lose this round! scissors beats paper")
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        computerCount.textContent = `${++computerScore}`
        humanCount.textContent = `${humanScore}`
        afterGameText.textContent = "You lose this round! rock beats scissors"
        return console.log("You lose this round! rock beats scissors")
    } else {
        humanCount.textContent = `${++humanScore}`
        computerCount.textContent = `${computerScore}`
        afterGameText.textContent = "Congratulations! you win this round"
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

rock.addEventListener("click", () => playRound("rock", getComputerChoice()))
paper.addEventListener("click", () => playRound("paper", getComputerChoice()))
scissors.addEventListener("click", () => playRound("scissors", getComputerChoice()))