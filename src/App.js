import React from 'react';
import {Route} from 'react-router-dom'
import {logout} from "./store/auth/action";
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

  logout = () => {
    this.props.dispatch(logout());
    window.location = '/login';
  };


  render() {


    return (
      <div className="App">
        <button className="logout-btn" onClick={() => {
          this.logout();
           }
        }
        >
          Logout
        </button>
        <Route
          path="/courses/"
          component={roster}
        />

        <Route
          path="/selected-course/:id"
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

export default connect()(App);
