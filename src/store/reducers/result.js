import * as actionTypes from '../actions';
import { updatedObject } from '../utility';

const initialState = {
  results: [],
};
const resultReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_RESULT:
      return updatedObject(state, {
        results: state.results.concat({ id: new Date(), val: action.result }),
      });
    case actionTypes.DELETE_RESULT:
      const updatedArray = state.results.filter(
        (result) => result.id !== action.resultElId
      );
      return updatedObject(state, { results: updatedArray });
    default:
      return state;
  }
};

export default resultReducer;
