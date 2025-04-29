import { call, put, select, takeLatest } from 'redux-saga/effects';
import * as actions from './actions';

function* SagaName() {
  try {
   
  } catch (e) {
    yield call(responseError, e);
  }
}

export default [
  takeLatest(actions.SagaName, SagaName),
];
