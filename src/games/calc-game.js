import randomNumberUntil from '../random.js';

const randomOperation = () => {
  const operation = ['+', '-', '*'];
  const index = randomNumberUntil(2);

  return operation[index];
};

const randomExpression = () => {
  const firstNubmer = randomNumberUntil(100);
  const secondNumber = randomNumberUntil(100);
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
