import { useState } from "react";
import axios from "axios";

export default function useApi() {
  const BASE_URL = "http://161.156.81.77:4000";
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [cache, setCache] = useState({});

  const fetchData = async (path, method = "GET", body = {}) => {
    try {
      setLoading(true);
      setError(null);

      if (cache[path]) {
        setData(cache[path]);
        setLoading(false);
        return;
      }

      const config = {
        method,
        url: BASE_URL + path,
        headers: {
          "Content-Type": "application/json",
        },
        data: body,
      };

      const response = await axios(config);
      const result = response.data;

      // Cache the data
      setCache((prevCache) => ({
        ...prevCache,
        [path]: result,
      }));

      setData(result);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const get = (url) => fetchData(url);
  const post = (url, body) => fetchData(url, "POST", body);

  return { data, loading, error, get, post };
}
