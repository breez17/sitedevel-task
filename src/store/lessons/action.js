import * as constants from '../constants/actionConstants';
import lessonsService from "../../services/lessonsService";

export function fetchLessons() {
  return async (dispatch) => {
    try{
      const lessons = await lessonsService.getLessons();
      dispatch({type: constants.LESSONS_FETCHED, lessons})
    }
    catch (e) {
      console.log(e);
    }
  }
}

export function fetchLesson(id) {
  return async(dispatch) => {
    try {
      const lesson = await lessonsService.selectLesson(id);
      dispatch({type: constants.LESSON_SELECT, lesson})
    }
    catch (e) {
      console.log(e)
    }
  }
}
