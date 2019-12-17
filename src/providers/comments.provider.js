import {call, put} from 'redux-saga/effects';
import axios from 'axios';

import * as commentActions from '../store/comments/actions';

export function* fetchComments() {
  const url = `https://jsonplaceholder.typicode.com/comments`;

  try {
    const {data} = yield call(axios.get, url);

    if (data && data.length > 0) {
      yield put(commentActions.listFetched(data));
    } else {
      throw 'No comment found';
    }
  } catch (e) {
    yield put(commentActions.listFailed(e.message || e));
  }
}
