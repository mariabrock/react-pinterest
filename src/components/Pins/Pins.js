import React from 'react';
import PropTypes from 'prop-types';

import { render } from '@testing-library/react';
import pinShape from '../../helpers/propz/pinShape';

class Pins extends React.Component {
    static propTypes = {
      pin: pinShape.pinShape,
      setSinglePin: PropTypes.func,
    }

    setSelectedPinId = (e) => {
      e.preventDefault();
      const { setSinglePin, pin } = this.props;
      setSinglePin();
    }

    render() {
      const { pin } = this.props;
      return (
        <div className="Pin col-3">
        <div className="card">
          <img src={pin.imageUrl} className="card-img-top" alt="" />
          <div className="card-body">
            <h5 className="card-title">{pin.title}</h5>
            <button className="btn btn-danger" onClick={this.setSelectedBoardId}>X</button>
          </div>
        </div>
      </div>
      );
    }
}


export default Pins;
