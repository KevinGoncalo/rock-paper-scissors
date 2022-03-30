// Global Variables
let computerSelection = 'Default';
let playerSelection = 'Default';
let winCount = 0
let lossCount = 0;


// Player's Turn Function
function playerPlay() {
    // Prompt player for choice
    playerSelection = prompt('Enter Rock, Paper, or Scissors: ');
    // Convert player choice to lower case
    playerSelection.toLowerCase();
    
    // Ensure player has entered appropriate option
    if(playerSelection === 'rock' || playerSelection === 'paper' || playerSelection === 'scissors') {
        playerSelection = playerSelection;
    } else {
        alert('Error: Incorrect Choice')
        playerPlay();
    }

    // Return the players selection
    return playerSelection;
}


// Computer's Turn Function
function computerPlay() {
    // Random Number for Computer's Choice
    let computerChoice = Math.floor(Math.random() * 3) + 1;
    
    // Switch Statement - convert random number into play choice
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
    
    // Return the computer's selection
    return computerSelection
}


// Function to play one round of Rock Paper Scissors
function playRound( playerSelection, computerSelection) {
    // If play results in draw
    if(playerSelection === computerSelection) {
        return 'draw';
    // If play results in loss
    } else if (playerSelection === 'rock' && computerSelection === 'paper'   
    || playerSelection === 'paper' && computerSelection === 'scissors'
    || playerSelection === 'scissors' && computerSelection === 'rock') {
        return 'loss';
    // If play results in win
    } else {
        return 'win';
    }
}


// Function to play a 5 round game of Rock Paper Scissors
function game() {
    for(let i = 0; i < 5; i++) {
        // Player's turn
        playerPlay();

        // Computers turn
        computerPlay();
        
        // Play a round and save result
        let result = playRound(playerSelection, computerSelection);
        
        // Evaluate result - print result - record rounds win/loss count
        switch(result) {
            case 'win':
                console.log(`You win! ${playerSelection} beats ${computerSelection}`);
                winCount++;
                break;
            case 'loss':
                console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
                lossCount++;
                break;
            case 'draw':
                console.log('It\'s a draw!');
                break;
            default:
                console.log('ERROR');
        }
    }
    
    // Evaluate whether game won/lost - print result
    if(winCount > lossCount) {
        console.log(`You win! ${winCount} games won to ${lossCount} games lost.`)
    } else if (lossCount > winCount) {
        console.log(`You lose! ${lossCount} games lost to ${winCount} games won.`)
    }
}


// Play Game
game();





