//"stone_PNG13612" | "Paperball_yellow" | "scissors2"


export default function rpsCompair(human, computer) {

    if(human === 2 && computer === 'Paperball_yellow') {
        return 1;
    } else if(human === 0 && computer === 'scissors2') {
        return 1;
    } else if(human === 1 && computer === 'stone_PNG13612') {
        return 1;
    }
    
    else if(human === 1 && computer === 'scissors2') {
        return 2;
    } else if(human === 2 && computer === 'stone_PNG13612') {
        return 2;
    } else if(human === 0 && computer === 'Paperball_yellow') {
        return 2;
    } 
    else {
        return 0;
    }
}