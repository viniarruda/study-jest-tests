import {LIST_FAILED, LIST_FETCHED, LIST_REQUESTED} from './action-types';

export const listRequested = username => ({
  type: LIST_REQUESTED,
  username,
});

export const listFetched = payload => ({
  type: LIST_FETCHED,
  payload,
});

export const listFailed = error => ({
  type: LIST_FAILED,
  error,
});
