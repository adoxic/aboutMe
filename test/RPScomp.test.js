import rpsCompair from '../RPS src/RPScomp.js';
import { backToNum } from '../RPS src/RPScomp.js';
import compString from '../RPS src/RPS.js';

const test = QUnit.test;

let computer = backToNum(compString);
let human = 2;

test('who wins?', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    
    const expected = 'human wins';
    //Act 
    // Call the function you're testing and set the result to a const
    const result = rpsCompair(human, computer);
    //Assert
    assert.equal(result, expected);
});
