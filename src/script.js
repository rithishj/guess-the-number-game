'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.input').value);
  console.log(guess, typeof guess);

  if (!guess) {
    displayMessage('⛔ enter number!');
  } else if (guess === secretNumber) {
    displayMessage('🎉 correct number!');
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.high-score-value').textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 too high!' : '📉 too low!');
      score--;
      document.querySelector('.score-value').textContent = score;
    } else {
      displayMessage('❌ you lost the game!');
      document.querySelector('.score-value').textContent = 0;
    }
  }
});

document.querySelector('.reset').addEventListener('click', function () {
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';

  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('start guessing...');
  document.querySelector('.score-value').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.input').value = '';
});
