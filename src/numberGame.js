
function numberGame(guess, correct) {
    if(guess === correct){
        return 0;
    } else if(guess < correct) {
        return -1;
    } else if(guess > correct) {
        return 1;
    } else if(guess !== Number) {
        return false;
    }
    
}

export default numberGame;