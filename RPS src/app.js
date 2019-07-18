import compPlay from './RPS.js';
import rpsCompair from './RPScomp.js';

const fight = document.getElementById('fight');

const playerImg = document.getElementById('playerMove');
const pow = document.getElementById('pow');
const compImg = document.getElementById('compMove');
const win = document.getElementById('win');
const lose = document.getElementById('loss');
const betButton = document.getElementById('bet-button');
const playCash = document.getElementById('play-cash');
const playerBet = document.getElementById('player-bet');

let humanScore = 0;
let computerScore = 0;

fight.addEventListener('click', () => {
    
    compImg.classList.remove('hidden');
    pow.classList.remove('hidden');
    
    const compMove = compPlay();
    const src = './assets/' + compMove + '.png';
    compImg.src = src;

    const checked = document.querySelector('input:checked');
    let guess = 0;

    if(checked.value === 'rock') {
        playerImg.classList.remove('hidden');
        playerImg.src = './assets/stone_PNG13612.png';
        guess = 0;
    } else if(checked.value === 'paper') {
        playerImg.classList.remove('hidden');
        playerImg.src = './assets/Paperball_yellow.png';
        guess = 1;
    } else if(checked.value === 'scissors') {
        playerImg.classList.remove('hidden');
        playerImg.src = './assets/scissors2.png';
        guess = 2;
    }
    
    let isFighting = rpsCompair(guess, compMove);

    if(isFighting === 1) {
        humanScore += 1;
        win.textContent = humanScore;
    } else if(isFighting === 2) {
        computerScore += 1;
        lose.textContent = computerScore;
    }
  
});

