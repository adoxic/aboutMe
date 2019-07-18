import rpsCompair from '../RPS src/RPScomp.js';

const test = QUnit.test;



test('who wins?', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    let human = 1;
    let computer = 'scissors2';
    const expected = 2;
    //Act 
    // Call the function you're testing and set the result to a const
    const result = rpsCompair(human, computer);
    //Assert
    assert.equal(result, expected);
});
