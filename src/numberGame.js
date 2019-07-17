
function numberGame() {
    if(num === 6){
        return true;
    } else if(num < 6) {
        return -1;
    } else if(num > 6) {
        return 1;
    } else if(num != Number) {
        return false;
    }
}

export default numberGame;