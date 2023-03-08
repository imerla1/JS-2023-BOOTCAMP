// JavaScript Fundamentals – Part 2
// Coding Challenge #1

const teamKoalaScore = [1, 2, 3];
const teamDolphinScore = [3, 0, 9];

const calcAverage = (sequence) =>
    sequence.reduce((a, b) => a + b, 0) / sequence.length;

const teamKoalaScoreAvg = calcAverage(teamKoalaScore);
const teamDolhpinScoreAvg = calcAverage(teamDolphinScore);

const checkWinner = (teamDolphin, teamKoala) =>
    (teamDolphin / 2 >= teamKoala)
        ? console.log("teamDolphin Win")
        : teamKoala / 2 >= teamDolphin ? console.log("TeamKoala Win") : console.log("we don't have winner")


checkWinner(teamDolhpinScoreAvg, teamKoalaScoreAvg)