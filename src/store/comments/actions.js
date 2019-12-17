import {
  SAVE_COMMENT,
  LIST_FAILED,
  LIST_FETCHED,
  LIST_REQUESTED,
} from './action-types';

export function saveComment(comment) {
  return {
    type: SAVE_COMMENT,
    payload: comment,
  };
}

export const listRequested = () => ({
  type: LIST_REQUESTED,
});

export const listFetched = payload => ({
  type: LIST_FETCHED,
  payload,
});

export const listFailed = error => ({
  type: LIST_FAILED,
  error,
});
