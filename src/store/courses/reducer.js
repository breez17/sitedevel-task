import Immutable from 'seamless-immutable';
import * as constants from '../constants/actionConstants'

const initialState = Immutable({
  types: [],
  selectedCourse: null,

});

export default function reduce(state = initialState, action = {}) {
    switch (action.type) {
      case constants.COURSES_FETCHED:
        return state.merge({
          types: action.courses
        });

      case constants.COURSES_SELECT:
        return state.merge({
          selectedCourse: action.course,
        });
;
      default:
        return state;
    }

}
