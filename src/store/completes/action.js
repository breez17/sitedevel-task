import * as constants from '../constants/actionConstants'
import completeService from '../../services/completesService'

export function fetchCompletesByUserId(id) {
  return async (dispatch) => {
    try {
      const completes = await completeService.getCompletesByUserId(id);
      dispatch({type: constants.COMPLETE_BY_USER, completes});
    } catch (e) {
      console.log(e)
    }
  }
}

export function storeComplete({user, lesson, complete}) {
  return async (dispatch) => {
    try {
      const completeData = await completeService.storeComplete({user, lesson, complete});
      dispatch({type: constants.COMPLETE_STORE_UPDATE, complete: completeData});
    } catch (e) {
      console.log(e)
    }
  }
}

export function updateComplete({id, user, lesson, complete}) {
  return async (dispatch) => {
    try {
      const completeData = await completeService.updateComplete({id, user, lesson, complete});
      dispatch({type: constants.COMPLETE_STORE_UPDATE, complete: completeData});
    } catch (e) {
      console.log(e)
    }
  }
}
