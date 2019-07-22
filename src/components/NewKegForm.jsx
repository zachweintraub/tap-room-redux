import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { v4 } from 'uuid';
import { addKeg } from '../actions';

function NewKegForm(props) {

  let _brewery = "";
  let _name = "";
  let _abv = "";
  let _price = "";

  function onSaveNewKeg(e) {
    e.preventDefault();
    const { dispatch } = props;
    dispatch(addKeg({id: v4(), brewery: _brewery.value, name: _name.value, abv: _abv.value, price: _price.value}));
    props.onClickCancel();
  }

  return (
    <div>
      <form onSubmit={onSaveNewKeg}>
        <input placeholder='Brewery' ref={(input) => _brewery = input}/>
        <input placeholder='Name' ref={(input) => _name = input}/>
        <input type='number' placeholder='ABV' ref={(input) => _abv = input}/>
        <input type='number' placeholder='Price' ref={(input) => _price = input}/>
        <button type='submit'>Save</button>
      </form>
      <button onClick={props.onClickCancel}>Cancel</button>
    </div>
  );
}

NewKegForm.propTypes = {
  onClickCancel: PropTypes.func
}

export default connect()(NewKegForm);

// function handleClickAddNewKeg() {
//   console.log('hi');
//   const { dispatch } = props;
//   const action = {
//     type: 'ADD_KEG',
//     id: v4(),
//     brewery: 'this',
//     name: 'fucking',
//     abv: 'thing',
//     price: 'works'
//   }
//   dispatch(action);
// }