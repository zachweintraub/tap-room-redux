import { combineReducers } from 'redux';
import kegListReducer from './kegListReducer';
import isFetchingReducer from './isFetchingReducer';

const rootReducer = combineReducers({
  kegList: kegListReducer,
  isFetching: isFetchingReducer
});

export default rootReducer;