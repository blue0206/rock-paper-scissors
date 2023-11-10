console.log("Hello World!");

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
        return outcome = "Rock";
    }
    else if (randomNum == 2)
    {
        return outcome = "Paper";
    }
    else
    {
        return outcome = "Scissors";
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

    return response;
}