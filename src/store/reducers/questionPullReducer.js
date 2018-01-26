import {
    ADD_QUESTION_TO_PULL,
    RESET_PULL,
} from '../../actions/questionPullActions';

const defaultState = {
    questionPull: []
}

export default function questionPullReducer (state=defaultState, action) {
    switch (action.type) {
        case ADD_QUESTION_TO_PULL:
            if (action.num !== 0) {
                return Object.assign({}, state, {
                    questionPull: [...state.questionPull, action.num],
                });
            }
            return state;
        case RESET_PULL:
            return Object.assign({}, state, {
                questionPull: []
            });
        default:
            return state;
    }
}