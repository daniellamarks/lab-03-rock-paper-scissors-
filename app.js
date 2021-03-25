// import functions and grab DOM elements
import { getRandomThrow } from './get-random-throw.js';
import { didUserWin } from './utils.js';

const buttonEl = document.getElementById('throw');
const userThrowEl = document.getAnimations('user-throw');
const compThrowEl = document.getAnimations('computer-throw');
const whoWonEl = document.getAnimations('who-won');
const winsEl = document.getAnimations('wins');
const lossesEl = document.getAnimations('losses');
const drawsEl = document.getElementById('draws');
const reset = document.getElementById('reset');
// initialize state

let wins = 0;
let total = 0;
let draws = 0;


// set event listeners to update state and DOM
buttonEl.addEventListener('click', () => {
    
    const compThrow = getRandomThrow();

    console.log(compThrow);

    const currentlySelectedButton = document.querySelector('input:checked');

    const userThrow = currentlySelectedButton.value;

    console.log(userThrow);

    const userWinOrLose = didUserWin(userThrow, compThrow);

    console.log(userWinOrLose);

    userThrowEl.textContent = `You threw ${userThrow}`;
    compThrowEl.textContent = `I threw ${compThrow}`;
    whoWonEl.textContent = `You ${userWinOrLose}!`;




})
