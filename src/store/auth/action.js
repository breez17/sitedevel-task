import * as constants from '../constants/actionConstants';
import authService from "../../services/authService";
import { setToken, removeToken } from '../../helper/auth';

export function login(credentials) {
  return async (dispatch) => {
    try {
      const response = await authService.login(credentials);

      setToken(response.jwt);
      dispatch({type: constants.AUTH_LOGIN, action: response.user});
      window.location = '/courses';
    } catch (e) {
      console.log(e);
    }
  }
}

export function register(credentials) {
  return async (dispatch) => {
    try {
      const response = await authService.register(credentials);
      setToken(response.jwt);
      dispatch({type: constants.AUTH_LOGIN, action: response.user});
    } catch (e) {
      console.log(e);
    }
  }
}

export function logout() {
  return async (dispatch) => {
    try {
      removeToken();
      dispatch({type: constants.AUTH_LOGOUT});
    } catch (e) {
      console.log(e);
    }
  }
}
