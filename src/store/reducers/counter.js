import * as actionTypes from '../actions';
import { updatedObject } from '../utility';

const initialState = {
  counter: 0,
};
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT:
      return updatedObject(state, { counter: state.counter + 1 });
    case actionTypes.DECREMENT:
      return updatedObject(state, { counter: state.counter - 1 });
    case actionTypes.ADDFIVEVALUE:
      return updatedObject(state, { counter: state.counter + action.val });
    default:
      return state;
  }
};

export default counterReducer;
