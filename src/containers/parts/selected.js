import React, {Component} from 'react';
import {connect} from 'react-redux'
import {Link} from "react-router-dom";
import {fetchPart} from "../../store/parts/action";

class Selected extends Component {

  componentDidMount() {
    const {id} = this.props.match.params;
    this.props.dispatch(fetchPart(id))
  }

  handleChange = (isCompleted, id) => {
    console.log(isCompleted, id);

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
            <input className="option-input checkbox" name={`completed[${lesson.id}]`} onChange={event => {
              this.handleChange(event.target.checked, lesson.id)
            }
            } title="complete" type="checkbox"/>
          </li>
        })}</ol>
        <Link className="courseLink success" to={"/parts/"}>Ко всем Темам &#8658;</Link>
      </div>
    )
  }

}


function mapStateToProps(state) {
  return {
    part: state.parts.selectedPart
  }
}

export default connect(mapStateToProps)(Selected)
