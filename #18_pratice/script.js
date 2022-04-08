'use strict';
// getting all the elements
const rollDice = document.querySelector('.btn--roll');
const dice = document.querySelector('.dice');

const newGame = document.querySelector('.btn--new');

const hold = document.querySelector('.btn--hold');

const score0El = document.getElementById('score--0');

const score1El = document.getElementById('score--1');

const current0 = document.getElementById('current--0');

const current1 = document.getElementById('current--1');
//=====starting conditions======
//set the score do 0

score0El.textContent = 0;
score1El.textContent = 0;

//hidden the dice

dice.classList.add('hidden');

//==============functions==============
let currentScore = 0;
//generate a random number
//displace the dice
const diceNumber = function () {
  const number = Math.trunc(Math.random() * 6) + 1;
  dice.classList.remove('hidden');
  dice.src = `dice-${number}.png`;

  console.log(number);

  //check the number is 1 to change player

  if (number !== 1) {
    currentScore += number;
    current1.textContent = currentScore;
    current0.textContent = currentScore;
  } else console.log('ssss');
};

const test = function () {
  console.log('it is working');
};

rollDice.addEventListener('click', diceNumber);
newGame.addEventListener('click', test);
hold.addEventListener('click', test);
