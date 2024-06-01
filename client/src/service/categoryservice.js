import axios from 'axios';

export const getallcate = () => new Promise(async (resolve, reject) => {
  try {
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/category/getall`);
    resolve(response.data);
    return response.data
  } catch (error) {
    reject(error);
  }
});

