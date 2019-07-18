import React from 'react';
import { connect } from 'react-redux';

function EmployeeButtons(props) {

  const handleSellPint = () => {
    let updatedKeg = Object.assign({}, props.thisKeg);
    updatedKeg.remaining--;
    const { dispatch } = props;
    const action = {
      type: 'UPDATE_KEG',
      id: props.thisKeg.id,
      updatedKeg: updatedKeg
    }
    dispatch(action);
  }

  const handleDeleteKeg = () => {
    const { dispatch } = props;
    const action = {
      type: 'DELETE_KEG',
      id: props.thisKeg.id
    }
    dispatch(action);
  }

  return(
    <div>
      <button onClick={handleSellPint}>Sell Pint</button>
      <button onClick={props.onClickEdit}>Edit</button>
      <button onClick={handleDeleteKeg}>Delete</button>
    </div>
  );
}

export default connect()(EmployeeButtons);