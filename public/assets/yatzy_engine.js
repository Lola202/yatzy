function calculateScoreForBox(game, box) {
    switch (box) {
        case 'ones':
            return game.diceValues.filter(die => die === 1).reduce((a, b) => a + b, 0);
        case 'twos':
            return game.diceValues.filter(die => die === 2).reduce((a, b) => a + b, 0);
        case 'threes':
            return game.diceValues.filter(die => die === 3).reduce((a, b) => a + b, 0);
        case 'fours':
            return game.diceValues.filter(die => die === 4).reduce((a, b) => a + b, 0);
        case 'fives':
            return game.diceValues.filter(die => die === 5).reduce((a, b) => a + b, 0);
        case 'sixes':
            return game.diceValues.filter(die => die === 6).reduce((a, b) => a + b, 0);
        default:
            return 0;
    }
}

function updateOverallScore(game) {
    game.scorecard.total = game.scorecard.ones + game.scorecard.twos + game.scorecard.threes +
                           game.scorecard.fours + game.scorecard.fives + game.scorecard.sixes;

    game.scorecard.bonus = game.scorecard.total >= 63 ? 35 : 0;
    game.scorecard.overall = game.scorecard.total + game.scorecard.bonus;
    console.log("Score", game.scorecard.overall)
}