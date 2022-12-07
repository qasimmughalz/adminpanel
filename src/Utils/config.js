export const config = (token) => {
  let config = {
    headers: {
      authorization: token,
    },
  };
  return config;
};
