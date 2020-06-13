import React, { Component } from 'react';
import AppHead from '../shared/AppHead';
import AppFooter from '../shared/AppFooter';
class Privacy extends Component {
  render() {
    return (
      <>
        <AppHead />
        <div style={{ backgroundColor: '#8e44ad' }}>
          <nav style={{ color: 'white', backgroundColor: 'rgba(0, 0, 0, 0.70)' }}>
            <div className='row'>
              <img src='/images/logo2.png' alt='Violet Logo' className='logo' />
              <ul className='main-nav'>
                <li>
                  <a href='/'>Home</a>
                </li>
                <li>
                  <a href={process.env.LOGIN}>Login</a>
                </li>
              </ul>
            </div>
          </nav>
          <section style={{ color: 'white', backgroundColor: 'rgba(0, 0, 0, 0.70)' }} className='section-features'>
            <div className='row'>
              <h2>Privacy</h2>
              <p className='long-copy'>
                We do not store any personal data of your Spoitfy activities. Only the songs that you have listened is stored and the notes you wrote for a song
                is stored. After a while you must login to Violet via Spotify because your session is not permanent in the app. We use Spotify API below this
                you can find detailed explanation.
              </p>
            </div>

            <div className='row'>
              <div className='col span-1-of-4 box'>
                <i className='ion-log-in icon-big' />
                <h3>User Information</h3>
                <p>We get the user information to log into the Violet but the data is not stored on Violet app.</p>
              </div>
              <div className='col span-1-of-4 box'>
                <i className='ion-music-note icon-big' />
                <h3>User Current Playin Song</h3>
                <p>This is neccessary to what you are currently listening on Spotify so we can show the notes according to what you are listening.</p>
              </div>
              <div className='col span-1-of-4 box'>
                <i className='ion-headphone icon-big' />
                <h3>Change user currently listenin song</h3>
                <p>If you click the headphone on the card current playing song can be change so in order to change this the permission is required.</p>
              </div>
              <div className='col span-1-of-4 box'>
                <i className='ion-ios-list icon-big' />
                <h3>Notes</h3>
                <p>The notes you have wrote for a song is stored.</p>
              </div>
            </div>
          </section>
        </div>
        <AppFooter />
      </>
    );
  }
}

export default Privacy;
