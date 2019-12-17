import {LIST_FETCHED, LIST_FAILED, LIST_REQUESTED} from './action-types';

const INITIAL_STATE = {
  list: [],
  loading: false,
  error: null,
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case LIST_REQUESTED:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case LIST_FETCHED:
      return {
        ...INITIAL_STATE,
        list: action.payload,
      };
    case LIST_FAILED:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
}
