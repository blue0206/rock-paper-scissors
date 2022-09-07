let userName = prompt("Hello, what's your name?");
alert(`Welcome, ${userName}!\nGet ready to face off against The Computer!\nYou may enter 'r', 'p', or 's' and the game will still work.`);
let playerSelection = "RPS";
let computerSelection = 10;

let game = new Function('playerInput(), getComputerChoice(), playerRound()');
let score = 0;
function getComputerChoice()
{
	let randomAssigner = Math.floor(Math.random() * 3);
	if (randomAssigner === 0)
	{
		computerSelection = 1;
	}
	else if (randomAssigner === 1)
	{
		computerSelection = 2;
	}
	else 
	{
		computerSelection = 3;
	}
}

for (let i = 0; i < 5; i++)
{
	game();
	if (playerSelection === computerSelection)
	{
		i--;
	}
}

if (score < 3)
	{
		console.log(`${userName}'s Score: ${score}\nComputer Score: ${5 - score}\nYou Lose!`);
		alert(`${userName}'s Score: ${score}\nComputer Score: ${5 - score}\nYou Lose!`);
	}
	else 
	{
		console.log(`${userName}'s Score: ${score}\nComputer Score: ${5 - score}\nYou Win!`);
		alert(`${userName}'s Score: ${score}\nComputer Score: ${5 - score}\nYou Win!`);
	}

function playerInput()
{
	playerSelection = prompt("Rock, Paper, or Scissors?");
	playerSelection = playerSelection.toLowerCase().charCodeAt(0);
	if (playerSelection === 114)
	{
		playerSelection = 1;
	}
	else if (playerSelection === 112)
	{
		playerSelection = 2;
	}
	else if (playerSelection === 115)
	{
		playerSelection = 3;
	}
	else 
	{
		playerInput();
	}
}

function playerRound()
{	
	playerSelection;
	computerSelection;
	
	if (playerSelection === 1 && computerSelection === 2)
		{
			console.log("You Lose! Paper beats Rock.");
			alert("You Lose! Paper beats Rock.");
		}
		else if (playerSelection === 1 && computerSelection === 3)
		{
			console.log("You Win! Rock beats Scissors.");
			alert("You Win! Rock beats Scissors.");
			score++;
		}
		else if (playerSelection === 2 && computerSelection === 1)
		{
			console.log("You Win! Paper beats Rock.");
			alert("You Win! Paper beats Rock.");
			score++;
		}
		else if (playerSelection === 2 && computerSelection === 3)
		{
			console.log("You Lose! Scissors beat Paper.");
			alert("You Lose! Scissors beat Paper.");
		}
		else if (playerSelection === 3 && computerSelection === 1)
		{
			console.log("You Lose! Rock beats Scissors.");
			alert("You Lose! Rock beats Scissors.");
		}
		else if (playerSelection === 3 && computerSelection === 2)
		{
			console.log("You Win! Scissors beat Paper.");
			alert("You Win! Scissors beat Paper.");
			score++;
		}
		else 
		{
			console.log("It's a TIE!");
			alert("It's a TIE!");
		}
}