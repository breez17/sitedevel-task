import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom'
import {fetchLessons} from "../../store/lessons/action";

import '../courses/roster.scss';

class LessonsList extends Component {

  componentDidMount() {
    this.props.dispatch(fetchLessons());
  }

  render() {
    return (
      <div className="roster">
        <ol>
          {this.props.lessons.map(lesson =>{
            return <li className="courseList" key={lesson.id}><Link className="courseLink courses" to={`/lessons/${lesson.id}`}>{lesson.name}</Link></li>
          })}
        </ol>
        <Link className="courseLink success" to={"/courses/"}>&#8656;&nbsp;Назад ко всем курсам</Link>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    lessons: state.lessons.holderLessons
  }
}

export default connect(mapStateToProps)(LessonsList);
