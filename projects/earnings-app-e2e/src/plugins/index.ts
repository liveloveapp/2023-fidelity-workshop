import * as dotenv from 'dotenv';

const plugin: Cypress.PluginConfig = (on, config) => {
  config.env.API_BASE_URL = 'http://localhost:3000/books';
  config.env.USERNAME = 'Admin';
  config.env.PASSWORD = 'password';

  return config;
};

export default plugin;
