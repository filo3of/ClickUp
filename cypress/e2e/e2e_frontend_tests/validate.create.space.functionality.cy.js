import LoginPage from "../../POM/login.page";
import WorkspacePage from "../../POM/workspace.page";
import ClickUp_API from "../../API/api_utility_functions";
import Utility from "../../support/utility_functions";

describe("Create a new space", { tags: "@smoke" }, () => {
  it("Create a new space using API, then login using UI and verify that new space is added", () => {
    ClickUp_API.create_a_space(
      "QA Workspace",
      Utility.uniqueSpaceName,
      Cypress.env("TOKEN")
    );

    LoginPage.open_login_page()
      .enter_email(Cypress.env("EMAIL"))
      .enter_password(Cypress.env("PASSWORD"))
      .click_login_button();

    WorkspacePage.verify_specific_workspace_is_opened(
      "QA Workspace"
    ).verify_specific_space_is_visible(Utility.uniqueSpaceName);
  });
});
