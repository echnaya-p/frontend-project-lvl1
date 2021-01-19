import readlineSync from 'readline-sync';

function startRound(getData, checkData) {
  const data = getData();

  console.log(`Question: ${data}`);

  const answer = readlineSync.question('Your answer: ');

  if (String(checkData(data)) === answer) {
    console.log('Correct!');

    return true;
  }
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${checkData(data)}'.`);

  return false;
}

const getRoundResult = (getData, checkData) => startRound(getData, checkData);

export default function startGame(username, getData, checkData) {
  for (let i = 0; i < 3; i += 1) {
    const isAnswerCorrect = getRoundResult(getData, checkData);

    if (!isAnswerCorrect) {
      console.log(`Let's try again, ${username}`);
      return;
    }
  }
  console.log(`Congratulations, ${username}!`);
}
