import startGame from '../src/index.js';
import name from './brain-games.js';
import { randomExpression, checkExpression } from '../src/games/calc-game.js';

function startCalcGame(username) {
  console.log('What is the result of the expression?');
  startGame(username, randomExpression, checkExpression);
}

startCalcGame(name);
