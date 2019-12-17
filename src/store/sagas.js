import {all} from 'redux-saga/effects';

// import comments from './comments/sagas';
import repos from './repos/sagas';

export default function* rootSaga() {
  yield all([repos()]);
}
