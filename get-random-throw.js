export function getRandomThrow() {
    const randomNumber = Math.random();
    console.log(randomNumber)
    if (randomNumber <= .33) return 'rock';
    if (randomNumber >= .34 && randomNumber <= .66) return 'paper';
    if (randomNumber >= .67 && randomNumber <= .99) return 'scissors';
}

