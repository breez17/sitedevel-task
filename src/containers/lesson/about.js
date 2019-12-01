import React, {Component} from 'react';
import {connect} from 'react-redux'
import {Link} from "react-router-dom";
import {fetchLesson} from "../../store/lesson/action";

class About extends Component {
  componentDidMount() {
    const {id} = this.props.match.params;
    this.props.dispatch(fetchLesson(id));

  }


  render() {
    if (this.props.lesson == null) {
      return '';
    }
    return (
      <div className="roster">
        <h1 className="courseName db"><Link className="partLink" to="/parts/">{this.props.lesson.parts.subjects}</Link>
        </h1>
        <br/>
        <h3 className="courseName uppcase"> {this.props.lesson.parts.title}</h3>
        <div className="wrap-img">
          {this.props.lesson.images.map(image => {
            return <Link to="#" target="_blank" key={image.id}> <img src={`http://localhost:1337${image.url}`}
                                                                     alt="Hair"/></Link>
          })}
        </div>
        <div className="wrap-video">
          {this.props.lesson.videos.map(video => {
            return <div className="wrap-video__item" key={video.id}>
                <p className="lesson-title">{video.name}</p>
              <video width="700" height="400" controls="controls" autoPlay="autoPlay">
              <source src={`http://localhost:1337${video.url}`} type='video/mp4'/>
              </video>
            </div>
          })}

        </div>

      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    lesson: state.lessons.about,
  }
}

export default connect(mapStateToProps)(About)
