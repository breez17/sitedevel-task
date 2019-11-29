import * as constants from '../constants/actionConstants'
import partService from "../../services/partService";

export function fetchParts() {
  return async(dispatch) => {
    try{
      const parts = await partService.getParts();
      dispatch({type: constants.PARTS_FETCHED, parts})
    }
    catch (e) {
      console.log(e)
    }
  };
}

export function fetchPart(id) {
  return async(dispatch) => {
    try{
      const part = await partService.selectPart(id);
      dispatch({type: constants.PART_SELECT, part})
    }
    catch (e) {
      console.log(e);
    }
  }
}
