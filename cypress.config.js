const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    chromeWebSecurity: false,

    emailDomain: "example.com",

    baseUrl:"http://test.upbrainery.com:8081/",
    email: "UBDigital",
    password: "Happy4You&",
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    excludeSpecPattern: [
      '**/POM/*'
     ] ,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
