export const reduceQuestions = td => {
    let allQuestions = td.reduce((result, item) => { 
        const { question, ...props } = item;
        const index = Object.keys(props)[0];
        let question = '';
        if (question) {
            
            result[index] = { 
                question: `${props[index]}`, 
                answers: [] 
            } 
        } else { 
            result[index].answers.push(props[index]);
        };
        return result;
    },{});
    
    allQuestions = Array.from(allQuestions);

    return allQuestions.shift();
}
    