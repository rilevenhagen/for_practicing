'use strict';

console.log('🤜🏻🤪🤛🏻');

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

//1.
console.log(`⚽️➡️⚽️➡️⚽️➡️⚽️➡️⚽️➡️⚽️➡️⚽️➡️⚽️➡️⚽️➡️⚽️➡️`);
// eu fiz como esta abaixo mas ele fez com o metode dedesestruturar const [players1,players2] = game.players;

const [players01, players02] = game.players;
console.log(players01, players02);
console.log(`⚽️➡️⚽️➡️⚽️➡️⚽️➡️⚽️➡️⚽️➡️⚽️➡️⚽️➡️⚽️➡️⚽️➡️`);

let players1 = [...game.players[0]];
console.log(players1);

players1 = { gk: players1[0], fieldPlayers: players1.slice(1) };

console.log(players1);
console.log(`⚽️⚽️⚽️⚽️⚽️⚽️⚽️⚽️⚽️⚽️⚽️⚽️⚽️⚽️⚽️⚽️`);

//2.

console.log(`⚽️➡️⚽️➡️⚽️➡️⚽️➡️⚽️➡️⚽️➡️⚽️➡️⚽️➡️⚽️➡️⚽️➡️`);
console.log('🐞');
const [gk, ...fieldPlayers] = players01;
console.log(gk, fieldPlayers);
const [gk2, ...fieldPlayers2] = players02;
console.log(gk2, fieldPlayers2);
console.log('🐞');
console.log(`⚽️➡️⚽️➡️⚽️➡️⚽️➡️⚽️➡️⚽️➡️⚽️➡️⚽️➡️⚽️➡️⚽️➡️`);

let players2 = [...game.players[1]];
console.log(players2);
players2 = { gk: players2[0], fieldPlayers: players2.slice(1) };

console.log(players2);
console.log(`⚽️⚽️⚽️⚽️⚽️⚽️⚽️⚽️⚽️⚽️⚽️⚽️⚽️⚽️⚽️⚽️`);

//3.
const allPlayers = [...game.players[0], ...game.players[1]];

console.log(allPlayers);
console.log(`⚽️⚽️⚽️⚽️⚽️⚽️⚽️⚽️⚽️⚽️⚽️⚽️⚽️⚽️⚽️⚽️`);

//4.

const players1Final = [...game.players[0], 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);
console.log(`⚽️⚽️⚽️⚽️⚽️⚽️⚽️⚽️⚽️⚽️⚽️⚽️⚽️⚽️⚽️⚽️`);

//5

const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

const team01 = game.odds['team1'];
console.log(team01);
const draw0 = game.odds['x'];
console.log(draw0);
const team02 = game.odds['team2'];
console.log(team2);

console.log(`⚽️⚽️⚽️⚽️⚽️⚽️⚽️⚽️⚽️⚽️⚽️⚽️⚽️⚽️⚽️⚽️`);

//6

const score = game.scored.length / game.scored.length;
const printGoals1 = function (names) {
  const allnames = names;

  allnames.forEach(element => {
    console.log(`${element} score ${score} gol`);
  });
};

const printGoals = function (...players) {
  console.log(`${players.length} goals were secured`);
};

printGoals(...game.scored);
printGoals1(game.scored);

console.log(`⚽️⚽️⚽️⚽️⚽️⚽️⚽️⚽️⚽️⚽️⚽️⚽️⚽️⚽️⚽️⚽️`);

//7

(team1 < team2 && console.log(`Team 1 is more lokely to win`)) ||
  (team1 > team2 && console.log(`Team 2 is more lokely to win`));

// const winner =
//   (game.odds['team2'] && game.odds['team1']) ||
//   (game.odds['team1'] && game.odds['team2']);

// console.log(winner);
