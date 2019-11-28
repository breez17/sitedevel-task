import axios from 'axios';

export function setInterceptors() {
  axios.interceptors.response.use(response => {
    return response;
  },error => {
    if (error.response.status === 403) {
      window.location = '/login';
    }
    return Promise.reject(error);
  });
}
