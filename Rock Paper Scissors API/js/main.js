//event listeners for rock
document.getElementById("rock").onclick = playerRock
//event listeners for paper
document.getElementById("paper").onclick = playerPaper
//event listeners for scissors
document.getElementById("scissors").onclick = playerScissors

function playerRock (){
	compthrows = getcompChoice()
	winlosstie(compthrows, "rock")
}

function playerPaper(){
	compthrows = getcompChoice()
	winlosstie (compthrows, "paper")
}
function playerScissors(){
	compthrows = getcompChoice()
	winlosstie (compthrows, "paper")
}
function getcompChoice (){
	outcomeRandom = Math.random();
	var compChoice = "rock"
	if ( outcomeRandom <.33){
		compChoice = "scissors"
	} else if(outcomeRandom <.66){
		compChoice = "paper"
	}
	return compChoice;
}


function winlosstie(compChoice,playerOption){
	if (compChoice == playerOption){
		document.getElementsByTagName('h1')[0].innerHTML = "tie"
	} else if ((compChoice == "rock" && playerOption =="scissors" ) ||
						(compChoice == "paper" && playerOption == "rock") ||
						(compChoice == "scissors" && playerOption == "paper")	){
		document.getElementsByTagName('h1')[0].innerHTML = "user lost"
	}else {
		document.getElementsByTagName('h1')[0].innerHTML = "user won"
	}
}
