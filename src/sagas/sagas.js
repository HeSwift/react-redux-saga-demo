import { call } from 'redux-saga/effects';
import { addCountAsyc } from './count';

export default function* rootSaga() {
  yield call(addCountAsyc);
  yield call(addCountAsyc);
  yield call(addCountAsyc);
}
