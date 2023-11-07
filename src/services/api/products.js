import axios from 'axios';

// Endpoints API
import { endPoints } from '@services/api';

const addProduct = async (body) => {
  const config = {
    headers: {
      accept: '*/*',
      'Content-Type': 'application/json',
    },
  };

  const response = await axios.post(endPoints.products.createProduct, body, config);

  return response.data;
};

export { addProduct };
