#!/usr/bin/env node

import startGame from '../src/index.js';
import name from './brain-games.js';
import { progression, checkProgression } from '../src/games/prograssion-game.js';

function startProgresssionGame(username) {
  console.log('What number is missing in the progression?');
  startGame(username, progression, checkProgression);
}

startProgresssionGame(name);
