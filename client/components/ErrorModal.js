import React, { Component } from 'react';
import { Header, Modal } from 'semantic-ui-react';
import SpotifyContext from '../context/SpotifyContext';
import Router from 'next/router';
class ErrorModal extends Component {
  static contextType = SpotifyContext;

  refreshActivity = () => {
    this.context.getBothNotesAndNowPlaying();
  };

  renderErrorContent = () => {
    if (this.context.userState === 'unactive') {
      return (
        <>
          <Header icon='music' content='No active listenin has been found.' />
          <Modal.Content>
            <p>You are not currently listen anything or you are in private session</p>
          </Modal.Content>
          <Modal.Actions>
            <button onClick={this.refreshActivity} className='modal-error-btn'>
              Refresh Activity
            </button>
          </Modal.Actions>
        </>
      );
    } else if (this.context.userState === 'sessionExpired') {
      return (
        <>
          <Header icon='battery quarter' content='Your session expired.' />
          <Modal.Content>
            <p>You need login again to Spotify</p>
          </Modal.Content>
          <Modal.Actions>
            <button onClick={() => Router.push('/')} className='modal-error-btn'>
              Go to main page
            </button>
          </Modal.Actions>
        </>
      );
    }
  };

  render() {
    return (
      <Modal style={{ zIndex: '999' }} open={this.props.visible} basic size='small'>
        {this.renderErrorContent()}
      </Modal>
    );
  }
}

export default ErrorModal;
