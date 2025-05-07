import { useEffect, useState } from "react";
import api from "../services/api";
import useJWT from "./useJWT";

export default function useAPI<T>(
  url: string, 
  body?: Record<string, string | number | boolean>
): [T, boolean] {
  const [response, setResponse] = useState<any>();
  const [loading, setLoading] = useState(false);
  const {userToken} = useJWT();

  useEffect(() => {
    setLoading(true);
    (async function() {
      try {
        const res = await api.request({
          url,
          headers: {
            Authorization: userToken ? `Bearer ${userToken}` : "",
          },
          data: body,
        });

        setResponse(res.data);
      } catch(err) {
        console.log(err);
      } finally {
        setLoading(false)
      }
    })();
  }, [url, userToken]);

  return [response, loading]
}
