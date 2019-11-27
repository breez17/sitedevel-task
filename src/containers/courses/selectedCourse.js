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
      <div>
        <Link to={"/courses"}>&#8656;
        </Link>
        <h1>{this.props.course.name}</h1>

        <ol>{this.props.course.parts.map(part => {
          return <li key={part.id}><Link title={part.title} to={``}>{part.subjects}</Link></li>
        })}</ol>



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
