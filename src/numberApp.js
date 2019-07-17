import numberGame from './numberGame.js';

const button = document.getElementById('guessButton');
const numberInput = document.getElementById('input');
const trysLeft = document.getElementById('trysLeft');

let trys = 4;
trysLeft.textContent = trys;

button.addEventListener('click', () => {
    numberInput.textContent = numberInput.value;
    let correctNumber = 6;
    
    console.log(numberInput);

    numberGame(numberInput, correctNumber);

    trys -= 1;
    trysLeft.textContent = trys;

    if(trys === 0) {
        
        button.disabled = true;
    }


});