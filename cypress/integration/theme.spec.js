describe("Theme Switching", () => {
  before(() => {
    cy.visit("/").waitForRouteChange();
  });

  it("Sets Dark Theme", () => {
    cy.get("[data-cy=dark]").click();
    cy.get("[data-cy=dark]").should("have.class", "active");
  });

  it("Sets Light Theme", () => {
    cy.get("[data-cy=light]").click();
    cy.get("[data-cy=light]").should("have.class", "active");
  });

  it("Sets System Theme", () => {
    cy.get("[data-cy=system]").click();
    cy.get("[data-cy=system]").should("have.class", "active");
  });

  it("Sets Auto Theme", () => {
    cy.get("[data-cy=auto]").click();
    cy.get("[data-cy=auto]").should("have.class", "active");
  });
});
