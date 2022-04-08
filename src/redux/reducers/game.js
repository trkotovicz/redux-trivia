import { DECREASE_TIMER, GET_QUESTIONS, NEXT_ROUND, QUESTION_CHOSEN } from '../actions';

const INITIAL_STATE = {
  questions: [],
  round: 0,
  questionChosen: false,
  timer: 30,
};

const finalRound = 4;

const game = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case GET_QUESTIONS:
    return {
      ...state,
      questions: action.questions,
    };
  case QUESTION_CHOSEN:
    return {
      ...state,
      questionChosen: true,
    };
  case DECREASE_TIMER:
    return {
      ...state,
      timer: state.timer - 1,
    };
  case NEXT_ROUND:
    if (state.round === finalRound) return state;
    return {
      ...state,
      round: state.round + 1,
      questionChosen: false,
      timer: 30,
    };
  default:
    return state;
  }
};

export default game;
