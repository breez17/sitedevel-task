import * as constants from '../constants/actionConstants'
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
