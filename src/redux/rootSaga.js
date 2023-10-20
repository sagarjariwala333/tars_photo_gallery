// sagas.js

import { all, fork } from 'redux-saga/effects';
import imageSaga from '../redux/image/saga';

// Define your sagas here

function* rootSaga() {
  yield all([
    // List your sagas here
    fork(imageSaga)
  ]);
}

export default rootSaga;
