export default function compPlay() {
    let compRandom = Math.round(Math.random() * 2);
    const compInfo = compMove(compRandom);
    return compInfo;
}


export function compMove(compRandom) {
    if(compRandom === 0) {
        return 'rock';
    } else if(compRandom === 1) {
        return 'paper';
    } else if(compRandom === 2) {
        return 'scissors';
    }
    
}


