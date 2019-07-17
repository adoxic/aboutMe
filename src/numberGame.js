const button = document.getElementById('guessButton');
const numberBox = document.getElementById('mysteryNumber');
const numberinput = document.getElementById('input');
const trysLeft = document.getElementById('trysLeft')

let trys = 4;
trysLeft.textContent = trys;

button.addEventListener('click', () => {
    trys -= 1;
    trysLeft.textContent = trys;

    if(trys === 0) {
        button.disabled = true;
    }


});

function numberGame(trys) {

}

export default numberGame;