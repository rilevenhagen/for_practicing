'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;

const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

let score = 20;
let hightScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //   no input
  if (!guess) {
    displayMessage('no number ⛔️');
    //when player wins
  } else if (guess === secretNumber) {
    displayMessage('🎉CorrectNumber');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    if (score > hightScore) {
      hightScore = score;
      document.querySelector('.highscore').textContent = hightScore;
      //when the guess is too hight or too low
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '⬆️ Too hight' : 'Tooo low 📛🚫');
      displayScore(score--);
      displayScore(score);
    } else {
      displayMessage('You lost the game');
      displayScore(0);
    }
  }
});

//hard code to restore the page
document.querySelector('.again').addEventListener('click', function () {
  console.log('ddd');
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  displayScore(score);
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
