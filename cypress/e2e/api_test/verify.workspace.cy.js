describe("Verify workspace data", { tags: "@api" }, () => {
  it("Verify workspace", () => {
    cy.api({
      method: "GET",
      url: Cypress.config().baseUrl + "/api/v2/team",
      headers: {
        authorization: Cypress.env("TOKEN"),
      },
    }).then((resp) => {
      expect(resp.status).to.eq(200);

      expect(resp.body.teams[0].name).to.eq("QA Workspace");
    });
  });
});
