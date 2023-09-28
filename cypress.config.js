const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');
module.exports = defineConfig({
  
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
        reportFilename: "UpBrainary",
        json: "true"
    },
  e2e: {
    chromeWebSecurity: false,

    emailDomain: "example.com",

    baseUrl:"https://test.upbrainery.com/",
    email: "UBDigital",
    password: "Happy4You&",
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    excludeSpecPattern: [
      '**/POM/*'
     ] ,
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    allureWriter(on, config);
    return config;
      // implement node event listeners here
    },
  },
 // video: false,
  screenshotOnRunFailure: false
});
