const { defineConfig } = require("Cypress");

module.exports = defineConfig({

  reporter: 'cypress-mochawesome-reporter',

  e2e: {
    setupNodeEvents(on, config) {    
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    baseUrl:'https://www.saucedemo.com',
    //viewportHeight: 660,
    //viewportWidth: 1000,
    video:true,
  },
});
