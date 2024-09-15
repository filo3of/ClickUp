describe("Login into web application", { tags: "@current" }, () => {
  it("Login into web application using correct credentials", () => {
    cy.visit("/login");

    cy.url().should("eq", Cypress.config().baseUrl + "/login");

    cy.get('img[class="login-page-new__logo-img"]').should("be.visible");

    cy.get("h1").contains(" Welcome back!").should("be.visible");

    cy.get('[data-test="login-email-input"]')
      .should("be.visible")
      .type(Cypress.env("EMAIL"))
      .should("have.value", Cypress.env("EMAIL"));

    cy.get('[data-test="login-password-input"]')
      .type(Cypress.env("PASSWORD"), { log: false })
      .should((el$) => {
        if (el$.val() !== Cypress.env("PASSWORD")) {
          throw new Error("Different value of typed password");
        }
      });

    cy.get('[data-test="login-submit"]').should("be.visible").click();

    cy.loading_wait();

    cy.get('[data-test="simple-bar__workspace-title__QA Workspace"]')
      .should("be.visible")
      .find("span")
      .contains("QA Workspace")
      .should("be.visible");
  });
});
