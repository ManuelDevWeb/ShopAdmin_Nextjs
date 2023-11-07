import { useState, useEffect } from 'react';
import axios from 'axios';

// Custom hook para hacer peticiones HTTP
const useFetch = (endpoint) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setError(null);
        setLoading(true);

        setTimeout(async () => {
          const response = await axios.get(endpoint);
          setData(response.data);
          setLoading(false);
        }, 1500);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchData();
  }, [endpoint]);

  return { data, loading, error };
};

export { useFetch };
