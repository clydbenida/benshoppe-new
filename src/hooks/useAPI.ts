import { useEffect, useState } from "react";
import api from "../services/api";

export default function useAPI<T>(
  url: string, 
  method?: ApiMethod,
  body?: Record<string, string | number | boolean>
): [T, boolean] {
  const [response, setResponse] = useState<any>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    (async function() {
      try {
        const res = await api(url, method);

        setResponse(res);
      } catch(err) {
        console.log(err);
      } finally {
        setLoading(false)
      }
    })();
  }, [url, method]);

  return [response, loading]
}
