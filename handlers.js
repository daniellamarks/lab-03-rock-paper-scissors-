import { didUserWin, getRandomThrow } from './utils.js';

const userThrowEl = document.getElementById('user-throw');
const compThrowEl = document.getElementById('computer-throw');
const whoWonEl = document.getElementById('who-won');
const winsEl = document.getElementById('wins');
const lossesEl = document.getElementById('losses');
const drawsEl = document.getElementById('draws');
const resetTimes = document.getElementById('reset-times');

let wins = 0;
let total = 0;
let draws = 0;
let numberOfResets = 0;

export function playButtonClickHandle() {
    const compThrow = getRandomThrow();
    const currentlySelectedButton = document.querySelector('input:checked');
    const userThrow = currentlySelectedButton.value;
    const userWinOrLose = didUserWin(userThrow, compThrow);

    total++;

    userThrowEl.textContent = `You threw ${userThrow}.`;
    compThrowEl.textContent = `I threw ${compThrow}.`;

    userWinOrLose === 'draw' ? whoWonEl.textContent = 'We draw!' : whoWonEl.textContent = `You ${userWinOrLose}!`;

    if (userWinOrLose === 'win') {
        wins++;
    } else if (userWinOrLose === 'draw') {
        draws++;
    } else {
        lossesEl.textContent = total - wins - draws;
    }

    winsEl.textContent = wins;
    drawsEl.textContent = draws;
} 

export function resetButtonClickHandle() {
    userThrowEl.textContent = '';
    compThrowEl.textContent = '';
    whoWonEl.textContent = '';
    wins = 0;
    draws = 0;
    lossesEl.textContent = 0;
    winsEl.textContent = 0;
    drawsEl.textContent = 0;
    numberOfResets++;
    resetTimes.textContent = numberOfResets; 
}