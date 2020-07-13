import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return (
      <nav style={{ color: 'white' }}>
        <div className='row'>
          <img src='/images/logo2.png' alt='Violet Logo' className='logo' />
          <ul className='main-nav'>
            <li>
              <a href='/'>Home</a>
            </li>
           
            <li>
              <a href='/login'>Login</a>
            </li>
            <li>
              <a href='/register'>Register</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

/**
 * TODO: It is required for the Spotify Login.  
 * <li> <a href={process.env.LOGIN}>Login</a> </li>
 */

export default Navbar;
