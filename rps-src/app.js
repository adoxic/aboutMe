import compPlay from './RPS.js';
import rpsCompair from './RPScomp.js';

const fight = document.getElementById('fight');

const playerImg = document.getElementById('playerMove');
const pow = document.getElementById('pow');
const compImg = document.getElementById('compMove');
const win = document.getElementById('win');
const lose = document.getElementById('loss');
const placeBet = document.getElementById('place-bet');
const playerMoney = document.getElementById('player-money');
const playerBet = document.getElementById('player-bet');


let humanScore = 0;
let computerScore = 0;
let guess = 0;

function playerImageShow(string) {
    if(string === 'rock') {
        playerImg.classList.remove('hidden');
        playerImg.src = './assets/stone_PNG13612.png';
        guess = 0;
    } else if(string === 'paper') {
        playerImg.classList.remove('hidden');
        playerImg.src = './assets/Paperball_yellow.png';
        guess = 1;
    } else if(string === 'scissors') {
        playerImg.classList.remove('hidden');
        playerImg.src = './assets/scissors2.png';
        guess = 2;
    }
}

function tallyScore(isnum) {
    if(isnum === 1) {
        humanScore += 1;
        win.textContent = humanScore;
    } else if(isnum === 2) {
        computerScore += 1;
        lose.textContent = computerScore;
    }
}
const numberInput = +playerBet;
placeBet.addEventListener('click', () => {
if(numberInput !== 0){
    console.log('got a number')
}
});

fight.addEventListener('click', () => {
    
    const compMove = compPlay();
    const src = './assets/' + compMove + '.png';
    compImg.src = src;
    
    compImg.classList.remove('hidden');
    pow.classList.remove('hidden');

    const checked = document.querySelector('input:checked');

    playerImageShow(checked.value);

    let isFighting = rpsCompair(guess, compMove);

    tallyScore(isFighting);
});
