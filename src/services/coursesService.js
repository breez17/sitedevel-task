import axios from 'axios'

class coursesService {
  async getCourses() {
    const response = await axios.get("http://localhost:1337/courses/");

    return response.data
  }

  async selectCourse(id) {
    const response = await axios.get(`http://localhost:1337/courses/${id}`);

    return response.data
  }
}

export default new coursesService();
