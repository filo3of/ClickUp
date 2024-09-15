import LoginPage from "../POM/login.page";
import WorkspacePage from "../POM/workspace.page";

describe("Login into web application", { tags: "@current" }, () => {
  it("Login into web application using correct credentials", () => {
    LoginPage.open_login_page()
      .enter_email(Cypress.env("EMAIL"))
      .enter_password(Cypress.env("PASSWORD"))
      .click_login_button();

    WorkspacePage.verify_specific_workspace_is_opened("QA Workspace");
  });
});
