import {all, call, takeEvery} from 'redux-saga/effects';
import {LIST_REQUESTED} from './action-types';
import {fetchComments} from '../../providers/repos.provider';

function* loadComments() {
  yield call(fetchComments);
}

// WATCHERS
function* watchComments() {
  yield takeEvery(LIST_REQUESTED, loadComments);
}

export default function* root() {
  yield all([watchComments()]);
}
