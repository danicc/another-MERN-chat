const config = {
  API:
    process.env.NODE_ENV !== 'production'
      ? process.env.REACT_APP_DEV_API
      : process.env.REACT_APP_PROD_API,
};

export default config;
