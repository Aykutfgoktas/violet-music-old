import React, { Component } from 'react';
import axios from 'axios';

class LoginForm extends Component {
  constructor() {
    super();
    this.state = { username: null, password: null, errorMessage: false };
  }

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  loginSubmit = async (e) => {
    e.preventDefault();
    const { username, password } = this.state;
    try {
      const token = await axios.post(process.env.LOGIN, { username, password });
      this.setState({ errorMessage: false });
      console.log(token);
    } catch (error) {
      this.setState({ errorMessage: true });
      console.log(error);
    }
  };

  renderErrorMessages = () => {
    if (this.state.errorMessage) {
      return (
        <ul>
          <li style={{ color: 'red' }}>Username or password is wrong.</li>
        </ul>
      );
    } else {
      return;
    }
  };

  render() {
    return (
      <form onSubmit={this.loginSubmit} className='login-form'>
        <div className='logo-div-form'>
          <img src='/images/logo2.png' alt='Violet Logo' className='logo-form' />
        </div>
        {this.renderErrorMessages()}
        <h2 style={{ color: 'black' }}>Login</h2>
        <input onChange={this.onChange} required placeholder='Nickname' name='username' className='login-input' />
        <input onChange={this.onChange} required type='password' placeholder='Password' name='password' className='login-input' />
        <button className='msg-button' type='submit'>
          Login
        </button>
      </form>
    );
  }
}

export default LoginForm;
