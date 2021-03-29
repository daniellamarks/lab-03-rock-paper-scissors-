// IMPORT MODULES under test here:
import { didUserWin } from '../utils.js';
const test = QUnit.test;

test('if player = computer, return draw', (expect) => {
    const expected = 'draw';
    const actual = didUserWin('rock', 'rock');
    expect.equal(actual, expected, `it's a draw`);
});


test('if player === rock && computer === scissors return win', (expect) => {
    
    const expected = 'win';
    const actual = didUserWin('rock', 'scissors');
    expect.equal(actual, expected);
    
});

test('if player === paper && computer === rock return win', (expect) => {
    
    const expected = 'win';
    const actual = didUserWin('paper', 'rock');
    expect.equal(actual, expected);

});

test('if player === paper && computer === scissors return lose', (expect) => {
    
    const expected = 'lose';
    const actual = didUserWin('paper', 'scissors');
    expect.equal(actual, expected);

});

test('if player === scissors && computer === rock return lose', (expect) => {
    
    const expected = 'lose';
    const actual = didUserWin('scissors', 'rock');
    expect.equal(actual, expected);

});

test('if player === scissors && computer === paper return lose', (expect) => {
    
    const expected = 'win';
    const actual = didUserWin('scissors', 'paper');
    expect.equal(actual, expected);

});

 
