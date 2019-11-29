import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from "react-router-dom";
import {fetchParts} from "../../store/parts/action";


class List extends Component {
  componentDidMount() {
    this.props.dispatch(fetchParts());
  }

  render() {
    return (
      <div className="roster">
        <ol>
          {this.props.parts.map(part => {
            return <li className="courseList" key={part.id}>
              <Link
                className="courseLink courses"
                to={`/lessons/${part.id}`}
              >
                {part.subjects}
              </Link>
            </li>
          })}
        </ol>
        <Link className="courseLink success" to={"/courses/"}>Ко всем Курсам &#8658;</Link>
      </div>
    )
  }

}

function mapStateToProps(state) {
  return {
    parts: state.parts.kind,
  }
}

export default connect(mapStateToProps)(List)
