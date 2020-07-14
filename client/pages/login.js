import React, { Component } from 'react';
import LoginForm from '../components/Forms/LoginForm';
import AppHead from '../shared/AppHead';
import Navbar from '../shared/Navbar';
class Login extends Component {
  render() {
    return (
      <>
        <AppHead />
        <header>
          <Navbar />

          <div className='row login-div'>
            <LoginForm />
          </div>
        </header>
      </>
    );
  }
}

export default Login;
