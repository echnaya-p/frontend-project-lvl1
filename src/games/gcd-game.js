import getRandomNumber from '../random.js';

const randomTwoNumbers = () => {
  const firstNubmer = getRandomNumber(1, 100);
  const secondNumber = getRandomNumber(1, 100);

  return `${firstNubmer} ${secondNumber}`;
};

const checkGcd = (twoNumbers) => {
  const pair = twoNumbers.split(' ');
  const max = Math.max(Number(pair[0]), Number(pair[1]));
  const min = Math.min(Number(pair[0]), Number(pair[1]));

  for (let i = min; i > 0; i -= 1) {
    if (max % i === 0 && min % i === 0) {
      return i;
    }
  }
  return 0;
};

export { randomTwoNumbers, checkGcd };
