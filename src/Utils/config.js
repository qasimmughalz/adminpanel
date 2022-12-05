export const config = (token) => {
  let config = {
    Headers: {
      ['Authorization']: `${token}`,
    },
  };
  return config;
};
