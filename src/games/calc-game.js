import { randomNumber } from './even-game.js';

const randomOperation = () => {
  const operation = ['+', '-', '*'];
  const number = Math.round(Math.random() * Math.floor(2));

  return operation[number];
};

const randomExpression = () => {
  const firstNubmer = randomNumber();
  const secondNumber = randomNumber();
  const operation = randomOperation();

  return `${firstNubmer} ${operation} ${secondNumber}`;
};

const checkExpression = (expression) => {
  const items = expression.split(' ');

  switch (items[1]) {
    case '+':
      return Number(items[0]) + Number(items[2]);
    case '-':
      return items[0] - items[2];
    case '*':
      return items[0] * items[2];
    default:
      return 0;
  }
};

export { randomExpression, checkExpression };
