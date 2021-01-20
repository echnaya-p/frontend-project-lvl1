import startGame from '../src/index.js';
import name from './brain-games.js';
import { randomNumber, checkPrimeNumber } from '../src/games/prime-game.js';

function startPrimeGame(username) {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  startGame(username, randomNumber, checkPrimeNumber);
}

startPrimeGame(name);
