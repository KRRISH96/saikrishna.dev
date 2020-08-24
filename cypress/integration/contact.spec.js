describe("Contact Form", () => {
  before(() => {
    cy.visit("/contact").waitForRouteChange();
  });

  it("Can input Name", () => {
    const testVal = "Test User";
    cy.get("[data-cy=name]").type(testVal);
    cy.get("[data-cy=name]").should("have.value", testVal);
  });

  it("Can input Email", () => {
    const testVal = "test.user@example.com";
    cy.get("[data-cy=email]").type(testVal);
    cy.get("[data-cy=email]").should("have.value", testVal);
  });

  it("Can input Message", () => {
    const testVal = "This is a test message!";
    cy.get("[data-cy=message]").type(testVal);
    cy.get("[data-cy=message]").should("have.value", testVal);
  });
});
