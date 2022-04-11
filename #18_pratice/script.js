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

const player0E = document.querySelector('.player--0');

const player1E = document.querySelector('.player--1');

const switchPlayer = function () {
  //switch to next player
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player1E.classList.toggle('player--active');
  player0E.classList.toggle('player--active');
};

//hidden the dice

dice.classList.add('hidden');

let scores, currentScore, activePlayer, playing;

//==============functions==============

//=====starting conditions======
const init = function () {
  scores = [0, 0];

  //set the score do 0

  score0El.textContent = 0;
  score1El.textContent = 0;

  currentScore = 0;
  activePlayer = 0;
  playing = true;

  currentScore = 0;
  activePlayer = 0;

  current0.textContent = 0;
  current1.textContent = 0;
  score0El.textContent = 0;
  score1El.textContent = 0;

  player0E.classList.remove('player--winner');
  player1E.classList.remove('player--winner');
  player0E.classList.remove('player--active');
  player1E.classList.add('player--active');
  player0E.classList.remove('player--active');
};

//generate a random number
//displace the dice

const diceNumber = function () {
  if (playing) {
    const number = Math.trunc(Math.random() * 6) + 1;
    dice.classList.remove('hidden');
    dice.src = `dice-${number}.png`;

    //check the number is 1 to change player

    if (number !== 1) {
      currentScore += number;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
};

hold.addEventListener('click', function () {
  if (playing) {
    scores[activePlayer] += currentScore;

    //scores[1] = scores[1] + currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    //2 - check if player's score >= 100 finish the game

    if (scores[activePlayer] >= 10) {
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      playing = false;
      dice.classList.add('hidden');
    } else {
      //switch layer
      switchPlayer();
    }
  }
  //1 - add current score to active player's score
});

rollDice.addEventListener('click', diceNumber);

const test = function () {
  console.log('it is working');
};

init();

newGame.addEventListener('click', init);
