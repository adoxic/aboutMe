import rpsCompair from '../rps-src/RPScomp.js';

const test = QUnit.test;



test('who wins?', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    let human = 1;
    let computer = 'scissors';
    const expected = 2;
    //Act 
    // Call the function you're testing and set the result to a const
    const result = rpsCompair(human, computer);
    //Assert
    assert.equal(result, expected);
});

test('who wins??', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    let human = 0;
    let computer = 'scissors';
    const expected1 = 1;
    //Act 
    // Call the function you're testing and set the result to a const
    const result = rpsCompair(human, computer);
    //Assert
    assert.equal(result, expected1);
});

test('who wins???', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    let human = 2;
    let computer = 'scissors';
    const expected2 = 0;
    //Act 
    // Call the function you're testing and set the result to a const
    const result = rpsCompair(human, computer);
    //Assert
    assert.equal(result, expected2);
});
