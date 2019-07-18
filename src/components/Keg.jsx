import React from 'react';
import EmployeeButtons from './EmployeeButtons';
import EditKegForm from './EditKegForm';

class Keg extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isEditing: false
    }
  }

  handleClickEdit = () => {
    let newIsEditing = true;
    this.setState({isEditing: newIsEditing});
  }

  handleFinishEdit = () => {
    let newIsEditing = false;
    this.setState({isEditing: newIsEditing});
  }

  render() {
    if(!this.state.isEditing) {
      return(
        <tr>
          <td>{this.props.brewery}</td>
          <td>{this.props.name}</td>
          <td>{this.props.abv}%</td>
          <td>${this.props.price}</td>
          <td>{this.props.remaining}</td>
          <td><EmployeeButtons
            thisKeg={this.props}
            onClickEdit={this.handleClickEdit}/></td>
      </tr>
      );
    } else {
      return (
        <EditKegForm
        thisKeg={this.props}
        onFinishEdit={this.handleFinishEdit}/>
      );
    }

      // <tr>
      //   <td>{this.props.brewery}</td>
      //   <td>{this.props.name}</td>
      //   <td>{this.props.abv}%</td>
      //   <td>${this.props.price}</td>
      //   <td>{this.props.remaining}</td>
      //   <td><EmployeeButtons thisKeg={this.props}/></td>
      // </tr>
  }
}

export default Keg;