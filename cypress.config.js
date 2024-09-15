const { defineConfig } = require("cypress");
require("dotenv").config();

module.exports = defineConfig({
  video: false,
  defaultCommandTimeout: 10000,
  watchForFileChanges: false,
  retries: {
    runMode: 2,
    openMode: 0,
  },

  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    charts: true,
    reportPageTitle: "ClickUp",
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },

  env: {
    ...process.env,
    grepFilterSpecs: true,
    grepOmitFiltered: true,
  },

  e2e: {
    baseUrl: "https://app.clickup.com",

    setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on);
      require("@cypress/grep/src/plugin")(config);
      return config;
    },
  },
});
