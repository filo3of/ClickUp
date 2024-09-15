class LoginPage {
  open_login_page() {
    cy.step("open login page");

    cy.visit("/login");

    cy.url().should("eq", Cypress.config().baseUrl + "/login");

    cy.get('img[class="login-page-new__logo-img"]').should("be.visible");

    cy.get("h1").contains(" Welcome back!").should("be.visible");

    return this;
  }

  enter_email(email) {
    cy.step("enter email");

    cy.get('[data-test="login-email-input"]')
      .should("be.visible")
      .type(email)
      .should("have.value", email);

    return this;
  }

  enter_password(password) {
    cy.step("enter password");

    cy.get('[data-test="login-password-input"]')
      .type(password, { log: false })
      .should((el$) => {
        if (el$.val() !== password) {
          throw new Error("Different value of typed password");
        }
      });

    return this;
  }

  click_login_button() {
    cy.step("click on login button");

    cy.get('[data-test="login-submit"]').should("be.visible").click();

    cy.loading_wait();

    return this;
  }
}

export default new LoginPage();
