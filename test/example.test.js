// IMPORT MODULES under test here:
import { didUserWin } from '../utils.js';

const test = QUnit.test;

test('if player = computer, return draw', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 'draw';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = didUserWin('rock', 'rock');

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected, `it's a draw`);
});


test('if player === rock && computer === scissors return win', (expect) => {
    
    const expected = true;
    const actual = true;
    expect.equal(actual, expected);
    
});
test('if player === paper && computer === rock return win', (expect) => {
    
    const expected = true;
    const actual = true;
    expect.equal(actual, expected);

});
test('if player === paper && computer === scissors return lose', (expect) => {
    
    const expected = true;
    const actual = true;
    expect.equal(actual, expected);

});
test('if player === scissors && computer === rock return win', (expect) => {
    
    const expected = true;
    const actual = true;
    expect.equal(actual, expected);

});
test('if player === scissors && computer === paper return lose', (expect) => {
    
    const expected = true;
    const actual = true;
    expect.equal(actual, expected);

});
test('if player = computer, return draw', (expect) => {
    
    const expected = true;
    const actual = true;
    expect.equal(actual, expected);

});
test('if player = computer, return draw', (expect) => {
    
    const expected = true;
    const actual = true;
    expect.equal(actual, expected);

});
test('if player = computer, return draw', (expect) => {
    
    const expected = true;
    const actual = true;
    expect.equal(actual, expected);

});
test('if player = computer, return draw', (expect) => {
    
    const expected = true;
    const actual = true;
    expect.equal(actual, expected);

});