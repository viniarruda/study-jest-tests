import {combineReducers} from 'redux';
import commentsReducers from './comments/reducers';
import reposReducers from './repos/reducers';

export default combineReducers({
  comments: commentsReducers,
  repos: reposReducers,
});
