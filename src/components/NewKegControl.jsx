import React from 'react';
import NewKegForm from './NewKegForm';

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

  render() {
    if(!this.state.isEditing) {
      return (
        <button onClick={this.handleClickAddNewKeg}>Add New Keg</button>
      );
    } else {
      return (
        <NewKegForm onClickCancel={this.handleClickCancel}/>
      );
    }
  }
}

export default NewKegControl;