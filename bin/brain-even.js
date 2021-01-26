#!/usr/bin/env node

import startGame from '../src/index.js';
import sayHello from '../src/cli.js';
import { randomNumber, checkEven } from '../src/games/even-game.js';

function startEvenGame(username) {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  startGame(username, randomNumber, checkEven);
}

const name = sayHello();
startEvenGame(name);
