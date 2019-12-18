import React from 'react';
import PropTypes from 'prop-types';

import Pin from '../Pin/Pin';
import PinForm from '../PinForm/PinForm';

import authData from '../../helpers/data/authData';
import pinData from '../../helpers/data/pinData';

class PinsContainer extends React.Component {
    static propTypes = {
      setSinglePin: PropTypes.func,
    }

    state = {
      pins: [],
    }

    componentDidMount() {
      this.getPins();
    }

    getPins = () => {
      pinData.getPinsByBoardId(authData.getUid())
        .then((pins) => {
          this.setState({ pins });
        })
        .catch((errFromPinsContainer) => console.error({ errFromPinsContainer }));
    }

    addPin = (newPin) => {
      pinData.savePin(newPin)
        .then(() => {
          this.getPins();
        })
        .catch((errFromSavePin) => console.error({ errFromSavePin }));
    }

    render() {
      const { setSinglePin } = this.props;

      return (
            <div>
            <PinForm addPin={this.addPin} />
            {this.state.pins.map((pin) => (<Pin key={pin.id} pin={pin} setSinglePin={setSinglePin} />))}
            </div>);
    }
}

export default PinsContainer;
