import { useState } from "react";
import axios from "axios";

export default function useApi() {
  const BASE_URL = "http://161.156.81.77:4000";
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [cache, setCache] = useState({});

  const fetchData = async (path, method = "GET", body = {}, token = "") => {
    try {
      setLoading(true);
      setError(null);

      const config = {
        method,
        url: BASE_URL + path,
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
        data: body,
      };

      if (method !== "GET" || !cache[path]) {
        const response = await axios(config);
        const result = response.data;

        // Cache the data

        setCache((prevCache) => ({
          ...prevCache,
          [path]: result,
        }));

        setData(result);
      } else {
        setData(cache[path]);
        setLoading(false);
        return;
      }
    } catch (err) {
      let errMsg = "An error occurred";
      if (err?.response?.data?.error) {
        errMsg = err.response.data.error;
      }
      setError(errMsg);
    } finally {
      setLoading(false);
    }
  };

  const get = (url, token) => fetchData(url, "GET", {}, token);
  const post = (url, body, token) => fetchData(url, "POST", body, token);

  const deleteReq = (url, body, token) => fetchData(url, "DELETE", body, token);
  const put = (url, token) => fetchData(url, "PUT", {}, token);

  return { data, loading, error, get, post, deleteReq, put };
}
