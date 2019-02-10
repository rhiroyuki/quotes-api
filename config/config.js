if(process.env.NODE_ENV === undefined) {
  process.env.NODE_ENV = 'development';
};

(process.env.NODE_ENV === 'production') || require('dotenv').config();

const env = process.env.NODE_ENV;

const baseConfig = {
  env,
  isDev: env === 'development',
  isTest: env === 'test',
  isProd: env === 'production',
  port: process.env.PORT || 3000,
  dbUrl: 'mongodb://localhost:27017/quotes'
};

const envConfig = require(`./environment/${env}`);

module.exports = Object.assign(baseConfig, envConfig);

