import { useState, useCallback } from 'react';

type RequestMeta = (url: string, options?: RequestInit) => Promise<Response>;

const useRequest = () => {
  const [loading, setLoading] = useState(false);

  const fetchData = useCallback<RequestMeta>(async (url, options = {}) => {
    try {
      setLoading(true);
      return await fetch(url, options);
    } finally {
      setLoading(false);
    }
  }, []);

  return [loading, fetchData] as const;
};

export default useRequest;
