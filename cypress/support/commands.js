// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("loading_wait", () => {
  cy.step("wait for loading animation to end");

  cy.get('div[class*="spinner"]')
    .if("visible")
    .then(() => {
      cy.get('div[class*="spinner"]', { timeout: 30000 }).should("not.exist");
    });

  cy.get("cu-loader")
    .if("visible")
    .then(() => {
      cy.get("cu-loader", { timeout: 30000 }).should("not.exist");
    });
});

Cypress.Commands.add("verify_toast_message", (title, itemName) => {
  cy.step("verify toast message that new item is added");

  cy.get('[data-test="toast__name-link"]')
    .contains(title)
    .should("be.visible")
    .children("span")
    .contains(itemName)
    .should("be.visible");

  cy.get('[data-test="toast__close-button-block"]')
    .should("be.visible")
    .click();

  cy.get('[data-test="toast__name-link"]').should("not.exist");
});
