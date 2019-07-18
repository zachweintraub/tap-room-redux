import { combineReducers } from 'redux';
import kegListReducer from './kegListReducer';

const rootReducer = combineReducers({
  kegList: kegListReducer
});

export default rootReducer;