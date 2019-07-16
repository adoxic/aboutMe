import isYes from '../src/isYes.js';
//reference DOM elements
const button = document.getElementById('button');
const finalScore = document.getElementById('score');

button.onclick = function() {
    let name = '';
    const firstName = prompt('What is your first name?');
    name += firstName;
    
    const lastName = prompt('What is you last name?');
    name += ' ' + lastName;
    
    const confirmPopup = confirm('Are you sure you want to take the quiz?');
    if(confirmPopup === false) {
        return;
    }
    let quizScore = 0 / 3;

    const firstQuestion = prompt('Are there spiders on this page? (Y/N)');
    
    if(isYes(firstQuestion) === true) {
        quizScore += 1 / 3;
    }

    const secQuestion = prompt('Did I do to Tyler School of art? (Y/N)');

    if(isYes(secQuestion) === false) {
        quizScore += 1 / 3;
    }
    
    const thirdQuestion = prompt('Did I study Fine Art? (Y/N)');
    if(isYes(thirdQuestion) === true) {
        quizScore += 1 / 3;
    }

    quizScore = quizScore * 100;

    quizScore = Math.round(quizScore);

    if(quizScore <= 34) {
        quizScore = 'Wow ' + name + ' you got ' + quizScore + '% correct, that is not good.';
        finalScore.classList.add('red');
    } else if(quizScore <= 67) {
        finalScore.classList.add('yellow');

        quizScore = 'Wow ' + name + ' you got ' + quizScore + '% correct that is fine, maybe give it another read?';
    } else if(quizScore > 70) {
        finalScore.classList.add('green');
        quizScore = 'Wow ' + name + ' you got ' + quizScore + '% answers correct that is perfect! Good job!';
    }

    alert('You will now get your score!');
    
    finalScore.textContent = quizScore;
};
