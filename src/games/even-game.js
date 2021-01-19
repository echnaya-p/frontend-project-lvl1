const randomNumber = () => Math.round(Math.random() * Math.floor(100));

const checkEven = (checkNumber) => {
  const result = checkNumber % 2 === 0 ? 'yes' : 'no';

  return result;
};

export { randomNumber, checkEven };
