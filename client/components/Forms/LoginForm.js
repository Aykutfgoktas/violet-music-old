import React, { Component } from 'react';
import axios from 'axios';
import { Button } from 'semantic-ui-react';
import Router from 'next/router';

class LoginForm extends Component {
  constructor() {
    super();
    this.state = { username: null, password: null, errorMessage: false, loading: false };
  }

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  loginSubmit = async (e) => {
    e.preventDefault();
    const { username, password } = this.state;
    this.setState({ loading: true });
    try {
      const response = await axios.post(process.env.LOGIN, { username, password });
      this.setState({ errorMessage: false, loading: false });
      const access_token = response.data.access_token;
      localStorage.setItem('access_token', access_token);
      await Router.push('/profile');
    } catch (error) {
      this.setState({ errorMessage: true, loading: false });
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
        <input autoComplete='off' onChange={this.onChange} required placeholder='Nickname' name='username' className='login-input' />
        <input autoComplete='off' onChange={this.onChange} required type='password' placeholder='Password' name='password' className='login-input' />
        <Button style={{ marginTop: '20px', borderRadius: '200px', padding: '10px 30px' }} loading={this.state.loading} type='submit' className='msg-button' color={'violet'}>
          Login
        </Button>
      </form>
    );
  }
}

export default LoginForm;
