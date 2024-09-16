class ListPage {
  add_new_item_in_todo_list(itemName) {
    cy.step("add new item in todo list");

    cy.get('[data-test="task-row-new__input"]')
      .should("be.visible")
      .type(itemName)
      .should("be.visible")
      .and("have.value", itemName);

    return this;
  }

  click_save_button() {
    cy.step("click on save button for new todo list item");

    cy.get('[data-test="task-row-new__button"]')
      .children("span")
      .contains("Save")
      .should("be.visible")
      .click();

    return this;
  }

  verify_new_item_is_added(itemName) {
    cy.step("verify that new item is added to the list");

    cy.get('div[data-testid*="task-row-main__link-text__"]')
      .children("span")
      .contains(itemName)
      .should("be.visible");

    return this;
  }
}

export default new ListPage();
