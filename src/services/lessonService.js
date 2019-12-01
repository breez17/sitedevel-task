import axios from 'axios'

class lessonService {

  async getLessons() {
    const response = await axios.get("http://localhost:1337/lessons/")

    return response.data
  }

  async setLessons(id) {
    const response = await axios.put(`http://localhost:1337/lessons?users/${id}`)

    return response.data;
  }

  async getLesson(id) {
    const response = await axios.get(`http://localhost:1337/lessons/${id}`);

    return response.data;
  }
}

export default new lessonService();
