import React, {Component} from 'react';
import {connect} from 'react-redux'
import {Link} from "react-router-dom";
import {fetchLesson} from "../../store/lessons/action";

class SelectedLesson extends Component {


  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.dispatch(fetchLesson(id));
  }

  render() {
    if (this.props.lesson === null) {
      return '';
    }

    return (
      <div>
      <Link  to={`/courses/`}>&#8656;&nbsp;Назад к Курсам</Link>
        <h1>{this.props.lesson.name}</h1>
        <h3>{this.props.lesson.title}</h3>

        <Link to={`/selected-lessons/${this.nextLesson}`}>&#8658;&nbsp;К следующему уроку</Link>

      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    lesson: state.lessons.selectedLesson
  }
}

export default connect(mapStateToProps)(SelectedLesson);
