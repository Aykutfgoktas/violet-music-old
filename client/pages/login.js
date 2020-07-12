import React, { Component } from 'react';
import LoginForm from '../components/Forms/LoginForm';
import AppHead from '../shared/AppHead';
class Login extends Component {
  render() {
    return (
      <>
        <AppHead />
        <header>
          <div>
            <nav style={{ color: 'white' }}>
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
          </div>
          <div className='row'>
            <div style={{ display: 'flex', justifyContent:"center",color: 'white' }}>
              <div style={{ paddingTop: '15%' }}>
                <LoginForm />
              </div>
            </div>
          </div>
        </header>
      </>
    );
  }
}

export default Login;
