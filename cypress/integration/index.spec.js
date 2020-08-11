describe("Home Page", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.waitForRouteChange();
  });

  it("Can do About Page Navigation", () => {
    cy.getByText("About").click().waitForRouteChange();
    cy.url().should("equal", `${window.location.origin}/about`);
  });

  it("Can do Projects Page Navigation", () => {
    cy.getByText("Projects").click().waitForRouteChange();
    cy.url().should("equal", `${window.location.origin}/projects`);
  });

  it("Can do Blogs Page Navigation", () => {
    cy.getByText("Blogs").click().waitForRouteChange();
    cy.url().should("equal", `${window.location.origin}/blogs`);
  });

  it("Can do Contact Page Navigation", () => {
    cy.getByText("Contact").click().waitForRouteChange();
    cy.url().should("equal", `${window.location.origin}/contact`);
  });
});
