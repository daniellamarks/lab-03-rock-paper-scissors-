export function didUserWin(player, computer) {

    if (player === computer) return 'draw';
    if (player === 'rock' && computer === 'scissors') return 'win';
    if (player === 'rock' && computer === 'paper') return 'lose';
    if (player === 'paper' && computer === 'rock') return 'win';
    if (player === 'paper' && computer === 'scissors') return 'lose';
    if (player === 'scissors' && computer === 'rock') return 'lose';
    if (player === 'scissors' && computer === 'paper') return 'win';
}

