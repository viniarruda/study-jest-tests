import {
  SAVE_COMMENT,
  LIST_FETCHED,
  LIST_FAILED,
  LIST_REQUESTED,
} from './action-types';

const INITIAL_STATE = {
  list: [],
  fetchList: [],
  loading: false,
  error: null,
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SAVE_COMMENT:
      return {
        ...state,
        list: [...state.list, action.payload],
      };
    case LIST_REQUESTED:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case LIST_FETCHED:
      return {
        ...INITIAL_STATE,
        fetchList: action.payload,
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
