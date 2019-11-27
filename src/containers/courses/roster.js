import React, {Component} from 'react';
import {connect} from 'react-redux'
import {Link} from "react-router-dom";
import {fetchCourses} from '../../store/courses/action'

class Roster extends Component {

  componentDidMount() {
    this.props.dispatch(fetchCourses());
  }

  render() {


    return (
      <div>
          <ol>
            {this.props.courses.map(course => {
              return <li key={course.id}><Link to={`/selected-course/${course.id}`}>{course.name}&nbsp;{course.created_at}</Link></li>
            })}
          </ol>
        <Link to={"/all-lessons"}>Ко всем Урокам &#8658;</Link>
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
