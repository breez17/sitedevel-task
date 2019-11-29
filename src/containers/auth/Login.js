import React, {Component} from 'react';
import { login } from "../../store/auth/action";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

import './auth.scss'

class Login extends Component {
  state = {
    identifier: null,
    password: null,
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.dispatch(login({
      identifier: this.state.identifier,
      password: this.state.password,
    }));
  };

  updateIdentifier = event => {
    this.setState({
      identifier: event.target.value,
    });
  };

  updatePassword = event => {
    this.setState({
      password: event.target.value,
    });
  };

  render() {
    return (
      <div className="roster">
        <div className="wrapper-form">
        <h1 className="courseName login">Login</h1>
        <form className="form-register" onSubmit={this.handleSubmit}>
          <label htmlFor="identifier">Identifier</label>
          <input id="identifier" onChange={this.updateIdentifier} type="text" name="identifier"/>
          <label  htmlFor="password">Password</label>
          <input id="password" onChange={this.updatePassword} type="password" name="password"/>
          <button className="authBtn">Login</button>
        </form>

        <Link className="courseLink success" to="/register">Register</Link>
        </div>
      </div>
    );
  }
}

export default connect()(Login);
