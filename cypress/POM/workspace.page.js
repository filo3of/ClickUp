class WorkspacePage {
  verify_specific_workspace_is_opened(projectName) {
    cy.step("verify that specific workspace is opened");

    cy.get('[data-test="simple-bar__workspace-title__QA Workspace"]')
      .should("be.visible")
      .find("span")
      .contains(projectName)
      .should("be.visible");

    return this;
  }

  verify_specific_space_is_visible(spaceName) {
    cy.step("verify that specific space is visible");

    cy.get('[data-test="project-list-bar__scrollable"]')
      .should("be.visible")
      .find('[data-test="project-row__name__' + spaceName + '"]')
      .contains(spaceName)
      .should("be.visible");

    return this;
  }

  click_on_specific_space(spaceName) {
    cy.step("verify that specific space is visible");

    cy.get('[data-test="project-list-bar__scrollable"]')
      .should("be.visible")
      .find('[data-test="project-row__name__' + spaceName + '"]')
      .contains(spaceName)
      .should("be.visible")
      .click();

    return this;
  }

  click_plus_icon_on_specific_space(space) {
    cy.step("click on + icon on specific space");

    cy.get('[data-test="project-list-bar__scrollable"]')
      .should("be.visible")
      .find('[data-test*="project-row__name__"]')
      .contains(space)
      .should("be.visible")
      .parentsUntil('[data-test*="project-list-bar-item__link__"]')
      .find('button[cutooltip="Create Folders, Lists, Docs and more"]')
      .should("be.visible")
      .click();

    return this;
  }

  click_three_dots_icon_on_specific_space(space) {
    cy.step("click on three dots icon on specific space");

    cy.get('[data-test="project-list-bar__scrollable"]')
      .should("be.visible")
      .find('[data-test*="project-row__name__"]')
      .contains(space)
      .should("be.visible")
      .parentsUntil('[data-test*="project-list-bar-item__link__"]')
      .find('button[data-test*="project-row__ellipsis__"]')
      .should("be.visible")
      .click();

    return this;
  }

  click_delete_button() {
    cy.step("click on delete button in the menu list");
    cy.get('[data-test="nav-menu-item__name"]')
      .contains("Delete")
      .should("be.visible")
      .click();

    return this;
  }

  verify_delete_modal_is_opened(itemName) {
    cy.step("verify that delete modal is opened");
    cy.get("h2")
      .contains("Delete: " + itemName)
      .should("be.visible");

    return this;
  }

  click_delete_button_on_modal() {
    cy.step("click on delete button on modal view");
    cy.get('[data-test="confirmation-modal__confirm-button"]')
      .contains("Delete")
      .should("be.visible")
      .click();

    return this;
  }

  enter_item_name_for_deleting(itemName) {
    cy.step("enter item name for deleting confirmation");
    cy.get('input[placeholder="' + itemName + '"]')
      .should("be.visible")
      .type(itemName)
      .should("be.visible")
      .and("have.value", itemName);
    return this;
  }

  click_folder_option() {
    cy.step('click on "folder" option');

    cy.get('[data-test="dropdown-list-item__title"]')
      .should("be.visible")
      .find("div")
      .contains("Folder")
      .should("be.visible")
      .click();

    return this;
  }

  verify_folder_creation_modal_is_opened() {
    cy.step("verify folder creation modal is opened");

    cy.get('[data-test="modal__body"]')
      .find("h2")
      .contains("Create Folder")
      .should("be.visible");

    return this;
  }

  enter_folder_name(name) {
    cy.step("enter folder name");

    cy.get('[data-test="modal__body"]')
      .find('[data-test="create-category__form-input"]')
      .should("be.visible")
      .type(name)
      .should("have.value", name);

    return this;
  }

  click_create_button() {
    cy.step("click on create button");

    cy.get('[data-test="modal__body"]')
      .find("button")
      .contains("Create")
      .should("be.visible")
      .and("have.attr", "aria-disabled", "false")
      .click();

    return this;
  }

  verify_modal_is_closed() {
    cy.step("verify that modal is closed");

    cy.get('[data-test="modal__body"]').should("not.exist");

    return this;
  }

  verify_folder_is_visible_on_the_list(name) {
    cy.step("verify that folder is visible on the spaces list");

    cy.get('[data-test="project-list-bar__scrollable"]')
      .find('[data-test*="category-row__folder-name__"]')
      .contains(name)
      .should("be.visible");

    return this;
  }

  click_on_the_list(folderName) {
    cy.get('[data-test="project-list-bar__scrollable"]')
      .find('[data-test*="category-row__folder-name__"]')
      .contains(folderName)
      .parentsUntil("cdk-tree-node")
      .parent()
      .next()
      .find('[data-test="subcategory-row__List"]')
      .should("be.visible")
      .click();

    return this;
  }
}

export default new WorkspacePage();
