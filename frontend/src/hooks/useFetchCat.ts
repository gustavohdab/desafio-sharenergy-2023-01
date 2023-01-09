import { useState, useEffect } from "react";
import { myAPI } from "../services/api";

export function useFetchCat(statusCode: number | null) {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const api = myAPI();

      try {
        const response = await api.get(`/http-cat/${statusCode}`);
        setError(false);
        setImageUrl(
          `data:${response.data.contentType};base64,${response.data.data}`
        );
      } catch (error) {
        setError(true);
      }
    };

    if (statusCode) {
      fetchData();
    }
  }, [statusCode]);

  return { imageUrl, error };
}
