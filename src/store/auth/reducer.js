import Immutable from 'seamless-immutable';
import * as constants from '../constants/actionConstants'

const initialState = Immutable({
  user: null,
});

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case constants.AUTH_LOGOUT:
      return state.merge({
        user: null,
      });

    case constants.AUTH_LOGIN:
      return state.merge({
        user: action.user,
      });

    default:
      return state;
  }
}
