import numberGame from './numberGame.js';

const button = document.getElementById('guessButton');
const numberInput = document.getElementById('input');
const trysLeft = document.getElementById('trysLeft');
const feedback = document.getElementById('feedback');
const winLose = document.getElementById('winLose');


function getRandomInt(max) {
    return Math.floor(Math.random() * (max - 1)) + 1; 
}

let randomNum = getRandomInt(20); 

function gameResult(num) {
    if(num === -1) {
        feedback.textContent = 'Guess is too low!';
    } else if(num === 0) {
        winLose.textContent = 'Congrats You Won!!';
        button.disabled = true;
        feedback.textContent = 'Correct!!';
    } else if(num === 1) {
        feedback.textContent = 'Guess is too high!';
    } else {
        feedback.textContent = 'That\'s not right';
    }
}


button.addEventListener('click', () => {
    let trys = 4;
    
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
    
    gameResult(compResult);
});