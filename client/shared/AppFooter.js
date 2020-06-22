import React, { Component } from 'react';

class AppFooter extends Component {
  render() {
    return (
      <footer>
        <div className='row'>
          <div className='col span-1-of-2'>
            <ul className='footer-nav'>
              <li>
                <a href='#'>About us</a>
              </li>
              <li>
                <a href='/privacy'>Privacy</a>
              </li>
            </ul>
          </div>
          <div className='col span-1-of-2'>
            <ul className='social-links'>
              <li>
                <a href='#'>
                  <i className='ion-social-facebook'></i>
                </a>
              </li>
              <li>
                <a href='#'>
                  <i className='ion-social-twitter'></i>
                </a>
              </li>
              <li>
                <a href='#'>
                  <i className='ion-social-github'></i>
                </a>
              </li>
              <li>
                <a href='#'>
                  <i className='ion-social-instagram'></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className='row'>
          <p>
            This webpage was created for the Violet.<br/>
            The best smile.
          </p>
          
          <p>
            Build with <i className='ion-ios-heart' style={{ color: '#ea0000', padding: '0 3px' }}></i> by AFG
          </p>
        </div>
      </footer>
    );
  }
}

export default AppFooter;
