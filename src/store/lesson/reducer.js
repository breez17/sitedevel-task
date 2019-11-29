import Immutable from 'seamless-immutable';
import * as constants from '../constants/actionConstants'

const initialState = Immutable({
  lessonList: [],
  about: null,
});

export default function reduce(state = initialState, action = {}) {

  switch (action.type) {
    case constants.LESSONS_FETCHED:
      return state.merge({
        lessonList: action.lessons,
      });

    case constants.LESSON_FETCHED:
      return state.merge({
        about: action.lesson,
      });


    default:
      return state;
  }

}
