import startGame from '../src/index.js';
import name from './brain-games.js';
import { randomNumber, checkEven } from '../src/games/even-game.js';

function startEvenGame(username) {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  startGame(username, randomNumber, checkEven);
}

startEvenGame(name);
