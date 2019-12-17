import {call, put} from 'redux-saga/effects';
import axios from 'axios';

import * as reposActions from '../store/repos/actions';

export function* fetchRepos(username) {
  const url = `https://api.github.com/users/${username}/repos`;

  try {
    const {data} = yield call(axios.get, url);

    if (data && data.length > 0) {
      yield put(reposActions.listFetched(data));
    } else {
      throw 'No commit found';
    }
  } catch (e) {
    yield put(reposActions.listFailed(e.message || e));
  }
}
