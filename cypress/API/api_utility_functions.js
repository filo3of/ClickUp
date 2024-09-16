class ClickUp_API {
  create_a_space(workspaceName, newSpaceName, userToken) {
    cy.step("create a new space using API");

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

  verify_folder(workspaceName, folderSpace, folderName, userToken) {
    cy.step("verify folder name using API");

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
        method: "GET",
        url:
          Cypress.config().baseUrl +
          "/api/v2/team/" +
          resp.body.teams[0].id +
          "/space?archived=false",
        headers: {
          authorization: userToken,
        },
      }).then((resp) => {
        expect(resp.status).to.eq(200);

        expect(resp.body.spaces[1].name).to.eq(folderSpace);

        cy.api({
          method: "GET",
          url:
            "https://api.clickup.com/api/v2/space/" +
            resp.body.spaces[1].id +
            "/folder?archived=false",
          headers: {
            authorization: userToken,
          },
        }).then((resp) => {
          expect(resp.status).to.eq(200);

          for (let index = 0; index < resp.body.folders.length; index++) {
            if (resp.body.folders[index].name == folderName) {
              expect(resp.body.folders[index].name).to.eq(folderName);
            }
          }
        });
      });
    });
  }
}

export default new ClickUp_API();
