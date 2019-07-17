import numberGame from './numberGame.js';

const button = document.getElementById('guessButton');
const numberBox = document.getElementById('mysteryNumber');
const numberInput = document.getElementById('input');
const trysLeft = document.getElementById('trysLeft')

let trys = 4;
trysLeft.textContent = trys;
numberInput.oninput = numberInput;

console.log(numberInput);

button.addEventListener('click', () => {
    numberGame(numberInput);

    trys -= 1;
    trysLeft.textContent = trys;

    if(trys === 0) {
        button.disabled = true;
    }

    console.log(trys);

});