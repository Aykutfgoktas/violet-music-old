import React, { Component } from 'react';
import axios from 'axios';

class LoginForm extends Component {
  constructor() {
    super();
    this.state = { username: null, password: null };
  }

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  loginSubmit = async (e) => {
    e.preventDefault();
    const { username, password } = this.state;
    try {
      const token = await axios.post(process.env.LOGIN, { username, password });
      console.log(token);
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <form onSubmit={this.loginSubmit} className='login-form'>
        <h2 style={{ color: 'black' }}>Login Form</h2>
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
