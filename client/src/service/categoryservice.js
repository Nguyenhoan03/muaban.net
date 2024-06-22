import axios from 'axios';

export const getallcate = async () => {
  try {
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/category/getall`);
    return response.data
  } catch (error) {
    throw error;
  }
};

