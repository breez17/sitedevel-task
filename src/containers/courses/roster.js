import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from "react-router-dom";
import {fetchCourses} from '../../store/courses/action';

import './roster.scss'

class Roster extends Component {

  componentDidMount() {
    this.props.dispatch(fetchCourses());
  }

  render() {

    console.log(this.props.courses);

    return (
      <div className="roster">
        <ol className="wrap-list">
          {this.props.courses.map(course => {
            return <li className="courseList" key={course.id}>
              <Link className="courseLink courses" to={`/selected-course/${course.id}`}>{course.name}</Link>
            </li>
          })}
        </ol>
        <Link className="courseLink success" to={"/parts/"}>Ко всем Темам &#8658;</Link>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    courses: state.courses.types,
  };
}

export default connect(mapStateToProps)(Roster);
