import React from 'react';
import {Route} from 'react-router-dom'
import {logout,getUser} from "./store/auth/action";
import roster from '../src/containers/courses/roster'
import selectedCourse from "./containers/courses/selectedCourse";
import list from "./containers/parts/list";
import selected from "./containers/parts/selected";
import Register from './containers/auth/Register'
import Login from './containers/auth/Login'
import {connect} from "react-redux";
import about from "./containers/lesson/about";

import './containers/courses/roster.scss'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.props.dispatch(getUser());
  }

  logout = () => {
    this.props.dispatch(logout());
    window.location = '/login';
  };

  renderLogout = () => {
    if (!this.props.user) {
      return '';
    }

    return (
      <button className="logout-btn" onClick={() => {this.logout()}}>
        Logout
      </button>
    );
  };

  renderUserInfo = () => {
    if (!this.props.user) {
      return '';
    }

    return (
      <span>{this.props.user.username} ({this.props.user.email})</span>
    );
  };

  render() {

    return (
      <div className="App">
        {this.renderLogout()}
        {this.renderUserInfo()}
        <Route
          path="/courses/"
          component={roster}
          exact
        />

        <Route
          path="/courses/:id"
          component={selectedCourse}
        />

        <Route
          path="/parts/"
          component={list}
        />

        <Route
          path="/lessons/:id"
          component={selected}
        />

        <Route
          path="/lesson/:id"
          component={about}
        />

        <Route
          path="/register"
          component={Register}
        />

        <Route
          path="/login"
          component={Login}
        />

      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.auth.user,
  };
}

export default connect(mapStateToProps)(App);
