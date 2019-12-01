import Immutable from 'seamless-immutable';
import * as constants from '../constants/actionConstants'

const initialState = Immutable({
  listCompletes: [],
});

export default function reduce(state = initialState, action = {}) {
  switch (action.type) {
    case constants.COMPLETE_BY_USER:
      return state.merge({
        listCompletes: action.completes,
      });
    case constants.COMPLETE_STORE_UPDATE:
      const completeIndex = state.listCompletes.findIndex(foundComplete => foundComplete.id === action.complete.id);
      let listCompletes = state.listCompletes;

      if (completeIndex !== -1) {
        listCompletes = listCompletes.filter((item, index) => index !== completeIndex);
      }

      listCompletes = [...listCompletes, action.complete];

      return state.merge({
        listCompletes: listCompletes,
      });
    default:
      return state;
  }
}
