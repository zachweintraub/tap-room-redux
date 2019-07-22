import { initialState } from '../constants/InitialState';

export default (state = initialState.kegList, action) => {
  let newState;
  switch(action.type) {
    case 'ADD_KEG': {
      let { id, brewery, name, abv, price } = action;
      newState = Object.assign({}, state, {
        [id]: {
          id,
          brewery,
          name,
          abv,
          price,
          remaining: 124
        }
      });
      return newState; 
    }
    case 'UPDATE_KEG': {
      let { id, updatedKeg } = action;
      let newState = Object.assign({}, state);
      newState[id] = updatedKeg;
      return newState;
    }
    case 'DELETE_KEG': {
      let { id } = action;
      let newState = Object.assign({}, state);
      delete newState[id];
      return newState;
    }
    default:
      return state;
  } 
}