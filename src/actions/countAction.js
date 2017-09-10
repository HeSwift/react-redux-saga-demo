import {createAction} from 'redux-actions';

const ADD_COUNT = 'count/add';
const MINUS_COUNT = 'count/minus';

const addCount = createAction(ADD_COUNT);
const minusCount = createAction(MINUS_COUNT);

export default{
  addCount,
  minusCount
}

export {
  addCount,
  minusCount
}