// import functions and grab DOM elements
import { getRandomThrow } from './get-random-throw.js';
import { didUserWin } from './utils.js';

const buttonEl = document.getElementById('throw');
const userThrowEl = document.getElementById('user-throw');
const compThrowEl = document.getElementById('computer-throw');
const whoWonEl = document.getElementById('who-won');
const winsEl = document.getElementById('wins');
const lossesEl = document.getElementById('losses');
const drawsEl = document.getElementById('draws');
const reset = document.getElementById('reset');
// initialize state

let wins = 0;
let total = 0;
let draws = 0;


// set event listeners to update state and DOM
buttonEl.addEventListener('click', () => {
    
    const compThrow = getRandomThrow();
    const currentlySelectedButton = document.querySelector('input:checked');
    const userThrow = currentlySelectedButton.value;
    const userWinOrLose = didUserWin(userThrow, compThrow);

    console.log(compThrow);
    console.log(userThrow);
    console.log(userWinOrLose);

    total++;

    userThrowEl.textContent = `You threw ${userThrow}.`;
    compThrowEl.textContent = `I threw ${compThrow}.`;

    if (userWinOrLose === 'draw') {
        whoWonEl.textContent = 'We draw!';
    } else {
        whoWonEl.textContent = `You ${userWinOrLose}!`;}

        
    if (userWinOrLose === 'win') {
        wins++;
    } else if (userWinOrLose === 'draw') {
        draws++;
    } else {
        lossesEl.textContent = total - wins - draws;
    }

    winsEl.textContent = wins;
    drawsEl.textContent = draws;
    
});

reset.addEventListener('click', ()=> {
    userThrowEl.textContent = '';
    compThrowEl.textContent = '';
    whoWonEl.textContent = '';
    wins = 0;
    draws = 0;
    lossesEl.textContent = 0;
    winsEl.textContent = 0;
    drawsEl.textContent = 0;
});
