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
    let upperSectionScore = 0;
    for (let key in game.scorecard) {
        if (['ones', 'twos', 'threes', 'fours', 'fives', 'sixes'].includes(key) && game.scorecard[key] !== null) {
            upperSectionScore += game.scorecard[key];
        }
    }
    game.scorecard.total = upperSectionScore;
    game.scorecard.bonus = upperSectionScore >= 63 ? 35 : 0;
    game.scorecard.overall = game.scorecard.total + game.scorecard.bonus;

    document.getElementById('score-ones').innerText = game.scorecard.ones || 0;
    document.getElementById('overall-score').innerText = game.scorecard.overall;
}