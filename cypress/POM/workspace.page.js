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
}

export default new WorkspacePage();
