module.exports = {
  DB_URL: `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_NAME}/test?retryWrites=true&w=majority`,
  STATIC_PATH: 'server/public',
  PORT: process.env.PORT || 8000,
  HOST: process.env.HOST || 'http://localhost',
};
