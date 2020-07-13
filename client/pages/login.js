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
          <div>
         <Navbar/>
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
