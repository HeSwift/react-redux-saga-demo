
import {select, put} from 'redux-saga/effects';
import {getCount} from './selectors';
import {addCount} from '../actions/countAction';

export function* addCountAsyc() {
  yield select(getCount);
  yield put(addCount());
}

