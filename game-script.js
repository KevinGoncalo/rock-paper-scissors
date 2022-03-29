// Variables
let computerSelection = 'Default';
let playerSelection = 'Default';

function playerPlay() {
    playerSelection = prompt('Enter Rock, Paper, or Scissors: ');
    playerSelection.toLowerCase();
    if(playerSelection === 'rock' || playerSelection === 'paper' || playerSelection === 'scissors') {
        playerSelection = playerSelection;
    } else {
        alert('Error: Incorrect Choice')
        playerPlay();
    }
}



function computerPlay() {
    // Variables
    let computerChoice = Math.floor(Math.random() * 3) + 1;
    
    // Switch Statement - Play Logic
    switch(computerChoice) {
        case 1:
            computerSelection = 'rock';
            break;
        case 2:
            computerSelection = 'paper';
            break;
        case 3:
            computerSelection = 'scissors';
            break;
        default:
            console.log('An error has occured');
    }

    return computerSelection
}

playerPlay();
computerPlay();
console.log(computerSelection);
console.log(playerSelection);


function playRound( playerSelection, computerSelection) {
    if(playerSelection === computerSelection) {
        console.log('It\'s a draw!');
    } else if (playerSelection === 'rock' && computerSelection === 'paper'   
    || playerSelection === 'paper' && computerSelection === 'scissors'
    || playerSelection === 'scissors' && computerSelection === 'rock') {
        console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
    } else {
        console.log(`You win! ${playerSelection} beats ${computerSelection}`);
    }
}

playRound(playerSelection, computerSelection);