import axios from 'axios';

const tokenField = 'token';

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
