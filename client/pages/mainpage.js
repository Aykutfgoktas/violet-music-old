import React, { Component } from 'react';
import AppHead from '../shared/AppHead';
import AppFooter from '../shared/AppFooter';
import MainApp from '../components/MainApp';
import SpotifyProvider from '../context/SpotifyProvider';
class mainpage extends Component {
  render() {
    return (
      <React.Fragment>
        <AppHead />
        <SpotifyProvider>
          <MainApp />
        </SpotifyProvider>
        <AppFooter />
      </React.Fragment>
    );
  }
}

export default mainpage;
