describe("Verify folder", { tags: "@api" }, () => {
  it("Verify existing folder using API", () => {
    cy.api({
      method: "GET",
      url: Cypress.config().baseUrl + "/api/v2/team",
      headers: {
        authorization: Cypress.env("TOKEN"),
      },
    }).then((resp) => {
      expect(resp.status).to.eq(200);

      expect(resp.body.teams[0].name).to.eq("QA Workspace");

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

        cy.api({
          method: "GET",
          url:
            "https://api.clickup.com/api/v2/space/" +
            resp.body.spaces[1].id +
            "/folder?archived=false",
          headers: {
            authorization: Cypress.env("TOKEN"),
          },
        }).then((resp) => {
          expect(resp.status).to.eq(200);

          for (let index = 0; index < resp.body.folders.length; index++) {
            if (resp.body.folders[index].name == "Test #1726468385") {
              expect(resp.body.folders[index].name).to.eq("Test #1726468385");

              cy.log(resp.body.folders[index].name);
            }
          }
        });
      });
    });
  });
});
