import * as constants from '../constants/actionConstants';
import authService from "../../services/authService";
import { setToken, removeToken, setUser, getUser as getUserHelper, removeUser } from '../../helper/auth';

export function login(credentials) {
  return async (dispatch) => {
    try {
      const response = await authService.login(credentials);

      setUser(response.user);
      setToken(response.jwt);
      dispatch({type: constants.AUTH_LOGIN, user: response.user});
      window.location = '/courses'; // :TODO how to make better? use react router
    } catch (e) {
      console.log(e);
    }
  }
}

export function register(credentials) {
  return async (dispatch) => {
    try {
      const response = await authService.register(credentials);

      setUser(response.user);
      setToken(response.jwt);
      dispatch({type: constants.AUTH_LOGIN, user: response.user});
      window.location = '/courses'; // :TODO how to make better? use react router
    } catch (e) {
      console.log(e);
    }
  }
}

export function logout() {
  return async (dispatch) => {
    try {
      removeUser();
      removeToken();
      dispatch({type: constants.AUTH_LOGOUT});
    } catch (e) {
      console.log(e);
    }
  }
}


export function getUser() {
  return async (dispatch) => {
    try {
      const user = getUserHelper();

      dispatch({type: constants.AUTH_LOGIN, user});
    } catch (e) {
      console.log(e);
    }
  }
}
