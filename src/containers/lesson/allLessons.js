import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from "react-router-dom";
import {fetchLessons} from "../../store/lesson/action";

class AllLessons extends Component {
  componentDidMount() {
    this.props.dispatch(fetchLessons());
  }

  render() {
    return (
      <div className="roster">
        <ol>
          {this.props.lessons.map(lesson => {
            return <li className="courseList" key={lesson.id}>
              <Link
              className="courseLink"
              to=""
              >
                {lesson.name}
              </Link>
            </li>
          })}
        </ol>
      </div>
    )
  }

}

function mapStateToProps(state) {
  return {
    lessons: state.lessons.lessonList
  }
}

export default connect(mapStateToProps)(AllLessons)
