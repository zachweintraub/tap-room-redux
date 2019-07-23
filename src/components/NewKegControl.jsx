import React from 'react';
import NewKegForm from './NewKegForm';
import { v4 } from 'uuid';
import { connect } from 'react-redux';
import * as types from '../constants/ActionTypes';
import * as actions from '../actions';

class NewKegControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isEditing: false
    };
  }
  
  handleClickAddNewKeg = () => {
    let newIsEditing = true;
    this.setState({isEditing: newIsEditing});
  }

  handleClickCancel = () => {
    let newIsEditing = false;
    this.setState({isEditing: newIsEditing});
  }

  handleClickAddRandom = () => {
    const { dispatch } = this.props;
    dispatch( {type: types.START_FETCHING} );
    fetch('https://api.punkapi.com/v2/beers/random')
      .then(
        d => d.json(),
        error => console.log('An error ocurred.', error)
      ).then(
        json => {
          dispatch(actions.addKeg(
            {
              id: v4(),
              brewery: 'LocalBrewery',
              name: json[0].name,
              abv: json[0].abv,
              price: '5'
            }
          ))
        }
      ).then(
        dispatch({ type: types.END_FETCHING })
      );
  }

  render() {
    if(!this.state.isEditing) {
      return (
        <div>
          <button onClick={this.handleClickAddNewKeg}>Add New Keg</button>
          <button onClick={this.handleClickAddRandom}>Add Random Keg</button>
        </div>
      );
    } else {
      return (
        <NewKegForm onClickCancel={this.handleClickCancel}/>
      );
    }
  }
}

export default connect()(NewKegControl);