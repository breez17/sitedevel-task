import axios from 'axios'

class lessonsService {
  async getLessons() {
    const response = await axios.get("http://localhost:1337/lessons/");

    return response.data;
  }

  async selectLesson(id) {
    const response = await axios.get(`http://localhost:1337/lessons/${id}`);
    return response.data;
  }
}

export default new lessonsService();
