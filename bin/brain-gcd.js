#!/usr/bin/env node

import startGame from '../src/index.js';
import name from './brain-games.js';
import { randomTwoNumbers, checkGcd } from '../src/games/gcd-game.js';

function startGdsGame(username) {
  console.log('Find the greatest common divisor of given numbers.');
  startGame(username, randomTwoNumbers, checkGcd);
}

startGdsGame(name);
