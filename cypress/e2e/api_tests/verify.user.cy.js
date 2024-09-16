describe("Verify user data", { tags: "@api" }, () => {
  it("Verify user name using API", () => {
    cy.api({
      method: "GET",
      url: Cypress.config().baseUrl + "/api/v2/user",
      headers: {
        authorization: Cypress.env("TOKEN"),
      },
    }).then((resp) => {
      expect(resp.status).to.eq(200);

      expect(resp.body.user.username).to.eq("Marko Bogicevic");
    });
  });
});
