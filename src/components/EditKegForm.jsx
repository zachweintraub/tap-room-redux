import React from 'react';
import { connect } from 'react-redux';

function EditKegForm(props) {

  let _brewery = "";
  let _name = "";
  let _abv = "";
  let _price = "";
  let _remaining = "";

  const handleSaveKeg = () => {
    const { dispatch } = props;
    const updatedKeg = {
      id: props.thisKeg.id,
      brewery: _brewery.value,
      name: _name.value,
      abv: _abv.value,
      price: _price.value,
      remaining: _remaining.value
    }
    const action = {type: 'UPDATE_KEG',
      id: props.thisKeg.id,
      updatedKeg: updatedKeg};

    dispatch(action);
    props.onFinishEdit();
  }

  return(
    <tr>
      <td><input defaultValue={props.thisKeg.brewery} ref={(input) => _brewery = input}/></td>
      <td><input defaultValue={props.thisKeg.name} ref={(input) => _name = input}/></td>
      <td><input defaultValue={props.thisKeg.abv} ref={(input) => _abv = input}/></td>
      <td><input defaultValue={props.thisKeg.price} ref={(input) => _price = input}/></td>
      <td><input defaultValue={props.thisKeg.remaining} ref={(input) => _remaining = input}/></td>
      <td><button onClick={handleSaveKeg}>Save</button><button onClick={props.onFinishEdit}>Cancel</button></td>
    </tr>
  );
}

export default connect()(EditKegForm);