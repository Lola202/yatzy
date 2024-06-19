function rollDice() {
    const dice = [];
    for (let i = 0; i < 5; i++) {
        dice[i] = Math.floor(Math.random() * 6) + 1;
    }
    updateDiceDisplay(dice);
    return dice;;
}
function updateDiceDisplay(dice) {
    for (let i = 0; i < 5; i++) {
        document.getElementById(`die${i + 1}`).innerText = dice[i];
    }
}