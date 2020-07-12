import React, { Component } from 'react';

class LoginForm extends Component {
  render() {
    return (
      <form className='login-form'>
        <h2 style={{ color: 'black' }}>Login Form</h2>
   
        <input placeholder='Nickname' name='nickname' className='login-input' />
  

        <input placeholder='Password' name='password' className='login-input' />

        <button className='msg-button' type='submit'>
          Login
        </button>
      </form>
    );
  }
}

export default LoginForm;
