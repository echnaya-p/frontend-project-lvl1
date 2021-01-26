#!/usr/bin/env node

import startGame from '../src/index.js';
import sayHello from '../src/cli.js';
import { randomTwoNumbers, checkGcd } from '../src/games/gcd-game.js';

function startGdsGame(username) {
  console.log('Find the greatest common divisor of given numbers.');
  startGame(username, randomTwoNumbers, checkGcd);
}

const name = sayHello();
startGdsGame(name);
