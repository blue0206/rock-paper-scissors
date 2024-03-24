let playerWins = 0;
let computerWins = 0;

const btn = document.querySelector("#btn");
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const result = document.querySelector('#result');
const player = document.querySelector('#player');
const computer = document.querySelector('#computer');

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
    
    if (playerSelection === computerSelection)
    {
        let temp = document.createElement('div');
        temp.setAttribute('class', 'item');
        temp.innerHTML = "<br /> You: " + toTitleCase(playerSelection)
                            + "<br /> Computer: " + toTitleCase(computerSelection)
                            + "<br/>It's a TIE!<hr />";
        result.appendChild(temp);
    }
    else if ((playerSelection === 'rock') && (computerSelection === 'scissors'))
    {
        let temp = document.createElement("div");
        temp.setAttribute("class", "item");
        temp.innerHTML = "<br/> You: " + toTitleCase(playerSelection)
                            + "<br /> Computer: " + toTitleCase(computerSelection)
                            + "<br/> You Win! Rock beats Scissors!<hr />";
        playerWins++;
        result.appendChild(temp);
    }
    else if ((playerSelection === 'paper') && (computerSelection === 'rock'))
    {
        let temp = document.createElement("div");
        temp.setAttribute("class", "item");
        temp.innerHTML = "<br/> You: " + toTitleCase(playerSelection)
                            + "<br /> Computer: " + toTitleCase(computerSelection)
                            + "<br/> You Win! Paper beats Rock!<hr />";
        playerWins++;
        result.appendChild(temp);
    }
    else if ((playerSelection === 'scissors') && (computerSelection === 'paper'))
    {
        let temp = document.createElement("div");
        temp.setAttribute("class", "item");
        temp.innerHTML = "<br/> You: " + toTitleCase(playerSelection)
                            + "<br /> Computer: " + toTitleCase(computerSelection)
                            + "<br/> You Win! Scissors beat Paper!<hr />";
        playerWins++;
        result.appendChild(temp);
    }
    else if ((playerSelection === 'rock') && (computerSelection === 'paper'))
    {
        let temp = document.createElement("div");
        temp.setAttribute("class", "item");
        temp.innerHTML = "<br/> You: " + toTitleCase(playerSelection)
                            + "<br /> Computer: " + toTitleCase(computerSelection)
                            + "<br/> You Lose! Paper beats Rock!<hr />";
        computerWins++;
        result.appendChild(temp);
    }
    else if ((playerSelection === 'paper') && (computerSelection === 'scissors'))
    {
        let temp = document.createElement("div");
        temp.setAttribute("class", "item");
        temp.innerHTML = "<br/> You: " + toTitleCase(playerSelection)
                            + "<br /> Computer: " + toTitleCase(computerSelection)
                            + "<br/> You Lose! Scissors beat Paper!<hr />";
        computerWins++;
        result.appendChild(temp);
    }
    else
    {
        let temp = document.createElement("div");
        temp.setAttribute("class", "item");
        temp.innerHTML = "<br/> You: " + toTitleCase(playerSelection)
                            + "<br /> Computer: " + toTitleCase(computerSelection)
                            + "<br/> You Lose! Rock beats Scissors!<hr />";
        computerWins++;
        result.appendChild(temp);
    }

    updateScore();
    updateScroll();

    if (playerWins == 5 || computerWins == 5)
    {
        announceWinner();
    }
}

function updateScore()
{
    player.textContent = playerWins;
    computer.textContent = computerWins;
}

function announceWinner()
{
    if (playerWins > computerWins)
    {
        alert("Congratulations! You're the WINNER!");
    }
    else if(playerWins < computerWins)
    {
        alert("Computer Wins! Better luck next time.");
    }
    else
    {
        alert("It's a DRAW! Good Fight!");
    }
}

function updateScroll()
{
    result.scrollTop = result.scrollHeight;
}

function reset()
{
    playerWins = 0;
    computerWins = 0;

    let commentList = document.querySelectorAll('.item');
    for (let i=0; i<commentList.length; i++)
    {
        result.removeChild(commentList[i]);
    }
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