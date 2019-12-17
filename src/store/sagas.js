import {all} from 'redux-saga/effects';

import comments from './comments/sagas';

export default function* rootSaga() {
  yield all([comments()]);
}
