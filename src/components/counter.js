import React from 'react';
import './counter.css';
import { connect } from 'react-redux';
import * as actionTypes from '../store/actions';

const Counter = (props) => {
  return (
    <div>
      <h1 className="counter">Counter : {props.ctr}</h1>
      <button className="button" onClick={props.onIncrement}>
        Increment
      </button>
      <button className="button" onClick={props.onDecrement}>
        Decrement
      </button>
      <button className="button" onClick={props.onAddFiveValue}>
        Add 5
      </button>
      <hr />
      <button onClick={() => props.onStoreResult(props.ctr)}>
        {' '}
        Store Result{' '}
      </button>
      <ul>
        {props.storeResult.map((strRlt) => {
          return (
            <li key={strRlt.id} onClick={() => props.onDeleteResult(strRlt.id)}>
              {strRlt.val}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    ctr: state.ctr.counter,
    storeResult: state.res.results,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrement: () => dispatch({ type: actionTypes.INCREMENT }),
    onDecrement: () => dispatch({ type: actionTypes.DECREMENT }),
    onAddFiveValue: () => dispatch({ type: actionTypes.ADDFIVEVALUE, val: 5 }),
    onStoreResult: (result) =>
      dispatch({ type: actionTypes.STORE_RESULT, result: result }),
    onDeleteResult: (id) =>
      dispatch({ type: actionTypes.DELETE_RESULT, resultElId: id }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
