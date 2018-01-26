export const reduceQuestions = td => {
  const regex = /^\+?-?\??/gm;
  let allQuestions = td.reduce((result, item) => {
    const { question, ...props } = item;
    const index = Object.keys(props)[0];

    if (question) {
      result[index] = {
        question: !result[index]
          ? props[index]
          : (result[index].question += ` ${props[index]}`),
        answers: []
      };
    } else {
      let answer = {
        rightAnswer: false
      };
      answer[index] = props[index].replace(regex, '');
      if (
        props[index].match(regex)[0] === '+' ||
        props[index].match(regex)[0] === '+?'
      ) {
        answer.rightAnswer = true;
      }

      result[index].answers.push(answer);
    }

    return result;
  }, {});

  allQuestions = Object.values(allQuestions);

  return allQuestions;
};

export const countAnswers = answers => {
  let rightAnswers = 0;
  answers.forEach(item => {
    if (item.rightAnswer) {
      rightAnswers += 1;
    }
  });
  return rightAnswers;
};
