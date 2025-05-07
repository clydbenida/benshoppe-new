import { useEffect, useState } from "react";
import BaseContainer from "../../components/BaseContainer";
import { waitForGigya } from "../../services/gigya";
import api from "../../services/api";

export default function LoginPage () {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async function () {
      setLoading(true);
      try {
        await waitForGigya();
        gigya.accounts.showScreenSet({
          screenSet: "bbenida-RegistrationLogin",
          containerID: "gigya-login-container",
          onAfterSubmit: async (r: any) => {
            if (!r.response.errorCode) {
              console.log(r.response);
            }
            console.log("response after submit: ", r.response.user);
            const userDetails = r.response.user;
            await api.request({
              url: "/user/login",
              method: "post",
              data: {
                email: userDetails.email,
                gigyaUid: userDetails.UID,
                firstName: userDetails.firstName,
                lastName: userDetails.lastName,
              }
            });

            // redirect to `/` 
            window.location.href = "/"
          }
        });
      } catch(err) {
        console.log("Login Error: ", err)
      } finally {
        setLoading(false);
      }
    })()
  }, []);

  return (
    <BaseContainer>
      {loading && (<div className="text-center text-xl">...Loading</div>)}
      <div id="gigya-login-container"></div>
    </BaseContainer>
  );
}
