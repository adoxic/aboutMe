import numberGame from '../src/numberGame.js';

const test = QUnit.test;

test('correct number', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const guess = 6;
    const correct = 6;
    const expected = 0;
    //Act 
    // Call the function you're testing and set the result to a const
    const result = numberGame(guess, correct);
    //Assert
    assert.equal(result, expected);
});

test('too low', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const guess = 4;
    const correct = 6;
    const expected = -1;
    //Act 
    // Call the function you're testing and set the result to a const
    const result = numberGame(guess, correct);
    //Assert
    assert.equal(result, expected);
});

test('too high', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const guess = 8;
    const correct = 6;
    const expected = 1;
    //Act 
    // Call the function you're testing and set the result to a const
    const result = numberGame(guess, correct);
    //Assert
    assert.equal(result, expected);
});

