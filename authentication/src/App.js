import React, { Component } from 'react';
import { connect } from "react-redux";
import { LoginPage } from './LoginPage';
import { SecretPage } from './SecretPage';
import { loginAction } from "./_redux/actions/loginAction";
import { logoutAction } from "./_redux/actions/logoutAction";

import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogin(credentials) {
    this.props.loginAction(credentials);
  }

  handleLogout() {
    this.props.logoutAction();
  }

  route(user, loginHandler, logoutHandler) {
    let page = <LoginPage 
      onLoginSubmit={loginHandler} />;

    if (user) {
      page = <SecretPage 
        user={user}
        onLogout={logoutHandler}/>;
    }

    return page;
  }

  render() {
    return (
      <div className="App jumbotron">
        <div className="container">
          {
            this.route(
              this.props.authReducer.user,
              this.handleLogin,
              this.handleLogout
              )
          }
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  loginAction: (credentials) => dispatch(loginAction(credentials)),
  logoutAction: () => dispatch(logoutAction)
});

export default connect(mapStateToProps, mapDispatchToProps)(App);