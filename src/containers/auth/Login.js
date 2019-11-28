import React, {Component} from 'react';
import { login } from "../../store/auth/action";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

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

    window.location = '/courses';
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
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="">Identifier</label>
          <input onChange={this.updateIdentifier} type="text" name="identifier"/>
          <label htmlFor="">Password</label>
          <input onChange={this.updatePassword} type="password" name="password"/>
          <button>Login</button>
        </form>

        <Link to="/register">Register</Link>
      </div>
    );
  }
}

export default connect()(Login);
