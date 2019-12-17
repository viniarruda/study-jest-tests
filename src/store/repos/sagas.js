import {all, call, takeEvery} from 'redux-saga/effects';
import {LIST_REQUESTED} from './action-types';
import {fetchRepos} from '../../providers/repos.provider';

function* loadRepos({username}) {
  yield call(fetchRepos, username);
}

// WATCHERS
function* watchRepos() {
  yield takeEvery(LIST_REQUESTED, loadRepos);
}

export default function* root() {
  yield all([watchRepos()]);
}
