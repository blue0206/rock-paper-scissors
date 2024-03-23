let playerWins = 0;
let computerWins = 0;

const btn = document.querySelector("#btn");
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

btn.addEventListener("click", (e) => {
  let target = e.target;

  switch (target.id) {
    case "rock":
        playRound("rock", getComputerChoice());
        break;
    case "paper":
        playRound("paper", getComputerChoice());
        break;
    case "scissors":
        playRound("scissors", getComputerChoice());
        break;
  }
});

game();

function getComputerChoice()
{
    let randomNum = 0;

    while (randomNum == 0 || randomNum > 3)
    {
        randomNum = Math.floor(Math.random() * 10);
    }

    if (randomNum == 1)
    {
        return "rock";
    }
    else if (randomNum == 2)
    {
        return "paper";
    }
    else
    {
        return "scissors";
    }
}

function playRound(playerSelection, computerSelection)
{
    if (playerSelection === computerSelection)
    {
        alert("It's a TIE!");
    }
    else if ((playerSelection === 'rock') && (computerSelection === 'scissors'))
    {
        alert("You WIN! Rock breaks Scissors!");
        playerWins++;
    }
    else if ((playerSelection === 'paper') && (computerSelection === 'rock'))
    {
        alert("You WIN! Paper wraps Rock!");
        playerWins++;
    }
    else if ((playerSelection === 'scissors') && (computerSelection === 'paper'))
    {
        alert("You WIN! Scissors cut Paper!");
        playerWins++;
    }
    else if ((playerSelection === 'rock') && (computerSelection === 'paper'))
    {
        alert("You LOSE! Rock gets wrapped by Paper!");
        computerWins++;
    }
    else if ((playerSelection === 'paper') && (computerSelection === 'scissors'))
    {
        alert("You LOSE! Paper gets cut by Scissors!")
        computerWins++;
    }
    else
    {
        alert("You LOSE! Scissors gets smashed by Rock!");
        computerWins++;
    }
}

function game()
{
    if (playerWins > computerWins)
    {
        alert(
            "You: " + playerWins +
            "\nComputer: " + computerWins +
            "\n\nCongratulations! You're the WINNER!"
        )
    }
    else if(playerWins < computerWins)
    {
        alert(
            "You: " + playerWins +
            "\nComputer: " + computerWins +
            "\n\nComputer is the WINNER!"
        )
    }
    else
    {
        alert(
            "You: " + playerWins +
            "\nComputer: " + computerWins +
            "\n\nDRAW!"
        )
    }
}