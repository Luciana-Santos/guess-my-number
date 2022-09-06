'use strict';

const btnCheck = document.querySelector('.check');
const body = document.querySelector('body')
const btnReset = document.querySelector('.again')
const rightAnswer = document.querySelector('.number')
const scoreElement = document.querySelector('.score')
const guessInput = document.querySelector('.guess')
const highscoreElement = document.querySelector('.highscore')

let secreatNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const guessFunction = function () {
  const guess = Number(guessInput.value);

  // when there is no guess
  if (!guess) {
    displayMessage('⛔ No number!');
  } else if (guess === secreatNumber) {
    // when player wins
    displayMessage('🎉 Correct Number!');
    body.style.backgroundColor = '#60b347';
    rightAnswer.style.width = '30rem';
    rightAnswer.textContent = secreatNumber;

    if (score > highscore) {
      highscore = score;
      highscoreElement.textContent = highscore;
    }
  } else if (guess != secreatNumber) {
    // when guess is wrong
    if (score > 1) {
      displayMessage(guess > secreatNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      scoreElement.textContent = score;
    } else {
      displayMessage('💥 You lost the game!');
      scoreElement.textContent = 0;
    }
  }
};

const resetFunction = function () {
  score = 20;
  scoreElement.textContent = score;
  secreatNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');

  guessInput.value = '';
  body.style.backgroundColor = '#222';
  rightAnswer.style.width = '15rem';
  rightAnswer.textContent = '?';
}

btnReset.addEventListener('click', resetFunction);
btnCheck.addEventListener('click', guessFunction);
