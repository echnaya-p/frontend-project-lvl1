import startGame from '../src/check-even-game.js';
import name from './brain-games.js';

function startEvenGame(username) {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  startGame(username);
}

startEvenGame(name);
