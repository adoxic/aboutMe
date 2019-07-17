import compPlay from '../RPS src/RPS.js';

const test = QUnit.test;

test('yes is true', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const expected = 0;
    //Act 
    // Call the function you're testing and set the result to a const
    const result = compPlay();
    //Assert
    assert.equal(result, expected);
});