import LoginPage from "../../POM/login.page";
import WorkspacePage from "../../POM/workspace.page";
import Utility from "../../support/utility_functions";
import ListPage from "../../POM/list.page";
import ClickUp_API from "../../API/api_utility_functions";

describe(
  "Add new space, folder, and task inside of the folder",
  { tags: ["@smoke", "@e2e"], env: { snapshotOnly: true } },
  () => {
    it("Add new space, new folder inside of the newly added space, and task inside of the folder", () => {
      ClickUp_API.create_a_space(
        "QA Workspace",
        Utility.uniqueSpaceName,
        Cypress.env("TOKEN")
      );

      LoginPage.open_login_page()
        .enter_email(Cypress.env("EMAIL"))
        .enter_password(Cypress.env("PASSWORD"))
        .click_login_button();

      WorkspacePage.verify_specific_workspace_is_opened("QA Workspace")
        .verify_specific_space_is_visible(Utility.uniqueSpaceName)
        .click_on_specific_space(Utility.uniqueSpaceName);

      cy.loading_wait();

      WorkspacePage.click_plus_icon_on_specific_space(Utility.uniqueSpaceName)
        .click_folder_option()
        .verify_folder_creation_modal_is_opened()
        .enter_folder_name(Utility.uniqueFolderName)
        .click_create_button()
        .verify_modal_is_closed()
        .verify_folder_is_visible_on_the_list(Utility.uniqueFolderName);

      ListPage.add_new_item_in_todo_list(Utility.uniqueItemName)
        .click_save_button()
        .verify_new_item_is_added(Utility.uniqueItemName);

      cy.verify_toast_message("Created!", Utility.uniqueItemName);

      WorkspacePage.click_on_the_list(Utility.uniqueFolderName);

      cy.loading_wait();

      // Verify that new task is added to the list using API

      cy.url().then((listURL) => {
        const listURL_array = listURL.split("/");

        const listURL_ID = listURL_array[listURL_array.length - 2];

        cy.api({
          method: "GET",
          url:
            Cypress.config().baseUrl + "/api/v2/list/" + listURL_ID + "/task",
          headers: {
            authorization: Cypress.env("TOKEN"),
          },
        }).then((resp) => {
          expect(resp.status).to.eq(200);

          expect(resp.body.tasks[0].name).to.eq(Utility.uniqueItemName);
        });
      });
    });
  }
);
