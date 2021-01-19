import getRandomNumber from '../random.js';

const randomOperation = () => {
  const operation = ['+', '-', '*'];
  const index = getRandomNumber(0, 2);

  return operation[index];
};

const randomExpression = () => {
  const firstNubmer = getRandomNumber(1, 100);
  const secondNumber = getRandomNumber(1, 100);
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
