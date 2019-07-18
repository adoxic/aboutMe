import compPlay from './RPS.js';

const fight = document.getElementById('fight');

const playerRockImg = document.getElementById('p-rock');
const playerPaperImg = document.getElementById('p-paper');
const playerScissorImg = document.getElementById('p-scissors');

const compRockImg = document.getElementById('c-rock');
const compPaperImg = document.getElementById('c-paper');
const compScissorImg = document.getElementById('c-scissors');

let compMove = compPlay();


fight.addEventListener('click', () => {
    let compMove = compPlay();
    console.log(compMove);
    if(compMove === 0) {
        compRockImg.classList.remove('moveimg');
        compPaperImg.classList.add('moveimg');
        compScissorImg.classList.add('moveimg');
        return;
    } else if(compMove === 1) {
        compRockImg.classList.add('moveimg');
        compPaperImg.classList.remove('moveimg');
        compScissorImg.classList.add('moveimg');
        return;
    } else if(compMove === 2) {
        compRockImg.classList.add('moveimg');
        compPaperImg.classList.add('moveimg');
        compScissorImg.classList.remove('moveimg');
        return;
    }
});