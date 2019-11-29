import Immutable from 'seamless-immutable';
import * as constants from '../constants/actionConstants'

const initialState = Immutable({
  kind: [],
  selectedPart: null,
});

export default function reduce(state = initialState, action = {}) {
  switch (action.type) {
    case constants.PARTS_FETCHED:
      return state.merge({
        kind: action.parts,
      });

    case constants.PART_SELECT:
      return state.merge({
        selectedPart: action.part,
      });

    default:
      return state;
  }
}
