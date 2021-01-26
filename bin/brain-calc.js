#!/usr/bin/env node

import startGame from '../src/index.js';
import sayHello from '../src/cli.js';
import { randomExpression, checkExpression } from '../src/games/calc-game.js';

function startCalcGame(username) {
  console.log('What is the result of the expression?');
  startGame(username, randomExpression, checkExpression);
}

const name = sayHello();
startCalcGame(name);
