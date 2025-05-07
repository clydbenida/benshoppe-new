import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { getToken, waitForGigya } from "../services/gigya";
import { addToken } from "../redux/reducers/userReducer";
import { useSelector } from "react-redux";

export default function useJWT() {
  const [loading, setLoading] = useState(false);
  const userToken = useAppSelector(state => state.user.token);
  const dispatch = useAppDispatch();

  useEffect(() => {
    setLoading(true);
    (async function() {
      await waitForGigya();
      const token = await getToken();
      dispatch(addToken(token));
      setLoading(false);
    })();
  }, []);

  return {userToken, loading}
}
