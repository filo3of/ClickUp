class ClickUp_API {
  create_a_space(workspaceName, newSpaceName, userToken) {
    cy.visit("/");

    cy.api({
      method: "GET",
      url: Cypress.config().baseUrl + "/api/v2/team",
      headers: {
        authorization: userToken,
      },
    }).then((resp) => {
      expect(resp.status).to.eq(200);

      expect(resp.body.teams[0].name).to.eq(workspaceName);

      cy.api({
        method: "POST",
        url:
          Cypress.config().baseUrl +
          "/api/v2/team/" +
          resp.body.teams[0].id +
          "/space",
        headers: {
          authorization: userToken,
        },
        body: {
          name: newSpaceName,
          multiple_assignees: true,
          features: {
            due_dates: {
              enabled: true,
              start_date: false,
              remap_due_dates: true,
              remap_closed_due_date: false,
            },
            time_tracking: {
              enabled: false,
            },
            tags: {
              enabled: true,
            },
            time_estimates: {
              enabled: true,
            },
            checklists: {
              enabled: true,
            },
            custom_fields: {
              enabled: true,
            },
            remap_dependencies: {
              enabled: true,
            },
            dependency_warning: {
              enabled: true,
            },
            portfolios: {
              enabled: true,
            },
          },
        },
      }).then((resp) => {
        expect(resp.status).to.eq(200);

        expect(resp.body.name).to.eq(newSpaceName);
      });
    });

    return this;
  }
}

export default new ClickUp_API();
