import React from 'react';
import { connect } from 'react-redux';
import { deleteKeg, updateKeg } from '../actions';

function EmployeeButtons(props) {

  const handleSellPint = () => {
    let updatedKeg = Object.assign({}, props.thisKeg);
    updatedKeg.remaining--;
    const { dispatch } = props;
    dispatch(updateKeg(props.thisKeg.id, updatedKeg));
  }

  const handleDeleteKeg = () => {
    const { dispatch } = props;
    dispatch(deleteKeg(props.thisKeg.id));
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