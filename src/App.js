import React from 'react';
import {Route} from 'react-router-dom'
import {logout} from "./store/auth/action";
import roster from '../src/containers/courses/roster'
import selectedCourse from "./containers/courses/selectedCourse";
import lessonsList from "./containers/Lessons/lessonsList";
import selectedLesson from './containers/Lessons/selectedLesson'
import Register from './containers/auth/Register'
import Login from './containers/auth/Login'
import {connect} from "react-redux";

class App extends React.Component {

  logout = () => {
    this.props.dispatch(logout());
    window.location = '/login';
  };

  render() {
    return (
      <div className="App">
        <button onClick={() => {this.logout();}}>Logout</button>
        <Route
          path="/courses/"
          component={roster}
        />

        <Route
          path="/selected-course/:id"
          component={selectedCourse}
        />

        <Route
          path="/all-lessons/"
          component={lessonsList}
        />

        <Route
          path="/selected-lessons/:id"
          component={selectedLesson}
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
