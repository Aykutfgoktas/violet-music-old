import React, { Component } from 'react';
import RegisterForm from '../components/Forms/RegisterForm';
import AppHead from '../shared/AppHead';
import Navbar from '../shared/Navbar';
class Register extends Component {
  render() {
    return (
      <>
        <AppHead />
        <header>
          <Navbar />
          <div className='row login-div'>
            <RegisterForm />
          </div>
        </header>
      </>
    );
  }
}

export default Register;
