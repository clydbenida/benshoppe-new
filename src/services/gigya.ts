const _gigyaPromise = () => 
  new Promise<void>((res) => {
    const check = () => {
      setTimeout(() => {
        if (typeof gigya === 'undefined') {
          check();
        } else {
          res();
        }
      }, 500);
    };
    check();
  })

export const waitForGigya = async () => {
  await _gigyaPromise();
}

export const getToken = () => new Promise<string>((resolve) => (
  gigya.accounts.getJWT({ callback: (res: any) => {
    if (res.id_token) {
      resolve(res.id_token);
    } else {
      resolve(""); // Not rejecting since we don't want to occur the redirect here
      console.log("Failed to fetch token, authenticate first!")
    }
  }})
))

export const logoutUser = () => new Promise<void>((resolve, reject) => (
  gigya.accounts.logout({ callback: (response: any) => {
    if (response.errorCode === 0) {
      resolve();
    } else {
      reject();
    }
  }})
))
