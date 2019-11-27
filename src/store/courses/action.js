import * as constants from '../constants/actionConstants'
import coursesService from "../../services/coursesService";

export function fetchCourses() {
    return async(dispatch) => {
      try {
        const courses = await coursesService.getCourses();
        dispatch({type: constants.COURSES_FETCHED, courses})
      }
      catch (e) {
        console.log(e)
      }
    }
}

export function fetchCourse(id) {
  return async(dispatch) => {
    try {
      const course = await coursesService.selectCourse(id);
      dispatch({type: constants.COURSES_SELECT, course})
    }
    catch (e) {
      console.log(e)
    }

  }
}
