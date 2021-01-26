#!/usr/bin/env node

import startGame from '../src/index.js';
import sayHello from '../src/cli.js';
import { progression, checkProgression } from '../src/games/prograssion-game.js';

function startProgresssionGame(username) {
  console.log('What number is missing in the progression?');
  startGame(username, progression, checkProgression);
}

const name = sayHello();
startProgresssionGame(name);
