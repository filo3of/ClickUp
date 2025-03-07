// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import registerCypressGrep from "@cypress/grep/src/support";
registerCypressGrep();
import "./commands";
import "cypress-mochawesome-reporter/register";
import "cypress-plugin-steps";
import "cypress-plugin-api";
import "cypress-if";
// Alternatively you can use CommonJS syntax:
// require('./commands')

Cypress.on("uncaught:exception", (err, runnable) => {
  // we expect a 3rd party library error with message 'Error: Script error.' and '"undefined" is not valid JSON'
  // and don't want to fail the test so we return false
  if (err.message.includes("Script error.")) {
    return false;
  }

  if (err.message.includes('"undefined" is not valid JSON')) {
    return false;
  }

  // we still want to ensure there are no other unexpected
  // errors, so we let them fail the test
});
