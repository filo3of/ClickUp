import LoginPage from "../POM/login.page";
import WorkspacePage from "../POM/workspace.page";
import ClickUp_API from "../API/utility_functions";

describe("Login into web application", { tags: "@smoke" }, () => {
  it("Login into web application using correct credentials", () => {
    ClickUp_API.create_a_space(
      "QA Workspace",
      "Test 001",
      Cypress.env("TOKEN")
    );

    LoginPage.open_login_page()
      .enter_email(Cypress.env("EMAIL"))
      .enter_password(Cypress.env("PASSWORD"))
      .click_login_button();

    WorkspacePage.verify_specific_workspace_is_opened(
      "QA Workspace"
    ).verify_specific_space_is_visible("Test 001");
  });
});
