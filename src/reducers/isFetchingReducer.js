import { initialState } from '../constants/InitialState';

export default (state = initialState.isFetching, action) => {
  switch(action.type) {
    case 'START_FETCHING': 
      return true; 

    case 'END_FETCHING':
      return false; 

    default:
      return state;
  } 
}