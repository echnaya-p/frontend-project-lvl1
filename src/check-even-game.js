import readlineSync from 'readline-sync';

const randomNumber = () => Math.round(Math.random() * Math.floor(100));

const checkEven = (checkNumber) => {
  const result = checkNumber % 2 === 0 ? 'yes' : 'no';

  return result;
};

function startRound() {
  const number = randomNumber();

  console.log(`Question: ${number}`);

  const answer = readlineSync.question('Your answer: ');

  if (checkEven(number) === answer) {
    console.log('Correct!');

    return true;
  }
  console.log("'yes' is wrong answer ;(. Correct answer was 'no'.");

  return false;
}

const getRoundResult = () => startRound();

export default function startGame(username) {
  for (let i = 0; i < 3; i += 1) {
    const isAnswerCorrect = getRoundResult();

    if (!isAnswerCorrect) {
      console.log(`Let's try again, ${username}`);
      return;
    }
  }
  console.log(`Congratulations, ${username}!`);
}
