describe("Home Page", () => {
  beforeEach(() => {
    cy.visit("/").waitForRouteChange();
  });

  it("Can do About Page Navigation", () => {
    cy.findByText("about").click().waitForRouteChange();
    cy.url().should("equal", `${window.location.origin}/about`);
  });

  it("Can do Projects Page Navigation", () => {
    cy.findByText("projects").click().waitForRouteChange();
    cy.url().should("equal", `${window.location.origin}/projects`);
  });

  it("Can do Blogs Page Navigation", () => {
    cy.findByText("blogs").click().waitForRouteChange();
    cy.url().should("equal", `${window.location.origin}/blogs`);
  });

  it("Can do Contact Page Navigation", () => {
    cy.findByText("contact").click().waitForRouteChange();
    cy.url().should("equal", `${window.location.origin}/contact`);
  });
});
