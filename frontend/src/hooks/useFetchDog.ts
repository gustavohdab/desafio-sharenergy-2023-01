import { useState, useEffect } from "react";
import { myAPI } from "../services";

export function useFetchDog(url: string) {
  const api = myAPI();
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  async function fetchData() {
    setIsLoading(true);
    try {
      const response = await api.get(url);
      setData(response.data);
    } catch (error) {
      setError(error);
    }
    setIsLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return { data, error, isLoading, fetchData };
}
