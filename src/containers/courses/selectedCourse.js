import React, {Component} from 'react';
import {connect} from 'react-redux'
import {Link} from "react-router-dom";
import {fetchCourse} from "../../store/courses/action";

class SelectedCourse extends Component {

  state = {
    loading: false,
  };

  componentDidMount() {

    const {id} = this.props.match.params;
    this.props.dispatch(fetchCourse(id));

  }

  render() {



    if (this.props.course === null) {
      return '';
    }

    return (
      <div className="roster">

        <h1 className="courseName">{this.props.course.name}</h1>

        <ol>{this.props.course.parts.map(part => {
          return <li className="courseList" key={part.id}>
            <Link
              className="courseLink courses"
              title={part.title}
              to={`/lessons/${part.id}`}
            >
              {part.subjects}

            </Link>
          </li>
        })}</ol>

        <Link className="courseLink" to={"/courses"}>&#8656; Назад к курсам
        </Link>

      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    course: state.courses.selectedCourse
  }
}

export default connect(mapStateToProps)(SelectedCourse);
