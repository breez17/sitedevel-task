import axios from 'axios'

class partService {
  async getParts() {
    const response = await axios.get("http://localhost:1337/parts/");

    return response.data
  }

  async selectPart(id) {
    const response = await axios.get(`http://localhost:1337/parts/${id}`);

    return response.data
  }

}

export default new partService();
