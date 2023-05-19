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
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

function printGoals(...playerNames) {
  for (let i = 0; i < playerNames.length; i++) {
    const element = playerNames[i];
    console.log(element);
  }
}

printGoals("Davies", "Muller", "Lewandowski", "Kimmich");
printGoals(...game.scored);

// Coding Challenge #2

// 1)Loop over the game.scored array and print each player name to the console,
// along with the goal number (Example: "Goal 1: Lewandowski")

console.log("Starting Challenge 2 -------");

for (const [index, player] of game.scored.entries()) {
  console.log(`Goal ${index + 1}: ${player}`);
}

// 2)Use a loop to calculate the average odd and log it to the console

let average = 0;
for (const odd of Object.values(game.odds)) {
  average += odd;
}
average /= Object.values(game.odds).length;
console.log(average);

// 3)Print the 3 odds to the console, but in a nice formatted way, exactly like this:

// Odd of victory Bayern Munich: 1.33
// Odd of draw: 3.25
// Odd of victory Borrussia Dortmund: 6.5

for (const [key, value] of Object.entries(game.odds)) {
  let reprString = game[key]
    ? `odd of victory ${game[key]}: ${value}`
    : `Draw: ${value}`;
  console.log(reprString);
}

/*
Bonus: Create an object called 'scorers' which contains the names of the
players who scored as properties, and the number of goals as the value. In this
game, it will look like this:
{
Gnarby: 1,
Hummels: 1,
Lewandowski: 2
}
*/

// TODO
const scorers = {
  ...game.scored.reduce((acc, key) => {
    acc[key] = 0;
    return acc;
  }, {}),
};

for (const player of game.scored) {
  // {player} = scorers;
}

console.log(scorers);

// Challenge #3

const gameEvents = new Map([
  [17, "⚽ GOAL"],
  [36, "🔁 Substitution"],
  [47, "⚽ GOAL"],
  [61, "🔁 Substitution"],
  [64, "🔶 Yellow card"],
  [69, "🔴 Red card"],
  [70, "🔁 Substitution"],
  [72, "🔁 Substitution"],
  [76, "⚽ GOAL"],
  [80, "⚽ GOAL"],
  [92, "🔶 Yellow card"],
]);

// 1. Create an array 'events' of the different game events that happened (no duplicates)
const eventArray = [...new Set(gameEvents.values())];
console.log(eventArray);

// 2. After the game has finished, is was found that the yellow card from minute 64
// was unfair. So remove this event from the game events log.

gameEvents.delete(64);

// 3. Compute and log the following string to the console: "An event happened, on
// average, every 9 minutes" (keep in mind that a game has 90 minutes)

// Minutes
const gameLength = 90;
const totalEventsInGame = gameEvents.size;
console.log(gameLength / totalEventsInGame);
console.log(
  `An Event happened, on average, every ${
    gameLength / totalEventsInGame
  } minutes`
);

// 4. Loop over 'gameEvents' and log each element to the console, marking
// whether it's in the first half or second half (after 45 min) of the game, like this:
// ⚽
// [FIRST HALF] 17:
// GOAL

firstHalf = 45;
for (const [time, event] of gameEvents) {
  let logString;

  time < 45
    ? (logString = `[First Half]: ${time}: ${event}`)
    : (logString = `[Second Half]: ${time}: ${event}`);
  console.log(logString);
}
