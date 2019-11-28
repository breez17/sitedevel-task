import React, {Component} from 'react';
import { register } from '../../store/auth/action';
import {connect} from "react-redux";
import {Link} from "react-router-dom";

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
      <div>
        <h1>Register</h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="">Username</label>
          <input onChange={this.updateUsername} type="text" name="username"/>
          <label htmlFor="">Email</label>
          <input onChange={this.updateEmail} type="email" name="email"/>
          <label htmlFor="">Password</label>
          <input onChange={this.updatePassword} type="password" name="password"/>
          <button>Register</button>
        </form>
        <Link to="/login">Login</Link>
      </div>
    );
  }
}

export default connect()(Register);
