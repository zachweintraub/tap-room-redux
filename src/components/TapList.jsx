import React from 'react';
import Keg from './Keg';
import { connect } from 'react-redux';
import NewKegControl from './NewKegControl';

function TapList(props) {

  const tapListContent = () => {
    if(Object.keys(props.kegList).length === 0) {
      return (
      <div>
        <p>There are currently no kegs on tap!</p>
      </div>
      );
    } else {
      return (
        <div>
          <h2>Currently On Tap</h2>
          <table>
            <tbody>
              <tr>
                <th>Brewery</th>
                <th>Name</th>
                <th>ABV</th>
                <th>Price</th>
                <th>Pints</th>
                <th>Actions</th>
              </tr>
              {Object.keys(props.kegList).map((id) => {
                let keg = props.kegList[id];
                return (
                  <Keg
                    name={keg.name}
                    brewery={keg.brewery}
                    abv={keg.abv}
                    price={keg.price}
                    remaining={keg.remaining}
                    id={id}
                    key={id}
                />);
                }
              )}
            </tbody>
          </table>
        </div>
      );
    }
  }

  return(
    <div>
      {tapListContent()}
      <NewKegControl/>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    kegList: state.kegList
  };
};

export default connect(mapStateToProps)(TapList);