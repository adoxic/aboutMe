
export default function rpsCompair(human, computer) {

    if(human === 'scissors' && computer === 'paper') {
        return 'won';
    } else if(human === 'rock' && computer === 'scissors') {
        return 'won';
    } else if(human === 'paper' && computer === 'rock') {
        return 'won';
    }
    
    else if(human === 'paper' && computer === 'scissors') {
        return 'lost';
    } else if(human === 'scissors' && computer === 'rock') {
        return 'lost';
    } else if(human === 'rock' && computer === 'paper') {
        return 'lost';
    } 
    else {
        return 'tie';
    }
}