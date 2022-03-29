// Variables
let computerResult = 'Default';



function computerPlay() {
    // Variables
    let computerChoice = Math.floor(Math.random() * 3) + 1;
    
    // Switch Statement - Play Logic
    switch(computerChoice) {
        case 1:
            computerResult = 'Rock';
            break;
        case 2:
            computerResult = 'Paper';
            break;
        case 3:
            computerResult = 'Scissors';
            break;
        default:
            console.log('An error has occured');
    }

    return computerResult
}

computerPlay();
console.log(computerResult);

