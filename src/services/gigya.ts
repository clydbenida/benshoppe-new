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
