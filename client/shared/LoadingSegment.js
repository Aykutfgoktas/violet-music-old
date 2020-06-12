import React, { Component } from 'react';
import { Dimmer, Loader } from 'semantic-ui-react';

class LoadingSegment extends Component {
  render() {
    return (
      <Dimmer.Dimmable dimmed={this.props.dimActive}>
        <Dimmer style={{ zIndex: '999' }} simple>
          <Loader size='huge'>Loading</Loader>
        </Dimmer>
        {this.props.children}
      </Dimmer.Dimmable>
    );
  }
}

export default LoadingSegment;
