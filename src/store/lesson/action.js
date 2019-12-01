import * as constants from '../constants/actionConstants'
import lessonService from '../../services/lessonService'

export function fetchLessons() {
  return async(dispatch) => {
    try{
      const lessons = await lessonService.getLessons();
      dispatch({type: constants.LESSONS_FETCHED, lessons})
    }
    catch (e) {
      console.log(e)
    }
  }
}

export function fetchLesson(id) {
  return async(dispatch) => {
    try{
      const lesson = await lessonService.getLesson(id);
      dispatch({type: constants.LESSON_FETCHED, lesson})
    }
    catch (e) {
      console.log(e);
    }
  }
}

export function requestLessons(id) {
  return async(dispatch) => {
    try {
      const user = await lessonService.setLessons(id);
      dispatch({type: constants.REQUEST_USER, user})
    }
    catch (e) {
      console.log(e)
    }
  }
}

