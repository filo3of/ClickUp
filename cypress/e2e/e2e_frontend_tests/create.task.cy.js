import LoginPage from "../../POM/login.page";
import WorkspacePage from "../../POM/workspace.page";
import ListPage from "../../POM/list.page";
import Utility from "../../support/utility_functions";

describe(
  "Add new task using API and verify that task using UI",
  { tags: "@smoke", env: { snapshotOnly: true } },
  () => {
    it("Add new task using API and verify that task using UI", () => {
      cy.api({
        method: "POST",
        url: Cypress.config().baseUrl + "/api/v2/list/901204193289/task",
        headers: {
          authorization: Cypress.env("TOKEN"),
        },
        body: {
          name: Utility.uniqueItemName,
          description: "Lorem ipsum",
        },
      }).then((resp) => {
        expect(resp.status).to.eq(200);

        expect(resp.body.name).to.eq(Utility.uniqueItemName);
      });

      LoginPage.open_login_page()
        .enter_email(Cypress.env("EMAIL"))
        .enter_password(Cypress.env("PASSWORD"))
        .click_login_button();

      WorkspacePage.verify_specific_workspace_is_opened(
        "QA Workspace"
      ).click_on_the_list("Test #1726468385");

      cy.loading_wait();

      ListPage.verify_new_item_is_added(Utility.uniqueItemName);
    });
  }
);
