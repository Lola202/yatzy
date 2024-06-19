/*Initiates a new game */
function createNewGame() {
    return {
        currentRoll: 0,
        diceValues: [1, 1, 1, 1, 1],
        keepDie: [false, false, false, false, false],
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

//Roll dice on the html page
function rollDiceForGame() {
    if (game.currentRoll < 3) {
        game.diceValues = rollDice(game.keepDie);
        game.currentRoll++;
        updateGameDisplay(game);
    } else {
        alert("You have already rolled three times. Please score your turn.");
    }
}

//toggle re-roll or keep dice
function toggleKeep(index) {
    game.keepDie[index] = !game.keepDie[index];
    updateDiceDisplay(game.diceValues);
}


 //Updates scores on html page
function updateGameDisplay(game) {
    updateDiceDisplay(game.diceValues);
    document.getElementById('overall-score').innerText = `Overall Score: ${game.score}`;
    document.getElementById('score-ones').innerText = `Ones: ${game.scorecard.ones}`;
}

//Calculates score for a box
function scoreTurn(box) {
    const score = calculateScoreForBox(game, box);
    game.scorecard[box] = score;
    game.currentRoll = 0;
    game.keepDie = [false, false, false, false, false];
    updateOverallScore(game);
    updateGameDisplay(game);
}