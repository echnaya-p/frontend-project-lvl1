import getRandomNumber from '../random.js';

const randomNumber = () => getRandomNumber(2, 100);

const checkPrimeNumber = (number) => {
  const checkNumber = number;
  for (let i = number - 1; i > 1; i -= 1) {
    if (checkNumber % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

export { randomNumber, checkPrimeNumber };
