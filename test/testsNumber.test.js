import numberGame from '../src/numberGame.js';

const test = QUnit.test;

test('compair numbers', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const num = 'apple';
    const expected = false;
    //Act 
    // Call the function you're testing and set the result to a const
    const result = numberGame(num);
    //Assert
    assert.equal(result, expected);
});


