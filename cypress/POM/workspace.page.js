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
}

export default new WorkspacePage();
