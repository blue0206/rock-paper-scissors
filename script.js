let playerWins = 0;
let computerWins = 0;

const btn = document.querySelector("#btn");
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const comment = document.querySelector('#comment');
const winner = document.querySelector('#winner');

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

announceWinner();

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
    if (playerWins == 5 || computerWins == 5) 
    {
        reset();
    }

    comment.textContent = "";
    
    if (playerSelection === computerSelection)
    {
        comment.innerHTML = "<br/><div>You: " + toTitleCase(playerSelection) + "</div>"
                            + "<div>Computer: " + toTitleCase(computerSelection) + "</div>"
                            + "<br/><div>It's a TIE!</div>";
    }
    else if ((playerSelection === 'rock') && (computerSelection === 'scissors'))
    {
        comment.innerHTML = "<br/><div>You: " + toTitleCase(playerSelection) + "</div>"
                            + "<div>Computer: " + toTitleCase(computerSelection) + "</div>"
                            + "<br/><div>You Win! Rock beats Scissors!</div>";
        playerWins++;
    }
    else if ((playerSelection === 'paper') && (computerSelection === 'rock'))
    {
        comment.innerHTML = "<br/><div>You: " + toTitleCase(playerSelection) + "</div>"
                            + "<div>Computer: " + toTitleCase(computerSelection) + "</div>"
                            + "<br/><div>You Win! Paper beats Rock!</div>";
        playerWins++;
    }
    else if ((playerSelection === 'scissors') && (computerSelection === 'paper'))
    {
        comment.innerHTML = "<br/><div>You: " + toTitleCase(playerSelection) + "</div>"
                            + "<div>Computer: " + toTitleCase(computerSelection) + "</div>"
                            + "<br/><div>You Win! Scissors beat Paper!</div>";
        playerWins++;
    }
    else if ((playerSelection === 'rock') && (computerSelection === 'paper'))
    {
        comment.innerHTML = "<br/><div>You: " + toTitleCase(playerSelection) + "</div>"
                            + "<div>Computer: " + toTitleCase(computerSelection) + "</div>"
                            + "<br/><div>You Lose! Paper beats Rock!</div>";
        computerWins++;
    }
    else if ((playerSelection === 'paper') && (computerSelection === 'scissors'))
    {
        comment.innerHTML = "<br/><div>You: " + toTitleCase(playerSelection) + "</div>"
                            + "<div>Computer: " + toTitleCase(computerSelection) + "</div>"
                            + "<br/><div>You Lose! Scissors beat Paper!</div>";
        computerWins++;
    }
    else
    {
        comment.innerHTML = "<br/><div>You: " + toTitleCase(playerSelection) + "</div>"
                            + "<div>Computer: " + toTitleCase(computerSelection) + "</div>"
                            + "<br/><div>You Lose! Rock beats Scissors!</div>";
        computerWins++;
    }

    if (playerWins == 5 || computerWins == 5)
    {
        comment.textContent = "";
        announceWinner();
    }
}

function announceWinner()
{
    if (playerWins > computerWins)
    {
        alert("Congratulations! You're the WINNER!");
    }
    else if(playerWins < computerWins)
    {
        announceWinnerlert("Computer Wins! Better luck next time.");
    }
    else
    {
        alert("It's a DRAW! Good Fight!");
    }
}

function reset()
{
    playerWins = 0;
    computerWins = 0;

    comment.textContent = "";
    winner.textContent = "";
}

function toTitleCase(str)
{
    ans = "";
    ans += str[0].toUpperCase();
    for (let i=1; i<str.length; i++)
    {
        if (str[i-1] == ' ')
        {
            ans += str[i].toUpperCase();
        }
        else
        {
            ans += str[i];
        }
    }
    return ans;
}