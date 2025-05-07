import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { waitForGigya } from "../services/gigya";
import { addToken } from "../redux/reducers/userReducer";
import { useSelector } from "react-redux";

export default function useJWT() {
  const userToken = useAppSelector(state => state.user.token);
  const dispatch = useAppDispatch();

  useEffect(() => {
    (async function() {
      await waitForGigya();
      gigya.accounts.getJWT({ callback: (res: any) => {
        console.log(res);
        if (res.id_token) {
          dispatch(addToken(res.id_token));
        } else {
          console.log("Failed to fetch token, authenticate first!")
        }
      }});
    })();
  }, []);

  return {userToken}
}
