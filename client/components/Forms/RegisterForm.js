import React, { Component } from 'react';
import axios from 'axios';
import { Button } from 'semantic-ui-react';
import Router from 'next/router';

class RegisterForm extends Component {
  constructor() {
    super();
    this.state = { username: null, password: null, repassword: null, errorExist: false, erroMessages: [], loading: false };
  }

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  registerSubmit = async (e) => {
    e.preventDefault();
    const { username, password, repassword } = this.state;
    this.setState({ loading: true });
    if (password === repassword) {
      this.setState({ errorExist: false, erroMessages: [] });
      try {
        const response = await axios.post(process.env.REGISTER, { username, password });
        this.setState({ errorExist: false });
        if (response) {
          Router.push('/login');
        }
      } catch (error) {
        this.setState({ errorExist: true, erroMessages: ['User is already exist'] });
        this.setState({ loading: false });
        //console.log(error);
      }
    } else {
      this.setState({ loading: false });
      this.setState({ errorExist: true, erroMessages: ['Passwords should match.'] });
    }
  };

  renderErrorMessages = () => {
    if (this.state.errorExist) {
      return (
        <ul>
          {this.state.erroMessages.map((m, i) => {
            return (
              <li key={i} style={{ color: 'red' }}>
                {m}
              </li>
            );
          })}
        </ul>
      );
    } else {
      return;
    }
  };

  render() {
    return (
      <form onSubmit={this.registerSubmit} className='login-form'>
        <div className='logo-div-form'>
          <img src='/images/logo2.png' alt='Violet Logo' className='logo-form' />
        </div>
        {this.renderErrorMessages()}
        <h2 style={{ color: 'black' }}>Register</h2>
        <input autoComplete='off' onChange={this.onChange} required placeholder='Nickname' name='username' className='login-input' />
        <input autoComplete='off' onChange={this.onChange} required type='password' placeholder='Password' name='password' className='login-input' />
        <input autoComplete='off' onChange={this.onChange} required type='password' placeholder='Re-Password' name='repassword' className='login-input' />

        <Button style={{ marginTop: '20px', borderRadius: '200px', padding: '10px 30px' }} loading={this.state.loading} type='submit' className='msg-button' color={'violet'}>
          Register
        </Button>
      </form>
    );
  }
}

export default RegisterForm;

/**
 * 
 * <button className='msg-button' type='submit'>
          Register
        </button>
 * 
 */
