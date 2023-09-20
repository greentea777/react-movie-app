import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

const useFetch = (url, options = {}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(url, options);
        if (!response.ok) throw new Error(response.statusText);
        const data = await response.json();
        setLoading(false);
        setData(data);
        setError(null);
      } catch (error) {
        setError(`${error} Data not found`);
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);



  return { data, loading, error };
};
export default useFetch;
