import getRandomNumber from '../random.js';

const progression = () => {
  const firstMember = getRandomNumber(1, 10);
  const difference = getRandomNumber(1, 10);
  const length = getRandomNumber(5, 10);
  const array = [];

  array.push(firstMember);
  let currentMember = firstMember;

  for (let i = 0; i <= length - 1; i += 1) {
    currentMember += difference;
    array.push(currentMember);
  }

  const randomIndex = getRandomNumber(0, length);
  array[randomIndex] = '..';

  return array.join(' ');
};

const checkProgression = (str) => {
  const array = str.split(' ');
  const indexSecretMember = array.indexOf('..');
  const getDifference = () => {
    for (let i = 0; i < array.length - 1; i += 1) {
      if (array[i] !== '..' && array[i + 1] !== '..') {
        const difference = Number(array[i + 1]) - Number(array[i]);

        return difference;
      }
    }
  };

  return Number(array[indexSecretMember - 1]) + getDifference();
};

export { progression, checkProgression };
