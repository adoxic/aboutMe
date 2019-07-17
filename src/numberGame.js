
function numberGame(guess, correct) {
    const parsedGuess = parseInt(guess);
    if(parsedGuess === correct){
        return 0;
    } else if(parsedGuess < correct) {
        return -1;
    } else if(parsedGuess > correct) {
        return 1;
    } else if(parsedGuess !== Number) {
        return typeof(parsedGuess);
    }
    
}

export default numberGame;