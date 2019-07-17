import numberGame from '../src/numberGame.js';

const test = QUnit.test;

test('compair numbers', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const guess = 'banana';
    const correct = 6;
    const expected = true;
    //Act 
    // Call the function you're testing and set the result to a const
    const result = numberGame(guess, correct);
    //Assert
    assert.equal(result, expected);
});


