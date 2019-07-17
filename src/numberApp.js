import numberGame from './numberGame.js';

const button = document.getElementById('guessButton');
const numberInput = document.getElementById('input');
const trysLeft = document.getElementById('trysLeft');
const feedback = document.getElementById('feedback');
const winLose = document.getElementById('winLose');
let trys = 4;


button.addEventListener('click', () => {
    trysLeft.textContent = 'Trys Left ' + trys;
    console.log(trys);
    trys -= 1;
    trysLeft.textContent = 'Trys Left ' + trys;
    let youLost = 'You Lost :(';

    if(trys === 0) {
        winLose.textContent = youLost;
        button.disabled = true;
    }
    
    let numGrab = numberInput.value;
    let correctNumber = 6;
    
    const compResult = numberGame(numGrab, correctNumber);
    let feedString = ' ';
    
    if(compResult === -1) {
        feedString = 'Guess is too low!';
        feedback.textContent = feedString;
        return;
    } else if(compResult === 0) {
        feedString = 'Correct!!';
        feedback.textContent = feedString;
        const youWin = 'Congrats You Won!!';
        winLose.textContent = youWin;
        button.disabled = true;
        return;
    } else if(compResult === 1) {
        feedString = 'Guess is too high!';
        feedback.textContent = feedString;
        return;
    } else {
        feedString = 'Something went wrong, are you sure you put in a number?';
        feedback.textContent = feedString;
        return;
    }
    



});