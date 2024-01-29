import { useState, useEffect } from "react";
import axios from "axios";

const useFetchCrypto = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCrypto = async () => {
      try {
        const { data } = await axios.get(
          "https://api.coinlore.net/api/tickers/"
        );
        setData(data.data);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };

    fetchCrypto();
  }, []);

  return { data, isLoading, error };
};

export default useFetchCrypto;
