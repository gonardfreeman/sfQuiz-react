export const GO_TO_QUESTION_INPUT = 'GO_TO_QUESTION_INPUT';

export default {
  validateAndGo: evt => (dispatch, getState) => {
    const { valid } = evt.target.validity;
    const { value } = evt.target;
    const { inputData } = getState().goToQuestionReducer;
    dispatch(goToQuestionInputAction(valid ? +value : +inputData));
  }
};

function goToQuestionInputAction(inp) {
  return {
    type: GO_TO_QUESTION_INPUT,
    inp
  };
}
