// import functions and grab DOM elements
import { getRandomThrow } from './get-random-throw.js'

const buttonEl = document.getElementById('throw');
const whoWonEl = document.getAnimations('who-won');
const winsEl = document.getAnimations('wins');
const lossesEl = document.getAnimations('losses');
const drawsEl = document.getElementById('draws');
const reset = document.getElementById('reset');
// initialize state

let wins = 0;
let total = 0;

// set event listeners to update state and DOM
buttonEl.addEventListener('click', () => {
    console.log(getRandomThrow())
})
