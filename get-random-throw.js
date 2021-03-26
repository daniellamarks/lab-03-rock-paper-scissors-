export function getRandomThrow() {
    const randomNumber = Math.random();
    if (randomNumber <= .33) {return 'rock';
    } else if (randomNumber >= .34 && randomNumber <= .66) {
        return 'paper';
    } else {
        return 'scissors';}
}


//    let randomNumber = Math.ceil(Math.random() * 3);
