import axios from 'axios';

class authService {
  async register({ username, email, password }) {
    const response = await axios.post('http://localhost:1337/auth/local/register', {
      username,
      email,
      password,
    });

    return response.data;
  }

  async login({ identifier, password }) {
    const response = await axios.post('http://localhost:1337/auth/local',{
      identifier,
      password,
    });

    return response.data;
  }
}

export default new authService();
