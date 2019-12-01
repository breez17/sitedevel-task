import axios from 'axios';

const tokenField = 'token';
const userField = 'user';

export function setToken(token) {
  localStorage.setItem(tokenField, token);
  setTokenToDefaults();
}

export function removeToken() {
  localStorage.removeItem(tokenField);
  delete axios.defaults.headers.common['Authorization'];
}

export function setTokenToDefaults() {
  const token = localStorage.getItem(tokenField);

  if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  }
}

export function setUser(user) {
  localStorage.setItem(userField, JSON.stringify(user));
}

export function getUser() {
  const userJSON = localStorage.getItem(userField);

  return userJSON ? JSON.parse(userJSON) : null;
}

export function removeUser() {
  localStorage.removeItem(userField);
}
