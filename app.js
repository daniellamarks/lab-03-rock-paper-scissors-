// import functions and grab DOM elements
import { playButtonClickHandle, resetButtonClickHandle } from './handlers.js';

const buttonEl = document.getElementById('throw-button');
const reset = document.getElementById('reset');
// initialize state

// set event listeners to update state and DOM

buttonEl.addEventListener('click', playButtonClickHandle);
reset.addEventListener('click', resetButtonClickHandle);


