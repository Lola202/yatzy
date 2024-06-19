function createNewGame() {
    return {
        currentRoll: 0,
        diceValues: [1, 1, 1, 1, 1],
        keepDice: [false, false, false, false, false],
        score: 0,
        bonus: 0,
        scorecard: {
            ones: 0,
            twos: 0,
            threes: 0,
            fours: 0,
            fives: 0,
            sixes: 0,
            total: 0,
            bonus: 0,
            overall: 0
        }
    };
}
function rollDiceForGame(game) {
    game.currentRoll++;
    game.diceValues = rollDice();
    updateGameDisplay(game);
}
function updateGameDisplay(game) {
    updateDiceDisplay(game.diceValues);
    document.getElementById('overall-score').innerText = `Overall Score: ${game.score}`;
    document.getElementById('score-ones').innerText = `Ones: ${game.scorecard.ones}`;
}

function scoreOnes(game) {
    const onesScore = game.diceValues.filter(die => die === 1).length;
    game.scorecard.ones = onesScore;
    game.scorecard.total += onesScore;
    updateOverallScore(game);
}

function updateOverallScore(game) {
    game.score = game.scorecard.total;
    if (game.scorecard.total >= 63) {
        game.bonus = 35;
    }
    game.scorecard.overall = game.score + game.bonus;
    document.getElementById('overall-score').innerText = `Overall Score: ${game.scorecard.overall}`;
}

const gameState = {
    rollNumber : 0,  // 0 to 3
    dice: [1,1,1,1,1],
    keep: [false, false, false, false, false,]
};