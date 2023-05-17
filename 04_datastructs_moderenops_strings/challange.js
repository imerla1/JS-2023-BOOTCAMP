/*
We're building a football betting app (soccer for my American friends 😅)!
Suppose we get data from a web service about a certain game ('game' variable on
next page). In this challenge we're gonna work with that data.
*/

const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const players1 = game.players[0];
const players2 = game.players[1];
const [gk_team1, ...fieldPlayers_team1] = players1;

const allPlayers = [...players1, ...players2];
const players1Final = [...players1, ...["Thiago", "Coutinho", "Perisic"]];
// const team1 = game.odds.team1;
// const draw = game.odds.x;
// const team2 = game.odds.team2;
const {odds: {team1, x: draw, team2}} = game
console.log(team1, draw, team2)


function printGoals(...playerNames) {
  for (let i = 0; i < playerNames.length; i++) {
    const element = playerNames[i];
    console.log(element);
  }
}

printGoals("Davies", "Muller", "Lewandowski", "Kimmich");
printGoals(...game.scored)