describe("Home Page", () => {
  beforeEach(() => {
    cy.visit("/").waitForRouteChange();
  });

  it("Can do About Page Navigation", () => {
    cy.get("[data-cy=about]").click().waitForRouteChange();
    cy.url().should("equal", `${window.location.origin}/about`);
  });

  it("Can do Projects Page Navigation", () => {
    cy.get("[data-cy=projects]").click().waitForRouteChange();
    cy.url().should("equal", `${window.location.origin}/projects`);
  });

  it("Can do Blogs Page Navigation", () => {
    cy.get("[data-cy=blogs]").click().waitForRouteChange();
    cy.url().should("equal", `${window.location.origin}/blogs`);
  });

  it("Can do Contact Page Navigation", () => {
    cy.get("[data-cy=contact]").click().waitForRouteChange();
    cy.url().should("equal", `${window.location.origin}/contact`);
  });
});
