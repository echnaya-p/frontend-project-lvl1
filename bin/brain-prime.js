#!/usr/bin/env node

import startGame from '../src/index.js';
import sayHello from '../src/cli.js';
import { randomNumber, checkPrimeNumber } from '../src/games/prime-game.js';

function startPrimeGame(username) {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  startGame(username, randomNumber, checkPrimeNumber);
}

const name = sayHello();
startPrimeGame(name);
