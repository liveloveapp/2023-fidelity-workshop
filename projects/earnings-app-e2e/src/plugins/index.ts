import * as dotenv from 'dotenv';

const plugin: Cypress.PluginConfig = (on, config) => {
  dotenv.config();

  config.env.API_BASE_URL = process.env.API_BASE_URL;
  config.env.USERNAME = process.env.USERNAME;
  config.env.PASSWORD = process.env.PASSWORD;

  return config;
};

export default plugin;
