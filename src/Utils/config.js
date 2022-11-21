export const config = (token) => {
  let config = {
    headers: {
      ['Authorization']: `${token}`,
    },
  };
  return config;
};
