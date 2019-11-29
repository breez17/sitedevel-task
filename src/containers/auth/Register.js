import React, {Component} from 'react';
import {register} from '../../store/auth/action';
import {connect} from "react-redux";
import {Link} from "react-router-dom";

import './auth.scss'

class Register extends Component {

  state = {
    username: null,
    email: null,
    password: null,
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.dispatch(register({
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
    }));
  };

  updateUsername = event => {
    this.setState({
      username: event.target.value,
    });
  };

  updateEmail = event => {
    this.setState({
      email: event.target.value,
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
          <h1 className="courseName register">Register</h1>
          <form className="form-register" onSubmit={this.handleSubmit}>
            <label htmlFor="username">Username</label>
            <input onChange={this.updateUsername} type="text" id="username" name="username"/>
            <label htmlFor="email">Email</label>
            <input onChange={this.updateEmail} type="email" id="email" name="email"/>
            <label htmlFor="password">Password</label>
            <input onChange={this.updatePassword} type="password" id="password" name="password"/>
            <button className="authBtn">Register</button>
          </form>
          <span className="logout-btn">&nbsp;</span>
          <Link className="courseLink success toLogin" to="/login">Login</Link>
        </div>
      </div>
    );
  }
}

export default connect()(Register);
