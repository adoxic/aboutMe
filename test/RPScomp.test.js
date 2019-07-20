import rpsCompair from '../rps-src/RPScomp.js';

const test = QUnit.test;

test('win?', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    let human = 'rock';
    let computer = 'scissors';
    const expected = 'won';
    //Act 
    // Call the function you're testing and set the result to a const
    const result = rpsCompair(human, computer);
    //Assert
    assert.equal(result, expected);
});

test('lose?', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    let human = 'paper';
    let computer = 'scissors';
    const expected = 'lost';
    //Act 
    // Call the function you're testing and set the result to a const
    const result = rpsCompair(human, computer);
    //Assert
    assert.equal(result, expected);
});

test('tie?', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    let human = 'scissors';
    let computer = 'scissors';
    const expected = 'tie';
    //Act 
    // Call the function you're testing and set the result to a const
    const result = rpsCompair(human, computer);
    //Assert
    assert.equal(result, expected);
});

