function rollDice(diceReroll) {
    const dice = [];
    for (let i = 0; i < 5; i++) {
        if (game.keepDie[i]) {
            dice[i] = game.diceValues[i];
        } else {
            dice[i] = Math.floor(Math.random() * 6) + 1;
        }
    }
    return dice;
}

//update dice display and highlights kept dice
function updateDiceDisplay(dice) {
    for (let i = 0; i < 5; i++) {
        const dieElement = document.getElementById(`die${i + 1}`);
        dieElement.innerText = dice[i];
        dieElement.style.backgroundColor = game.keepDie[i] ? 'yellow' : 'white';
    }
}