import React from 'react';
import PropTypes from 'prop-types';

import authData from '../../helpers/data/authData';

class PinForm extends React.Component {
    static propTypes = {
      addPin: PropTypes.func,
      selectedBoardId: PropTypes.string,
    }

    state = {
      pinTitle: '',
      pinImageUrl: '',
    }

    savePinEvent = (e) => {
      const { savePin, selectedBoardId } = this.props;

      e.preventDefault();
      const newPin = {
        pinTitle: this.state.pinTitle,
        pinImageUrl: this.state.pinImageUrl,
        uid: authData.getUid(),
        boardId: selectedBoardId,
      };
      savePin(newPin);
      this.setState({ pinTitle: '', imageUrl: '' });
    }

    titleChange = (e) => {
      e.preventDefault();
      this.setState({ pinTitle: e.target.value });
    }

    imageUrlChange = (e) => {
      e.preventDefault();
      this.setState({ imageUrl: e.target.value });
    }

    render() {
      const { pinTitle, pinImageUrl } = this.state;

      return (
            <form className='col-6 offset-3 PinForm'>
          <div className="form-group">
            <label htmlFor="pin-title">Pin Title:</label>
            <input
              type="text"
              className="form-control"
              id="pin-title"
              placeholder="Your Pic Here"
              value={pinTitle}
              onChange={this.titleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="pin-image-url">Pin Image Url:</label>
            <input
              type="text"
              className="form-control"
              id="pin-image-url"
              placeholder="https://www.google.com"
              value={pinImageUrl}
              onChange={this.imageUrlChange}
            />
          </div>
          <button className="btn btn-secondary" onClick={this.savePinEvent}>Add Pin</button>
        </form>
      );
    }
}

export default PinForm;