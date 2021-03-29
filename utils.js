export function didUserWin(player, computer) {

    const outcome = player + '|' + computer;
    let result = '';

    switch (outcome) {
        case 'rock|scissors' : 
            result = 'win';
            break;
        case 'rock|paper' : 
            result = 'lose';
            break;
        case 'paper|scissors' : 
            result = 'lose';
            break;
        case 'paper|rock' : 
            result = 'win';
            break;
        case 'scissors|rock' : 
            result = 'lose';
            break;
        case 'scissors|paper' : 
            result = 'win';
            break;
        default:
            result = 'draw';
            break;
    }

    return result;
}

export function getRandomThrow() {
    const randomNumber = Math.random();
    if (randomNumber <= .33) {return 'rock';
    } else if (randomNumber > .33 && randomNumber <= .66) {
        return 'paper';
    } else {
        return 'scissors';}
}



//    let randomNumber = Math.ceil(Math.random() * 3);