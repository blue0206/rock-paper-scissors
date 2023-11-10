let playerWins = 0;
let computerWins = 0;

game();

function getComputerChoice()
{
    let randomNum = 0;
    let outcome = "";

    while (randomNum == 0 || randomNum > 3)
    {
        randomNum = Math.floor(Math.random() * 10);
    }

    if (randomNum == 1)
    {
        return outcome = "rock";
    }
    else if (randomNum == 2)
    {
        return outcome = "paper";
    }
    else
    {
        return outcome = "scissors";
    }
}

function getPlayerChoice()
{
    let response;
    while (true)
    {
        response = prompt("Enter 'Rock', 'Paper', or 'Scissors'!");
        response = response.toLowerCase();

        if (response === 'rock' || response === 'paper' || response == 'scissors' || response === 'scissor')
        {
            break;
        }
    }

    if (response === 'scissor')
    {
        response = 'scissors';
    }

    return response;
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
    for (let times=0; times < 5; times++)
    {
        playRound(getPlayerChoice(), getComputerChoice());
    }

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