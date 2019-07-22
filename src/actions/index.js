import * as types from '../constants/ActionTypes';

export const addKeg = ({id, brewery, name, abv, price}) => {
  return {
    type: types.ADD_KEG,
    id,
    brewery,
    name,
    abv,
    price
  }
}

export const deleteKeg = (id) => {
  return {
    type: types.DELETE_KEG,
    id: id
  }
}

export const updateKeg = (id, updatedKeg) => {
  return {
    type: types.UPDATE_KEG,
    id: id,
    updatedKeg: updatedKeg
  }
}

//https://api.punkapi.com/v2/beers/random
export const fetchRandomKegs = () => {
  return {};
}