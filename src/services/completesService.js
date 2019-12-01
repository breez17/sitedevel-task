import axios from 'axios';

class completesService {

  async getCompletesByUserId(id) {
    const response = await axios.get(`http://localhost:1337/completes?user=${id}`);

    return response.data;
  }


}
