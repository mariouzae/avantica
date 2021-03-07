const api = {
  auth: {
    post: {
      signIn: (email, password) => {
        return new Promise(function (resolve, reject) {
          setTimeout(() => {
            if (email !== null && password !== null) {
              resolve(true);
            } else {
              reject(false);
            }
          }, 3000);
        });
      },
    },
  },
};

export default api;
