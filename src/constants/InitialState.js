import { fetchRandomKegs } from '../actions';

export const initialState = {
  kegList: fetchRandomKegs(),
  isFetching: false
};