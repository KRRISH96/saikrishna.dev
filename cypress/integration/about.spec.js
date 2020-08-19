describe("About Page", () => {
  beforeEach(() => {
    cy.visit("/about").waitForRouteChange();
  });

  it("Navigates to Home Page", () => {
    cy.get("[data-cy=rocket]").click().waitForRouteChange();
    cy.url().should("equal", `${window.location.origin}/`);
  });

  it("Navigates to Contact Page", () => {
    cy.get("[data-cy=contact]").click().waitForRouteChange();
    cy.url().should("equal", `${window.location.origin}/contact`);
  });

  it("Navigates to Blogs Page", () => {
    cy.get("[data-cy=blogs]").click().waitForRouteChange();
    cy.url().should("equal", `${window.location.origin}/blogs`);
  });

  it("Navigates to Projects Page", () => {
    cy.get("[data-cy=projects]").click().waitForRouteChange();
    cy.url().should("equal", `${window.location.origin}/projects`);
  });
});
