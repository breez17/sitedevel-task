import axios from 'axios';

class completesService {

  async getCompletesByUserId(id) {
    const response = await axios.get(`http://localhost:1337/completes?user=${id}`);

    return response.data;
  }

  async storeComplete({user, lesson, complete}) {
    const requestData = {
      user,
      lesson,
      complete
    };

    const response = await axios.post(`http://localhost:1337/completes`, requestData);

    return response.data;
  }

  async updateComplete({id, user, lesson, complete}) {
    const requestData = {
      user,
      lesson,
      complete
    };

    const response = await axios.put(`http://localhost:1337/completes/${id}`, requestData);

    return response.data;
  }
}


export default new completesService();
