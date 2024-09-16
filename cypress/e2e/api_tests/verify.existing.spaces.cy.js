describe("Verify spaces data", { tags: "@api" }, () => {
  it("Verify existing spaces using API", () => {
    cy.api({
      method: "GET",
      url: Cypress.config().baseUrl + "/api/v2/team",
      headers: {
        authorization: Cypress.env("TOKEN"),
      },
    }).then((resp) => {
      expect(resp.status).to.eq(200);

      expect(resp.body.teams[0].members[0].user.username).to.eq(
        "Marko Bogicevic"
      );

      cy.api({
        method: "GET",
        url:
          Cypress.config().baseUrl +
          "/api/v2/team/" +
          resp.body.teams[0].id +
          "/space?archived=false",
        headers: {
          authorization: Cypress.env("TOKEN"),
        },
      }).then((resp) => {
        expect(resp.status).to.eq(200);

        expect(resp.body.spaces[1].name).to.eq("Test 001");
      });
    });
  });
});
