import randomNumberUntil from '../random.js';

const randomNumber = () => randomNumberUntil(100);

const checkEven = (checkNumber) => {
  const result = checkNumber % 2 === 0 ? 'yes' : 'no';

  return result;
};

export { randomNumber, checkEven };
