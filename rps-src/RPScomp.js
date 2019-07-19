//"stone_PNG13612" | "Paperball_yellow" | "scissors2"


export default function rpsCompair(human, computer) {

    if(human === 2 && computer === 'paper') {
        return 1;
    } else if(human === 0 && computer === 'scissors') {
        return 1;
    } else if(human === 1 && computer === 'rock') {
        return 1;
    }
    
    else if(human === 1 && computer === 'scissors') {
        return 2;
    } else if(human === 2 && computer === 'rock') {
        return 2;
    } else if(human === 0 && computer === 'paper') {
        return 2;
    } 
    else {
        return 0;
    }
}