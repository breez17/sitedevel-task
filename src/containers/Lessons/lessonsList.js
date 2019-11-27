import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom'
import {fetchLessons} from "../../store/lessons/action";

class LessonsList extends Component {

  componentDidMount() {
    this.props.dispatch(fetchLessons());
  }

  render() {
    return (
      <div>
        <ol>
          {this.props.lessons.map(lesson =>{
            return <li key={lesson.id}><Link to={``}>{lesson.name}</Link></li>
          })}
        </ol>
        <Link to={"/courses/"}>&#8656;&nbsp;Назад ко всем курсам</Link>
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
