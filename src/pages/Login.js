import PropTypes from 'prop-types';
import React, { Component } from 'react';
import CONTROLE_3 from '../assets/imgs/CONTROLE_3.png';
import LoginForm from '../components/LoginForm';
import './Login.css';
import wave from '../assets/imgs/wave.svg';

class Login extends Component {
  render() {
    const { history } = this.props;

    return (
      <main className="Login">
        <div className="Login-picture-container">
          <img src={ CONTROLE_3 } alt="controller" />
        </div>
        <LoginForm history={ history } />
        <img className="Login-wave" src={ wave } alt="" />
        <img className="Login-wave-upsidedown" src={ wave } alt="" />
      </main>
    );
  }
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default Login;
