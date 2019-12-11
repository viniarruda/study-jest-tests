import {SAVE_COMMENT} from './action-types';

const INITIAL_STATE = {
  list: [],
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SAVE_COMMENT:
      return {
        ...state,
        list: [action.payload],
      };

    default:
      return INITIAL_STATE;
  }
}
