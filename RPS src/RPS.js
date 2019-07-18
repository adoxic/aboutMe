export default function compPlay() {
    let compRandom = Math.round(Math.random() * 2);
    const compInfo = compMove(compRandom);
    return compInfo;
}


export function compMove(compRandom) {
    if(compRandom === 0) {
        return 'stone_PNG13612';
    } else if(compRandom === 1) {
        return 'Paperball_yellow';
    } else if(compRandom === 2) {
        return 'scissors2';
    }
    
}


