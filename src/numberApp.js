import numberGame from './numberGame.js';

const button = document.getElementById('guessButton');
const numberInput = document.getElementById('input');
const trysLeft = document.getElementById('trysLeft');
const feedback = document.getElementById('feedback');
const winLose = document.getElementById('winLose');
let trys = 4;


//random integer syntax pulled from MDN https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomInt(min, max) {
    min = Math.ceil(1);
    max = Math.floor(20);
    return Math.floor(Math.random() * (20 - 1)) + 1; 
}
let randomNum = getRandomInt(1, 20); 


button.addEventListener('click', () => {
    trysLeft.textContent = 'Trys Left ' + trys;
    trys -= 1;
    trysLeft.textContent = 'Trys Left ' + trys;
    let youLost = 'You Lost :(';

    if(trys === 0) {
        winLose.textContent = youLost;
        button.disabled = true;
    }
    
    let numGrab = numberInput.value;
    
    const compResult = numberGame(numGrab, randomNum);
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