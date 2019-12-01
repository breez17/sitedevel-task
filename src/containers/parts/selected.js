import React, {Component} from 'react';
import {connect} from 'react-redux'
import {Link} from "react-router-dom";
import {fetchPart} from "../../store/parts/action";
import {fetchCompletesByUserId, storeComplete, updateComplete} from "../../store/completes/action";

class Selected extends Component {

  componentDidMount() {
    const {id} = this.props.match.params;
    this.props.dispatch(fetchCompletesByUserId(this.props.user.id));
    this.props.dispatch(fetchPart(id));
  }

  handleChange = (isCompleted, lessonId) => {
    const data = {
      user: this.props.user.id,
      lesson: lessonId,
      complete: isCompleted,
    };

    const activeComplete = this.props.completes.find(foundComplete => {
      return foundComplete.user.id === data.user && foundComplete.lesson.id === data.lesson;
    });

    if (activeComplete) {
      data.id = activeComplete.id;
      this.props.dispatch(updateComplete(data));
    } else {
      this.props.dispatch(storeComplete(data));
    }
  };

  isCheckedComplete = lesson => {
    const activeComplete = this.props.completes.find(foundComplete => {
      return foundComplete.user.id === this.props.user.id && foundComplete.lesson.id === lesson;
    });

    return activeComplete ? activeComplete.complete : false;
  };

  //Все эти изменения сохраняются через апи юзеру и считываются при отображении уроков (там юзеру через админку можно добавлять произвольные поля)

  render() {

    if (this.props.part == null) {
      return '';
    }

    return (
      <div className="roster">

        <ol>{this.props.part.lessons.map(lesson => {
          return <li className="courseList" key={lesson.id}>

            <Link
              to={`/lesson/${lesson.id}`}
              className="courseLink courses"
            >
              {lesson.name}
            </Link>
            <input
              className="option-input checkbox"
              name={`completed[${lesson.id}]`}
              checked={this.isCheckedComplete(lesson.id)}
              onChange={event => {this.handleChange(event.target.checked, lesson.id)}}
              title="complete" type="checkbox"/>
          </li>
        })}</ol>
        <Link className="courseLink success" to={"/parts/"}>Ко всем Темам &#8658;</Link>
      </div>
    )
  }

}


function mapStateToProps(state) {
  return {
    part: state.parts.selectedPart,
    user: state.auth.user,
    completes: state.completes.listCompletes,
  }
}

export default connect(mapStateToProps)(Selected)
