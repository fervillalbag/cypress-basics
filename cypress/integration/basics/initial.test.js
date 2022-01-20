/// <reference types="cypress" />

describe("Basic test", () => {
  it("We have correctly title", () => {
    cy.visit("https://nextjs.org/");

    // cy.contains()
    cy.contains("Start Learning").should("exist");
    cy.contains("Documentation").click();

    // cy.get()
    cy.get("div[id=__next]");
    cy.get("div#__notnext").should("not.exist");
    cy.get("[role=region]");
  });
});
