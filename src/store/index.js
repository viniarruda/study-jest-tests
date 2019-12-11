import {combineReducers} from 'redux';
import commentsReducers from './comments/reducers';

export default combineReducers({
  comments: commentsReducers,
});
