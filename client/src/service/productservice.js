import axios from 'axios';

export const gethomepageproduct = () => new Promise(async (resolve, reject) => {
  try {
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/product/product-san-pham-boi-bat`);
    resolve(response.data);
    return response.data
  } catch (error) {
    reject(error);
  }
});


