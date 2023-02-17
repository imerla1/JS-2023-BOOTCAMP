const teamDolphinScore = [96, 108, 86]
const teamKoalaScore = [88, 91, 110]


function calculateAverage(sequence) {
    return sequence.reduce((a, b) => a + b, 0) / sequence.length
}

const teamDolhpinScoreAvg = calculateAverage(teamDolphinScore);
const teamKoalaScoreAvg = calculateAverage(teamKoalaScore)

console.log(teamDolhpinScoreAvg)
console.log(teamKoalaScoreAvg)

if (teamDolhpinScoreAvg === teamKoalaScoreAvg && teamDolhpinScoreAvg > 100) {
    console.log("it's a draw")
} else if (teamDolhpinScoreAvg > teamKoalaScoreAvg && teamDolhpinScoreAvg > 100) {
    console.log("teamDolphin won")
} else {
    if (teamKoalaScoreAvg > 100)
        console.log("teamKoala Won")
    else {
        console.log("Score AVG must > 100 to determine winner")
    }
}