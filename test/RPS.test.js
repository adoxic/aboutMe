import compPlay from '../RPS src/RPS.js';

const test = QUnit.test;

test('are these numbers?', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    let zeroUp = compPlay();

    function isZeroUpTrue() {
        console.log(zeroUp);
        if(zeroUp === 2 || zeroUp === 1 || zeroUp === 0) {
            return true;
        } else {
            return false;
        }
        
    }
    
    
    const expected = true;
    //Act 
    // Call the function you're testing and set the result to a const
    const result = isZeroUpTrue();
    //Assert
    assert.equal(result, expected);
});